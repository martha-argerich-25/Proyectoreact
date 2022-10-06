
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/counter/counter';







function App() {

  const handLeOnadd =()=>{
    console.log("se agrego al carrito")
  }



  return (
    <div className="App">
     
   <Navbar/>  
     <ItemListContainer greeting={'Bienvenidos'}/>
 
       
  <Counter onAdd={handLeOnadd}/>
  
     
       

       
       

       
         
       
        
        
  
  </div>
  );
}

export default App;
