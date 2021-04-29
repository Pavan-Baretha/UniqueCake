import { Component, useState } from "react";
import axios from "axios";
import Cake from "./Cake.js"
import data from "./data.js";
// class CakeList extends Component {
//     constructor() {
//         super()
//         this.state = {
//             cakes: []
//         }
//     }
//     componentDidMount() {
//         axios({
//             method: "get",
//             url: "https://apibyashu.herokuapp.com/api/allcakes"
//         }).then((response) => {
//             console.log(response)
//             if (response.data) {
//                 this.setState = {
//                     cakes: response.data.data
//                 }
//             }
//         }, (error) => {
//             console.log(error)
//         })
//     }
//     render() {
//         return (
//             <div>
//             {this.state.cakes.map(function(x){})}
//             </div>
//         )
//     }
// }

function CakeList() {
    var [allcakes, setCakes] = useState(data.cakes)
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" ,  allcakes , data)

    // var datafetched = false
    if (!allcakes.length > 0) {
        axios({
            method: 'get',
            url: "https://apibyashu.herokuapp.com/api/allcakes"
        }).then((response) => {
            data.cakes = response.data.data

            setCakes(response.data.data)

            console.log(data.cakes)
            //   datafetched = true
        }, ((error) => {
            console.log(error)
        }))
    }
    return (
        <div className="row">

            {allcakes && allcakes.length > 0 && allcakes.map((each) => {
                if (each.name !== "Vidit Sethi") {
                    return <Cake cakes={each}></Cake>
                }
            })}
        </div>
    )
}
export default CakeList