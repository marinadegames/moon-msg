// imports
import React from "react";
import {Header} from "./Header";
import {HeaderAPIComponentType} from "./HeaderContainer";


// types

// component
export class HeaderAPIComponent extends React.Component<HeaderAPIComponentType> {

    componentDidMount() {
        this.props.getAuthUserDataThunkCreator(this.props.id, this.props.email, this.props.login)
    }

    render() {
        return <Header {...this.props}/>
    }
}
