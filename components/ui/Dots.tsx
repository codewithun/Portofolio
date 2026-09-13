'use client';

import { useState, useEffect, useMemo, useRef, startTransition } from 'react';

interface GridProps {
  backgroundColor?: string;
  dotColor?: string;
  dotSize?: number;
  spacing?: number;
  proximityRadius?: number;
  maxOpacity?: number;
  backgroundOpacity?: number;
  gridType?: 'dots-lines' | 'lines' | 'dots' | 'plus' | 'plus-lines' | 'snake';
  fadeDelay?: number;
  thickness?: number;
  hoverDarken?: number;
  showBackground?: boolean;
  dashArray?: string;
  style?: React.CSSProperties;
}

export default function Dots(props: GridProps) {
  const {
    backgroundColor = '#E8F5A8',
    dotColor = '#9CA3AF',
    dotSize = 4,
    spacing = 60,
    proximityRadius = 150,
    maxOpacity = 1,
    backgroundOpacity = 0.15,
    gridType = 'dots-lines',
    fadeDelay = 0,
    thickness = 1.5,
    hoverDarken = 0.3,
    showBackground = false,
    dashArray,
    style,
  } = props;
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1e3, y: -1e3 });
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const activeDotsRef = useRef(new Set<string>());
  const [fadingDots, setFadingDots] = useState(new Map<string, number>());
  
  // Snake state
  const gameState = useRef({
    snake: [{x: 5, y: 5}, {x: 4, y: 5}, {x: 3, y: 5}],
    food: {x: 15, y: 10},
    dir: {dx: 1, dy: 0}
  });
  const [, setTick] = useState(0);
  
  // Hardcode isStatic to false since we aren't in Framer Canvas
  const isStatic = false;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      startTransition(() => {
        setDimensions({ width, height });
      });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Snake Loop
  useEffect(() => {
    if (gridType !== 'snake' || dimensions.width <= 100) return;
    
    const cols = Math.ceil(dimensions.width / spacing);
    const rows = Math.ceil(dimensions.height / spacing);

    const interval = setInterval(() => {
      const state = gameState.current;
      const head = state.snake[0];
      
      let nextDx = state.dir.dx;
      let nextDy = state.dir.dy;

      // AI: Move towards food
      if (head.x < state.food.x && state.dir.dx !== -1) { nextDx = 1; nextDy = 0; }
      else if (head.x > state.food.x && state.dir.dx !== 1) { nextDx = -1; nextDy = 0; }
      else if (head.y < state.food.y && state.dir.dy !== -1) { nextDx = 0; nextDy = 1; }
      else if (head.y > state.food.y && state.dir.dy !== 1) { nextDx = 0; nextDy = -1; }

      let nextX = head.x + nextDx;
      let nextY = head.y + nextDy;

      const isValid = (x: number, y: number) => {
        if (x < 0 || x >= cols || y < 0 || y >= rows) return false;
        if (state.snake.some(s => s.x === x && s.y === y)) return false;
        return true;
      };

      if (!isValid(nextX, nextY)) {
        const dirs = [{dx: 1, dy: 0}, {dx: -1, dy: 0}, {dx: 0, dy: 1}, {dx: 0, dy: -1}];
        const validDirs = dirs.filter(d => d.dx !== -state.dir.dx || d.dy !== -state.dir.dy)
                              .filter(d => isValid(head.x + d.dx, head.y + d.dy));
        if (validDirs.length > 0) {
          nextDx = validDirs[0].dx;
          nextDy = validDirs[0].dy;
          nextX = head.x + nextDx;
          nextY = head.y + nextDy;
        } else {
          // Dead end, restart
          state.snake = [{x: Math.floor(cols/2), y: Math.floor(rows/2)}];
          nextX = state.snake[0].x;
          nextY = state.snake[0].y;
          state.food = {x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows)};
        }
      }

      state.dir = {dx: nextDx, dy: nextDy};
      const newHead = {x: nextX, y: nextY};
      state.snake.unshift(newHead);

      if (newHead.x === state.food.x && newHead.y === state.food.y) {
        let newFood = {x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows)};
        while(state.snake.some(s => s.x === newFood.x && s.y === newFood.y)) {
           newFood = {x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows)};
        }
        state.food = newFood;
      } else {
        state.snake.pop();
      }

      if (state.snake.length > 25) {
        state.snake.pop();
      }

      setTick(t => t + 1);
    }, 150);

    return () => clearInterval(interval);
  }, [gridType, dimensions, spacing]);

  useEffect(() => {
    if (isStatic) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      startTransition(() => {
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isStatic]);

  const dots = useMemo(() => {
    const dotsArray = [];
    const cols = Math.ceil(dimensions.width / spacing);
    const rows = Math.ceil(dimensions.height / spacing);
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * spacing + spacing / 2;
        const y = row * spacing + spacing / 2;
        dotsArray.push({ x, y, key: `${col}-${row}` });
      }
    }
    return dotsArray;
  }, [dimensions.width, dimensions.height, spacing]);

  const getOpacity = (dotX: number, dotY: number) => {
    if (isStatic) return backgroundOpacity;
    const distance = Math.sqrt(Math.pow(mousePos.x - dotX, 2) + Math.pow(mousePos.y - dotY, 2));
    if (distance > proximityRadius) return backgroundOpacity;
    const hoverOpacity = (1 - distance / proximityRadius) * maxOpacity;
    return Math.max(backgroundOpacity, hoverOpacity);
  };

  useEffect(() => {
    if (isStatic || fadeDelay === 0) return;
    const newActiveDots = new Set<string>();
    dots.forEach((dot) => {
      const distance = Math.sqrt(Math.pow(mousePos.x - dot.x, 2) + Math.pow(mousePos.y - dot.y, 2));
      if (distance <= proximityRadius) {
        newActiveDots.add(dot.key);
      }
    });
    
    setFadingDots((prev) => {
      const next = new Map(prev);
      newActiveDots.forEach((key) => next.delete(key));
      return next;
    });
    
    const dotsToFade = Array.from(activeDotsRef.current).filter((key) => !newActiveDots.has(key));
    if (dotsToFade.length > 0) {
      const startTime = Date.now();
      startTransition(() => {
        setFadingDots((prev) => {
          const next = new Map(prev);
          dotsToFade.forEach((key) => {
            if (!next.has(key)) {
              next.set(key, startTime);
            }
          });
          return next;
        });
      });
    }
    
    activeDotsRef.current = newActiveDots;
  }, [mousePos, dots, proximityRadius, fadeDelay, isStatic]);

  useEffect(() => {
    if (isStatic || fadeDelay === 0 || fadingDots.size === 0) return;
    let animationFrame: number;
    const animate = () => {
      const now = Date.now();
      let hasChanges = false;
      setFadingDots((prev) => {
        const next = new Map(prev);
        prev.forEach((startTime, key) => {
          const elapsed = now - startTime;
          if (elapsed >= fadeDelay) {
            next.delete(key);
            hasChanges = true;
          }
        });
        return hasChanges ? next : prev;
      });
      if (fadingDots.size > 0) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [fadingDots.size, fadeDelay, isStatic]);

  const getOpacityWithDelay = (dotX: number, dotY: number, dotKey: string) => {
    if (isStatic) return backgroundOpacity;
    const distance = Math.sqrt(Math.pow(mousePos.x - dotX, 2) + Math.pow(mousePos.y - dotY, 2));
    if (distance <= proximityRadius) {
      const hoverOpacity = (1 - distance / proximityRadius) * maxOpacity;
      return Math.max(backgroundOpacity, hoverOpacity);
    }
    if (fadeDelay > 0 && fadingDots.has(dotKey)) {
      const startTime = fadingDots.get(dotKey)!;
      const elapsed = Date.now() - startTime;
      const fadeProgress = Math.min(elapsed / fadeDelay, 1);
      const fadingOpacity = maxOpacity * (1 - fadeProgress);
      return Math.max(backgroundOpacity, fadingOpacity);
    }
    return backgroundOpacity;
  };

  const getColorWithHover = (dotX: number, dotY: number, dotKey: string) => {
    const opacity = fadeDelay > 0 ? getOpacityWithDelay(dotX, dotY, dotKey) : getOpacity(dotX, dotY);
    if (opacity > backgroundOpacity) {
      const hoverAmount = (opacity - backgroundOpacity) / (maxOpacity - backgroundOpacity);
      return { color: dotColor, opacity: opacity + hoverAmount * hoverDarken };
    }
    return { color: dotColor, opacity };
  };

  return (
    <div
      ref={containerRef}
      style={{
        ...style,
        position: 'relative',
        width: '100%',
        height: '100%',
        minWidth: 100,
        minHeight: 100,
        backgroundColor: showBackground ? backgroundColor : 'transparent',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {(gridType === 'dots-lines' || gridType === 'lines' || gridType === 'plus-lines' || gridType === 'snake') && (
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          <defs>
            <pattern id="bg-hatch" width="6" height="6" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="6" stroke={dotColor} strokeWidth="1" opacity={backgroundOpacity * 1.5} />
            </pattern>
            <pattern id="snake-hatch" width="4" height="4" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="4" stroke={dotColor} strokeWidth="1.5" opacity={0.8} />
            </pattern>
            <pattern id="snake-head-hatch" width="4" height="4" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="4" stroke="#E8F5A8" strokeWidth="2" opacity={1} />
            </pattern>
          </defs>
          {Array.from({ length: Math.ceil(dimensions.width / spacing) }).map((_, i) => {
            const x = i * spacing + spacing / 2;
            return <line key={`v-${i}`} x1={x} y1={0} x2={x} y2={dimensions.height} stroke={dotColor} strokeWidth={1} opacity={backgroundOpacity} strokeDasharray={dashArray} />;
          })}
          {Array.from({ length: Math.ceil(dimensions.height / spacing) }).map((_, i) => {
            const y = i * spacing + spacing / 2;
            return <line key={`h-${i}`} x1={0} y1={y} x2={dimensions.width} y2={y} stroke={dotColor} strokeWidth={1} opacity={backgroundOpacity} strokeDasharray={dashArray} />;
          })}
        </svg>
      )}
      
      {gridType === 'snake' && (
        <>
          {gameState.current.snake.map((segment, i) => (
            <div
              key={`snake-${i}`}
              style={{
                position: 'absolute',
                left: segment.x * spacing,
                top: segment.y * spacing,
                width: spacing,
                height: spacing,
                backgroundImage: i === 0 
                  ? 'repeating-linear-gradient(45deg, transparent, transparent 3px, #E8F5A8 3px, #E8F5A8 4.5px)' 
                  : `repeating-linear-gradient(45deg, transparent, transparent 3px, ${dotColor} 3px, ${dotColor} 4px)`,
                opacity: i === 0 ? 1 : 0.7,
                transition: 'left 0.15s linear, top 0.15s linear',
                pointerEvents: 'none',
              }}
            />
          ))}
          <div
            style={{
              position: 'absolute',
              left: gameState.current.food.x * spacing + (spacing - dotSize * 3) / 2,
              top: gameState.current.food.y * spacing + (spacing - dotSize * 3) / 2,
              width: dotSize * 3,
              height: dotSize * 3,
              backgroundColor: '#ef4444',
              borderRadius: '50%',
              boxShadow: '0 0 10px #ef4444',
              pointerEvents: 'none',
            }}
          />
        </>
      )}

      {gridType === 'dots-lines' || gridType === 'dots' ? (
        dots.map((dot) => {
          const opacity = fadeDelay > 0 ? getOpacityWithDelay(dot.x, dot.y, dot.key) : getOpacity(dot.x, dot.y);
          return (
            <div
              key={dot.key}
              style={{
                position: 'absolute',
                left: dot.x,
                top: dot.y,
                width: dotSize,
                height: dotSize,
                borderRadius: '50%',
                backgroundColor: dotColor,
                opacity,
                transform: 'translate(-50%, -50%)',
                transition: 'opacity 0.2s ease-out',
                pointerEvents: 'none',
              }}
            />
          );
        })
      ) : gridType === 'plus' || gridType === 'plus-lines' ? (
        dots.map((dot) => {
          const { color, opacity } = getColorWithHover(dot.x, dot.y, dot.key);
          const plusSize = dotSize * 2;
          const halfThickness = thickness / 2;
          return (
            <svg
              key={dot.key}
              style={{
                position: 'absolute',
                left: dot.x,
                top: dot.y,
                width: plusSize,
                height: plusSize,
                opacity,
                transform: 'translate(-50%, -50%)',
                transition: 'opacity 0.2s ease-out',
                pointerEvents: 'none',
              }}
            >
              <path
                d={`
                  M ${plusSize / 2 - halfThickness} 0
                  L ${plusSize / 2 + halfThickness} 0
                  L ${plusSize / 2 + halfThickness} ${plusSize / 2 - halfThickness}
                  L ${plusSize} ${plusSize / 2 - halfThickness}
                  L ${plusSize} ${plusSize / 2 + halfThickness}
                  L ${plusSize / 2 + halfThickness} ${plusSize / 2 + halfThickness}
                  L ${plusSize / 2 + halfThickness} ${plusSize}
                  L ${plusSize / 2 - halfThickness} ${plusSize}
                  L ${plusSize / 2 - halfThickness} ${plusSize / 2 + halfThickness}
                  L 0 ${plusSize / 2 + halfThickness}
                  L 0 ${plusSize / 2 - halfThickness}
                  L ${plusSize / 2 - halfThickness} ${plusSize / 2 - halfThickness}
                  Z
                `}
                fill={color}
              />
            </svg>
          );
        })
      ) : (
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          {Array.from({ length: Math.ceil(dimensions.width / spacing) }).map((_, i) => {
            const x = i * spacing + spacing / 2;
            const opacity = getOpacity(x, mousePos.y);
            return (
              <line
                key={`v-hover-${i}`}
                x1={x}
                y1={0}
                x2={x}
                y2={dimensions.height}
                stroke={dotColor}
                strokeWidth={1}
                opacity={opacity}
                style={{ transition: 'opacity 0.2s ease-out' }}
              />
            );
          })}
          {Array.from({ length: Math.ceil(dimensions.height / spacing) }).map((_, i) => {
            const y = i * spacing + spacing / 2;
            const opacity = getOpacity(mousePos.x, y);
            return (
              <line
                key={`h-hover-${i}`}
                x1={0}
                y1={y}
                x2={dimensions.width}
                y2={y}
                stroke={dotColor}
                strokeWidth={1}
                opacity={opacity}
                style={{ transition: 'opacity 0.2s ease-out' }}
              />
            );
          })}
        </svg>
      )}
    </div>
  );
}
