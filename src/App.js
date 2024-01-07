import './css/App.css';
import TopBar from './components/TopBar.js';
import NavHead from './components/navbar.js';
import HeaderCarousel from './components/header.js';
import Courses from './components/cards.js';
import BasicInfo from './components/basicInfo.js';
import Basic from './components/howWorks.js';



function App() {
  return (
    <>
      <TopBar />
      <NavHead />
      <HeaderCarousel/>
      <Courses />
      <BasicInfo />
      <Basic />
    </>
  );
}

export default App;
