
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import "./App.css";
import ControlledHealthBar from './components/ControlledHealthBar';
import Deck from './components/Deck';
    function App() {
      return (
        <div className="App">
       <div className={styles.container}>
      <Deck />
    </div>
          <Header />
          <Navbar />
          <ControlledHealthBar />
          
          <Footer />
        </div>
      );
    }
  
export default App;