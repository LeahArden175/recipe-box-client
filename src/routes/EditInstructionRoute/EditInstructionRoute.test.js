import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import EditInstructionRoute from './EditInstructionRoute'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <Route path="/:plant_Id" component={EditInstructionRoute}/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});