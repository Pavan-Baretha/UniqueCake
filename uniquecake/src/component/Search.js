import { useEffect, useState } from "react"
import queryparser from "query-string"
import axios from "axios"
import Searchcakeitem from "./Searchcakeitem"
import {Link} from "react-router-dom"

function Search(props) {
    console.log("propsssss", props)
    var query = queryparser.parse(props.location.search)
    console.log(query)
    var searchtext = query.q
    console.log("querryyyyyy", searchtext)
    var [cakesresult, setCakesresult] = useState([])
    useEffect(function () {
        console.log("Yeshmnmxz")
        var apiurl = "https://apibyashu.herokuapp.com/api/searchcakes?q=" + searchtext
        axios({
            method: "get",
            url: apiurl
        }).then((response) => {
            console.log(response.data)
            setCakesresult(response.data.data)
        }, (error) => {
            console.log(error)
        })
    }, [searchtext])
    return (
        <div>
            {!cakesresult.length > 0 && <div class="alert alert-warning"><h1>Oops! No Cakes found for your search</h1></div>}
            {cakesresult.length > 0 && <div><h3>Results found</h3>
                {cakesresult.map((each) => {
                    return <Searchcakeitem searchcakedata={each} />
                })}
            </div>}
            <Link to="/cartdata"> <button type="submit"  class="btn btn-primary">Add to Cart</button></Link>

        </div>
    )
}
export default Search