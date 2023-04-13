import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


//
const initialState = {
  movies:[
    {
      name:'Alone',
      image:'http://pixner.net/boleto/demo/assets/images/movie/movie01.jpg'
    },
    {
      name:'Mars',
      image:"http://pixner.net/boleto/demo/assets/images/movie/movie02.jpg"
    },
    {
      name:'Venus',
      image:"http://pixner.net/boleto/demo/assets/images/movie/movie03.jpg"
    }
  ],
  cart:[]
}

let reducerFunction = (state = initialState, action) => {

}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
