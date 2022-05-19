import React from 'react';

const LoginForm = (props) => {
    const {item, onChange, form, register} = props
    const getInputText = () =>{
        return (
            <input
                name={item.name}
                placeholder={item.placeholder}
                type={item.type}
                value={form[item.name]}
                onChange={onChange}
            />
        )
    }

    const getInputSubmit = () =>{
        return (
            <input
                name={item.name}
                placeholder={item.placeholder}
                type={item.type}
                value={item.value}
                onClick={register}
            />
        )
    }


    return (
        <>
            {item.type === "submit" ? getInputSubmit() : getInputText()}
        </>
    )
}

export default LoginForm