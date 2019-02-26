
import React from "react";

const Images = props => {
    return (
        <div className = "image-container">
        {props.images.map((image, index) => 
           <img key = {index} className = "image" src = {image} alt = ''/>
        )}
        </div>
    );
}

export default Images;
  