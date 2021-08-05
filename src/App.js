import './App.css';
import { makeStyles } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Info from './pages/Info';
import Skills from './pages/Skills';
import Career from './pages/Career';
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Test from './pages/Test';
import Header from './components/Header';

const useStyles = makeStyles((theme) => ({
  body:{
    marginTop: '70px',
  }
}));

function App() {
  const classes = useStyles();
  
  return (
    <div className="App">
      <Header />
      <div className={classes.body}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Info />
            </Route>
            <Route path="/Info">
              <Info />
            </Route>
            <Route path="/Skills">
              <Skills />
            </Route>
            <Route path="/Career">
              <Career />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
            <Route path="/Test">
              <Test />
            </Route>
            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
