import React from 'react'
import styles from './Home.module.css'
import {Link, useHistory} from 'react-router-dom'
import Card from '../../components/shared/Card/Card'
import Button from '../../components/shared/Button/Button'

const Home = () => {
  const signInLinkStyle={
    color: '#0077ff',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '10px'
  }

  const history = useHistory()
  function startRegister(){
    history.push('/register');
   
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Forum!!" icon='logo'>
       <p className={styles.text}>
        we're working hard to get Forum ready for everyone!
        while we wrap the finishing youches, we're adding people 
        gradulaay to make sure nothing breaks

       </p>
       <div>
        <Button onClick={startRegister} text="Get your User name"/>
       </div>
       <div className={styles.signinwrapper}>
          <span className={styles.hasinvite}>Have a invite text?</span>
          <Link style={signInLinkStyle} to="/login">Sign in</Link>
       </div>
      </Card>
      
    </div>
  )
}

export default Home
 