import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Estado from './components/Estado';
import TarjetaFruta from './components/TarjetaFruta';
import ImagenesAleatorias from './components/ImagenesAleatorias';



const nombre="Javi";
const id=23;
const lista=["enero","febrero","marzo","abril"];

const datos={
  nombre:"Javi",
  correo:"javii.lopez@gmail.com",
};
function App() {
  return (

    <> 
    <div className="App App-header">
      {/* <Componente 
     
      lista={lista}
      datos={datos}
       /> */}


       
       {/* <Estado /> */}




       {/* <TarjetaFruta nombreFruta="Fresa" precio="2.45" />
       <TarjetaFruta nombreFruta="Manzana" precio="1.25" />
       <TarjetaFruta nombreFruta="Platano" precio="2.50" /> */}



       <ImagenesAleatorias nombre="Sofia" size="small" numero="22"/>
       <ImagenesAleatorias nombre="Sofia" size="" numero="24"/>
       <ImagenesAleatorias nombre="Sofia" size="large"numero="23"/>
    </div>
    
    </>

  );
}

export default App;
