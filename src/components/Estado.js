import React, { Component } from 'react';
/**
 
    Un componente se repinta si se cambia el estado. 
    Luego en el estado se debe de almacenar lo que quiero cambiar dinamicamente.
    El estado en una clase se hace con this.state y es un objeto inmutable.
    Solo se puede modificar con un metodo especial llamado setState;


 * */
export default class Estado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        }
    }
    render() {
        return (
            <>
            <h1>Componente Estado</h1>
            <h2>{this.setState({contador: this.state.contador+1})}</h2>
            </>
        )
    }


}




//  quiero que el contador cada segundo aumente 1 setInterval; y el setState;