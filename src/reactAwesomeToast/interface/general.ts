export interface ToastProps {
    id?: string,
    title?: string,
    type?: "success" | "error" | "warning" | "promise",
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left",
    theme?: string,
    autoClose?: number | false,
    callbackTitle?: string,
    callbackFunction?: () => void | Promise<any>,
    status?: boolean | undefined,
}

export interface ToastFunctionProps {
    title: string,
    type: "success" | "error" | "warning" | "promise",
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left",
    theme?: string,
    autoClose?: number | false,
    callbackTitle?: string,
    callbackFunction?: () => void | Promise<any>,
    id?: string
}

export interface IconProps {
    type: string,
    theme: string
}

export interface ProgressBarProps {
    type: string,
    positionX: string,
    showToast: boolean | undefined,
    setShowToast: (value: boolean) => void,
    autoClose?: number | false,
    theme?: string,
}

export interface UndoProps {
    toastInfo: ToastProps,
    toasts: ToastProps[],
    setToasts: (value: ToastProps[]) => void,
    callbackTitle?: string,
    callbackFunction?: () => void | Promise<any>,
    theme?: string,
}

export interface Positions {
    top: "unset" | number,
    bottom: "unset" | number,
    left: "unset" | number,
    right: "unset" | number,
}

export interface SingleToastProps {
    toastInfo: ToastProps,
    toastPosition: any,
    toasts: ToastProps[],
    setToasts: (value: ToastProps[]) => void,
}