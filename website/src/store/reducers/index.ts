import { combineReducers } from "redux";
import DrawerReducer from "./drawer.reducers"

const reducers = combineReducers({
    drawer: DrawerReducer
})

export default reducers

export type State = ReturnType<typeof reducers>