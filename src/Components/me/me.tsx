import {ProfileType} from "../../redux/profileReducer";
import {useSelector} from "react-redux";
import {Posts} from "../posts/Posts";
import {rootReducerType} from "../../redux/store";
import {MeInfo} from "./meInfo";
import {RouteNames} from "../../routes";
import {Navigate} from "react-router-dom";

export const Me = () => {

    const isAuth = useSelector<rootReducerType, boolean>(state => state.auth.isAuth)
    const profile = useSelector<rootReducerType, ProfileType | null>(state => state.profilePage.profile)
    const status = useSelector<rootReducerType, string>(state => state.profilePage.status)

    if (!isAuth) return <Navigate to={RouteNames.LOGIN}/>

    return (
        <div>
            <MeInfo profile={profile} status={status}/>
            <Posts profile={profile}/>
        </div>
    )
}