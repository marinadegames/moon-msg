import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'

const Dialog = (props: any) => {
  return(
      <NavLink to={'/dialogs/' + props.id} className={s.navLinkDialog}>
          <div className={s.dialog}>
              <div className={s.nameUser}>{props.userName}</div>
          </div>
      </NavLink>
  )
}

const Message = (props: any) => {
  return <div className={s.message}>{props.text}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>

                <Dialog id='1' userName='Eugene Pashkevich'/>
                <Dialog id='2' userName='Elina Pashkevich'/>
                <Dialog id='3' userName='Jack Black'/>
                <Dialog id='4' userName='Vlad Topalov'/>
                <Dialog id='5' userName='Your Mamasha '/>

            </div>

            <div className={s.messages}>
                <Message text='Hi, how are you?'/>
                <Message text="Hello, i'm fine, thanks"/>
                <Message text='you ok?'/>
                <Message text="Yes, i'm right"/>
                <Message text="Good!"/>
            </div>
        </div>
    )
}

export default Dialogs;