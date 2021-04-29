// import cakeprops from "./SearchData.js";

function ShowData(props) {
    return (
        <div class="container">
            <div class="row">
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                    <img src={props.NewData.img} style={{height:"100px",width:"100px"}} class="img-responsive" alt="Image"></img>

                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <ul>
                        <li>{props.NewData.flavoured}</li>
                        <li>{props.NewData.price}</li>
                        <li>{props.NewData.discount}</li>
                        <li>{props.NewData.desciption}</li>
                        <li>{props.NewData.rating}</li>
                    </ul>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                </div>

            </div>
        </div>
    )
}
export default ShowData