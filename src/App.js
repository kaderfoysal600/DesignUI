import './App.css';
import Header from './pages/Header';
import LeftContainer from './components/LeftContainer';
import MiddleContainer from './pages/MiddleContainer';
import RightContainer from './pages/RightContainer';

function App() {
  return (
    <div className='main-container'>
      <Header/>
      <LeftContainer/>
      <MiddleContainer />
      <RightContainer />
    </div>
  );
}

export default App;
