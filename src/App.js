import './css/App.css';
import TopBar from './components/TopBar.js';
import NavHead from './components/navbar.js';
import HeaderCarousel from './components/header.js';
import Courses from './components/cards.js';
import BasicInfo from './components/basicInfo.js';
import Basic from './components/howWorks.js';
import VideoPlayer from './components/youtube.js';
import Choose from './components/chooseUs.js';



function App() {
  return (
    <>
      <TopBar />
      <NavHead/>
      <HeaderCarousel/>
      <Courses/>
      <BasicInfo/>
      <Basic/>
      <VideoPlayer/>
      <Choose/>
    </>
  );
}

export default App;
