import styles from "./App.module.css"
import { MoviesGrid } from "./Components/ItemGrid/MoviesGrid"
import React from "react";
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./containers/ItemDetailsContainer/MovieDetails";
import { LandingPage } from "./containers/LandingPage/LandingPage";
export default function App(){
 return( 
   <Router>
      <header>
       <Link to="/">
         <h1 className={styles.title}>MuVyCenter</h1>
       </Link>
      </header>
      
      <main>
         <Switch>         
           <Route exact path ="/item/:id"><MovieDetails/></Route>
           <Route path ="/"><LandingPage/></Route>
         </Switch>
      </main>
  </Router>
   
 )
}
