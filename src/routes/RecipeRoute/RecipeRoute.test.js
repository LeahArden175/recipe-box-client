import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import RecipeRoute from './RecipeRoute'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <Route path="/:plant_Id" component={RecipeRoute}/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});