import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import RegistrationRoute from './RegistrationRoute'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <Route path="/:plant_Id" component={RegistrationRoute}/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});