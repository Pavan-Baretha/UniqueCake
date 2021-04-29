import Navbar from "./02.js"
import Car from "./CartCon.js";
import Cakedata from "./cakesdata.js"
import NewCakeList, {cakes} from "./NewCakeList.js"
function Cart() {
    return (
      <div className="Cart">
        {Cakedata.map(function(x){
          return <Car Cakedata={x}></Car>
        })}
         <button type="button" class="btn btn-primary" style={{marginLeft:"1070px"}}>Checkout</button>
      </div>
      // <div className="Cart">
        
      //     {cakes.map(function(x){
      //       return <NewCakeList cakes={x}></NewCakeList>
      //     })}
        
      // </div>
    );
  }
  
  export default Cart;
  