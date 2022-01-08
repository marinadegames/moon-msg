// import
import React from "react";
import s from './Post.module.css'
import {BigHead} from "@bigheads/core";
import like from '../../../../../Assets/like.png'
import comments from '../../../../../Assets/msg.png'
import shareIcon from '../../../../../Assets/share.png'
import {PostType} from "../../../../../Redux/tempStore";
// types
type PostPropsType = {
    key: string
    shares: number
    likes: number
    text: string
    userName: string
    comments: number
    date: string
}

// assets


// components

export const Post = function ({...props}: PostPropsType) {

    const userLogo = () => (
        <BigHead
            accessory="roundGlasses"
            body="breasts"
            circleColor="blue"
            clothing="dressShirt"
            clothingColor="red"
            eyebrows="raised"
            eyes="normal"
            faceMask={false}
            faceMaskColor="black"
            facialHair="mediumBeard"
            graphic="vue"
            hair="balding"
            hairColor="brown"
            hat="none4"
            hatColor="white"
            lashes={false}
            lipColor="green"
            mask
            mouth="grin"
            skinTone="red"
        />
    )

    return (
        <div className={s.post} key={props.key}>
            <div className={s.headerPost}>
                <div className={s.userLogoPost}>{userLogo()}</div>
                <div className={s.dataPost}>
                    <div className={s.userNamePost}>{props.userName}</div>
                    <div className={s.datePost}>{props.date}</div>
                </div>
                <div className={s.boxBtnsDots}>
                    <div className={s.btnDotsPost}/>
                    <div className={s.btnDotsPost}/>
                    <div className={s.btnDotsPost}/>
                </div>

            </div>
            <div className={s.mainPost}>
                {props.text}
            </div>
            <div className={s.footerPost}>
                <div className={s.likesPost}>
                    <img src={like} alt={'like'} height={'30px'} width={'30px'}/>
                    <div className={s.likeCount}>{props.likes}</div>
                </div>
                <div className={s.commentsPost}>
                    <img src={comments} alt={'comments'} height={'30px'} width={'30px'}/>
                    <div className={s.commentsCount}>{props.comments}</div>
                </div>
                <div className={s.sharePost}>
                    <img src={shareIcon} alt={'shareIcon'} height={'30px'} width={'30px'}/>
                    <div className={s.shareCount}>{props.shares}</div>
                </div>
            </div>

        </div>
    )
}