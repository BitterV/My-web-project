import { Route, Switch } from 'react-router-dom';
import styles from './style.module.css';
import Test from '../test-api';
import Home from '../home';
import Chat from '../chat';
import SmartHouse from '../smart';
import GuessNumberGame from '../game'



const Main = () =>{

    return(
        <div className={styles.cont}>
                <Switch>
                <Route exact path= '/' component ={Home}/>
                 <Route path = '/chat' component={Chat}/>
                 <Route path = '/test' component ={Test}/>
                 <Route path = '/smart' component ={SmartHouse}/>
                 <Route path='/game' component={GuessNumberGame}/>
            </Switch>

            <p className={styles.text}>Welcome to my web project</p>
            <div className={styles.underline}></div>
            <svg className={styles.underline2} xmlns="http://www.w3.org/2000/svg" width="139" height="16" viewBox="0 0 139 16" fill="none">
<path d="M123 8.06154C123.034 12.4797 126.643 16.0337 131.062 15.9998C135.48 15.9658 139.034 12.3566 139 7.93846C138.966 3.52032 135.357 -0.0337492 130.938 0.000236535C126.52 0.0342223 122.966 3.64339 123 8.06154ZM1.01154 10.5L131.012 9.49996L130.988 6.50004L0.988462 7.50004L1.01154 10.5Z" fill="black" fill-opacity="0.67"/>
</svg>
        </div>
    )
}

export default Main;