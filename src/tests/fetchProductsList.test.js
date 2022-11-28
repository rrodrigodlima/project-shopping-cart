import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  
  });

  it('é chamada ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('retorna os dados', async () => {
    const data = await fetchProductsList('computador');
    expect(data).toEqual(computadorSearch);
  });
  it('Teste, se ao chamar a função sem argumento retorna erro', async () => {
    expect(() => fetchProductsList).toThrowError('Termo de busca não informado')
  })
});
