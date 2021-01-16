import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import NotFoundRoute from './NotFoundRoute'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <Route path="/:plant_Id" component={NotFoundRoute}/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});