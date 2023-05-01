import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/prodact.css";

function ProdactDetels() {
    const apiUrl = "https://fakestoreapi.com/products";
    const parametr = useParams();
    const [prodacts, setProdacts] = useState([]);
    useEffect(() => {
        fetch(`${apiUrl}/${parametr.prodactid}`)
            .then((res) => res.json())
            .then((prodacts) => setProdacts(prodacts))
            ;
    }, []);
    return (
        <>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <img src={prodacts.image} className="card-img-top h-400" alt="..." />
                    </div>
                    <div class="col navbar">
                        <div class="card">
                            <div class="card-body">
                                <h2 class="card-title">{prodacts.title}</h2>
                                <p class="card-text">{prodacts.description}</p>
                                <h4 class="card-text .text-danger">{prodacts.price}$</h4>
                                <a href="#" class="btn btn-primary">Add To Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProdactDetels;