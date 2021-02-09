import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import General from './routes/General/General';
import About from './routes/About/About';
import Ministries from './routes/Ministries/Ministries';
import Contact from './routes/Contact/Contact';

function App() {
  return (
    <Switch>
      <Route path="/" exact component ={General} />
      <Route path="/about" component ={About} />
      <Route path="/ministries" component ={Ministries} />
      <Route path="/contact" component ={Contact} />
    </Switch>
  );
}

export default App;
