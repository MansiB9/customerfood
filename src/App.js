import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './Cart.css';
//import './MyNavBar.css'
import "bootstrap/dist/css/bootstrap.min.css";
//import MyNavBar from './layout/MyNavBar';
//import HomeContent from './Compo/HomeContent';

import AppRoutes from './layout/AppRoutes';


function App() {
  return (
    <div>
       <AppRoutes/>
    </div>
  );
}


export default App;
