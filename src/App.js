import React, { useState, useEffect } from 'react';
import './App.css';

function App(){
  const [clothing, setClothing] = useState([])
  useEffect(()=>{
 store()
  })
  const store = async () => {
    const products = await fetch('https://fakestoreapi.com/products')
    const response = await products.json()
   // console.log(response)
    setClothing(response)
  }
return (
  <>
  <h1>Api store</h1>
  <div className='container'>
    {
      clothing.map((values)=>{
        return(
          <>
     <div className='content'>
          <div className='content-container'>
       <h2>{values.title}</h2>
        <img src={values.image} alt='image' />
          <p className='description'>{values.description}</p>
          <p className='category'>{values.category}</p>
          <p className='price'>{values.price}</p>
      </div>
    </div>
          </>
        );
      })
    }
  
  </div>
  </>
);
}

export default App