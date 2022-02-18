// import
import React from "react";
import {ProfileType, SetUserProfileAC} from "../../../Redux/profileReducer";
import {Profile} from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import {rootReducerType} from "../../../Redux/store";

// types
type ProfileContainerPropsType = any

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        console.log(this.props)
        const route = window.location.href.split('/')
        console.log(route[route.length - 1])
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${route[route.length - 1]}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }

}

// CONNECT
type MSTP_type = {
    profile: ProfileType | null
}
let mapStateToProps = (state: rootReducerType): MSTP_type => ( {
    profile: state.profilePage.profile
})

export default connect (mapStateToProps, {
    setUserProfile: SetUserProfileAC,
} ) (ProfileContainer);