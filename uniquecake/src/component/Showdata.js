import { toast } from "react-toastify"

function Showdata(props) {
    return (

        // <div class="container">
        //     <h1>{props.myorders.orderid}</h1>
        //     <h1>{props.myorders.price}</h1>
        //     <h1>{props.myorders.orderdate}</h1>
        //     {props.myorders.cakes.map((each) => {
        //         return (
        //             <div>
        //                 <p>{each.name}</p>
        //                 <img src={each.image} style={{height:"200px",width:"200px"}} ></img>
        //             </div>
        //         )

        //     })}
        // </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#order" + props.myorders.orderid} aria-expanded="true" aria-controls={"order" + props.myorders.orderid}>
                    <strong>Order id #{props.myorders.orderid}</strong><strong style={{ marginLeft: "30px" }}>Purchased on: {props.myorders.orderdate}</strong><strong style={{ marginLeft: "30px" }}>Price: {props.myorders.price}</strong>
                </button>
            </h2>
            <div id={"order" + props.myorders.orderid} class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    {props.myorders.cakes.map(function (each) {
                        return (
                            <div>  <p>{each.name}</p>
                                <img src={each.image} style={{ height: "200px", width: "200px" }} ></img>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    )
}
export default Showdata