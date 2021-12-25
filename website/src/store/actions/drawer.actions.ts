import { DrawerActionType } from "../types/drawer.types";

export type PayloadAction = {
    isOpen: boolean
}

type OpenAction = {
    type: DrawerActionType.OPEN,
    payload: PayloadAction
}

type CloseAction = {
    type: DrawerActionType.CLOSE,
    payload: PayloadAction
}

export type DrawerAction = OpenAction | CloseAction