import React, { StrictMode } from "react"
import ReactDOM from "react-dom"
import App from "./App.jsx"
import "./index.css"
import {
  BrowserRouter,
  Router,
  Route,
  withRouter,
  Switch,
  HashRouter,
} from "react-router-dom"
// import { CompatRoute } from "react-router-dom-v5-compat"

const Hello = () => <>Hello</>

const R = () => {
  return (
    <Switch>
      <Route path="/app" component={App} />
      <Route path="/hello" component={Hello} />
    </Switch>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <R />
  </BrowserRouter>,
  document.getElementById("root")
)
