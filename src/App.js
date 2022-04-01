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
import InfoNav from './components/InfoNav';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  body: {
    display: "flex",
    flexGrow: "1",
  },
  content: {
    paddingLeft: "300px",
    width: "100%",
    height: "100%",
  }
}));

function App() {
    const styles = useStyles();
    const [isDev, setIsDev] = useState(true);

    const switchJob = () => {
        setIsDev(prev => !prev)
    }

    const jobtype = (dev) => {
        return dev ? "DEV" : "VE"
    }

    return (
      <div className={styles.root}>
        <Header menuchange={switchJob} isDev={isDev} />
        <div className={styles.body}>
          <InfoNav />
          <div className={styles.content}>
            <BrowserRouter>
              <Switch>
                <Route exact path="/">
                  <Info jobtype={jobtype(isDev)} />
                </Route>
                <Route path="/Info">
                  <Info jobtype={jobtype(isDev)} />
                </Route>
                <Route path="/Skills">
                  <Skills jobtype={jobtype(isDev)} />
                </Route>
                <Route path="/Career">
                  <Career jobtype={jobtype(isDev)} />
                </Route>
                <Route path="/Contact">
                  <Contact jobtype={jobtype(isDev)} />
                </Route>
                <Route path="/Projects">
                  <Projects jobtype={jobtype(isDev)} />
                </Route>
                <Route path="/Test">
                  <Test jobtype={jobtype(isDev)} />
                </Route>
                <Route path="/Portfolio">
                  <Test jobtype={jobtype(isDev)} />
                </Route>
                <Route>
                  <ErrorPage />
                </Route>
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
}

export default App;
