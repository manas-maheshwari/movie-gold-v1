import React from 'react'
import './Hero.css'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'


const Hero = ({movies}) => {
  return (
    <div className='movie-carousel-container'>
        <Carousel>
            {movies?.map((movie)=> {
                return (
                    <Paper>
                        <div className='movie-card-container'>
                            <div className='movie-card' style={{"--img": `url(${movie.backdrops[0]})`}}> {/*  here we are naming the custom css variable 'img'
                                                                                                    We are setting the CSS URL value to the CSS background-image CSS property from the backdrops property of each movie in the movies array returned from the server
                                                                                                    Note: backdrops property returned from the server is an array containing paths to the movie backdrop images
                                                                                                    In this code am choosing to reference the first backdrop image path in the backdrops array returned from the server. 
                                                                                                    Each backdrop points to an image that we want displayed as a background image appropriately for each movie item in the carousel. 
                                                                                                    */}
                                <div className='movie-detail'>
                                    <div className='movie-poster'>
                                        <img src={movie.poster} alt="" />
                                    </div>
                                    <div className='movie-title'>
                                        <h4>
                                            {movie.title}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                )

            })}
        </Carousel>
    </div>
  )
}

export default Hero