import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  
  });

  it('é chamada ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  it('retorna os dados', async () => {
    const data = await fetchProduct('MLB1405519561');
    expect(data).toEqual(product);
  });
  it('Teste, se ao chamar a função sem argumento retorna erro', async () => {
    expect(() => fetchProduct()).rejects.toThrowError('ID não informado')
  })
});