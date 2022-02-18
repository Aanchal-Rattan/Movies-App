import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div style={{display:'flex', padding:'0.5'}}>
               <h1 style={{marginTop:'1rem',marginLeft:'1rem', color: ' #00e6e6'}}>Movies App</h1>
              <h2 style={{marginLeft:'2rem',marginTop:'2rem',color:'#ffffb3'}}>Favourites</h2>
            </div>
        )
    }
}
