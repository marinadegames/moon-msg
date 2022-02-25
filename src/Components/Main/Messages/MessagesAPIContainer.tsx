// import
import React from "react";
import s from './Messages.module.css'
import {MsgTitle} from "./MsgTitle/MsgTitle";
import {MessagesAPIComponentType} from "./MessagesContainer";
import {Chat} from "./Chat/Chat";
import {Navigate} from "react-router-dom";


// components
export class MessagesAPIContainer extends React.Component<MessagesAPIComponentType> {

    componentDidMount() {
        console.log(this.props.isAuth)
    }


    render() {

        if (this.props.isAuth === false) {
            return <Navigate to="/login"/>
        } else {
            return (
                <div>
                    <div className={s.pageName}>Messages</div>

                    <div className={s.divMain}>

                        <div className={s.msgBoxLeft}>
                            <div className={s.titleMsgBoxPage}>Friends:</div>
                            <MsgTitle activeTitle={true}/>
                            <MsgTitle activeTitle={false}/>
                            <MsgTitle activeTitle={false}/>
                            <MsgTitle activeTitle={false}/>
                        </div>

                        <div className={s.msgBoxRight}>
                            <Chat allMessages={this.props.allMessages} sendMessage={this.props.sendMessageAC}/>

                        </div>

                    </div>

                </div>
            )
        }


    }
}
