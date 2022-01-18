import React, { useState } from 'react';
import "./ImagenesAleatorias.css";


const ImagenesAleatorias = (props)=>{


    const[enabled, setEnabled]= useState(true);
    let classNameImg= enabled?"":"disabled";
    let numero=props.numero;
    const src="https://randomuser.me/api/portraits/women/"+numero+".jpg";
    //let classNamePicture = props.size ==="small"?"is-small":"";
    


    let classNamePicture = "";
    if(props.size==="small"){
        classNamePicture= "is-small";
    }else if(props.size==="large"){
        classNamePicture= "is-large";
    }


    return (
    <picture className={classNamePicture}>
        <button >
        <img
        src={src}
        alt="moza1"
        className={classNameImg}
        onClick={()=> setEnabled(!enabled)}
        
        
        
        />
        </button>

        <h3>{props.nombre}</h3>
        
    </picture>

    );
};












export default ImagenesAleatorias;