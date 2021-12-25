import { DrawerAction, PayloadAction } from "../actions/drawer.actions"
import { DrawerActionType } from "../types/drawer.types";

const defaultState: PayloadAction = {
    isOpen: false
}

const reducer = (state = defaultState, action: DrawerAction) => {
    switch (action.type) {
        case DrawerActionType.OPEN:
            return {
                isOpen: action.payload.isOpen
            }
        case DrawerActionType.CLOSE:
            return {
                isOpen: action.payload.isOpen
            }
        default:
            return state
    }
}

export default reducer