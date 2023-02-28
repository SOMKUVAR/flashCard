import React from 'react'

const Container = (props) => {
  return (
    <div className="block p-4 rounded-lg shadow-md bg-white my-5" onClick={props.onClick}>
            {props.children}
    </div>
  )
}

export default Container