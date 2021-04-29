import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import Home from "./component/Home.js"
import CakeDetail from "./component/CakeDetail.js"
import Cakedetails from "./component/CakeDetails"
import Navbar from "./component/Navbar"
import Login from "./component/Login"
import { Component } from 'react';
import SignUp from "./component/SignUp"
import Search from "./component/Search"
import Cart from "./component/Cart"
import CartData from "./component/CartData"
import Order from "./component/Orderform"
import Forgot from './component/Forgot';
import { toast, ToastContainer } from 'react-toastify';
import Checkout from './component/Checkout';
import OrderForm from './component/Orderform'
import Orderlist from './component/OrderList'
import Myorders from "./component/Myorders.js"
import About from "./component/About.js"
class App extends Component {
  constructor() {
    super()
    this.state = {
      isloggedin: false
    }
  }
  loginDone = () => {
    alert("Login Successful");
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
        <ToastContainer/>
          {/* <Navbar isloggedin={this.state.isloggedin} isloggedout={this.logOut}></Navbar> */}
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            {/* <Route exact path="/showCake/:cakeid" component={CakeDetail}></Route> */}
            <Route exact path="/showCake/:cakeid" component={Cakedetails}></Route>
            <Route exact path="/login"><Login inform_login={this.loginDone}></Login></Route>
            <Route exact path="/signup" component={SignUp}></Route>
            <Route exact path="/search" component={Search}></Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route exact path="/cartdata" component={Cart}></Route>
            <Route exact path="/order" component={Order}></Route>
            <Route exact path="/forgot" component={Forgot}></Route>
            <Route exact path="/checkout" component={Checkout}></Route>
            <Route exact path="/order" component={OrderForm}></Route>
            <Route exact path="/orderlist" component={Myorders} />
            <Route exact path="/about" component={About}/>
            <Route exact path="/*">
                            <Redirect to="/" component={Home}></Redirect>
                        </Route>
          </Switch>
        </BrowserRouter>

      </div>
    )
  }
}

export default App;
