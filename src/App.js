import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Characters from './components/characters/Characters';
import Header from './components/navigation/Header';
import Episodes from './components/episodes/Episodes';
import Locations from './components/locations/Locations';
import CharacterInfo from './components/characters/CharacterInfo';
import WatchListContextProvider from './contexts/WatchListContext';
import WatchForm from './components/watchlist/WatchForm';

function App() {
  return (
    <div className='App'>
      <WatchListContextProvider>
        <Router>
          <Switch>
            <Route path='/watchlist'>
              <Header />
              <WatchForm />
            </Route>
            <Route path='/location'>
              <Header />
              <Locations />
            </Route>
            <Route path='/episode'>
              <Header />
              <Episodes />
            </Route>
            <Route path='/characters/:id'>
              <Header />
              <CharacterInfo />
            </Route>
            <Route path='/'>
              <Header />
              <Characters />
            </Route>
          </Switch>
        </Router>
      </WatchListContextProvider>
    </div>
  );
}

export default App;
