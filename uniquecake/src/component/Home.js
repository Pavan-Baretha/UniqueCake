import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import CakeList from "./CakeList.js"
import Caros from "./Carousel.js"
function Home() {
       return (
              <div>
                     <Caros></Caros>
                     <CakeList></CakeList>
              </div>
       )
}
export default Home