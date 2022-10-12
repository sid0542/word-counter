import React from 'react'

export default function Alert(props) {

    // const cap = (word) =>{
    //     const lower = word.toLowerCasse();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong> : {props.alert.msg}
    </div>
  )
}
