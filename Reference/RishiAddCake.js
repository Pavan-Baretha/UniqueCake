import axios from 'axios';
import React, { PureComponent } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
class Additem extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            errors: null,
            newitem: {},
            selectedFile:null,
            // flag:1
        }
    }
    displayCredentials = (e) => {
        let tempitem = {}
        let error={}
        let form = e.target.form;
        // console.log(form)
        e.preventDefault()
        tempitem["name"] = form["elements"]["cakename"].value
        tempitem["price"] = form["elements"]["price"].value
        tempitem["description"] = form["elements"]["description"].value
        tempitem["type"]=form["elements"]["category"].value
        tempitem["imagepath"]=form["elements"]["imagepath"].value
        tempitem["ratings"] = form["elements"]["rating"].value
        tempitem["eggless"] = form["elements"]["eggless"].checked
        tempitem["flavour"]=form["elements"]["flavor"].value
        tempitem["weight"] = form["elements"]["weight"].value
        var ingredients = form["elements"]["ingredients"].value
        tempitem["ingredients"]= form["elements"]["ingredients"].value.split(",")
        console.log(tempitem)
        let flag=1

        if (!tempitem["name"]) {
            error["cakename"]="Enter CakeName!"
            flag=0
        }
        if(!tempitem["price"])
        {
            error["price"]="Enter Price!"
            flag=0
        }
        if(!tempitem["description"])
        {
            error["description"]="Enter Description!"
            flag=0
        }
        if(!tempitem["weight"])
        {
            error["weight"]="Weight required!"
            flag=0
        }
        if(!tempitem["flavour"])
        {
            error["flavor"]="Flavor required!"
            flag=0
        }
        if(!ingredients)
        {
            error["ingredients"]="Ingredients required!"
            flag=0
        }
        if(tempitem["type"]==1)
        {
            flag=0
            error["category"]="Enter Category!"
        }
        if(!tempitem["imagepath"])
        {
            error["imagepath"]="Choose Image!"  
            flag=0
        }
        if(!tempitem["ratings"])
        {
            error["rating"]="Enter rating!"
            flag=0
        }
        if(flag==0)
        {
            this.setState({
                errors:error,
                flag:0,
                newitem:{}
            },()=>toast.error("Errors in form!!!!"))
          //  document.getElementById("toastmsg").style.toastClassName="Toastify__toast--error"
        }
        else{
            toast.success("Success")
           this.setState({
            newitem:tempitem,
            errors:null,
            flag:1
           },()=>console.log(this.state.newitem))
          // document.getElementById("toastmsg").style.toastClassName="Toastify__toast--success"
        }   
       
        // var form=document.getElementById('form');

        // if(!form["elements"]["emailfield"].value)

    }
    onfileUpload = (e) => {
        var formdata=new FormData()
        formdata.append("file",e.target.files[0])
        formdata.append()
        axios({
            method:"post",
            url:"https://apibyashu.herokuapp.com/api/upload",
            data:formdata,
            headers:{
                authtoken:localStorage.token
            }

        }).then((response)=>{
            console.log(response.data)
            if(response.data.imageUrl)
            {
                console.log("Successfully uploaded image",response.data.imageUrl,response)
                // this.setState({
                //     selectedFile:  URL.createObjectURL(e.target.files[0])
                // }, () => console.log(e.target.files[0]))
                this.setState({
                    selectedFile:response.data.imageUrl
                })
            }
            else{
                console.log("wrongggg")
            }
           
        },(error)=>{
            console.log(error)
        })
    }
    render() {
        return (
            <div className="container p-3" style={{ textAlign: "left", marginTop: "6%", width: "70%", borderRadius: '10px', backgroundColor: "rgba(60,80,220,0.1)", boxShadow: "1px 1px 10px gray" }}>
                <div className="row justify-content-center">
                    <div className="col-sm-7">

                        <form id="form">
                            <h3>Add Item</h3><br></br>

                            <div class="form-group">
                                <span style={{ color: "red" }}>{this.state.errors && this.state.errors.cakename}</span>
                                <input type="text" name="cakename" class="form-control" placeholder="Enter Cake Name" /><br></br>

                            </div>
                            <div class="form-group">
                                <label style={{ color: "red" }}>{this.state.errors && this.state.errors.imagepath}</label>
                                <input type="file" name="imagepath" id="imgpath" class="form-control" placeholder="Enter Image path" onChange={this.onfileUpload} /><br></br>
                                {this.state.selectedFile && <img src={this.state.selectedFile} alt="cake.jpg"/>}
                            </div>
                            <div class="form-group">
                                <label style={{ color: "red" }}>{this.state.errors && this.state.errors.price}</label>
                                <input type="text" name="price" class="form-control" placeholder="Enter Price" /><br></br>

                            </div>
                             <div class="checkbox">
                               
                                <input type="checkbox" id="eggless" name="eggless" />  Eggless
                            </div>
                            
                            <label style={{ color: "red" }}>{this.state.errors && this.state.errors.flavor}</label>
                            <input type="text" name="flavor" id="flavor" class="form-control"  required="required" placeholder="Enter cake Flavor"/>

                            <label style={{ color: "red" }}>{this.state.errors && this.state.errors.weight}</label>
                            <input type="number" name="weight" id="weight" class="form-control"  required="required" placeholder="Enter cake Weight"/>

                            <label style={{ color: "red" }}>{this.state.errors && this.state.errors.ingredients}</label>
                            <textarea name="ingredients" id="ingredients" class="form-control" rows="3"  required="required" placeholder="Enter cake Ingredients!"/>
                            
                            <div class="form-group">
                                <label style={{ color: "red" }}>{this.state.errors && this.state.errors.category}</label>
                                <select id="category" name="category" class="form-select" aria-label="Default select example">
                                    <option value="1">Categories</option>
                                    <option value="Birdthday Cake">Birthday Cake</option>
                                    <option value="Wedding Cake">Wedding Cake</option>
                                    <option value="Anniversary Cake">Anniversary Cake</option>
                                </select>

                            </div>

                            <div class="form-group">
                                <label style={{ color: "red" }}>{this.state.errors && this.state.errors.description}</label>
                                <textarea rows="4" cols="80" name="description" class="form-control" placeholder="Enter Description" /><br></br>

                            </div>

                            <div class="form-group">
                                <label style={{ color: "red" }}>{this.state.errors && this.state.errors.rating}</label>
                                <input type="number" name="rating" class="form-control" placeholder="Give Rating" /><br></br>


                            </div>
                            
                          
                            
                            <div class="form-group " style={{ textAlign: "left" }}>
                                <button type="submit" class="btn btn-primary" onClick={this.displayCredentials}>Login</button>
                            </div>
                            {/* <ToastContainer id="toastmsg" toastClassName={(this.state.flag)?("Toastify__toast--success"):("Toastify__toast--error")}/> */}
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default Additem

