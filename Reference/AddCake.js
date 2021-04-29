// // import { Component } from "react"
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import axios from 'axios';

// // toast.configure()
// // // function validatePassword(str) {
// // //     var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// // //     return re.test(str);
// // // }
// // // function validateEmail(email) {
// // //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// // //     return re.test(String(email).toLowerCase());
// // // }
// // var addcakes = {}
// // // function getname(event) {
// // //     addcakes.name = event.target.value;
// // // }
// // // function getflavour(event) {
// // //     addcakes.flavour = event.target.value;
// // // }
// // // function getprice(event) {
// // //     addcakes.price = event.target.value;
// // // }
// // // function getweight(event) {
// // //     addcakes.weight = event.target.value;
// // // }
// // // function gettype(event) {
// // //     addcakes.type = event.target.value;
// // // }
// // // function getdiscription(event) {
// // //     addcakes.discription = event.target.value;
// // // }
// // // function getfile(event) {
// // //     addcakes.file = event.target.file[0];
// // // }

// // // function search(event) {
// // //     event.preventDefault();
// // //     console.log(addcakes);
// // // }

// // class AddCake extends Component {
// //     constructor() {
// //         super()
// //         this.state = {
// //             errors: null,
// //             addcakes: null,
// //             selectedFile: null
// //         }
// //     }
// //     getname = (event) => {
// //         var name = event.target.value
// //         // console.log("emeial is getting etntered", email)
// //         addcakes.cakename = event.target.value;
// //         if (!name) {
// //             event.target.style.border = "red"
// //             this.setState({
// //                 errors: {
// //                     nameError: "name is required"
// //                 }
// //             })
// //             toast.error("name is required")
// //         }
// //         else {
// //             this.setState({
// //                 errors: null
// //             })
// //             toast.success("well done")
// //         }
// //     }
// //     getprice = (event) => {
// //         var price = event.target.value
// //         addcakes.cakeprice = event.target.value;
// //         if (!price) {
// //             event.target.style.border = "red"
// //             this.setState({
// //                 errors: {
// //                     namePrice: "Price is required"
// //                 }
// //             })
// //             toast.error("name is required")
// //         }
// //         else {
// //             this.setState({
// //                 errors: null
// //             })
// //             toast.success("")
// //         }
// //     }
// //     getflavour = (event) => {
// //         var flavour = event.target.value
// //         addcakes.cakeflavour = event.target.value;
// //         if (!flavour) {
// //             event.target.style.border = "red"
// //             this.setState({
// //                 errors: {
// //                     flavoured: "Please fill this field"
// //                 }
// //             })
// //             toast.error(" required")
// //         }
// //         else {
// //             this.setState({
// //                 errors: null
// //             })
// //         }
// //         toast.error("required")
// //     }
// //     getweight = (event) => {
// //         var weight = event.target.value
// //         addcakes.cakeweight = event.target.value;
// //         if (!weight) {
// //             event.target.style.border = "red"
// //             this.setState({
// //                 errors: {
// //                     weight: "Please fill this field"
// //                 }
// //             })
// //             toast.error("required")
// //         }
// //         else {
// //             this.setState({
// //                 errors: null
// //             })
// //             toast.success("name is required")
// //         }
// //     }
// //     getdiscription = (event) => {
// //         var discription = event.target.value
// //         addcakes.cakediscription = event.target.value;
// //         if (!discription) {
// //             event.target.style.border = "red"
// //             this.setState({
// //                 errors: {
// //                     discription: "Please fill this field"
// //                 }
// //             })
// //             toast.error("required")
// //         }
// //         else {
// //             this.setState({
// //                 errors: null
// //             })
// //             toast.success("name is required")
// //         }
// //     }
// //     gettype = (event) => {
// //         var quantity = event.target.value
// //         addcakes.caketype = event.target.value;
// //         if (!quantity) {
// //             event.target.style.border = "red"
// //             this.setState({
// //                 errors: {
// //                     nameQuantity: "Price is required"
// //                 }
// //             })
// //             toast.error("name is required")
// //         }
// //         else {
// //             this.setState({
// //                 errors: null
// //             })
// //             toast.success("")
// //         }
// //     }
// //     getfile = (event) => {
// //         var file = event.target.value
// //         addcakes.cakefile = event.target.value;
// //         if (!file) {
// //             event.target.style.border = "red"
// //             var formData = new FormData()
// //             formData.append('file', event.target.value[0])
// //             axios({
// //                 url: 'https://apibyashu.herokuapp.com/api/upload',
// //                 method: 'post',
// //                 data: formData,
// //                 headers: {
// //                     authtoken: localStorage.token
// //                 }
// //             }).then((response) => {
// //                 this.setState({
// //                     selectedFile: response.data.imageUrl
// //                 }, () => console.log("selectedFIle", this.state.selectedFile))
// //                 console.log(response.data.message)
// //             }, (error) => {
// //                 console.log(error);

