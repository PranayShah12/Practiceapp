import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
export default function Cocktaildetails() {
    const params = useParams();

    const [Cocktaillist, setCocktaillist] = useState({});
    const [loading, setloading] = useState(true);

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setCocktaillist(data.drinks[0]);
                setloading(false);
            })
        // .catch((e) => console.log("e", e));
    }, [])
    if (loading) {
        return (
            <div className="d-flex w-100 py-5 justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <Link className="btn btn-secondary" to="/Cocktails">
                <IoArrowBackSharp />
            </Link>
            <div className="row py-5">
                <div className="col-md-4">
                    <img src={Cocktaillist.strDrinkThumb} width="100%" alt="" />
                </div>
                <div className="col-md-8">
                    <h2>Drink name: {Cocktaillist.strDrink}</h2>
                    <p> Category : {Cocktaillist.strCategory} </p>
                    <p> Details: {Cocktaillist.strInstructions} </p>
                </div>
            </div>
        </div>
    )
}