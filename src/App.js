import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import General from './routes/General/General'

function App() {
  return (
    <Switch>
      <Route path="/" component ={General} />
    </Switch>
  );
}

export default App;
