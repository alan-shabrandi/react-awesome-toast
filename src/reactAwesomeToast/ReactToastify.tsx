import React, { useState, useEffect, useRef } from "react";
import { handlePosition, removeUndefinedProperties } from "./helpers/functions";

import { ToastFunctionProps, ToastProps } from "./interface/general";
import "./index.css"
import "animate.css"
import emitter from "./EventEmitter";
import SingleToast from "./components/singleToast";

const ToastContainer = (props: ToastProps) => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);
    let toastInfo = useRef<ToastProps>({ position: "bottom-right", theme: "light", autoClose: 3000, callbackTitle: "برگرداندن" })

    useEffect(() => {
        emitter.addListener("toast", (data: ToastFunctionProps) => {
            const data1 = removeUndefinedProperties(data);
            setToasts((toasts: ToastProps[]) => [...toasts, { ...toastInfo.current, ...data1, id: data.id ? `react-awesome-toast-${data.id}` : undefined }]);
        });
        emitter.addListener("closeToast", (data: string) => {
            setToasts((prev) => {
                const filteredToasts = prev.filter((toast: ToastProps) => toast.id !== `react-awesome-toast-${data}`)
                return filteredToasts;
            })
        });

        return () => emitter.removeAllListeners();
    }, [])

    useEffect(() => {
        toastInfo.current = { ...toastInfo.current, ...removeUndefinedProperties(props)}
    },[props.theme])

    const toastPosition = handlePosition(toastInfo.current.position)

    return (
        <>
            {toasts.length ? (
                <div className="toast-wrapper" style={{ ...toastPosition }}>
                    {toasts.map((toast: ToastProps) => <SingleToast key={toast.id} toastInfo={toast} toastPosition={toastPosition} toasts={toasts} setToasts={setToasts} />)}
                </div>
            ) : <></>}
        </>
    )
}

export default ToastContainer;

export const toast = ({ id, title, type, position, theme, autoClose, callbackTitle, callbackFunction }: ToastFunctionProps) => {
    emitter.emit("toast", { id, title, type, position, theme, autoClose, callbackTitle, callbackFunction })
}

export const closeToast = (id: string) => emitter.emit("closeToast", id);
