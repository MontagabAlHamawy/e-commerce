

import { Link } from "react-router-dom";
import "../css/prodact.css"
function Prodact(props) {
    const {prodact}=props;
    return (
        <>
            <div className="card ">
                <img src={prodact.image} className="card-img-top h-270 min-hi" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{prodact.title}</h5>
                    {/* <p className="card-text">{prodact.description}</p> */}
                    <Link to={`../proactdactlist/${prodact.id}`} className="btn btn-primary">Detalse</Link>
                </div>
            </div>
        </>
    )
}

export default Prodact;