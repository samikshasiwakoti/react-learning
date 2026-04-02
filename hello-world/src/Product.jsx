/*export const Product =(props)=>
{
    return(
        <>
        <h3>{props.title}  </h3>
        <p>Price: ${props.Price} </p>
        <p>In stock:{props.inStock? "Yes" : "No"}  </p>
        <p>Categoris: {props.categories.join(",")}  </p>
        
        
        </>

    );
}; */


export const Product =({title,price,inStock,categories})=>
{
    return(
        <>
        <h3>{title}  </h3>
        <p>Price: ${price} </p>
        <p>In stock:{inStock? "Yes" : "No"}  </p>
        <p>Categoris: { categories.join(",")}  </p>
        
        
        </>

    );
};