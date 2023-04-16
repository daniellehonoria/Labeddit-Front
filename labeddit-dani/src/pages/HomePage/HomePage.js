import { useNavigate } from "react-router-dom";
import {goToLoginPage} from '../../routes/coordinator'
import { useEffect } from "react";

const HomePage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    goToLoginPage(navigate)
  }, [])

  return (
    <div>HomePage</div>
  )
}

export default HomePage