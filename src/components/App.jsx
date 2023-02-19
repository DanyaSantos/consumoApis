import { useFetch } from "../hooks/useFetch";
import User from "./User";
import Loading from "./Loading";
import { useRef } from "react";

export default function App (){
   const inputRef = useRef()
   const {
    data: {users}, 
    loading,
    setData
}=useFetch('https://dummyjson.com/users')

const handleSubmit=(event)=>{
    event.preventDefault()
    const query = inputRef.current.value;
    fetch(`https://dummyjson.com/users/search?q=${query}`)
    .then((res)=>res.json())
    .then(setData)
}

    return(
          <section className="container text-white py-4">
            <h1>Lista de usuarios</h1>
            {loading && <Loading  />}
             {!loading && (
                <>
                    <form className="py-4" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input ref={inputRef} type="search" className="form-control" />
                            <button className="btn btn-success">Buscar</button>
                        </div>
                    </form>
                    <div className="row gy-4">
                    {users.length !==0 && 
                    users.map(user=>(
                        <div key={user.id} className="col-12 col-sm-6 col-md-3">
                            <User  {...user}/>
                        </div>
                    ))}
                    {users.length ===0 && <p>No hay usuarios</p>}
                    </div>
                </>
                )}
         </section>
    );
}