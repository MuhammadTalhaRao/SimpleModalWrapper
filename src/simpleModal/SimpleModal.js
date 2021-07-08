import React, { useState, useEffect } from 'react';

const globalStyles = {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(124,124,125)",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "9998",
    top: 0,
    left: 0
}

const crossStyle = {
    cursor: "pointer"
}

export default function SimpleModal(props) {
    let initialShowModal = props.options.showModal || false;
    const [showModal, setshowModal] = useState(initialShowModal);

    console.log("props:", props);

    useEffect(() => {
        console.log("use effect")
        openClose();
    }, [props.options.showModal])

    const openClose = () => {
        setshowModal(!showModal);
    }

    return (
        <div>
            <button onClick={openClose}>
                {props.options.showButtonContent}
            </button>
            {
                showModal &&
                <div style={globalStyles}>
                    <div style={props.options.modalStyle.modal}>
                        <div style={props.options.modalStyle.header}>
                            {props.options.headerContent}
                            <div onClick={openClose} style={crossStyle}>
                                &#10005;
                            </div>
                        </div>
                        <div style={props.options.modalStyle.body}>
                            {props.children}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
