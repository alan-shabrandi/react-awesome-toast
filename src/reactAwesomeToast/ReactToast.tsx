import React, { useState, useEffect } from "react";
import { handleAnimation, handlePosition, removeUndefinedProperties } from "./helpers/functions";
import Icon from "./components/icon";
import Undo from "./components/undo";
import ProgressBar from "./components/progressBar";
import CloseIcon from "./assets/icons/closeIcon";
import { ToastFunctionProps, ToastProps } from "./interface/general";
import "./index.css"
import "animate.css"
import emitter from "./EventEmitter";

const ToastContainer = (props: ToastProps) => {
    const [showToast, setShowToast] = useState<boolean | undefined>(undefined);
    const [toastInfo, setToastInfo] = useState<ToastProps>({ position:"bottom-right", theme:"light", autoClose:3000, callbackTitle:"برگرداندن"})

    useEffect(() => {
        emitter.addListener("toast", (data:ToastFunctionProps) => {
            setToastInfo((prev) => {
                const props1 = removeUndefinedProperties(props);
                const data1 = removeUndefinedProperties(data);
                return ({...prev, ...props1, ...data1})
            });
            setShowToast(true);
        })
    },[])
    
    useEffect(() => {
        let timeOut: any;
        if(showToast === false) timeOut = setTimeout(() => setShowToast(undefined), 1000);
        return () => clearTimeout(timeOut);
    },[showToast])

    const toastPosition = handlePosition(toastInfo.position)
    const toastAnimation = handleAnimation(showToast,toastPosition.left);

    return (
        <>
            {showToast !== undefined && (
                <div 
                    className={`toast ${toastInfo.theme === "dark" ? "toast_dark" : "toast_light"} animate__animated ${toastAnimation}`} 
                    style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", ...toastPosition}}
                >
                    <Icon type={toastInfo.type} theme={toastInfo.theme}/>
                    <p className="toast_title">{toastInfo.title}</p>
                    {(toastInfo.type !== "promise" && toastInfo.callbackFunction) && <Undo callbackTitle={toastInfo.callbackTitle} callbackFunction={toastInfo.callbackFunction} theme={toastInfo.theme}/>}
                    {(toastInfo.type !== "promise" && toastInfo.autoClose) && <ProgressBar type={toastInfo.type} positionX={toastPosition.left !== "unset" ? "left" : "right"} setShowToast={setShowToast} autoClose={toastInfo.autoClose} theme={toastInfo.theme}/>}
                    {toastInfo.type !== "promise" && <CloseIcon className={`toast_closeIcon ${toastInfo.theme === "dark" ? "toast_closeIcon-dark" : "toast_closeIcon-light"}`} onClick={() => setShowToast(false)} />}
                </div>
            )}
        </>
    )
}

export default ToastContainer;

export const toast = ({ title, type, position, theme, autoClose, callbackTitle, callbackFunction}: ToastFunctionProps) => {
    emitter.emit("toast",{ title, type, position, theme, autoClose, callbackTitle, callbackFunction})
}
