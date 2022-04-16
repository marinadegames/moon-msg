// react
import React from "react";


// component
export const TextArea = (props: any) => {
    return (
        <div>
            <textarea  {...props} placeholder={`What's news?`}/>
        </div>
    )
}