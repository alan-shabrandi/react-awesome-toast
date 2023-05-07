import React from "react"
import UndoIcon from "../assets/icons/undoIcon";
import { UndoProps } from "../interface/general";

const Undo = ({callbackTitle, callbackFunction, theme}: UndoProps) => {
    return (
        <div className={`toast_undo ${theme === "dark" ? "toast_undo-dark" : "toast_undo-light"}`} onClick={callbackFunction}>
            <UndoIcon theme={theme}/>
            <span>{callbackTitle}</span>
        </div>
    )
}

export default Undo;