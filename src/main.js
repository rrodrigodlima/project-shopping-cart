import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const productsSection = document.getElementsByClassName('products')[0];
const loading = document.getElementsByClassName('loading')[0];

function callData(query) {
  const productList = fetchProductsList(query);
  loading.innerHTML = 'carregando...';
  productList.then((results) => {
    results.map((product) => {
      productsSection
        .appendChild(createProductElement(product));
      loading.remove();
      return '';
    });
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
