import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import LandingRoute from './LandingRoute'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <Route path="/:plant_Id" component={LandingRoute}/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});