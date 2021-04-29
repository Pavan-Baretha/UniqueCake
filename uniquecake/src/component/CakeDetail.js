import {useParams,withRouter} from "react-router-dom"
function CakeDetail(props){
    var {cakeid} = useParams()
    console.log(cakeid)
    return(
        <div>
            Here we display Cakes and others property
            <b>{cakeid}</b>
        </div>
    )
}
export default withRouter(CakeDetail)