// //             })
// //             this.setState({
// //                 errors: {
// //                     fileerr: "img is required"
// //                 }
// //             })
// //             toast.error("required")
// //         }
// //         else {
// //             this.setState({
// //                 errors: null
// //             })
// //             toast.success()
// //         }

// //     }
// //     checkAll = (event) => {
// //         event.preventDefault()
// //         this.setState({
// //             errors: null
// //         })
// //         var form = document.getElementById('loginform')
// //         console.log(form)
// //         var nameval = form["elements"]["nameField"].value
// //         console.log(nameval);
// //         var priceval = form["elements"]["priceField"].value;
// //         console.log(priceval);
// //         var typeval = form["elements"]["typeField"].value;
// //         console.log(typeval);
// //         var flavval = form["elements"]["flavourField"].value;
// //         console.log(flavval);
// //         var weightVal = form["elements"]["weightField"].value;
// //         console.log(weightVal);
// //         var descval = form["elements"]["discriptionField"].value;
// //         console.log(descval);
// //         var imgval = form["elements"]["fileField"].value
// //         console.log(imgval);
// //         console.log(nameval);
// //         //&& (!document.getElementById("fileField").value)

// //         if ((!nameval) && (!priceval) && (!typeval) && (!flavval) && (!weightVal) && (!descval) && (!imgval)) {
// //             this.setState({
// //                 errors: {
// //                     all: "Please enter the required field"
// //                 },
// //             })
// //             toast.error("all required")
// //         } else {
// //             this.setState({
// //                 errors: null,
// //                 addcakes: addcakes
// //             }, () => console.log(this.state.addcakes))
// //             toast.success("all Good")
// //         }
// //     }
// //     render() {
// //         return (
// //             <div className="container p-3" style={{ margin: "auto", width: "40%", borderRadius: '10px', backgroundColor: "rgba(60,80,220,0.1)", boxShadow: "1px 1px 10px gray" }}>
// //                 <div className="row justify-content-center">
// //                     <div className="col-sm-7">

// //                         <form id="loginform" >
// //                             <h2>Cake Information Here</h2><br></br>

