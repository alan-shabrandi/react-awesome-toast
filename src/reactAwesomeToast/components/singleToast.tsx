import React, { useState, useEffect } from "react";
import { handleAnimation } from "../helpers/functions";
import Icon from "../components/icon";
import Undo from "../components/undo";
import ProgressBar from "../components/progressBar";
import CloseIcon from "../assets/icons/closeIcon";
import { SingleToastProps } from "../interface/general";

const SingleToast = ({toastInfo, toastPosition, toasts, setToasts}: SingleToastProps) => {
    const [showToast, setShowToast] = useState<boolean | undefined>(true);

    useEffect(() => {
        let timeOut: any;
        if (showToast === false) timeOut = setTimeout(() => setShowToast(undefined), 1000);
        return () => clearTimeout(timeOut);
    }, [showToast])

    const toastAnimation = handleAnimation(showToast, toastPosition.left);

    return (
        <>
            {showToast !== undefined && (
                <div
                    className={`toast ${toastInfo.theme === "dark" ? "toast_dark" : "toast_light"} animate__animated ${toastAnimation}`}
                    style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                    id={toastInfo.id}
                >
                    <Icon type={toastInfo.type} theme={toastInfo.theme} />
                    <p className="toast_title">{toastInfo.title}</p>
                    {(toastInfo.type !== "promise" && toastInfo.callbackFunction) && <Undo toastInfo={toastInfo} callbackTitle={toastInfo.callbackTitle} callbackFunction={toastInfo.callbackFunction} theme={toastInfo.theme} toasts={toasts} setToasts={setToasts} />}
                    {(toastInfo.type !== "promise" && toastInfo.autoClose) && <ProgressBar type={toastInfo.type} positionX={toastPosition.left !== "unset" ? "left" : "right"} showToast={showToast} setShowToast={setShowToast} autoClose={toastInfo.autoClose} theme={toastInfo.theme} />}
                    {toastInfo.type !== "promise" && <CloseIcon className={`toast_closeIcon ${toastInfo.theme === "dark" ? "toast_closeIcon-dark" : "toast_closeIcon-light"}`} onClick={() => setShowToast(false)} />}
                </div>
            )}
        </>
    )
}

export default SingleToast;
