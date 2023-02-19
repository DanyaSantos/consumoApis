import { useFetch } from "../hooks/useFetch"
import Loading from "./Loading"
import { useParams } from "react-router-dom"

export const UserDetail=()=>{
const {idUser} = useParams()
 const {data : user,loading}=  useFetch(`http://dummyjson.com/users/${idUser}`)
    return(
        <section className="container">
             {loading && <Loading  />}
             {!loading && (
                    
            <div className="row justify-content-center">
                <section className="col-sm-4" >
                    <article className="card">
                        <img className="card-img-top" src={user.image} alt={user.username} />
                        <div className="card-body">
                            <p>{user.username}</p>
                            <p>{user.firstName} {user.lastName}</p>
                       </div>
                    </article>
                </section>
            </div>
                )}
        </section>
    )

}