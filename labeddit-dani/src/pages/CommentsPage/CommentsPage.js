import React from 'react'
import { useParams } from 'react-router-dom'
import { CommentsPageStyled } from './CommentsPageStyled'

const CommentsPage = () => {

  //pega o dado necessário(id no caso) pra renderizar de acordo com o id passado
  const params = useParams()
  return (
    <CommentsPageStyled>
    <div>CommentsPage</div>
    {params.id}
    </CommentsPageStyled>
    
  )
}

export default CommentsPage