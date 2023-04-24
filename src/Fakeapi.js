import { useState,useEffect  } from "react";
function Fakeapi(){
    const[data, setData]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
    
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        setData(data)
    })
},[])

return ( 
<div className=" row  m-0 p-0" >
    {/* <h1>Products</h1> */}
    {data.map((item)=>{
return (
<div className="card col-lg-4" style={{ width:"25%"}} >
  <img src={item.image} className="m-auto card-img-top"  style={{width: "100px",height: "100px",}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <h4>price - ${item.price}</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="index.htm" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
)
})};
</div>
);
}
export default Fakeapi;