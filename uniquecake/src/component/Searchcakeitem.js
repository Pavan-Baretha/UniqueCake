import {withRouter} from "react-router-dom"
function Searchcakeitem(props) {
    var getCake =() =>{
        console.log("Cake is clicked")
        var url = "/showcake/"+props.searchcakedata.cakeid
        props.history.push(url)
    }
    return (
        <div class="container">
            <div class="row" onClick={getCake}>
                <div  class="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                    <img src={props.searchcakedata.image} style={{height:"200px",width:"200px"}} class="img-responsive" alt="Image"></img>
                       <br></br><br></br><br></br><br></br>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <ul>
                        <li>{props.searchcakedata.cakeid}</li>
                        <li>{props.searchcakedata.name}</li>
                        <li>{props.searchcakedata.price}</li>
                        {/* <li>{props.searchcakedata.desciption}</li>
                        <li>{props.searchcakedata.rating}</li> */}
                    </ul>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                </div>

            </div>
        </div>
    )
}
export default withRouter(Searchcakeitem)