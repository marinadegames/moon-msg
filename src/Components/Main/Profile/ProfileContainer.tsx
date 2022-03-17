// imports
import {
    getStatusThunkCreator,
    ProfileType,
    setUserProfileThunkCreator,
    updateStatusThunkCreator
} from "../../../Redux/profileReducer";
import {rootReducerType} from "../../../Redux/store";
import {connect} from "react-redux";
import ProfileAPIComponent from "./ProfileAPIComponent";
import {Navigate} from "react-router-dom";


// types
type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    isAuth: boolean
    authorizedUserId: number
}
type MapDispatchPropsType = {
    setUserProfileThunkCreator: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
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
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        authorizedUserId: state.auth.id,
    }
}


// connect
export default connect(mapStateToProps, {
        setUserProfileThunkCreator: setUserProfileThunkCreator,
        getStatus: getStatusThunkCreator,
        updateStatus: updateStatusThunkCreator,
    }
)(AuthNavigateComponent)