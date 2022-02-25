// imports
import {connect} from "react-redux";
import {getAuthUserDataThunkCreator, setAuthUserDataAC} from "../../Redux/authReducer";
import {rootReducerType} from "../../Redux/store";
import {HeaderAPIComponent} from "./HeaderAPIComponent";

// types
type MapStateToPropsType = {
    isAuth: boolean
    id: any
    email: any
    login: any
}
type MapDispatchToPropsType = {
    getAuthUserDataThunkCreator: (id: any, email: string, login: string) => void
}
export type HeaderAPIComponentType = MapDispatchToPropsType & MapStateToPropsType

//  connect
const mapStateToProps = (state: rootReducerType) => ({
    isAuth: state.auth.isAuth,
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
})

export default connect(mapStateToProps, {
    setAuthUser: setAuthUserDataAC,
    getAuthUserDataThunkCreator,
})(HeaderAPIComponent)