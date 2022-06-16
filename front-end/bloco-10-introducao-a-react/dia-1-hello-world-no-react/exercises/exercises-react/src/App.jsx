import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Acordar', 'Escovar os dentes', 'Fazer Compras'];

const map = () => compromissos.map((compromisso) => Task(compromisso))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        { map() }
      </header>
    </div>
  );
}

export default App;
