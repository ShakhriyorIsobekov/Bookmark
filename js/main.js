// Objects
const modifiers = {
   elTabActive: 'tabs__item-active',
   elTabPanel: 'tabs__panels-active',
   elAccordionItemOpen: 'accordion__item-open',
};


const elsTabLink = document.querySelectorAll(".js-tab-link");
const elsTabItem = document.querySelectorAll(".tabs__item");
const elsTabPanles = document.querySelectorAll(".tabs__panels");

const elsAccordionItem = document.querySelectorAll(".accordion__item");


// deactivate tab items
function deactivateTabItems() {
   elsTabItem.forEach(function (elTabItem) {
      elTabItem.classList.remove(modifiers.elTabActive)
   });
};

//deactivate tabs panels
function deactivateTabPanles() {
   elsTabPanles.forEach(function (elTabPanels) {
      elTabPanels.classList.remove(modifiers.elTabPanel)
   });
};

// close accordion
function closeAccordion() {
   elsAccordionItem.forEach(function (elAccordionItem) {
      elAccordionItem.classList.remove(modifiers.elAccordionItemOpen);
   });
};

// elsTabLink
elsTabLink.forEach(function (elTabLink) {
   elTabLink.addEventListener('click', function (evt) {
      evt.preventDefault();

      // Remove item class from li
      deactivateTabItems();
      // Add active class to clicked class item
      elTabLink.parentElement.classList.add(modifiers.elTabActive);

      // Remove panels class
      deactivateTabPanles();
      // Add active class to clicked class panels
      const elTargetPanels = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
      elTargetPanels.classList.add(modifiers.elTabPanel);

   });
});

// Accordion
elsAccordionItem.forEach(function (elAccordionItem) {
   elAccordionItem.addEventListener('click', function () {
      // closeAccordion();
      elAccordionItem.classList.toggle(modifiers.elAccordionItemOpen);
   });
});