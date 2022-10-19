import renderProduct from '../components/product.js';
import STORE from '../store.js';

function render() {
  const products = STORE.products;
  return `
    <div class="main-container">
      <div class="cards-container">
        ${products.map(renderProduct).join('')}
      </div>
    </div>
  `;
}

const MainPage = {
  toString() {
    return render();
  },
  addListeners() {}
};

export default MainPage;
