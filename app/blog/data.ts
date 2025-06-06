// Blog post data that can be used across the blog pages
export const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Laravel',
    slug: 'getting-started-with-laravel',
    date: '2023-11-15',
    author: 'Untara Eka Saputra',
    readTime: '5 min read',
    excerpt:
      'Learn the basics of Laravel framework and how to build your first application with it.',
    tags: ['Laravel', 'PHP', 'Web Development'],
    thumbnail: '/images/blog/laravel.jpg',
    content: `
      # Getting Started with Laravel

      Laravel is a powerful PHP framework with elegant syntax. It aims to make the development process a pleasing one for developers.

      ## Why Choose Laravel?

      Laravel offers a rich set of features right out of the box including routing, authentication, caching, and much more. Here are some key benefits:

      * **Elegant Syntax** - Laravel's syntax is expressive and intuitive
      * **MVC Architecture** - Clear separation between logic and presentation
      * **Robust Ecosystem** - Rich set of tools like Artisan CLI, migrations, etc.
      * **Active Community** - Large community offering support and packages

      ### The Elegant Syntax

      Laravel's code is easy to read and understand. Here's an example of a route definition:

      \`\`\`php
      Route::get('/welcome', function () {
          return view('welcome');
      });
      \`\`\`

      ### MVC Architecture Benefits

      The Model-View-Controller pattern helps organize code effectively.

      ## Setting Up Your First Laravel Project

      Getting started with Laravel is easy. First, ensure you have Composer installed, then run:

      \`\`\`bash
      composer create-project laravel/laravel my-project
      cd my-project
      php artisan serve
      \`\`\`

      ### Installation Requirements

      Before installing Laravel, make sure your environment meets these requirements:
      
      * PHP >= 8.1
      * Composer
      * Node.js & NPM (for frontend assets)

      ### Configuration

      After installation, you'll need to set up your environment variables in the .env file.

      ## Basic Routing

      Laravel's routing is simple yet powerful. Here's how you can define a basic route:

      \`\`\`php
      Route::get('/welcome', function () {
          return view('welcome');
      });
      \`\`\`

      ### Route Parameters

      You can capture segments of the URI using route parameters:

      \`\`\`php
      Route::get('/user/{id}', function ($id) {
          return 'User '.$id;
      });
      \`\`\`

      ## Creating Controllers

      Controllers help organize your code better:

      \`\`\`bash
      php artisan make:controller WelcomeController
      \`\`\`

      ### Resource Controllers

      Resource controllers make it easy to build RESTful controllers:

      \`\`\`bash
      php artisan make:controller PhotoController --resource
      \`\`\`

      ## Working with Databases

      Laravel makes database operations simpler with migrations and Eloquent ORM.

      ### Database Migrations

      Create tables and modify your database schema using migrations:

      \`\`\`bash
      php artisan make:migration create_users_table
      \`\`\`

      ### Eloquent ORM

      Laravel's Eloquent ORM provides a beautiful ActiveRecord implementation:

      \`\`\`php
      class User extends Model
      {
          // Model definition
      }

      // Using the model
      $users = User::all();
      \`\`\`

      ## Summary

      Laravel provides an incredible development experience with its rich feature set and elegant syntax. Getting started is simple, and the learning curve is quite manageable for developers with some PHP background.

      In future articles, we'll dive deeper into Laravel's advanced features like Eloquent ORM, middleware, and testing.
    `,
  },
  {
    id: 2,
    title: 'Network Infrastructure Essentials',
    slug: 'network-infrastructure-essentials',
    date: '2023-10-22',
    author: 'Untara Eka Saputra',
    readTime: '7 min read',
    excerpt:
      'Understanding the fundamentals of network infrastructure and its importance in modern applications.',
    tags: ['Networking', 'Infrastructure', 'DevOps'],
    thumbnail: '/images/blog/networking.jpg',
    content: `
      # Network Infrastructure Essentials

      Network infrastructure forms the backbone of modern applications. Understanding its components is crucial for any developer or IT professional.

      ## Key Components

      A robust network infrastructure includes several key components:

      * **Routers** - Direct traffic between different networks
      * **Switches** - Connect devices within the same network
      * **Firewalls** - Protect against unauthorized access
      * **Load Balancers** - Distribute traffic across multiple servers
      * **DNS Servers** - Translate domain names to IP addresses

      ## Network Topology Types

      The physical and logical arrangement of network elements defines its topology:

      1. **Star Topology** - All devices connect to a central hub
      2. **Mesh Topology** - Devices connect to multiple other devices
      3. **Bus Topology** - All devices connect to a single backbone
      4. **Ring Topology** - Devices connect in a circular fashion

      ## Network Security Considerations

      Security is paramount in network infrastructure:

      - Implement proper firewall rules
      - Use VPNs for secure remote access
      - Regularly update and patch systems
      - Monitor network traffic for unusual patterns
      - Implement proper access controls

      ## Cloud vs On-Premise Infrastructure

      Modern applications often use a hybrid approach:

      | Aspect | Cloud | On-Premise |
      |--------|-------|------------|
      | Cost | OpEx model | CapEx model |
      | Scalability | Highly scalable | Limited by hardware |
      | Maintenance | Provider managed | Self-managed |
      | Security | Shared responsibility | Full control |

      Understanding these fundamentals helps in making informed decisions about your application's infrastructure needs.
    `,
  },
  {
    id: 3,
    title: 'Optimizing Backend Performance',
    slug: 'optimizing-backend-performance',
    date: '2023-09-05',
    author: 'Untara Eka Saputra',
    readTime: '6 min read',
    excerpt:
      'Tips and techniques to improve the performance of your backend applications.',
    tags: ['Backend', 'Performance', 'Optimization'],
    thumbnail: '/images/blog/performance.jpg',
    content: `
      # Optimizing Backend Performance

      Performance is critical for modern applications. Sluggish backends lead to poor user experiences and can impact business metrics significantly.

      ## Database Optimization Techniques

      The database is often the bottleneck in web applications:

      * **Indexing** - Properly index tables based on query patterns
      * **Query Optimization** - Rewrite inefficient queries
      * **Connection Pooling** - Reuse database connections
      * **Caching** - Implement result caching for frequent queries
      * **Denormalization** - When appropriate, denormalize for read performance

      ## Caching Strategies

      Caching dramatically improves performance:

      1. **Application Cache** - Cache computed results
      2. **Database Query Cache** - Cache query results
      3. **Object Cache** - Cache frequently used objects
      4. **CDN** - Cache static assets at edge locations
      5. **Distributed Cache** - Use Redis or Memcached for scaling

      ## Code Level Optimization

      Optimize your code for better performance:

      \`\`\`javascript
      // Instead of this
      const result = array.filter(item => item.active).map(item => item.name);

      // Do this (single iteration)
      const result = array.reduce((names, item) => {
        if (item.active) names.push(item.name);
        return names;
      }, []);
      \`\`\`

      ## Load Testing and Benchmarking

      Regular performance testing is essential:

      - Establish performance baselines
      - Test with realistic loads
      - Identify bottlenecks systematically
      - Monitor key metrics (response time, throughput, error rate)
      - Automate performance regression testing

      By implementing these strategies, you can significantly improve your backend's performance, leading to better user experiences and potentially lower infrastructure costs.
    `,
  },
];
