import React from "react"
import ErrorIcon from "../assets/icons/errorIcon";
import SuccessSquareIcon from "../assets/icons/successSquareIcon";
import WarningSquareIcon from "../assets/icons/warningSquareIcon";
import { IconProps } from "../interface/general";
import PromiseIcon from "../assets/icons/promiseIcon";

const Icon = ({ type, theme }: IconProps) => {

    let content = <></>;

    if (type === "success") content = <SuccessSquareIcon theme={theme} />
    else if (type === "warning") content = <WarningSquareIcon theme={theme} />
    else if (type === "error") content = <ErrorIcon theme={theme} />
    else if (type === "promise") content = <PromiseIcon />

    return <div style={{ flex: "none" }}>{content}</div>
}

export default Icon;