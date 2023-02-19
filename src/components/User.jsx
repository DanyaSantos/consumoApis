import { Link } from "react-router-dom";

export default function User({username,image,email,id}){
    return(
        <Link className="text-decoration-none" to={`/user/${id}`}>
            <div className="card text-dark">
                <img className="card-img-top" src={image} alt={username}/>
                <div className="card-body">
                <h2 className="card-title">{username}</h2>
                <p className="card-text">{email}</p>
                </div>
            </div>
        </Link>
    );
}