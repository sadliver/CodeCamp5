import React, { Component } from 'react'



class profile extends React.Component {
    render() {
        return (
            <div>
                my name is {this.props.name} i'm  {this.props.age} year old
            </div>
        )
    }
}

export default profile