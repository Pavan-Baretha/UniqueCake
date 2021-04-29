import { BrowserRouter, Route, Link } from "react-router-dom"
function LogOut() {
    localStorage.clear()
    window.location.href = "/";
}
function Navbar(props) {
    return (
        <div className="App">
             <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/"><a class="navbar-brand" href="">My Cake Shop</a></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="form-group">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to="/"><a class="nav-link">Home <span class="sr-only"></span></a></Link>
                        </li>
                    </ul>
                    </div>

                    <div className="form-group my-2 my-lg-0 ">
                        <input class="form-control mr-sm-auto " type="search" placeholder="Search" aria-label="Search"></input>
                        <Link to="/searchapp"> <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>
                    </div>
                    <div className="form-group">
                        {props.isloggedin && <Link to="/login"><button onClick={LogOut} class="btn bg-danger my-2 my-sm-0" type="submit">LogOut</button></Link>}
                        {!props.isloggedin && <Link to="/login"><button class="btn bg-success my-2 my-sm-0"  onClick={props.logOut} type="submit">Log In</button></Link>}
                     </div>
                </div>
               
            </nav>
        </div>
    )
}
export default Navbar;