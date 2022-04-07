// imports
import React, {memo, useState} from "react";
import s from './Pagination.module.css'

// types
type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPageHandler: (currentPage: number) => void
}

// component

export const Pagination = memo((props: PropsType) => {

        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        const [slicePage, setSlicePage] = useState<number[]>([0,20])

        const forward = () => {
            setSlicePage([slicePage[0] + 20, slicePage[1] + 20])
        }
        const back = () => {
            setSlicePage([slicePage[0] - 20, slicePage[1] - 20])
        }

        // return
        return (
            <React.Fragment>
                <button className={s.btnControl} onClick={back}> {'<<'} </button>
                    {pages.slice(slicePage[0], slicePage[1]).map(p => {
                        return (

                            <span
                                key={p}
                                onClick={() => props.setCurrentPageHandler(p)}
                                className={props.currentPage === p ? s.pageNumberButton_active : s.pageNumberButton}>
                            {p}
                        </span>
                        )
                    })}
                <button className={s.btnControl}  onClick={forward}> {'>>'} </button>
            </React.Fragment>
        )
    }
)