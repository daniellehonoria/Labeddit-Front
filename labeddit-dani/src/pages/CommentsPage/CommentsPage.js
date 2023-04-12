import React from 'react'
import { useParams } from 'react-router-dom'

const CommentsPage = () => {

  //pega o dado necessário(id no caso) pra renderizar de acordo com o id passado
  const params = useParams()
  return (
    <>
    <div>CommentsPage</div>
    {params.id}
    </>
    
  )
}

export default CommentsPage