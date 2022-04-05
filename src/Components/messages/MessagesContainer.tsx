// imports
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/store";
import {AllMessagesType, SendMessageAC} from "../../redux/dialogsReducer";
import {MessagesAPIContainer} from "./MessagesAPIContainer";


// types
type MapStateToPropsType = {
    isAuth: boolean | null
    allMessages: AllMessagesType
}
type MapDispatchToPropsType = {
    sendMessageAC: (text: string) => void
}
export type MessagesAPIComponentType = MapDispatchToPropsType & MapStateToPropsType


//  connect
const mapStateToProps = (state: rootReducerType) => ({
    isAuth: state.auth.isAuth,
    allMessages: state.allMessages
})
export default connect(mapStateToProps, {
    sendMessageAC: SendMessageAC
})(MessagesAPIContainer)