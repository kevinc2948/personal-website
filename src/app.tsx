import "./app.css";

import Header from "./components/header";
import logo from "./logo.svg";
import Pages from "./pages";

function App() {
  return (
    <div className="App">
      <Header />

      <Pages />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and tt to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
