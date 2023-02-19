import { useFetch } from "../hooks/useFetch"

export const UserDetail=()=>{
 const {data : user,loading}=  useFetch('http://dummyjson.com/users/1')
    return(
        <section className="container text-white">
            <div className="row">
                <section className="col-md-6" >
                    <p>Username</p>
                    <img src="" alt="Photo" />
                </section>
                <section className="col-md-6">
                    <p>firstName lastName</p>
                </section>
            </div>
        </section>
    )

}