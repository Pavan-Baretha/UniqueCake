import { Component } from "react"

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            user : 0
        }
    }
    joinMeeting = () =>{
        this.setState({
            user:this.state.user+1
        })
    }
    render() {
        return (
            <div>
                <label>{this.state.user}</label>
                <button onClick={this.joinMeeting}>Join Meeting</button>
            </div>
        )
    }
}

export default Counter