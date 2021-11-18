import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>

                <NavLink to='/dialogs/1' className={s.navLinkDialog}>
                    <div className={s.dialog + ' ' + s.active}>
                        <div className={s.nameUser}>Eugene</div>
                    </div>
                </NavLink>

                <NavLink to='/dialogs/2'>
                    <div className={s.dialog}>
                        <div className={s.nameUser}>Elina</div>
                    </div>
                </NavLink>

                <NavLink to='/dialogs/3'>
                    <div className={s.dialog}>
                        <div className={s.nameUser}>Jack</div>
                    </div>
                </NavLink>

                <NavLink to='/dialogs/4'>
                    <div className={s.dialog}>
                        <div className={s.nameUser}>Vlad</div>
                    </div>
                </NavLink>

            </div>

            <div className={s.messages}>
                <div className={s.message}>Hi, how are you?</div>
                <div className={s.message}>Hello, i'm fine, thanks</div>
                <div className={s.message}>you ok?</div>
                <div className={s.message}>Yes, i'm right</div>
                <div className={s.message}>Good!</div>
            </div>
        </div>
    )
}

export default Dialogs;