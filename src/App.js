import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Category from './pages/Category'
import ToDoList from './pages/ToDoList'

function App() {
  const menus = [
    { id: 0, path: '/home', component: Home},
    { id: 1, path: '/about', component: About},
    { id: 2, path: '/category', component: Category},
    { id: 3, path: '/todolist', component: ToDoList},
  ]

  return (
    <Router>
      <Switch>
        {/* <Route path="/home" component={Home} />
        <Route path="/about" component={About} /> */}

        {menus.map((menu)=>
        <Route 
          key={menu.id}
          exact 
          path={menu.path} 
          component={menu.component}></Route>
        )}

      </Switch>
    </Router>
  );
}

export default App;
