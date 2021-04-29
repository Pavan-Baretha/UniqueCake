import Navbar from "../component/02.js"
import Carous from "../component/03.js"
import Cart from "../component/Cart.js"
import SearchApp from "../component/Cart.js"
import axios from 'axios';
import NewCakeList from "./NewCakeList.js";

function Home(){
     return(
         <div>
        <Carous></Carous>
        <NewCakeList></NewCakeList>
        </div>
     )
}
export default Home;