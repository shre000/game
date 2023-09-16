
import { Routes , Route } from 'react-router-dom';
import './App.css';
// import Section1 from './Comp/Section1';
import Home from './Comp/Home/Home';
import Search from './Comp/Search/Search';
import Login from './Comp/My/Login';
import Register from './Comp/My/Register';






function App () {
  return (
    
    <>
    <Routes>
      <Route path= '/' element ={<Home/>}></Route>
      <Route path= '/search' element ={<Search/>}></Route>
      <Route path= '/login' element ={<Login/>}></Route>
      <Route path= '/register' element ={<Register/>}></Route>

      
    </Routes>

    </>
   
    
  );
}


export default App;
