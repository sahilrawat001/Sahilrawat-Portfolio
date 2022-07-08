 import './App.scss';
import {Routes,Route} from 'react-router-dom'
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Project from './Components/Projects';
 function App() {
  return (
   <>
   <Routes>
  <Route path ='/' element={<Layout/>} >
  <Route path ='/about' element={<About/>} />
  <Route path ='/contact' element={<Contact/>} />
  <Route path ='/project' element={<Project/> } />

   <Route index element={<Home/>} />

  </Route>
   </Routes>
   </>
  );
}

export default App;
