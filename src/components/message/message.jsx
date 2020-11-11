import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
    removeMessage
} from '../../redux/message/message.action';

import './message.scss';

const Message = ({
    removeMessage,
    success,
    error
}) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeMessage()
            clearTimeout(timeout);
        }, 4000);
    }, [success, error, removeMessage])

    let message = <div></div>
    if (success) {
        message = <div className='__success'> {success} </div>
    } else if (error) {
        message = <div className='__error'> {error} </div>
    }

    return message;
}

const mapDispatchToProps = (dispatch) => ({
    removeMessage: () => dispatch(removeMessage())
})

const mapStateToProps = ({ messageReducer }) => ({
    success: messageReducer.success,
    error: messageReducer.error
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Message)
