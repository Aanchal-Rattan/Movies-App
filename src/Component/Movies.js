import React, { Component } from 'react'
import { movies } from './getMovies'

export default class Movies extends Component {
    constructor(){
        super();
        this.state={
            hover:''
        }
    }
    render() {
        let movie = movies.results
        return (
            <>
                {
                    movie.length == 0 ?
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div> :
                        <div>
                            <h3 className="text-center"><strong>Trending</strong></h3>
                            <div className='movies-list'>
                                {
                                    movie.map((movieObj) => (
                                        <div className="card movies-card" onMouseEnter={()=>this.setState({hover:movieObj.id})} >
                                            <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}  alt={movie.title} className="card-img-top movies-img" />
                                            {/* <div className="card-body"> */}
                                            <h1 className="card-title movies-title">{movieObj.original_title}</h1>
                                            {/* <p className="card-text movies-text">{movieObj.overview}</p> */}
                                            <div className='button-wrapper ' style={{display:'flex' , width:'100', justifyContent:'center '}}>
                                            {
                                                this.state.hover == movieObj.id &&
                                                <a className="btn btn-primary movies-button" style={{border:'none'}} onClick={()=>this.handleFavourites(movieObj)}>{this.state.favourites.includes(movieObj.id)?"Remove from favourites":"Add to favourites"}</a>
                                            }
                                                <a class="btn btn-primary movies-button ">Add To Favourites</a>

                                            </div>
                                            {/* </div> */}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                }
            </>
        )
    }
}
