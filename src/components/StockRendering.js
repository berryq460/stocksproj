import "../cssFiles/Stock.css";
import { useState, useEffect } from "react";
import Stock from "./Stock";
import GetStockInfo from "./StockFetch"

function Stocks() {
  const [browseStock, setBrowseStock] = useState([]);

  useEffect(() => {
    async function defaultStocks() {
      const NDAQ = await GetStockInfo("ndaq");
      const SPY = await GetStockInfo("spy");
      const FB = await GetStockInfo("fb");
      const SNAP = await GetStockInfo("snap");
      const SHOP = await GetStockInfo("shop");
      setBrowseStock([NDAQ, SPY, FB, SNAP, SHOP]);
    }
    defaultStocks();
  }, []);

  return (
    <main className="app-main">
     
      {browseStock.map((stock, index) => {
        return <Stock {...stock} key={index} />;
      })}
    </main>
  );
}

export default Stocks;