// //                             <div class="form-group">
// //                                 <input name="nameField" type="text" onChange={this.getname} class="form-control" id="nameField" placeholder="Enter Cakename" /><br></br>
// //                                 <label style={{ color: "red" }} class="form-text">{this.state.errors && this.state.errors.nameError}</label>
// //                             </div>
// //                             <div class="form-group">
// //                                 <input name="priceField" type="text" onChange={this.getprice} class="form-control" id="priceField" placeholder="Enter Price" /><br></br>
// //                                 <label style={{ color: "red" }} class="form-text">{this.state.errors && this.state.errors.namePrice}</label>
// //                             </div>
// //                             <div class="form-group">
// //                                 <select class="form-select" aria-label="Default select example">
// //                                     <option selected>select type</option>
// //                                     <option value="Birthday Cake">Birthday Cake</option>
// //                                     <option value="Anniversary Cake">Anniversary Cake</option>
// //                                     <option value="Photo Cake">Photo Cake</option>
// //                                 </select>
// //                             </div>
// //                             <div class="form-group">
// //                                 <input name="flavourField" type="text" onChange={this.getflavour} class="form-control" id="flavourField" placeholder="Enter Flavour" /><br></br>
// //                                 <label style={{ color: "red" }} class="form-text">{this.state.errors && this.state.errors.flavoured}</label>
// //                             </div>
// //                             <div class="form-group">
// //                                 <input name="weightField" type="text" onChange={this.getweight} class="form-control" id="weightField" placeholder="Enter Weight" /><br></br>
// //                                 <label style={{ color: "red" }} class="form-text">{this.state.errors && this.state.errors.weight}</label>
// //                             </div>
// //                             <div class="form-group">
// //                                 <input name="discriptionField" type="text" onChange={this.getdiscription} class="form-control" id="discriptionField" placeholder="Description" /><br></br>
// //                                 <label style={{ color: "red" }} class="form-text">{this.state.errors && this.state.errors.discription}</label>
// //                             </div>
// //                             <div class="form-group">
// //                                 <input name="fileField" type="file" onChange={this.getfile} class="form-control" id="fileField" placeholder="Select Your Image" /><br></br>
// //                                 <label style={{ color: "red" }} class="form-text">{this.state.errors && this.state.errors.fileerr}</label>
// //                                 <img src={this.state.selectedFile}></img>
// //                             </div>
// //                             <div class="form-group">
// //                                 <input name="ingradientField" type="text" onChange={this.getIngident} class="form-control" id="fileField" placeholder="Enter Ingrident" /><br></br>
// //                                 <label style={{ color: "red" }} class="form-text">{this.state.errors && this.state.errors.fileerr}</label>
// //                             </div>
// //                             <div class="form-group">
// //                                 <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
// //                                 <label class="form-check-label" for="flexCheckChecked">
// //                                     Eggless
// //                                         </label>
// //                             </div>
// //                             <div class="form-group " style={{ textAlign: "left" }}>
// //                                 <button type="submit" onClick={this.checkAll} class="btn btn-primary">Kar de Order</button>
// //                                 {this.state.errors && this.state.errors.all}
// //                             </div>
// //                             {/* {this.state.errorMsg && <h6 style={{color:"red"}}>{this.state.errorMsg}</h6>} */}
// //                         </form>

// //                     </div>
// //                 </div>
// //             </div>


// //         )
// //     }
// // }

// // export default AddCake

// import axios from 'axios';
// import React, { PureComponent } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure();
// class Addcakes extends PureComponent {
//     constructor(props) {
//         super(props)

//         this.state = {
//             errors: null,
//             newitem: {},
//             selectedFile:null,
//             // flag:1
//         }
//     }
//     displayCredentials = (e) => {
//         let cakedata = {}
//         let error={}
//         let form = e.target.form;
//         // console.log(form)
//         e.preventDefault()
//         cakedata["name"] = form["elements"]["cakename"].value
//         cakedata["price"] = form["elements"]["price"].value
//         cakedata["description"] = form["elements"]["description"].value
//         cakedata["type"]=form["elements"]["category"].value
//         cakedata["imagepath"]=form["elements"]["imagepath"].value
//         cakedata["ratings"] = form["elements"]["rating"].value
//         cakedata["eggless"] = form["elements"]["eggless"].checked
//         cakedata["flavour"]=form["elements"]["flavor"].value
//         cakedata["weight"] = form["elements"]["weight"].value
//         var ingredients = form["elements"]["ingredients"].value
//         cakedata["ingredients"]= form["elements"]["ingredients"].value.split(",")
//         console.log(cakedata)
//         let flag=1

