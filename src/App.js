import React from 'react'
import Header from './component/Header.js'
import News from './component/News.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = ()=>{
  const apiKey = "4d9c5b5dac014dd49d63889d8f26490f";
    return (
      <div>
        <Router>
        <Header/>
        <Switch>
          <Route exact path="/"><News key='general' country='in' newsApi={apiKey} category='general'/></Route>
          <Route exact path="/science"><News key='science' country='in' newsApi={apiKey} category='science'/></Route>
          <Route exact path="/business"><News key='business' country='in' newsApi={apiKey} category='business'/></Route>
          <Route exact path="/entertainment"><News key='entertainment' country='in' newsApi={apiKey} category='entertainment'/></Route>
          <Route exact path="/sports"><News key='sports' country='in' newsApi={apiKey} category='sports'/></Route>
          <Route exact path="/technology"><News key='technology' country='in' API={apiKey} category='technology'/></Route>
          <Route exact path="/health"><News key='health' country='in' API={apiKey} category='health'/></Route>
        </Switch>
        </Router>
      </div>
    )
}
export default App;
