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

export const removeUndefinedProperties = (obj:any) => Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== undefined));

export const uuidGenerator = () => {
    let uuid = "xxxxxxxx-xxxx-Mxxx-Nxxx-x".replace(/[xMN]/g, (char) => {
        let val: number;
        if (char === "M") val = Math.floor(1 + Math.random() * 5);
        else if (char === "N") val = Math.floor(8 + Math.random() * 4);
        else val = Math.floor(Math.random() * 16);
        return val.toString(16);
    });
    uuid += Date.now().toString(16);
    return uuid;
}