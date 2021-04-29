import {createStore} from "redux"

import {AuthReducer} from "./redux"


var store = createStore(AuthReducer)

export default store