//         if (!cakedata["name"]) {
//             error["cakename"]="Enter CakeName!"
//             flag=0
//         }
//         if(!cakedata["price"])
//         {
//             error["price"]="Enter Price!"
//             flag=0
//         }
//         if(!cakedata["description"])
//         {
//             error["description"]="Enter Description!"
//             flag=0
//         }
//         if(!cakedata["weight"])
//         {
//             error["weight"]="Weight required!"
//             flag=0
//         }
//         if(!cakedata["flavour"])
//         {
//             error["flavor"]="Flavor required!"
//             flag=0
//         }
//         if(!ingredients)
//         {
//             error["ingredients"]="Ingredients required!"
//             flag=0
//         }
//         if(cakedata["type"]==1)
//         {
//             flag=0
//             error["category"]="Enter Category!"
//         }
//         if(!cakedata["imagepath"])
//         {
//             error["imagepath"]="Choose Image!"  
//             flag=0
//         }
//         if(!cakedata["ratings"])
//         {
//             error["rating"]="Enter rating!"
//             flag=0
//         }
//         if(flag==0)
//         {
//             this.setState({
//                 errors:error,
//                 flag:0,
//                 newitem:{}
//             },()=>toast.error("Errors in form!!!!"))
//           //  document.getElementById("toastmsg").style.toastClassName="Toastify__toast--error"
//         }
//         else{
//             toast.success("Success")
//            this.setState({
//             newitem:cakedata,
//             errors:null,
//             flag:1
//            },()=>console.log(this.state.newitem))
//           // document.getElementById("toastmsg").style.toastClassName="Toastify__toast--success"
//         }   
       
//         // var form=document.getElementById('form');

//         // if(!form["elements"]["emailfield"].value)

//     }
//     onfileUpload = (e) => {
//         var formdata=new FormData()
//         formdata.append("file",e.target.files[0])
//         axios({
//             method:"post",
//             url:"https://apibyashu.herokuapp.com/api/upload",
//             data:formdata,
//             headers:{
//                 authtoken:localStorage.token
//             }

//         }).then((response)=>{
//             console.log(response.data)
//             if(response.data.imageUrl)
//             {
//                 console.log("Successfully uploaded image",response.data.imageUrl,response)
//                 // this.setState({
//                 //     selectedFile:  URL.createObjectURL(e.target.files[0])
//                 // }, () => console.log(e.target.files[0]))
//                 this.setState({
//                     selectedFile:response.data.imageUrl
//                 })
//             }
//             else{
//                 console.log("wrongggg")
//             }
           
//         },(error)=>{
//             console.log(error)
//         })
//     }
//     render() {
//         return (
//             <div className="container p-3" style={{ textAlign: "left", marginTop: "6%", width: "70%", borderRadius: '10px', backgroundColor: "rgba(60,80,220,0.1)", boxShadow: "1px 1px 10px gray" }}>
//                 <div className="row justify-content-center">
//                     <div className="col-sm-7">

//                         <form id="form">
//                             <h3>Add Item</h3><br></br>

//                             <div class="form-group">
//                                 <span style={{ color: "red" }}>{this.state.errors && this.state.errors.cakename}</span>
//                                 <input type="text" name="cakename" class="form-control" placeholder="Enter Cake Name" /><br></br>

//                             </div>
//                             <div class="form-group">
//                                 <label style={{ color: "red" }}>{this.state.errors && this.state.errors.imagepath}</label>
//                                 <input type="file" name="imagepath" id="imgpath" class="form-control" placeholder="Enter Image path" onChange={this.onfileUpload} /><br></br>
//                                 {this.state.selectedFile && <img src={this.state.selectedFile}  style={{height:200,width:200}} alt="cake.jpg"/>}
//                             </div>
//                             <div class="form-group">
//                                 <label style={{ color: "red" }}>{this.state.errors && this.state.errors.price}</label>
//                                 <input type="text" name="price" class="form-control" placeholder="Enter Price" /><br></br>

