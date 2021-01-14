import "./App.css";
import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AddRecipeRoute from "./routes/AddRecipe/AddRecipeRoute";
import NotFoundRoute from "./routes/NotFoundRoute/NotFoundRoute";
import RecipeListRoute from "./routes/RecipeListRoute/RecipeListRoute";
import EditRecipeRoute from "./routes/EditRecipeRoute/EditRecipeRoute";
import LandingRoute from "./routes/LandingRoute/LandingRoute";
import Header from "./components/Header/Header";
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import TestRecipeRoute from './routes/TestRecipeRoute/TestRecipeRoute'
import EditIngredientRoute from './routes/EditIngredientRoute/EditIngredientRoute'
import EditInstructionRoute from './routes/EditInstructionRoute/EditInstructionRoute'
import EditTitleRoute from './routes/EditTitleRoute/EditTitleRoute'
import Context from './Context'
import PublicRoute from './components/PublicRoutes/PublicRoutes'


export default class App extends Component {

  state = {
    loggedIn: false
  }

  handleLoggedIn = (loggedIn) => {
    this.setState({
      loggedIn
    })
  }

  render() {
    const value = {
      loggedIn : this.state.loggedIn,
      handleLoggedIn : this.handleLoggedIn
    }
  return (
    <Context.Provider value={value}>
    <div className="App">
      <Header />
      <main>
        <Switch>
          <PublicRoute exact path="/" component={LandingRoute} />
          <PrivateRoute exacts path="/edit-recipe/:id" component={EditRecipeRoute}/>
          <PrivateRoute exact path="/add-recipe" component={AddRecipeRoute} />
          <PrivateRoute exact path="/edit-instruction/:id" component={EditInstructionRoute} />
          <PrivateRoute exact path="/recipe-list" component={RecipeListRoute} />
          <PrivateRoute exact path='/edit-title/:id' component={EditTitleRoute}/>
          <PrivateRoute exact path="/recipe/:id" component={TestRecipeRoute} />
          <PublicRoute  exact path="/registration" component={RegistrationForm} />
          <PrivateRoute exact path='/edit-ingredient/:id' component={EditIngredientRoute}/>
          <Route component={NotFoundRoute} />
        </Switch>
      </main>
    </div>
    </Context.Provider>
  );
  }
}