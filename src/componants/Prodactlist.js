import Prodact from "./Prodact";
import { useEffect, useState } from "react";


function Prodactlist(props) {
    const apiUrl ="https://fakestoreapi.com/products";
    const [prodacts, setProdacts] = useState([]);
    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => setProdacts(data));
    }, []);
    return (
        <>
            <h2 className="text-center p-3">Shop</h2>
            <div className="container">
                <div className="row">
                    {prodacts.map((prodact) => {
                        return (
                            <div className="col-3" key={prodact.id}>
                                <Prodact prodact={prodact} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Prodactlist;