//                             </div>
//                              <div class="checkbox">
                               
//                                 <input type="checkbox" id="eggless" name="eggless" />  Eggless
//                             </div>
                            
//                             <label style={{ color: "red" }}>{this.state.errors && this.state.errors.flavor}</label>
//                             <input type="text" name="flavor" id="flavor" class="form-control"  required="required" placeholder="Enter cake Flavor"/>

//                             <label style={{ color: "red" }}>{this.state.errors && this.state.errors.weight}</label>
//                             <input type="number" name="weight" id="weight" class="form-control"  required="required" placeholder="Enter cake Weight"/>

//                             <label style={{ color: "red" }}>{this.state.errors && this.state.errors.ingredients}</label>
//                             <textarea name="ingredients" id="ingredients" class="form-control" rows="3"  required="required" placeholder="Enter cake Ingredients!"/>
                            
//                             <div class="form-group">
//                                 <label style={{ color: "red" }}>{this.state.errors && this.state.errors.category}</label>
//                                 <select id="category" name="category" class="form-select" aria-label="Default select example">
//                                     <option value="1">Categories</option>
//                                     <option value="Birdthday Cake">Birthday Cake</option>
//                                     <option value="Wedding Cake">Wedding Cake</option>
//                                     <option value="Anniversary Cake">Anniversary Cake</option>
//                                 </select>

//                             </div>

//                             <div class="form-group">
//                                 <label style={{ color: "red" }}>{this.state.errors && this.state.errors.description}</label>
//                                 <textarea rows="4" cols="80" name="description" class="form-control" placeholder="Enter Description" /><br></br>

//                             </div>

//                             <div class="form-group">
//                                 <label style={{ color: "red" }}>{this.state.errors && this.state.errors.rating}</label>
//                                 <input type="number" name="rating" class="form-control" placeholder="Give Rating" /><br></br>


//                             </div>
                            
                          
                            
//                             <div class="form-group " style={{ textAlign: "left" }}>
//                                 <button type="submit" class="btn btn-primary" onClick={this.displayCredentials}>Submit</button>
//                             </div>
//                             {/* <ToastContainer id="toastmsg" toastClassName={(this.state.flag)?("Toastify__toast--success"):("Toastify__toast--error")}/> */}
//                         </form>

//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Addcakes;
import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"




class Addcakes extends Component {
    constructor() {
        super();
        this.state = {
            image: null,
            errors: null,
        }
    }
    handleChange = (event) =>  {
        var formdata = new FormData()
        formdata.append("file",event.target.files[0])
        axios({
             url : "https://apibyashu.herokuapp.com/api/upload",
             method : "post",
             data : formdata,
            headers:{
                authtoken:localStorage.token
             }
         }).then((response)=>{
              if(response.data.imageUrl){
                 console.log(response.data.imageUrl)
                  this.setState({
                      image: response.data.imageUrl
                    })
             }
            console.log("response from upload api",response)
        },(error)=>{
            console.log("error from upload api",error)
         })
    }
    
    
    
