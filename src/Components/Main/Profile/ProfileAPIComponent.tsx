// import
import React from "react";
import {Profile} from "./Profile";
import {ProfileAPIComponentType} from "./ProfileContainer";
import {Navigate} from "react-router-dom";


// types


// class component
class ProfileAPIComponent extends React.Component<ProfileAPIComponentType> {

    componentDidMount() {
        const route = window.location.href.split('/')
        let userId = route[route.length - 1]
        if (!userId || userId === 'profile') userId = '2'
        this.props.setUserProfileThunkCreator(userId)

    }

    componentWillUnmount() {
        // this.props.setUserProfile(null)

    }

    render() {
        if (!this.props.isAuth) {
            return <Navigate to="/login"/>
        } else {
            return (
                <div>
                    <Profile {...this.props} profile={this.props.profile}/>
                </div>
            )
        }
    }
}

export default ProfileAPIComponent