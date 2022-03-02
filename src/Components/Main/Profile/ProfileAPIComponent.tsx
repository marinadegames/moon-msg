// import
import React from "react";
import {Profile} from "./Profile";
import {ProfileAPIComponentType} from "./ProfileContainer";


// types


// class component
class ProfileAPIComponent extends React.Component<ProfileAPIComponentType> {

    componentDidMount() {
        const route = window.location.href.split('/')
        let userId = route[route.length - 1]
        if (!userId || userId === 'profile') userId = '2'
        this.props.setUserProfileThunkCreator(Number(userId))
        this.props.getStatus(Number(userId))
    }

    componentWillUnmount() {
        // this.props.setUserProfile(null)
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         status={this.props.status}
                         profile={this.props.profile}
                         updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}


export default ProfileAPIComponent