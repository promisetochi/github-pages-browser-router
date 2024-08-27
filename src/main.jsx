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
const Home = () => <>Home</>

const R = () => {
  return (
    <Switch>
      <Route path="/app" component={App} />
      <Route path="/hello" component={Hello} />
      <Route path="/" component={Home} />
    </Switch>
  )
}

console.log({ env: process.env, viteMeta: import.meta })
ReactDOM.render(
  <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
    <R />
  </BrowserRouter>,
  document.getElementById("root")
)
