import logo from './logo.svg';
import './App.css';
import MainContainer from './modules/_MainContainer/MainContainer'
import ToDo from './modules/ToDo/ToDo'

function App() {
  return (
    <div className="App">
      <MainContainer>
        <ToDo/>
      </MainContainer>
    </div>
  );
}

export default App;
