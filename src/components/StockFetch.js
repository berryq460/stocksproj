import axios from "axios";

const FetchStockData = async (stock) => {
  const apiKey = "pk_80784cc5ac114a55bdbed64808a837af";
  const url = `https://cloud.iexapis.com/stable/stock/${stock}/quote?token=${apiKey}`;
  const data = await axios
    .get(url)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => console.log(error));
  return data;
};

export default FetchStockData;