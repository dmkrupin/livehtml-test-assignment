const initCategoriesList = () => {
  const categoriesList = document.querySelector('.header__categories-list');
  if (categoriesList) {
    const categoriesItems = categoriesList.querySelectorAll('.header__categories-item');

    const clearAllItemsActiveState = () => {
      for (let item of categoriesItems) {
        item.classList.remove('header__categories-item--is-active');
      }
    };

    for (let item of categoriesItems) {
      item.addEventListener('click', () => {
        clearAllItemsActiveState();
        item.classList.add('header__categories-item--is-active');
      });
    }
  }
};

export {initCategoriesList};
