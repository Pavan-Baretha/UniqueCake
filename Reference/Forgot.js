import axios from 'axios';
// var email = ""

function recoverPassword(){
  var email=document.getElementsByName("email").value;
    alert(email);
    axios({
        url: 'https://apibyashu.herokuapp.com/api/recoverpassword',
        method: 'post',
        data: 'pavan.baretha7@infobeans.com'
    }).then((response) => {
       console.log(response.data.message)
    }, (error) => {
        console.log(error);

    })
}
function Forgot(){
return(
    <div>
        <input type="email" name="email" class="form-control" required="required"  placeholder="Enter your email"/>
        <br></br>
        <button onClick={recoverPassword}>Recover</button>
    </div>
)
}
export default Forgot