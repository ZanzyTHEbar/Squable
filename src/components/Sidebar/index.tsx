import { Component } from 'solid-js'
import { ISidebarProps } from '@static/types/interfaces'

const Sidebar: Component<ISidebarProps> = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            {props.children}
        </div>
    )
}

export default Sidebar
