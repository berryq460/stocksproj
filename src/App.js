import "./App.css";
import Header from "./components/Header";
import StockRender from "./components/StockRendering";


function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <StockRender />
    </div>

  );
}


export default App;