import React from 'react'

function List(props) {
    return (
        <ul id='list'>
            list
            {props.list && props.list.map((item, index) =>
                <li key={index} >
                    {item}
                </li>
            )}
        </ul>
    )
}

export default List
