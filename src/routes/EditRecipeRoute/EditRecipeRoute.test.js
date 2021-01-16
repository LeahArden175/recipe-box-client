import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import EditRecipeRoute from './EditRecipeRoute'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <Route path="/:plant_Id" component={EditRecipeRoute}/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});