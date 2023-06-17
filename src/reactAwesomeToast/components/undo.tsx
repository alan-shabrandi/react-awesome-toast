import React, { useState } from "react"
import UndoIcon from "../assets/icons/undoIcon";
import { ToastProps, UndoProps } from "../interface/general";
import { toast } from "../ReactToast";

const Undo = ({toastInfo, callbackTitle, callbackFunction, theme, toasts, setToasts}: UndoProps) => {

    const [isClick, setIsClick] = useState<boolean>(false);

    const handleCallbackFunction = () => {
        if(!isClick) {
            setIsClick(true)
            const promise = callbackFunction();
            if (promise) {
                toast({ title: "در حال بازگردانی", type: "promise" });
                promise.then(() => {
                    toast({ ...toastInfo, title: "عملیات بازگردانده شد.", type: toastInfo.type ?? "success", callbackFunction:null});
                }).catch(() => {
                    toast({ ...toastInfo, title: "خطا در انجام عملیات", type: "error", callbackFunction: null});
                }).finally(() => {
                    const filteredToasts = toasts.filter((toast: ToastProps) => toast.type !== "promise");
                    setToasts(filteredToasts);
                });
            }
        }
    }

    return (
        <div className={`toast_undo ${theme === "dark" ? "toast_undo-dark" : "toast_undo-light"}`} onClick={handleCallbackFunction}>
            <UndoIcon theme={theme}/>
            <span>{callbackTitle}</span>
        </div>
    )
}

export default Undo;