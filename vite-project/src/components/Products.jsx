import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"

import "../App.css"

const Products = () => {
const [products, setProducts] = useState([])
const [error, setError] = useState("")
const [loading, setLoading] = useState(true)

useEffect(()=>{

const fetchProducts = (async()=>{
try{
    const reponse = await axios.get("https://api.disneyapi.dev/character")
                setProducts(reponse.data.data);
}
    catch (error) {
                console.log(error)
                setError("Failed to fetch data ")
            }     
            
            
             finally {
                setLoading(false)
            }
})

   fetchProducts()
  


},[])
 if (loading) {
        return <h2 className="loading">Loading Characters...</h2>
    }
if (error) {
        return (
            <div>
                <h1>{error}</h1>
            </div>
        )
    }


  return (


<div className="main-wrapper">

            <div className="hero-section">

                <span className="top-label">THE MAGICAL COLLECTION</span>

                <h1 className="heading">
                    Disney <span>Universe</span>
                </h1>

                <p className="subtitle">
                    Discover the magical world of your favourite
                    Disney characters.
                </p>

                <div className="hero-line"></div>

            </div>

            <div className="container">

                <div className="section-heading">
                    <div>
                        <span className="small-heading">EXPLORE THE MAGIC</span>
                        <h2>Favourite Characters</h2>
                    </div>

                    <p>Magical stories, unforgettable characters.</p>
                </div>

                <div className="pokemon-container">

                    {products.map((character) => (

                        <div className="pokemon-card" key={character._id}>

                            <div className="image-box">

                                <img
                                    src={character.imageUrl}
                                    alt={character.name}
                                    loading="lazy"
                                />

                            </div>

                            <div className="card-content">

                                <span className="character-label">
                                    DISNEY CHARACTER
                                </span>

                                <h3>{character.name}</h3>

                                <div className="card-bottom">
                                    <span>Discover the magic</span>
                                    <span className="arrow">↗</span>
                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            <footer className="footer">
                <h2>Where Every Story Begins With Magic.</h2>
                <p>Explore • Imagine • Believe</p>
            </footer>

        </div>


    );
};






export default Products