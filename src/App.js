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
    console.log(this.state.loggedIn)
  return (
    <Context.Provider value={value}>
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={LandingRoute} />
          <Route exacts path="/edit-recipe/:id" component={EditRecipeRoute}/>
          <Route exact path="/add-recipe" component={AddRecipeRoute} />
          <Route exact path="/edit-instruction/:id" component={EditInstructionRoute} />
          <PrivateRoute exact path="/recipe-list" component={RecipeListRoute} />
          <Route exact path='/edit-title/:id' component={EditTitleRoute}/>
          <Route exact path="/recipe/:id" component={TestRecipeRoute} />
          <Route exact path="/registration" component={RegistrationForm} />
          <Route exact path='/edit-ingredient/:id' component={EditIngredientRoute}/>
          <Route component={NotFoundRoute} />
        </Switch>
      </main>
    </div>
    </Context.Provider>
  );
  }
}