import './App.css';
import Header from './container/Header';
import LeftContainer from './container/LeftContainer';
import MiddleContainer from './container/MiddleContainer'
import RightContainer from './container/RightContainer';

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
