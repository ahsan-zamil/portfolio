// This script helps fix mobile layout issues by preventing overflow
document.addEventListener('DOMContentLoaded', function() {
  // Function to fix any overflowing elements
  function fixMobileLayout() {
    if (window.innerWidth <= 767) {
      // Force body width
      document.body.style.width = window.innerWidth + 'px';
      document.body.style.overflowX = 'hidden';
      
      // Find all elements with potential overflow issues
      const sections = document.querySelectorAll('#about, #services, #work, #contact');
      sections.forEach(section => {
        section.style.width = (window.innerWidth - 20) + 'px';
        section.style.maxWidth = '100%';
        section.style.marginLeft = 'auto';
        section.style.marginRight = 'auto';
        section.style.boxSizing = 'border-box';
      });
      
      // Fix all paragraph text
      const paragraphs = document.querySelectorAll('p');
      paragraphs.forEach(p => {
        p.style.maxWidth = (window.innerWidth - 30) + 'px';
        p.style.wordWrap = 'break-word';
        p.style.overflowWrap = 'break-word';
      });
    }
  }

  // Run on page load
  fixMobileLayout();
  
  // Run on resize
  window.addEventListener('resize', fixMobileLayout);
});
