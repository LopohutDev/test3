import { Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/layers/Footer";
import "./styles/main.css";
import Navbar from "./components/layers/Navbar";
import Work from "./components/Work";
import Contact from "./components/Contact";
import TodoPage from "./projects/TodoList/TodoPage";

// import Chat from "./projects/chat/Chat";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      {/* <Chat /> */}
      <div className="w-full h-16"></div>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/work/TodoList" component={TodoPage} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
