import React from 'react';

const FormMessage = (props) => {
    console.log(props)
    const getBorderColor = () => {
        return props.status === 250 ? "red" : "green"
    }
    const borderColor = {
        border: `${getBorderColor()} solid 2px`
    }
    return (
        <div>
            <div className='message-form' style={borderColor}>
                {props.message}
            </div>
        </div>

    )
}
export default FormMessage