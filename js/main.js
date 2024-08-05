const elsTabLink = document.querySelectorAll(".js-tab-link");
const elsTabItem = document.querySelectorAll(".tabs__item");
const elsTabPanles = document.querySelectorAll(".tabs__panels");

const elsAccordionItem = document.querySelectorAll(".accordion__item");


// deactivate tab items
function deactivateTabItems() {
   elsTabItem.forEach(function (elTabItem) {
      elTabItem.classList.remove('tabs__item-active')
   });
};

//deactivate tabs panels
function deactivateTabPanles() {
   elsTabPanles.forEach(function (elTabPanels) {
      elTabPanels.classList.remove('tabs__panels-active')
   });
};

// close accordion
function closeAccordion() {
   elsAccordionItem.forEach(function (elAccordionItem) {
      elAccordionItem.classList.remove('accordion__item-open');
   });
};

// elsTabLink
elsTabLink.forEach(function (elTabLink) {
   elTabLink.addEventListener('click', function (evt) {
      evt.preventDefault();

      // Remove item class from li
      deactivateTabItems();
      // Add active class to clicked class item
      elTabLink.parentElement.classList.add('tabs__item-active');

      // Remove panels class
      deactivateTabPanles();
      // Add active class to clicked class panels
      const elTargetPanels = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
      elTargetPanels.classList.add('tabs__panels-active');

   });
});

// Accordion
elsAccordionItem.forEach(function (elAccordionItem) {
   elAccordionItem.addEventListener('click', function () {
      // closeAccordion();
      elAccordionItem.classList.toggle('accordion__item-open');
   });
});