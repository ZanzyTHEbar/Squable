import { ToasterStore } from 'solid-headless'
import { createMemo, JSXElement } from 'solid-js'
import { createStore, produce } from 'solid-js/store'
import { ENotificationType, loaderType, POPOVER_ID } from '@static/types/enums'

interface IMenuOpen {
    x: number
    y: number
}

export interface INewMenu {
    children: JSXElement
    ref: HTMLElement | null
    name: string
}

export interface IModalMenu {
    children: JSXElement
    title?: string
    initialFocus?: string
}

export interface IUiStore {
    loader?: { [key in loaderType]: boolean }
    connecting?: boolean
    openModal?: boolean
    menuOpen?: IMenuOpen | null
    showCameraView?: boolean
    connectedUser: string
    notifications?: ToasterStore<string>
    notificationsType?: ENotificationType
    displayMode: POPOVER_ID
}

export const defaultState = {
    loader: { [loaderType.MDNS_CONNECTING]: false, [loaderType.REST_CLIENT]: false },
    connecting: false,
    openModal: false,
    menuOpen: null,
    connectedUser: '',
    showCameraView: false,
    notifications: new ToasterStore<string>(),
    notificationsType: ENotificationType.INFO,
    displayMode: POPOVER_ID.GRIP,
}

const [state, setState] = createStore<IUiStore>(defaultState)

export const setMenu = (menuOpen: IMenuOpen | null) => {
    setState(
        produce((s) => {
            s.menuOpen = menuOpen || null
        }),
    )
}

export const setConnecting = (connecting: boolean) => {
    setState(
        produce((s) => {
            s.connecting = connecting
        }),
    )
}
export const setDisplayMode = (view: POPOVER_ID) => {
    setState(
        produce((s) => {
            s.displayMode = view
        }),
    )
}

export const setOpenModal = (openModal: boolean) => {
    setState(
        produce((s) => {
            s.openModal = openModal
        }),
    )
}

export const setConnectedUser = (userName: string) => {
    setState(
        produce((s) => {
            s.connectedUser = userName
        }),
    )
}

export const setLoader = (type: loaderType, value: boolean) => {
    setState(
        produce((s) => {
            if (s.loader) s.loader[type] = value
        }),
    )
}

export const setShowCameraView = (showCameraView: boolean) => {
    setState(
        produce((s) => {
            s.showCameraView = showCameraView
        }),
    )
}

export const setNotificationsType = (type: ENotificationType) => {
    setState(
        produce((s) => {
            s.notificationsType = type
        }),
    )
}

export const uiState = createMemo(() => state)
