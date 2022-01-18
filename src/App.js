import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Estado from './components/Estado';



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
      <Componente 
     
      lista={lista}
      datos={datos}
       />


       
       <Estado />
    </div>
    
    </>

  );
}

export default App;
