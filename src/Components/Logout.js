import React, {useEffect} from 'react'
import Menu from './Menu';
import Amplify from "aws-amplify";
import { Auth, Hub } from 'aws-amplify'
import {
  useHistory
} from "react-router-dom"


export default function Logout() {
  const history = useHistory();

  useEffect(() => { invalidateSession() }, [])

  async function invalidateSession() {
    try {
      console.log('invalidateSession')
      await Auth.signOut()
        .then(data => console.log(data))
        .catch(err => console.log(err));;
      console.log('invalidateSession')
      history.push("/");
    }
    catch(e) {
      if (e !== 'No current user') {
        console.log(e)
      }
    }
  }
  
  return (
      <div>
        <h1> Logout goes here </h1>
    </div>
  )
}
