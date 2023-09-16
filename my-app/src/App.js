
import { Routes , Route } from 'react-router-dom';
import './App.css';
// import Section1 from './Comp/Section1';
import Home from './Comp/Home/Home';
import Search from './Comp/Search/Search';





function App () {
  return (
    
    <>
    <Routes>
      <Route path= '' element ={<Home/>}></Route>
      <Route path= 'search' element ={<Search/>}></Route>
    </Routes>

    </>
   
    
  );
}


export default App;
