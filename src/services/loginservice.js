import React from 'react'
import axios from 'axios'

const baseurl="https://apisalon.softelsolutions.in/api"
export default async function loginservice(prop) {
 
 let response =  await axios.post(baseurl+"/login/userlogin",prop)
  return response
}
