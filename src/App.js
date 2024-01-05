import './css/App.css';
import TopBar from './components/TopBar.js';
import NavHead from './components/navbar.js';
import HeaderCarousel from './components/header.js'
import Courses from './components/cards.js';



function App() {
  return (
    <>
      <TopBar />
      <NavHead />
      <HeaderCarousel/>
     <Courses />
    </>
  );
}

export default App;
