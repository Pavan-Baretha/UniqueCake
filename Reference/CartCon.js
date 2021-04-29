var img1 = "image3.jpg";
function Car(props) {
    return (
        <div className="Container">
            <div className="row">

                <div class="col-xs-3 col-sm-3 col-md- col-lg-3">

                    <div class="card" style={{ width: "6rem", height: "" }}>
                        <img src={props.Cakedata.img} class="card-img-top" alt="..." style={{ height: "6rem", width: "6rem" }}></img>
                        <hr></hr>
                    </div>

                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div>
                        <h5>Name</h5>
                        <h4>{props.Cakedata.flavoured}</h4>
                    </div>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div>
                        <h5>Price</h5>
                        <h4>{props.Cakedata.price}</h4>
                    </div>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div>

                        <button type="button" class="btn btn-danger">Remove</button>

                    </div>
                </div>
            </div>
            <div>

            </div>

        </div>
        // <div className="Container">
        //     <div className="row">

        //         <div class="col-xs-3 col-sm-3 col-md- col-lg-3">

        //             <div class="card" style={{ width: "6rem", height: "" }}>
        //                 <img src={props.cakes.image} class="card-img-top" alt="..." style={{ height: "6rem", width: "6rem" }}></img>
        //                 <hr></hr>
        //             </div>

        //         </div>

        //         <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        //             <div>
        //                 <h5>Name</h5>
        //                 <h4>{props.cakes.flavoured}</h4>
        //             </div>
        //         </div>

        //         <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        //             <div>
        //                 <h5>Price</h5>
        //                 <h4>{props.cakes.price}</h4>
        //             </div>
        //         </div>
        //         <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        //             <div>

        //                 {/* <button type="button" class="btn btn-danger">Remove</button> */}

        //             </div>
        //         </div>
        //     </div>
        //     <div>

        //     </div>

        // </div>
    )
}
export default Car