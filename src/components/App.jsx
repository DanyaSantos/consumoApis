import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";
import User from "./User";

export default function App (){
   const {
    data:{users}, 
    loading,
}=useFetch('https://dummyjson.com/users')
    return(
        <section className="container text-white py-4">
            <h1>App</h1>
            {loading && <Loading />}
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