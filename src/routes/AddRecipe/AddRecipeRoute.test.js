import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import AddRecipeRoute from './AddRecipeRoute'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <Route path="/:plant_Id" component={AddRecipeRoute}/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});