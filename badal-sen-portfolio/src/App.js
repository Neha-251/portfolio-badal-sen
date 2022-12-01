import './App.css';
import {About} from "./Components/about/about";
import { Home } from './Components/home/home';
import { Navbar } from './Components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Home/>
    </div>
  );
}

export default App;
