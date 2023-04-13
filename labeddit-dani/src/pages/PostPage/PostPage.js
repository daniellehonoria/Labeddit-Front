import { PostPageStyled } from "./PostPageStyled"
import logo from "../../assets/labeddit-logo.png"
import { Link, useNavigate } from "react-router-dom"
import { goToLoginPage } from "../../routes/coordinator"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import { GlobalContext } from "../../contexts/GlobalContext"

const PostPage = () => {
    const context = useContext(GlobalContext)

    const navigate = useNavigate()
    const [logout, setLogout] = useState(false)
    useEffect(()=>{
        if(!context.isLogged){
          goToLoginPage(navigate)
        }
      }, [])
    const loginPage = async () => {
        try {
            setLogout(true)
            await axios.get(`${BASE_URL}/posts`)
            window.localStorage.removeItem("labeddit-token")
            setLogout(false)
            goToLoginPage(navigate)
        } catch (error) {
            setLogout(false)

        }
    }
    return (
        <PostPageStyled>
            <header>
                <div className="logo">
                    <img src={logo} />
                </div>
                <div className="logoutLink">
                    <Link onClick={loginPage}>
                        {
                            !logout ? <h1>Logout</h1> : <span className="loader"></span>
                        }
                    </Link>
                </div>
            </header>
        </PostPageStyled>

    )
}

export default PostPage