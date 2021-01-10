import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddRecipeRoute from "./routes/AddRecipe/AddRecipeRoute";
import EditRecipeRoute from "./routes/EditRecipeRoute/EditRecipeRoute";
import NotFoundRoute from "./routes/NotFoundRoute/NotFoundRoute";
import RecipeListRoute from "./routes/RecipeListRoute/RecipeListRoute";
import RecipeRoute from "./routes/RecipeRoute/RecipeRoute";
import LandingRoute from "./routes/LandingRoute/LandingRoute";
import Header from "./components/Header/Header";
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Footer from './components/Footer/Footer'
import TestRecipeRoute from './routes/TestRecipeRoute/TestRecipeRoute'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={LandingRoute} />
          <Route exact path="/add-recipe" component={AddRecipeRoute} />
          <Route exact path="/edit-recipe/:id" component={EditRecipeRoute} />
          <PrivateRoute exact path="/recipe-list" component={RecipeListRoute} />
          <Route exact path="/recipe/:id" component={TestRecipeRoute} />
          <Route exact path="/registration" component={RegistrationForm} />
          <Route component={NotFoundRoute} />
        </Switch>
        <Footer />
      </main>
    </div>
  );
}

export default App;
