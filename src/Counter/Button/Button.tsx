import React from "react";

type ButtonType = {
    title: string
    onClick: () => void
    value: number
    disabled?: boolean
}

export function Button(props: ButtonType) {
    return (
        <button onClick={props.onClick} disabled={props.disabled}>{props.title}</button>
    )
}