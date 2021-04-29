// import { Component } from "react";

var addcakes={}
function getname(event){
    addcakes.name= event.target.value;
 }
 function getflavour(event){
   addcakes.flavour=event.target.value;
 }  
 function getweight(event){
    addcakes.weight=event.target.value;
  } 
  function gettype(event){
    addcakes.type=event.target.value;
  } 
  function getdiscription(event){
    addcakes.discription=event.target.value;
  } 
  function getfile(event){
    addcakes.file=event.target.file[0];
  } 

 function search(event){
  event.preventDefault();
  console.log(addcakes);
 }
//  }
// class Login extends Component{
//   constructor(){
//     super();
//     this.state={errorMail : null, errorPass :null}
//   }
//   update=()=>{
//     this.setState({errorMail : "Invalid Email" , errorPass : "Invalid Password"})
//   }
//   render(){
    function Addcakes(){
        return(<div className="container">
            <form>
       <div className="mb-3">
         <label for="exampleInputEmail1" className="form-label">Name</label>
         <input type="text" className="form-control"  onChange={getname} id="exampleInputEmail1" aria-describedby="emailHelp"/>
         <div id="emailHelp" className="form-text">This is the chocolate cake you've been dreaming of!</div>
       </div>
       <div className="mb-3">
         <label for="exampleInputEmail1" className="form-label">Image</label>
         <input type="file" className="form-control"   onChange={getfile} id="exampleInputEmail1" aria-describedby="emailHelp"/>
       </div>
       <div className="mb-3">
         <label for="exampleInputPassword1" className="form-label">Flavour</label>
         <input type="text"   onChange={getflavour} className="form-control" id="exampleInputflavour"/>
       </div>
       <div className="mb-3">
         <label for="exampleInputPassword1" className="form-label">Weight</label>
         <input type="number"   onChange={getweight} className="form-control" id="exampleInputweight"/>
       </div>
       <div className="mb-3">
         <label for="exampleInputPassword1" className="form-label">Type</label>
         <input type="text"   onChange={gettype} className="form-control" id="exampleInputType"/>
       </div>
       <div className="mb-3">
         <label for="exampleInputPassword1" className="form-label">Discription</label>
         <input type="text"   onChange={getdiscription} className="form-control" id="exampleInputoccassion"/>
       </div>
       <button onClick={search} className="btn btn-primary">Submit</button>
     </form>
     
         </div>)
    }
    
   
  



export default Addcakes;

