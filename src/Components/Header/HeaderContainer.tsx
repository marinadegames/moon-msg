// imports
import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../Redux/authReducer";
import {rootReducerType} from "../../Redux/store";


// types
// type MapDispatchPropsType = {
//     setAuthUser: (id: number, email: string, login: string) => void
// }
// type MapStatePropsType = {
//     id: number | null
//     email: string | null
//     login: string | null
// }
// type HeaderComponentType = MapStatePropsType & MapDispatchPropsType


// component
class HeaderContainer extends React.Component<any> {

    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true},
        )
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUser(id, email, login)
                }
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}


//  connect
const mapStateToProps = (state: rootReducerType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {
    setAuthUser: setAuthUserDataAC,
})(HeaderContainer)