import './App.css'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase';

function App() {

  return (
    <div className="App">
      <h1>React!</h1>
      <p>My first React Project</p>
      <Pessoa name="Fabricio" idade="22" profissao="programador"/>
      <Frase/>
      <Frase/>
      <Frase/>
    </div>
  );
}

export default App;
