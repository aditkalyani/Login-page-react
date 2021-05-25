import { useState, Fragment } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import classes from './AddUser.module.css'


function AddUser(props){

    const [emailState, setEmailState] = useState('')
    const [passwordState, setPasswordState] = useState('')
    const [error, setError] = useState()

    const submitFormHandler = (event)=>{
        event.preventDefault()

        if(emailState.trim().length===0){
            setError({
                title:'Error',
                message: 'Email field cannot be blank'
            })
            return;
        }

        if(passwordState.trim().length===0){
            setError({
                title:'Error',
                message: 'Password field cannot be blank'
            })
            return;
        }
        
        const userData = {
            email: emailState,
            password: passwordState,
            id: Math.random().toString()
        }

        props.getUserFormData(userData)

        setEmailState('')
        setPasswordState('')
    }

    const emailChangeHandler = (event)=>{
        setEmailState(event.target.value)
    }

    const passwordChangeHandler = (event)=>{
        setPasswordState(event.target.value)
    }
    
    const dissmissErrorHandler = ()=>{
        setError(null)
    }

    return (
        <Fragment>
            {error && <Modal title={error.title} message={error.message} onDismissError={dissmissErrorHandler}/>}
            
            <Card className={classes.input}>
                <form onSubmit={submitFormHandler} >
                    
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" value={emailState} onChange={emailChangeHandler}/>
                    
                    <label htmlFor="password" >password</label>
                    <input id="password" type="text" value={passwordState} onChange={passwordChangeHandler}/>

                    <Button type={'submit'}>Add User</Button>

                </form>
            </Card>
        </Fragment>
    )
}

export default AddUser

