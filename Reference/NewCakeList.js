import axios from "axios";
import { Component, useCallback } from "react";
import Card from "./CardItem.js";
class NewCakeList extends Component {
    constructor() {
        super()
        this.state = {
            cakes: []
        }
    }
    componentDidMount() {
        axios({
            method: "get",
            url: "https://apibyashu.herokuapp.com/api/allcakes"
        }).then((response) => {
            console.log(response)
            if (response.data) {
                this.setState({
                    cakes: response.data.data
                })            }
        }, (error) => {
            console.log(error)
        })
    }
    render() {
        return (
            <div className="row">
                {this.state.cakes.map(function(x){
          return <Card cakes={x}></Card>
        })}
            </div>
        )
    }
}
export default NewCakeList