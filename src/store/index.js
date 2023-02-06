import {createStore} from "redux"

const counterReducer=(state={counter:0,toggleCounter:true},action)=>{
    if(action.type==="increment")
        return {counter:state.counter+1,toggleCounter:state.toggleCounter}
    else if(action.type==="decrement")
        return {counter:state.counter-1,toggleCounter:state.toggleCounter}
    else if(action.type==="increase")
        return {counter:state.counter+action.amount,toggleCounter:state.toggleCounter}
    else if(action.type==="toggleCounter")
        return {counter:state.counter,toggleCounter:!state.toggleCounter}
    return state
}
const store=createStore(counterReducer);
export default store