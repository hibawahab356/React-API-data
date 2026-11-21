import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"

import "../App.css"

const Products = () => {
const [products, setProducts] = useState([])
const [error, setError] = useState("")

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
})

   fetchProducts()
  


},[])
if (error) {
        return (
            <div>
                <h1>{error}</h1>
            </div>
        )
    }


  return (



    <div className="container">

        <h1 className="heading">Disney Characters</h1>

        <p className="subtitle">
            Explore Your Favourite Disney Characters
        </p>

        <div className="pokemon-container">

            {products.map((character) => (

                <div className="pokemon-card" key={character._id}>

                    <img
                        src={character.imageUrl}
                        alt={character.name}
                    />

                    <h2>{character.name}</h2>

                </div>

            ))}

        </div>

    </div>


    );
};






export default Products