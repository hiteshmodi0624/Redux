import { configureStore} from "@reduxjs/toolkit"
import AuthReducer from "./auth"
import counterReducer from "./counter"


const store=configureStore({
    reducer:{counter:counterReducer,auth:AuthReducer}
});


export default store