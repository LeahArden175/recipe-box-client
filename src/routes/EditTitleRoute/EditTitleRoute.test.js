import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import EditTitleRoute from './EditTitleRoute'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <Route path="/:plant_Id" component={EditTitleRoute}/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});