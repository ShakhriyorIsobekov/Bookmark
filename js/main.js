const elsTabLink = document.querySelectorAll(".js-tab-link");
const elsTabItem = document.querySelectorAll(".tabs__item");
const elsTabPanles = document.querySelectorAll(".tabs__panels");


// deactivate tab items
function deactivateTabItems () {
   elsTabItem.forEach(function (elTabItem) {
      elTabItem.classList.remove('tabs__item-active')
   });
};

//deactivate tabs panels
function deactivateTabPanles () {
   elsTabPanles.forEach(function(elTabPanels) {
      elTabPanels.classList.remove('tabs__panels-active')
   });
};

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
