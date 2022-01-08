// import
import React from "react";
import s from './Post.module.css'
import {BigHead} from "@bigheads/core";
import like from '../../../../../Assets/like.png'
import comments from '../../../../../Assets/msg.png'
import shareIcon from '../../../../../Assets/share.png'
// types

// assets


// components

export const Post = function () {

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
        <div className={s.post}>
            <div className={s.headerPost}>
                <div className={s.userLogoPost}>{userLogo()}</div>
                <div className={s.dataPost}>
                    <div className={s.userNamePost}>Eugene Pashkevich</div>
                    <div className={s.datePost}>12.10.2021 in 16:34</div>
                </div>
                <div className={s.boxBtnsDots}>
                    <div className={s.btnDotsPost}/>
                    <div className={s.btnDotsPost}/>
                    <div className={s.btnDotsPost}/>
                </div>

            </div>
            <div className={s.mainPost}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </div>
            <div className={s.footerPost}>
                <div className={s.likesPost}>
                    <img src={like} alt={'like'} height={'30px'} width={'30px'}/>
                    <div className={s.likeCount}>1982</div>
                </div>
                <div className={s.commentsPost}>
                    <img src={comments} alt={'comments'} height={'30px'} width={'30px'}/>
                    <div className={s.commentsCount}>345</div>
                </div>
                <div className={s.sharePost}>
                    <img src={shareIcon} alt={'shareIcon'} height={'30px'} width={'30px'}/>
                    <div className={s.shareCount}>32</div>
                </div>
            </div>
        </div>
    )
}