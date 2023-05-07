import { Positions } from "../interface/general";

export const handlePosition = (position: string) => {
    const toastPosition = position.split("-");

    const result: Positions = {
        top: "unset",
        bottom: "unset",
        right: "unset",
        left: "unset"
    }
    if (toastPosition[0] === "top") result.top = 10;
    else result.bottom = 10;

    if (toastPosition[1] === "right") result.right = 10;
    else result.left = 10;

    return result
}

export const handleAnimation = (showToast: boolean | undefined, leftPosition: string | number) => {
    if (showToast) {
        if (leftPosition !== "unset") return "animate__bounceInLeft";
        else return "animate__bounceInRight"
    } else {
        if (leftPosition !== "unset") return "animate__bounceOutLeft";
        else return "animate__bounceOutRight"
    }
}

export const removeUndefinedProperties = (obj:any) => Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));