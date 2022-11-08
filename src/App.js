import logo from './logo.svg';
import './App.css';
import Title from './Components/Title'
import Paragraph from './Components/Paragraph'
import Counter from './Components/Counter'



function App() {
  return (
    <div className="App">
    <Title>titulo 1</Title>
    <Title>titulo 2</Title>/
    <Paragraph>Este es mi parrafo</Paragraph>
    <Counter></Counter>
    </div>
  );
}

export default App;
