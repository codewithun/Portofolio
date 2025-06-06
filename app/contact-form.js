document.addEventListener('DOMContentLoaded', function () {
  const messageTextarea = document.getElementById('message');
  const charCount = document.getElementById('charCount');

  if (messageTextarea && charCount) {
    messageTextarea.addEventListener('input', function () {
      const count = this.value.length;
      charCount.textContent = count;
    });
  }
});
