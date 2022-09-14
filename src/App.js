import './App.css';
import Converter from './components/converter';
import {Header, Footer} from './components/standard';

function App() {
  return (
    <div className="App">
      <Header/>
      <Converter Acurrency="BRL" Bcurrency="USD"/>
      <Footer/>
    </div>
  );
}

export default App;
