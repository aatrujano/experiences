// STYLES
import './App.css';

//COMPONENTS
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Main/>
    </div>
  );
}

export default App;
