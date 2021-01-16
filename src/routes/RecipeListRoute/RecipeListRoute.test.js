import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import RecipeListRoute from './RecipeListRoute'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <Route path="/:plant_Id" component={RecipeListRoute}/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});