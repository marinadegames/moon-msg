import sunsetIcon from "../../assets/sunset.png";
import nightIcon from "../../assets/night.png";
import morningIcon from '../../assets/morning.png'
import {Sun} from "../../assets/sun";
import React from "react";
import s from './GreetingDay.module.css'
import sunIcon from '../../assets/sun.svg'

type PropsType = {
    isAuth?: boolean
    login: string | null
}
export const GreetingDay = ({isAuth, login}: PropsType) => {

    const dateHours = new Date().getHours()

    return (
        <React.Fragment>
            {isAuth
            ?
                <div className={s.container}>
                    {dateHours >= 6 && dateHours < 11 && <><img className={s.iconStyle} src={morningIcon} alt={'nightIcon'}/> Good morning, {login}!</>}
                    {dateHours >= 11 && dateHours < 17 && <> <img className={s.sunIcon} src={sunIcon} alt={'sunIcon'}/> Good day, {login}!</>}
                    {dateHours > 17 && dateHours < 24 && <> <img className={s.iconStyle} src={sunsetIcon} alt={'sunsetIcon'}/> Good evening, {login}!</> }
                    {dateHours >= 0 && dateHours < 6 && <><img className={s.iconStyle} src={nightIcon} alt={'nightIcon'}/> Good night, {login}!</>}

                    {/*{dateHours >= 17 && dateHours < 0 ? <> <img className={s.iconStyle} src={sunsetIcon} alt={'sunsetIcon'}/> Good evening, {login}!</> :*/}
                    {/*dateHours >= 0 && dateHours < 6 ? <><img className={s.iconStyle} src={nightIcon} alt={'nightIcon'}/> Good night, {login}!</> :*/}
                    {/*dateHours >= 6 && dateHours < 11 ? <><img className={s.iconStyle} src={morningIcon} alt={'nightIcon'}/> Good morning, {login}!</> : null}*/}
                </div>
            :
                <div>
                    <Sun/>
                    Good morning!
                </div>
            }
        </React.Fragment>
    )
}



// <div>
//     {dateHours >= 17 && dateHours < 0 && <> <img src={sunsetIcon} alt={'sunsetIcon'}/> Good evening, {login}!</>}
//     {dateHours >= 0 && <><img src={nightIcon} alt={'nightIcon'}/> Good night, {login}!</>}
//     {dateHours >= 6 && <><Sun/> Good morning, {login}!</>}
// </div>
//
//
// <div>
//     <Sun/>
//     Good morning!
// </div>