import React, { useEffect, useRef, useState } from "react"
import { ProgressBarProps } from "../interface/general";

const ProgressBar = ({type, positionX, showToast, setShowToast, autoClose, theme}: ProgressBarProps) => {

    const [width, setWidth] = useState<number>(100);

    const intervalRef = useRef<any>(null)

    useEffect(() => {
        if(showToast) setWidth(100);
        if(autoClose && showToast) intervalRef.current = setInterval(() => setWidth((prev) => prev - (1000 / autoClose)), 10)

        return () => clearInterval(intervalRef.current);
    }, [showToast])

    const handleClose = () => {
        clearInterval(intervalRef.current);
        setShowToast(false);
    }

    let timeout: any;

    useEffect(() => {
        if (width <= 0) handleClose()
        return () => clearTimeout(timeout);
    }, [width])

    let progressBarColor = "";
    if (type === "success") progressBarColor = theme === "dark" ? "toast_progressBar-lime-dark" : "toast_progressBar-lime-light";
    else if (type === "warning") progressBarColor = theme === "dark" ? "toast_progressBar-orange-dark" : "toast_progressBar-orange-light";
    else if (type === "error") progressBarColor = theme === "dark" ? "toast_progressBar-red-dark" : "toast_progressBar-red-light";

    return (
        <div className="toast_progressBar">
            <div style={{ left: positionX === "left" ? 0 : "unset", right: positionX === "lright" ? 0 : "unset", width: `${width}%` }} className={`toast_progressBar-inner ${progressBarColor}`} ></div>
        </div>
    )
}

export default ProgressBar;