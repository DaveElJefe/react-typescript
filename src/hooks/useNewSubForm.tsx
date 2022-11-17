import { useReducer } from "react"
import {Suscriptor} from '../types';

interface FormState {
    inputValues: Suscriptor
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

const useNewSubForm = () => {
    return useReducer(formReducer, Initial_Form_State)
}

export default useNewSubForm