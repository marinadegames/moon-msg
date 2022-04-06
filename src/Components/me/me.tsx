import {ProfileType, setUserProfileTC} from "../../redux/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Posts} from "../posts/Posts";
import {rootReducerType} from "../../redux/store";
import {MeInfo} from "./meInfo";
import {RouteNames} from "../../routes";
import {Navigate} from "react-router-dom";

export const Me = () => {

    const id = useSelector<rootReducerType, number | null>(state => state.auth.id)
    const isAuth = useSelector<rootReducerType, boolean>(state => state.auth.isAuth)
    const profile = useSelector<rootReducerType, ProfileType | null>(state => state.profilePage.profile)
    const dispatch = useDispatch()

    useEffect(() => {
        if (id) dispatch(setUserProfileTC(id))
    }, [id, dispatch])

    if (!isAuth) return <Navigate to={RouteNames.LOGIN}/>

    return (
        <div>
            <MeInfo profile={profile}/>
            <Posts profile={profile}/>
        </div>
    )
}