// import
import React from "react";
import {ProfileType, SetUserProfileAC} from "../../../Redux/profileReducer";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {rootReducerType} from "../../../Redux/store";
import {requestsAPI} from "../../API/API";

// types
type ProfileContainerPropsType = any

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        const route = window.location.href.split('/')
        let userId = route[route.length - 1]
        if (!userId || userId === 'profile') userId = '2'
        requestsAPI.setProfile(userId).then(data => this.props.setUserProfile(data));
    }

    componentWillUnmount() {
        this.props.setUserProfile(null)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }

}

// CONNECT
type MSTP_type = {
    profile: ProfileType | null
}
let mapStateToProps = (state: rootReducerType): MSTP_type => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {
    setUserProfile: SetUserProfileAC,
})(ProfileContainer);