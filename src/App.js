import Container from "./components/Container";
import Main from "./components/Main";
import MyHeader from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Container>
      <div>
        <MyHeader />
        <Main />
        <Footer />
      </div>
    </Container>
  );
}

export default App;
