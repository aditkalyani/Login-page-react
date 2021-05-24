import Card from './Card'
import Button from './Button'
import classes from './Modal.module.css'

function Modal(props) {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onDismissError}/>

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
        </div>
    )
}

export default Modal