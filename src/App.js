
import './App.css';
import Header from './components/Header';
import Basketballer from './components/Basketballer';
import AddProduct from './components/baskets/AddProduct';
import Basket from './components/baskets/Basket';
import Counter from './components/Counter';
import PlayerContainer from './components/PlayerContainer';
import Product from './components/baskets/Product';

const App = () => {
  
  // const basketballer = {
  //   name: 'LeBron',
  //   team: 'Los Angeles',
  //   number: 6,
  //   position: 'Power Forward'
  // }

  return (
    <div className="App">
      <Header/>

    
    {/* <Product/> */}


      
      <PlayerContainer/>
      
    </div>
  );
}

export default App;
