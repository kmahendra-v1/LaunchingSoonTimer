import LaunchTitle from './components/LaunchTitle';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import './styles/css-dist/App.min.css';
import './styles/css/fonts.css';

function App() {
  return (
    <div className="App">
      <div className="launch-title">
        <LaunchTitle />
      </div>
      <div className="countdown">
        <Countdown />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
