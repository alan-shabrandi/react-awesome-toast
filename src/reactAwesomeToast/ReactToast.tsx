import React, { useState, useEffect } from "react";
import { handlePosition, removeUndefinedProperties, uuidGenerator } from "./helpers/functions";

import { ToastFunctionProps, ToastProps } from "./interface/general";
import "./index.css"
import "animate.css"
import emitter from "./EventEmitter";
import SingleToast from "./components/singleToast";

const ToastContainer = (props: ToastProps) => {
    const [toastInfo, setToastInfo] = useState<ToastProps>({ position: "bottom-right", theme: "light", autoClose: 3000, callbackTitle: "برگرداندن" })
    const [isNewToast, setIsNewToast] = useState<boolean>(false);
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    useEffect(() => {
        emitter.addListener("toast", (data: ToastFunctionProps) => {
            setToastInfo((prev) => {
                const props1 = removeUndefinedProperties(props);
                const data1 = removeUndefinedProperties(data);
                return ({ ...prev, ...props1, ...data1, id: data.id ? `react-awesome-toast-${data.id}` : uuidGenerator() })
            });
            setIsNewToast(true);
        });
        emitter.addListener("closeToast", (data: string) => {
            setToasts((prev) => {
                const filteredToasts = prev.filter((toast: ToastProps) => toast.id !== `react-awesome-toast-${data}`)
                return filteredToasts;
            })
        });
    }, [])

    useEffect(() => {
        if (isNewToast) {
            setIsNewToast(false);
            setToasts([...toasts, toastInfo]);
            setToastInfo({ position: "bottom-right", theme: "light", autoClose: 3000, callbackTitle: "برگرداندن" });
        }
    }, [isNewToast])

    const toastPosition = handlePosition(toastInfo.position)

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
