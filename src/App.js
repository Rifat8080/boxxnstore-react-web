import './css/App.css';
import TopBar from './components/TopBar.js';
import NavHead from './components/navbar.js';
import HeaderCarousel from './components/header.js'
import CardSection from './components/cards.js';

function App() {
  return (
    <>
      <TopBar />
      <NavHead />
      <HeaderCarousel/>
      <CardSection />
    </>
  );
}

export default App;
