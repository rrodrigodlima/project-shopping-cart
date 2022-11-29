export const fetchProduct = async (id) => {
  if (!id) throw new Error('ID não informado');

  const result = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const data = await result.json();
  return data;
};

export const fetchProductsList = async (product) => {
  if (!product) throw new Error('Termo de busca não informado');

  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
  const data = await result.json();
  const dataObj = data.results;
  return dataObj;
};
