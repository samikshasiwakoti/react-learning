
/*function Welcome ()
{
  return <h2>Welcome back</h2>;


}*/ // we can rewrite same function in arrow function
/*export default Welcome;*/


 /*export const Welcome =(props)=>
{

  console.log(props);
    return <h2>Welcome ,{props.name} a.k.a {props.alias}</h2>;

}*/

export const Welcome =({name,alias})=>
{


    return <h2>Welcome ,{name} a.k.a {alias}</h2>;

}
