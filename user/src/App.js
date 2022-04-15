import React from 'react'
import {useDispatch} from 'react-redux'

import {getMemos} from './action/memoAct'
import {Memos} from './comp/Memos'

export const App =()=> {
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = React.useState(null)

  React.useEffect(()=>{
  dispatch(getMemos())
}, [currentId, dispatch])

  return (
    <div>
     <Memos setCurrentId={setCurrentId} />
    </div>
  );
}


