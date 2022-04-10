// imports
import preloader from "../../assets/preloader.gif";
import React, {memo} from "react";


// types
type PreloaderPropsType = {
    isFetching: boolean
}

// component
export const Preloader = memo((props: PreloaderPropsType) => {
    return (
        <div>
            {props.isFetching ? <img src={preloader} style={{width:'100%'}} alt={'preloader'}/> : null}
        </div>

    )
})