import React, { Component } from 'react';

/*

Hay 2 formas de crear un componente de
    -Componente de clases
    -Componente de funcion
*/


//       ---- COMPONENTE DE CLASES ----


class Componente extends Component {
constructor(props){
    super(props);
    this.nombre=props.nombre;
    this.lista=props.lista;
    this.datos=props.datos;


}
    render() {
        return (
            <>
            <h1> Lista: </h1>
            <ol>
                {this.lista.map((lista, index) => 
                (
                
                <li key={index}>{lista}</li>))}
            </ol>
            <h1> Objeto: </h1>
            <p>Nombre: {this.datos.nombre}</p> 
            <p>Correo: {this.datos.correo}</p> 



            

</>

        );
    }
}
export default Componente;





//         ---- COMPONENTE DE FUNCIONES ----


/*      *** Forma1 ***
function Componente(){
    return (
        <h1> Mi primer componente</h1>
    );

}

export default Componente;
*/


//     *** Forma2 ***

/*
const Componente = (props) => (
<h1> 
{props.pintar ? "Verdadero voy a pintar mi componente " : "Falso no voy a pintar nada "}
Mi primer componente {props.nombre}--- {props.id} 


</h1>
);
export default Componente;
*/