import { useState, useEffect } from "react"

function Docs() {
  //reglas de los hooks
  /*
  1. deben estra dentro del componente
  2.no deben de estar dentro de un scope
  
  */
 const [number, setNumber] = useState(0)
 const [isView, setIsView] = useState(false)
 /*ciclo de vida
 montaje- ejecuta jsx, luego ejecuta codigo
 actualizacion- vuelve a montar el componente
 desmontaje- desmonte o ejecuta un codigo */
 const sumar=()=>{
  setNumber(9000+1)
 }
 //1.esto se ejecuta en cada cambio de estado
 /*useEffect(()=>{
  sumar()
  console.log("useEffect");
 })*/

 //2.se ejecuta sola la primera vez que carga el componente
 /*useEffect(()=>{
  sumar()
  console.log("useEffect")
 },[])*/

//3.cada que cambia el estado de las dependencias
/*  useEffect(()=>{
  sumar()
  console.log("useEffect")
 },[isView]) */

 //4.cuando se desmonta el componente
 useEffect(()=>{
  return()=>{
    console.log("desmontar");
  }
 },[])
  return (
    <div className="app text-white">
    <h1 className='text-danger'>Consumo de apis</h1>
    <h2>{number}</h2>
    <button 
      className='btn btn-primary'
      onClick={()=>setNumber(number+1)} 
      >Sumar
    </button>
    <button 
      className='btn btn-info'
      onClick={()=>setIsView(!isView)} 
      >Visible
    </button>
    {isView && <p>Visible</p>}
    </div>
  );
}

export default Docs
