export const getList = async () => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/exchange_rates`,
    {
      method: "GET",
    }
  );
  return response.json();
};
