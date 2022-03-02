// imports
import {ProfileType, setUserProfileThunkCreator} from "../../../Redux/profileReducer";
import {rootReducerType} from "../../../Redux/store";
import {connect} from "react-redux";
import ProfileAPIComponent from "./ProfileAPIComponent";
import {Navigate} from "react-router-dom";


// types
type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    setUserProfileThunkCreator: (userId: string) => void
}
export type ProfileAPIComponentType = MapDispatchPropsType & MapStateToPropsType



// HOC
let AuthNavigateComponent = (props: any) => {
    if (!props.isAuth) return <Navigate to="/login"/>
    return <ProfileAPIComponent {...props}/>
}

// container component:
const mapStateToProps = (state: rootReducerType) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}


// connect
export default connect(mapStateToProps, {
        setUserProfileThunkCreator: setUserProfileThunkCreator,
    }
)(AuthNavigateComponent)