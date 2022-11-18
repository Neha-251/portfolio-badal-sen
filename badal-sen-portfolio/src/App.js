import './App.css';
import {About} from "./Components/about/about";
import { Navbar } from './Components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
    </div>
  );
}

export default App;
