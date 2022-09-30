
import { Home } from './components/Home';
import { Ready } from './components/Ready';
import { Services } from './components/Services';
import { QA } from './components/QA';
import { Portfolio } from './components/Portfolio';
import { Inquiry } from './components/Inquiry';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <Services />
      <Ready />
      <QA />
      <Portfolio />
      <Inquiry />
      <Footer />
    </div>
  );
}

export default App;
