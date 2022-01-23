import './App.css';
import { HashRouter,Route, Redirect} from 'react-router-dom';
import Entry from './components/Entry'
import { Navigation } from './components/Navigation';
import ScrollToTop from './components/ScrollToTop'
import { pages } from './components/Navigation'
import {ParallaxProvider} from 'react-scroll-parallax'
import { Footer } from './components/Footer'

function makePage(page){
  return <Route path={page.link} component={page.component}></Route>
}

const pageRoutes = pages.map(makePage)

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <HashRouter>
            <ScrollToTop/>
            <div id="page-container">
              <Navigation/> 
                <Route exact path="/">
                  <Redirect to="/entry"/>
                </Route>
                <Route path="/entry" component={Entry} exact></Route>
              <div id="content-wrap">
              {pageRoutes}
              </div>
              <Footer/>
            </div>
        </HashRouter>
      </ParallaxProvider>
    </div>
  );
}

export default App;
