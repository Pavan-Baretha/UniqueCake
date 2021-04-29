// var nameCake = "flavoured Cake";
// var img4 = "image3.jpg";
// var price = "3000";
// class Card extends
function Card(props) {
    // if(props.Cakedata.discount)
    //     return (
    //         <div class="col-3 p-2">
    //             <div class="card" style={{ width: "18rem", height: "" }}>
    //                 <img src={props.Cakedata.img} class="card-img-top" alt="..." style={{ height: "200px", width: "100%" }}></img>
    //                 <div class="card-body">
    //                     <h5 class="card-title">{props.Cakedata.price}</h5>
    //                     <h5 class="card-title">{props.Cakedata.flavoured}</h5>
    //                     <h5 class="card-title">Discount:{props.Cakedata.discount}</h5>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // else
    //     return(
    //         <div class="col-3 p-2">
    //             <div class="card" style={{ width: "18rem", height: "" }}>
    //                 <img src={props.Cakedata.img} class="card-img-top" alt="..." style={{ height: "200px", width: "100%" }}></img>
    //                 <div class="card-body">
    //                     <h5 class="card-title">{props.Cakedata.price}</h5>
    //                     <h5 class="card-title">{props.Cakedata.flavoured}</h5>
    //                 </div>
    //             </div>
    //         </div>
    if (props.cakes.discount)
        return (
            // <div class="row">
                <div class="col-3 p-2">
                    <div class="card" style={{ width: "18rem", height: "" }}>
                        <img src={props.cakes.image} class="card-img-top" alt="..." style={{ height: "200px", width: "100%" }}></img>
                        <div class="card-body">
                            <h5 class="card-title">{props.cakes.price}</h5>
                            <h5 class="card-title">{props.cakes.name}</h5>
                            <h5 class="card-title">Discount:{props.cakes.discount}</h5>
                        </div>
                    </div>
                </div>
            // </div>
        )
    else
        return (
            // <div class="row">
                <div class="col-3 p-2">
                    <div class="card" style={{ width: "18rem", height: "" }}>
                        <img src={props.cakes.image} class="card-img-top" alt="..." style={{ height: "200px", width: "100%" }}></img>
                        <div class="card-body">
                            <h5 class="card-title">{props.cakes.price}</h5>
                            <h5 class="card-title">{props.cakes.name}</h5>
                        </div>
                    </div>
                </div>
            // </div>
        )



}
export default Card;