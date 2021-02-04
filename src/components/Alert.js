import React from 'react'

const Alert = ({ type, message }) => {
    return (
        <div>
            <div className={`alert alert-${type}`}>
                <i className="fas fa-info-circle"></i>{message}
            </div>
        </div>
    )
}

export default Alert
