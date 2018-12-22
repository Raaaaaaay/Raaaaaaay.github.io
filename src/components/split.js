import React, { Component } from "react"
import { slide as Menu } from 'react-burger-menu'

class Split extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={this.props.topic.className}>
                <div class="centered">
                    <h2>{this.props.topic.label}</h2>
                    <img width="200" height="200" src={this.props.topic.icon} />
                </div>
            </div>
        )
    }
}

export default Split