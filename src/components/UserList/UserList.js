import Card from '../UI/Card'
import classes from './UserList.module.css'

function UserList(props){
    return (
        <Card className={classes.users}>
            <ul>
                {props.userList.map((user)=>{
                    return (
                        <li key={user.id}>
                            {user.email} {user.password}
                        </li>
                    )
                })}
            </ul>
        </Card>
    )
}

export default UserList