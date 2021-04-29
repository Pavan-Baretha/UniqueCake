import axios from 'axios';
import { toast } from 'react-toastify';
// var email = ""

function recoverPassword(){
  var email=document.getElementsByName("email").value;
  toast.success("Your password is reccovered")
    axios({
        url: 'https://apibyashu.herokuapp.com/api/recoverpassword',
        method: 'post',
        data: email
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