import React, { useState } from "react"
import UndoIcon from "../assets/icons/undoIcon";
import { UndoProps } from "../interface/general";
import { closeToast, toast } from "../ReactToastify";

const Undo = ({ toastInfo, callbackTitle, callbackFunction, theme }: UndoProps) => {

    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleCallbackFunction = () => {
        setIsClicked(true);
        const promise = callbackFunction();
        if (promise && !isClicked) {
            toast({ title: "در حال بازگردانی", type: "promise", id: "toast-promise" });
            promise.then(() => {
                closeToast("toast-promise");
                toast({ ...toastInfo, title: "عملیات بازگردانده شد.", type: toastInfo.type ?? "success", callbackFunction: null });
            }).catch(() => {
                closeToast("toast-promise");
                toast({ ...toastInfo, title: "خطا در انجام عملیات", type: "error", callbackFunction: null });
            });
        } else setIsClicked(false);
    }

    return (
        <div className={`toast_undo ${theme === "dark" ? "toast_undo-dark" : "toast_undo-light"}`} style={{ cursor: isClicked ? "default" : "pointer" }} onClick={isClicked ? () => { } : () => handleCallbackFunction()}>
            <UndoIcon theme={theme} />
            <span>{callbackTitle}</span>
        </div>
    )
}

export default Undo;