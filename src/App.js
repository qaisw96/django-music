import './styles/global.css';
import Header from '../src/components/Header/Header';
import Albums from './components/Albums/Albums';
import Artists from './components/Artists/Artists';
import Songs from './components/Songs/Songs';

const App = () => (
  <div className='App'>
    <Header />
    <Albums />
    <Artists />
    <Songs />
  </div>
);

export default App;
