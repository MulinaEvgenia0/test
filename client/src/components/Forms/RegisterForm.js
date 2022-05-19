import React, {useState} from 'react';
import DefaultInput from "../Inputs/DefaultInput";
import {RegisterFormApi} from "../../api/Register";
import {registerData} from "../../const/form";
import FormMessage from "../Messages/FormMessages";


function RegisterForm() {
    const [status, setStatus] = useState({message: '', status: 0})
    const [form, setForm] = useState({email: '', password: ''})
    const onChange = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const register = (e) => {
        e.preventDefault()
        RegisterFormApi(form).then((req) => {
            setStatus({...status, status: req.data.status, message: req.data.values.message})
            setTimeout(() => {
                setStatus({...status, message: ""})
            }, 5000)
        })

    }
    return (
        <div>
            <span>Регистрация</span>
            <form>
                {registerData.map((item, i) => {
                    return (<DefaultInput
                        key={i}
                        item={item}
                        onChange={onChange}
                        form={form}
                        register={register}
                    />)
                })}
            </form>
            {status.message.length>0 && <FormMessage message={status.message} status={status.status}/>}
        </div>

    )
}

export default RegisterForm