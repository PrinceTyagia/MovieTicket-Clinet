import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import {URL} from '../utils/Url'
export const MovieContext  = createContext(null)

const ContextProvider = ({children}) => {
    const [movieData,setMovieData] = useState([])
    useEffect(() => {
        axios.get(`${URL}/api/movies?populate=*`)
      .then((response) => {
        //   console.log(response.data.data);
          setMovieData(response.data.data)
      }).catch((err) => {
          console.log(err);
      }).finally(() => {
            // console.log('success');
      })
  },[])
  return (
    <MovieContext.Provider value={{movieData,setMovieData}}>
        {children}
    </MovieContext.Provider>
    
  )
}

export default ContextProvider