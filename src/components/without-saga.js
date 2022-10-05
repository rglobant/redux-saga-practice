import React, {useEffect, useState} from 'react'
import { getUsers } from '../api/users/users-api'

export default function WithoutSaga() {
  const [users, setUsers] = useState([])

  useEffect(()=> {
    getUsers()
    .then((res)=> {
      setUsers(res)
    })
    .catch((err)=> {
      console.log(err)
    });


  }, [])

  return (
    <>
    {users.map((item)=> (
      <span key={item?.id}>
        {item?.name}
      </span>
    ))}
    </>
  )
}
