import './App.css'
import HelloWorld from './components/HelloWorld'

function App() {

  const name = 'Fabricio'


  return (
    <div className="App">
      <h1>React!</h1>
      <p>My first React Project</p>
      <p>Olá, {name}</p>
      <HelloWorld/>
    </div>
  );
}

export default App;
