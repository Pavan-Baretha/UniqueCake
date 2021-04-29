import { withRouter } from "react-router-dom"
function Cake(props) {
    var showCake = function () {
        var url = "/showcake/" + props.cakes.cakeid
        props.history.push(url)
    }
    return (

        <div class="col-3 p-2">
            <div class="card" onClick={showCake} style={{ width: "18rem" }}>
                <img  src={props.cakes.image} class="card-img-top" alt="..." style={{ height: "200px", width: "100%" }}></img>
                <div class="card-body">
                    <h5 class="card-title">{props.cakes.price}</h5>
                    <h5 class="card-title">{props.cakes.name}</h5>
                </div>
            </div>
        </div>

    )
}
export default withRouter(Cake)