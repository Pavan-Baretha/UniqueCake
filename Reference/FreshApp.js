import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"

// import Log from "./component/StatefullLogin.js"
import Login1 from "../component/Login1.js"
import SignUp from "../component/SignUp.js"
import AddCake from '../component/AddCake';
import NewSignUp from '../component/NewSignUp';
// import SignUp from '../component/SignUp';
import SearchApp from '../component/SearchApp';
import Home from '../component/Home'
import Navbar from "../component/01.js"
import Forgot from "../component/Forgot.js"
import Addcake from "../component/Reference.js"
import VeryNewSignUp from "../component/VeryNewSignUp.js"
import NewCakeList from "../component/NewCakeList.js"
import { Component } from "react";

// function FreshApp() {
//     var loginDone = () => {
//         alert("login Successful");
//     }
class FreshApp extends Component {
    constructor(){
    super() 
        this.state = {
            isloggedin: false,
        }
    }
    loginDone = () => {
        alert("Login Ho gaya")
        this.setState({
            isloggedin: true
        })
    }
    logOut = () => {
        this.setState({
            isloggedin: false
        })
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar isloggedin={this.state.isloggedin} isloggedout={this.logOut}></Navbar>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/login"><Login1 inform_login={this.loginDone}></Login1></Route>
                        <Route exact path="/signup" component={SignUp}></Route>
                        <Route exact path="/AddCake" component={AddCake}></Route>
                        {/* <Route exact path="/newsignup" component={NewSignUp}></Route> */}
                        <Route exact path="/signUp" component={SignUp}></Route>
                        <Route exact path="/searchapp" component={SearchApp}></Route>
                        <Route exact path="/forgot" component={Forgot}></Route>
                        <Route exact path="/newaddcake" component={Addcake}></Route>
                        <Route exact path="/newsignup" component={VeryNewSignUp}></Route>
                        <Route exact path="/newcakelist" component={NewCakeList}></Route>
                        <Route exact path="/*">
                            <Redirect to="/" component={Home}></Redirect>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}


export default FreshApp