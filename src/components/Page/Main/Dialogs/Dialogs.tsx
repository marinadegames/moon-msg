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

const Dialogs = (props:any) => {

    let dialogsData = [
        { id: 1, name: 'Eugene' },
        { id: 2, name: "Elina" },
        { id: 3, name: "Jack" },
        { id: 4, name: "Vlad" },
        { id: 5, name: "Mamka" },
    ]

    let dialogsElements= dialogsData.map( dialog => <Dialog id={dialog.id} userName={dialog.name}/> )

    let messagesData = [
        { id: 1, text: 'Hi, how are you?' },
        { id: 2, text: "Hello, i'm fine, thanks" },
        { id: 3, text: "you ok?" },
        { id: 4, text: "Yes, i'm right" },
        { id: 5, text: "Good!" },
    ]

    let messagesElement = messagesData.map( message => <Message text={message.text}/>)


    return (
        <div className={s.dialogs}>

            <div className={s.dialogsList}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElement}
            </div>

        </div>
    )
}





export default Dialogs;