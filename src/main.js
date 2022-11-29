import { getSavedCartIDs, saveCartID } from './helpers/cartFunctions';
import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const productsSection = document.getElementsByClassName('products')[0];
const loading = document.getElementsByClassName('loading')[0];
const cartSection = document.getElementsByClassName('cart__products')[0];

// CART

function cartData(id) {
  fetchProduct(id).then((results) => {
    const cartProductElement = createCartProductElement(results);
    cartSection
      .appendChild(cartProductElement);
  });
  return saveCartID(id);
}

// PRODUCTS

function callData(query) {
  const productList = fetchProductsList(query);

  loading.innerHTML = 'carregando...';

  productList.then((results) => {
    results.map((product) => {
      const productElement = createProductElement(product);
      productsSection
        .appendChild(productElement);
      return productElement.lastChild.addEventListener('click', () => {
        cartData(productElement.firstChild.innerHTML);
      });
    });
    loading.remove();
  });

  return productList;
}

const fetchError = () => {
  try {
    callData('computador');
  } catch (error) {
    loading.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
  }
};

fetchError();

window.onload = async () => {
  getSavedCartIDs().map(async (element) => {
    const recover = await fetchProduct(element);
    Promise.all(cartSection.appendChild(createCartProductElement(recover)));
  });
};
