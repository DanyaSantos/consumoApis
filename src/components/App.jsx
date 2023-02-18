
import { useState, useEffect } from "react"
import User from "./User";

export default function App (){
    const [users, setUsers]= useState([]);
    const [loading, setLoading]= useState(true);
    useEffect(()=>{
        //promise
        window.fetch('https://dummyjson.com/users')
        .then(data=>data.json())
        .then(data=>setUsers(data.users))
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false));
//async / await
       /*  const getData= async()=>{
            try{
            const request = await window.fetch('https://dummyjson.com/users');
            const response= await request.json();
            setUsers(response.users);
            }catch(error){
                console.log(error);
            }finally{
                setLoading(false)
            }
        };
        getData() */
    },[]);
    
    return(
        <section className="container text-white py-4">
            <h1>App</h1>
            {loading && <p>...loading</p>}
             {!loading && (
                    <div className="row gy-4">
                    {users.length !==0 && 
                    users.map(user=>(
                        <div key={user.id} className="col-12 col-sm-6 col-md-3">
                            <User  {...user}/>
                        </div>

                    ))}
                    {users.length ===0 && <p>No hay usuarios</p>}
                    </div>
                )}
        </section>

    );
}