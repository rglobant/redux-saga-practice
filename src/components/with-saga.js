import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/users-actions';


export default function WithSaga() {
  const dispatch = useDispatch()
  const users = useSelector((state)=> state.users);
  
  useEffect(()=> {
    dispatch(getUsers())
  }, [dispatch])


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
