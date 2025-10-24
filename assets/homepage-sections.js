/* Homepage Section IDs Script */
(function() {
  'use strict';
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addSectionIds);
  } else {
    addSectionIds();
  }
  
  function addSectionIds() {
    // Get all sections in main content
    const mainContent = document.querySelector('#MainContent');
    if (!mainContent) return;
    
    const sections = mainContent.querySelectorAll('[id*="shopify-section"]');
    
    sections.forEach((section, index) => {
      // Check section content to determine type
      const sectionInner = section.querySelector('[class*="hero"]');
      const hasAboutText = section.textContent.includes('About KodePH') || section.textContent.includes('Sa KodePH');
      const hasFeaturedGames = section.textContent.includes('Featured Games') || section.querySelector('.product-list');
      
      // Add appropriate ID based on content
      if (index === 0 || sectionInner) {
        section.id = 'hero-section';
        section.classList.add('homepage-section');
      } else if (hasAboutText) {
        section.id = 'about-section';
        section.classList.add('homepage-section');
      } else if (hasFeaturedGames) {
        section.id = 'products-section';
        section.classList.add('homepage-section');
      }
    });
  }
})();
