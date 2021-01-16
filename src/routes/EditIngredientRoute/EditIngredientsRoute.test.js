import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import EditIngredientRoute from './EditIngredientRoute'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <Route path="/:plant_Id" component={EditIngredientRoute}/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});