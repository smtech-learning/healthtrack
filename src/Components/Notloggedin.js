import React, {useEffect} from 'react'
import Menu from './Menu';
import Amplify from "aws-amplify";
import { Auth, Hub } from 'aws-amplify'
import {
  useHistory
} from "react-router-dom"


export default function Logout() {
  const history = useHistory();
  return (
      <div>
          <h1> You have not logged in yet. Plese logi n here </h1>
          <h2>  Login Link. </h2>
    </div>
  )
}
