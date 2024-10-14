import "./App.css";
import "./styles/style.scss";
import Header from "./partials/header";
import Tabs from "./view/tabs";
import Charts from "./view/charts";

function App() {
  return (
    <>
      <Header />
      <Tabs />
      <Charts />
    </>
  );
}

export default App;
