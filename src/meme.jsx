import React from "react";
import memesData from "./memesData";



export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url) 
    }   


    return (
        <main>
        <div action="" className="form">
            <input 
                type="text" 
                placeholder="top text"
                className="form--input"


            />
            <input 
                type="text" 
                placeholder="bottom text"
                className="form--input"

            />

            <button 
                className="form--button"
                onClick={getMemeImage}
                
                >make me a meme boi</button>
        
        </div>
        <img src={memeImage} alt="doodoo" className="meme--image"/>
        
        </main> 
    )
}