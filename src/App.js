import api from './api/axiosConfig';
import './App.css';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';

function App() {

  const [movies, setMovies] = useState(); // here we return a destructured array from the hook
  // first item in the destructured array is named movies and will store and array of movie data returned from a call to the relevant api endpoint
  // The second item in the array is a function that can be used to change/update the state of the movies variable
  // When the state of the variable tracked by react through the useState hook is changed, the component is rerendered by react
      // so in this case the app componet will be rerendered when the state of the movies variable changes.

  const getMovies = async () => {                    // here we have a function that handles HTTP requests to an endpoint that retien and array of movie data
                                                     // once the movie data is successfully returned, this code that changes the state of the movies array is executed.
    try {
      
      const response = await api.get("/api/v1/movies");

      console.log(response.data, 777);

      setMovies(response.data);


    } catch (error) {

      console.log(error);
      
    }

  }

  useEffect(() => {
    getMovies();
  }, [])



  return (
    <div className="App">


      <Header />

      {/* establishing route mappings */}
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home movies={movies} />} ></Route>

        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
