import React, { useReducer, useState } from "react"
import {Suscriptor} from '../types';

interface FormState {
    inputValues: Suscriptor
}

interface FormProps {
    onNewSub: (newSub: Suscriptor) => void
}

const Initial_Form_State = {
    nickname: '',
    subMonths: 0,
    avatar: '',
    description: ''
}

type FormReducerAction = {
    type: "change_value",
    payload: {
        inputName: string,
        inputValue: string
    }
} | {
    type: "clear_form"
}

const formReducer = (state: FormState["inputValues"], action: FormReducerAction) => {
    switch(action.type){
        case "change_value":
            const {inputName, inputValue} = action.payload
            return{
                ...state,
                [inputName]: inputValue
            }
        case "clear_form":
            return Initial_Form_State
    }
}

export default function Form ({onNewSub}: FormProps){
    //const [inputValues, setInputValues] = useState<FormState["inputValues"]>(Initial_Form_State)

    const [inputValues, dispatch] = useReducer(formReducer, Initial_Form_State)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewSub(inputValues)
        handleClearForm()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        dispatch({
            type: "change_value",
            payload:{
                inputName: name,
                inputValue: value
            }
        })
        /*setInputValues({
            ... inputValues,
            [e.target.name]: e.target.value
        })*/
    }

    const handleClearForm = () => {
        dispatch({
            type: "clear_form"
        })
        //setInputValues(Initial_Form_State)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={inputValues.nickname} onChange={handleChange}
                    type="text" name="nickname" placeholder="Nickname" />
                <input value={inputValues.subMonths} onChange={handleChange}
                    type="text" name="subMonths" placeholder="Sub Months" />
                <input value={inputValues.avatar} onChange={handleChange}
                    type="text" name="avatar" placeholder="Avatar" />
                <textarea value={inputValues.description} onChange={handleChange} 
                    name="description" placeholder="Your description" />
                <button onClick={handleClearForm} type="button">Clear the form</button>
                <button type="submit">Save new Sub</button>
            </form>
        </div>    
    )
}