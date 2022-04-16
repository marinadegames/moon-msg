// imports
import {connect} from "react-redux";
import {MessagesAPIContainer} from "./MessagesAPIContainer";
import {AllMessagesType, SendMessageAC} from "../../Redux/dialogsReducer";
import {rootReducerType} from "../../Redux/store";


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