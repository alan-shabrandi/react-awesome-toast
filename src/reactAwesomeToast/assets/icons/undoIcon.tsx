import React from "react";

interface Props {
    className?: string,
    onClick?: ({ ...values }) => void;
    theme?: string
}

const UndoIcon = ({ className, onClick, theme }: Props) => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
            <path className={`${theme === "dark" ? "toast_undo-fill-dark" : "toast_undo-fill-light"}`} d="M11.3477 14.2949H5.34766C5.04016 14.2949 4.78516 14.0399 4.78516 13.7324C4.78516 13.4249 5.04016 13.1699 5.34766 13.1699H11.3477C13.1027 13.1699 14.5352 11.7374 14.5352 9.98242C14.5352 8.22742 13.1027 6.79492 11.3477 6.79492H3.09766C2.79016 6.79492 2.53516 6.53992 2.53516 6.23242C2.53516 5.92492 2.79016 5.66992 3.09766 5.66992H11.3477C13.7252 5.66992 15.6602 7.60492 15.6602 9.98242C15.6602 12.3599 13.7252 14.2949 11.3477 14.2949Z" />
            <path className={`${theme === "dark" ? "toast_undo-fill-dark" : "toast_undo-fill-light"}`} d="M4.82242 8.67016C4.67992 8.67016 4.53742 8.61766 4.42492 8.50516L2.50492 6.58516C2.28742 6.36766 2.28742 6.00766 2.50492 5.79016L4.42492 3.87016C4.64242 3.65266 5.00242 3.65266 5.21992 3.87016C5.43742 4.08766 5.43742 4.44766 5.21992 4.66516L3.69742 6.18766L5.21992 7.71016C5.43742 7.92766 5.43742 8.28766 5.21992 8.50516C5.11492 8.61766 4.96492 8.67016 4.82242 8.67016Z" />
        </svg>
    )
}

export default UndoIcon;