      formValidate = (event) =>{
          event.preventDefault()
          var errors ={}
          var  form = document.getElementById('cakelist')
        
          if(!form["elements"]["name"].value){
              errors.name = "cake name is requried"
    
          }else if(form["elements"]["name"].value < 3){
              errors.name = "name should be greater then 3"
              
          }
    
          if(!form["elements"]["description"].value){
              errors.description ="please enter dicription "
          }else if(form["elements"]["description"].value < 20){
            errors.description ="description lenght should be min 20 words"
          }
    
          if(!form["elements"]["ingredients"].value){
            errors.ingredients ="please enter your ingridients "
           }
    
           if(!form["elements"]["price"].value){
            errors.price ="please enter price "
        }else if(form["elements"]["price"].value < 0){
          errors.price ="please enter valid price"
        }
        if(!form["elements"]["weight"].value){
            errors.weight ="please enter weight "
        }else if(form["elements"]["weight"].value < 0 ||form["elements"]["weight"].value > 5){
          errors.weight ="please enter valid weight"
        }
    
        if(!form["elements"]["flavour"].value){
            errors.flavour ="please enter flavour"
        }
    
    
          this.setState({
              errors:errors
          })
    
          var errorfields = Object.keys(errors);
          if(errorfields.length <= 0){
              var cake ={}
              toast.success("Product is added")
              for(var i=0 ; i<form.elements.length ; i++){
                  cake[form.elements[i].name] = form.elements[i].value
              }
              
              cake.eggless = form.elements.eggless.checked
              cake.ingredients = cake.ingredients.split(',')
              cake.image = this.state.image
              axios({
                url : "https://apibyashu.herokuapp.com/api/addcake",
                method : "post",
                 data : cake,
                headers:{
                    authtoken:localStorage.token
            
                }
            }).then((response)=>{
               console.log("response from addcake api",response)
           },(error)=>{
               console.log("error from addcake api",error)
            })
              console.log(cake)
          }
          else{
              toast.error("there is error in form")
          }
    
      }
    render() {
        return (
            <div className="container" style={{ marginTop: "20px" }}>
                <form id="cakelist">
                    <div className="row mb-3">
                        <label for="" className="col-sm-2 col-form-label">Cake Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="" onChange={this.getname} name="name"></input>
                            <label style={{ color: "red" }} class="form-text">{this.state.errors && this.state.errors.cakename}</label>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="" className="col-sm-2 col-form-label" >Price</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="" onChange={this.getprice} name="price"></input>
                            <label style={{ color: "red" }} class="form-text">{this.state.errors && this.state.errors.price}</label>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="" className="col-sm-2 col-form-label" >Flavour</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="" onChange={this.getflavour} name="flavour"></input>
                            <label style={{ color: "red" }} class="form-text">{this.state.errors && this.state.errors.flavour}</label>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="" className="col-sm-2 col-form-label">Image</label>
                        <div className="col-sm-10">
                            <input type="file" className="form-control" id="" onChange={this.handleChange} name="image"></input>
                            <img src={this.state.image} style={{ "height": "80px", "width": "80px" }}></img>
                           
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="" className="col-sm-2 col-form-label">Weight</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="" onChange={this.getweight} name="weight"></input>
                            <label style={{ color: "red" }} class="form-text">{this.state.errors && this.state.errors.weight}</label>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="" className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-1">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={this.geteggless} name="eggless"></input>
                            <label class="form-check-label" for="flexCheckChecked">
                                Eggless
                </label>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">Select cake type</label>
                        <div className="col-sm-4">
                            <select class="form-select" aria-label="Default select example" onChange={this.gettype} name="type">
                                <option selected>Select cake type</option>
                                <option value="Birthday Cake">Birthday Cake</option>
                                <option value="Anniversary Cake">Anniversary Cake</option>
                                <option value="Photo Cake">Photo Cake</option>
                                <option value="Designer Cake">Designer Cake</option>
                            </select>
                            
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">Description</label>
                        <div className="col-sm-3">
                            <textarea rows="4" cols="100" onChange={this.getdescription} name="description"></textarea>
                            <label style={{ color: "red" }} class="form-text">{this.state.errors && this.state.errors.description}</label>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">Ingredients</label>
                        <div className="col-sm-3">
                            <textarea rows="4" cols="100" onChange={this.getingredients} name="ingredients"></textarea>
                            <label style={{ color: "red" }} class="form-text">{this.state.errors && this.state.errors.ingredients}</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.formValidate}>Add Cake</button>
                </form>
                <ToastContainer/>
            </div>
        )
    }
}





export default Addcakes;

