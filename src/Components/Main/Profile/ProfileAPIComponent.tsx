// import
import React from "react";
import {Profile} from "./Profile";
import {ProfileAPIComponentType} from "./ProfileContainer";


// class component
class ProfileAPIComponent extends React.Component<ProfileAPIComponentType> {

    componentDidMount() {
        const route = window.location.href.split('/')
        let userId = route[route.length - 1]
        if (!userId || userId === 'profile') userId = String(this.props.authorizedUserId)
        this.props.setUserProfileThunkCreator(Number(userId))
        this.props.getStatus(Number(userId))
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