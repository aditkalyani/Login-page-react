import Card from './Card'
import Button from './Button'
import classes from './Modal.module.css'
import { Fragment } from 'react'
import ReactDOM from 'react-dom'

function Backrop(props) {
    return <div className={classes.backdrop} onClick={props.onDismissError}/>
}

function Overlay(props) {
    return  (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>
                    {props.title}
                </h2>
            </header>

            <div className={classes.content}>
                <p>
                    {props.message}
                </p>
            </div>

            <footer className={classes.actions}>
                <Button onClick={props.onDismissError}>
                    Okay
                </Button>
            </footer>
        </Card>
    )
}

function Modal(props) {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backrop onDismissError={props.onDismissError} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <Overlay 
                    title={props.title}
                    message={props.message}
                    onDismissError={props.onDismissError}    
                />, 
                document.getElementById('overlay-root')
            )}
        </Fragment>
    )
}

export default Modal