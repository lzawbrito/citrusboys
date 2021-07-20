import './App.css';
import { HashRouter,Route, Redirect} from 'react-router-dom';
import Entry from './components/Entry'
import { Navigation } from './components/Navigation';
import ScrollToTop from './components/ScrollToTop'
import { pages } from './components/Navigation'


function makePage(page){
  return <Route path={page.link} component={page.component}></Route>
}

const pageRoutes = pages.map(makePage)

function App() {
  return (
    <div className="App">
      <HashRouter>
          <ScrollToTop/>
          <Navigation/> 
          <div className="page-content">
            <Route exact path="/">
              <Redirect to="/entry"/>
            </Route>
            <Route path="/entry" component={Entry} exact></Route>
            {pageRoutes}
            {/* <Route path="/entry" component={Entry} exact></Route>
            <Route path="/home" component={Home} exact></Route>
            <Route path="/about" component={About} exact></Route>
            <Route path="/archive" component={Archive} exact></Route>
            <Route path="/mission-statement" component={MissionStatement} exact></Route>
            <Route path="/store" component={Store} exact></Route> */}
          </div>
      </HashRouter>
    </div>
  );
}

export default App;
