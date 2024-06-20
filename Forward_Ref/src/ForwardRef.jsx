import React from "react";
import { forwardRef } from "react";

function User(props, ref){
    return (
        <>
            <input placeholder="Enter Somethinh" type="text" ref={ref}/>
        </>
    )
}

export default forwardRef(User);