
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
 
<BrowserRouter>
     <Navbar/>  
     <Routes>
       <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>}/>   
       <Route path='/category/:categoryId' element ={<ItemListContainer/>}/>  
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        <Route path='*'element = {<h1>404 not found</h1>}/>
     </Routes>
     </BrowserRouter>
  
        
        
  
  </div>
  );
}

export default App;
