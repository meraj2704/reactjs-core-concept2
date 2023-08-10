import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const accessories = [
    {name:'Table', price: 3000, color: 'black'},
    {name:'Clock', price: 300, color: 'black'},
    {name:'Cup', price: 200, color: 'White'},
    {name:'Sound Box', price: 400, color: 'black'}
  ];
  return (
    <div className="App">
      {
        accessories.map(acc => <Things name={acc.name} price={acc.price} color={acc.color}> </Things>)
      }
      <Product name="phone" price="24000"></Product>
      <Product name="Laptop" price="44000"></Product>
      <Product name="Watch" price="4000"></Product>
      <Product name="Tablet" price="22000"></Product>
      <Counter></Counter>
    </div>
  );
}
function Product(props)
{
  return (
    <div className='product-container'>
      <h3>Name : {props.name} </h3>
      <h5>Price :{props.price} </h5>
    </div>
  );
}
function Things(props)
{
  return (
    <div className='things-container'>
      <h2>Name :{props.name} </h2>
    <h4>Price :{props.price} </h4>
    <h4>Color :{props.color} </h4>
    </div>
  );
}

function Counter(){
  const [count, setCount] =  useState(0);
  // const increaseCount =()=>{
  //   const newCount = count +1;
  //   setCount(newCount);
  // }
  const increaseCount = ()=> setCount(count +1);
  const decraseCount = ()=> setCount(count-1);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decraseCount}>Decrase</button>
    </div>
  );
}

export default App;
