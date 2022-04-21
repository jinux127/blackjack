import Container from "./components/Container";
import "./App.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Container />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
