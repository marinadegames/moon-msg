// imports
import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../Redux/authReducer";
import {rootReducerType} from "../../Redux/store";
import {requestsAPI} from "../API/API";


// types

// component
class HeaderContainer extends React.Component<any> {

    componentDidMount() {
        requestsAPI.setAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
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