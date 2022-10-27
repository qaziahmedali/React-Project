const fetchProducts = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    return response.json();
  } catch (error) {}
};
export default fetchProducts;
