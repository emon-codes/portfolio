 window.addEventListener('load', () => {
      document.querySelectorAll('.progress-bar').forEach(bar => {
        bar.style.width = bar.style.getPropertyValue('--progress');
      });
    });