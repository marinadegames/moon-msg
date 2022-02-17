// imports
import preloader from "../../Assets/preloader.gif";
import React from "react";


// types
type PreloaderPropsType = {
    isFetching: boolean
}

// component
export const Preloader = (props: PreloaderPropsType) => {
    return (
        <div>
            {props.isFetching ? <img src={preloader} alt={'preloader'}/> : null}
        </div>

    )
}