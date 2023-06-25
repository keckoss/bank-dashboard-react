import "./App.css";
import Header from "./components/Header";
import Accounts from "./components/Accounts";
import data from "./assets/data.json";
function App() {
  return (
    <>
      <Header />
      <Accounts data={data} />
    </>
  );
}

export default App;
