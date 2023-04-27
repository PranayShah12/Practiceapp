import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { wrapperContext } from "./App";


export default function Cocktails() {
    const [Cocktaillist, setCocktaillist] = useState([]);
    const [searchvalue, setsearchvalue] = useState("")
    const navigate = useNavigate()
    // const [loading, setloading] = useState();
    const { searchFormValue } = useContext(wrapperContext)

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchFormValue}`)
            .then((resp) => resp.json())
            .then((data) => {
                setCocktaillist(data.drinks);
                // setloading(false);
            })
    }, [searchFormValue]);

    // console.log(Cocktaillist);

    return (
        <div className="container py-5">
            <h2>Cocktail List</h2>
            <hr />
            <input
                // value={searchvalue}
                placeholder="search your drinks....."
                className="form-control"
            // onChange={(e) => setsearchvalue(e.target.value)}
            />
            <hr />
            <div className="row">
                {Cocktaillist === null && <h1>Details Not Found.....</h1>}
                {Cocktaillist && Cocktaillist.map((item) => {
                    let {
                        idDrink,
                        strDrinkThumb,
                        strDrink,
                        strCategory,
                        strInstructions,
                    } = item;

                    return (
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <img src={strDrinkThumb} alt="" />
                                <div className="card-body">
                                    <h5>{strDrink}</h5>
                                    <span className="text-secondary">{strCategory}</span>
                                    <p className="text-truncate">{strInstructions}</p>
                                    <Link
                                        to={`/Cocktails/${idDrink}`}
                                        className="btn btn-secondary"
                                    >
                                        More Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
