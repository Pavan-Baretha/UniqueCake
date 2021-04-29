var user = {}
function getEmail(event) {
    user.email = event.target.value;
}

function getPassword(event) {
    user.password = event.target.value;
}
function getData(event) {
    console.log(">>>>>>>>>>>>>>>>>>>>", user);
}
function Login() {
    return (
        <div class="container">
            <form>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" onChange={getEmail} class="form-control" id="email" placeholder="Enter Your Email"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Password</label>
                    <input type="password" onChange={getPassword} class="form-control" id="password" placeholder="Enter Your Password"></input>
                </div>
            </form>

            <button type="button" class="btn btn-primary" onClick={getData}>Submit</button>

        </div>
    )
}
export default Login