import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom"

function LogOut() {
  localStorage.clear()
  window.location.href = "/";
}
function Navbar(props) {
  var text
  function getSearchText(event) {
    text = event.target.value
    console.log(text)
  }
  function searchCakes(e) {
    e.preventDefault()
    console.log(text)
    if (text && text.length) {
      //alert(text)
      var url = "/search?q=" + text
      props.history.push(url)
      //alert(url)
      // console.log("Helllon "+url)
      // console.log("hiiii"+props.history.push(url))
      // console.log("push")
    }
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link to="/"><a class="navbar-brand">UniqueCake</a></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/"><a class="nav-link active" aria-current="page">Home</a></Link>
            </li>
            <li class="nav-item">
              <Link to="/about"><a class="nav-link active" aria-current="page">About us</a></Link>
            </li>
            <li class="nav-item">
              <Link to="/orderlist"> <a class="nav-link">Order List</a></Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              </a>
              {/* <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></hr></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul> */}
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
            </li>
          </ul>
          <form class="d-flex">
            <input onChange={getSearchText} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <Link><button onClick={searchCakes} class="btn btn-outline-success" type="submit">Search</button></Link>
            {props.isloggedin && <Link to="/login"><button onClick={LogOut} class="btn bg-danger my-2 my-sm-0" type="submit">LogOut</button></Link>}
            {!props.isloggedin && <Link to="/login"><button class="btn dark bg-success my-2 my-sm-0" onClick={props.logOut} type="submit">LogIn</button></Link>}
          </form>
        </div>
      </div>
    </nav>
  )
}
var NavabarCom = withRouter(Navbar)
export default connect(function (state) {
  return {
    isloggedin: state["isloggedin"]
  }
})(NavabarCom)

