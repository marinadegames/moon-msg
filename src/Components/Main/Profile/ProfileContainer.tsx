// imports
import {ProfileType, setUserProfileThunkCreator} from "../../../Redux/profileReducer";
import {rootReducerType} from "../../../Redux/store";
import {connect} from "react-redux";
import ProfileAPIComponent from "./ProfileAPIComponent";


// types
type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    setUserProfileThunkCreator: (userId: string) => void
}

export type ProfileAPIComponentType = MapDispatchPropsType & MapStateToPropsType

// container components
const mapStateToProps = (state: rootReducerType) => {
    return {
        profile: state.profilePage.profile
    }
}



// connect
export default connect(mapStateToProps, {
        setUserProfileThunkCreator: setUserProfileThunkCreator,
    }
)(ProfileAPIComponent)