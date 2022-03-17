// imports
import {connect} from "react-redux";
import {getAuthUserDataTC, logoutTC, setAuthUserDataAC} from "../../Redux/authReducer";
import {rootReducerType} from "../../Redux/store";
import {HeaderAPIComponent} from "./HeaderAPIComponent";

// types
type MapStateToPropsType = {
    isAuth: boolean
    id: any
    email: any
    login: any
    avatar: any | null
}
type MapDispatchToPropsType = {
    getAuthUserDataThunkCreator: (id: any, email: string, login: string) => void
    logout: () => void
}
export type HeaderAPIComponentType = MapDispatchToPropsType & MapStateToPropsType

//  connect
const mapStateToProps = (state: rootReducerType) => ({
    isAuth: state.auth.isAuth,
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    avatar: state.profilePage.profile?.photos.small
})

export default connect(mapStateToProps, {
    setAuthUser: setAuthUserDataAC,
    getAuthUserDataThunkCreator: getAuthUserDataTC,
    logout: logoutTC,
})(HeaderAPIComponent)