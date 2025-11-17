 // JavaScript: toggle the .active class on click so the clicked panel expands.
    // 1) Select all panels
    const panels = document.querySelectorAll('.panel');

    // 2) Helper: remove .active from all panels
    function clearActive() {
      panels.forEach(p => p.classList.remove('active'));
    }

    // 3) Attach click listeners to each panel
    panels.forEach(panel => {
      panel.addEventListener('click', () => {
        // If the clicked panel is already active, do nothing (optional behaviour)
        if (panel.classList.contains('active')) return; // keeps the same active panel

        // Otherwise, remove active from others and set it on clicked
        clearActive();
        panel.classList.add('active');

        // Optional: scroll the active element into view on small screens
        // panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });

    // The markup already sets the first panel as 'active' by default.
    // If you wanted to programmatically set it on load instead, you could:
    // panels[0].classList.add('active');