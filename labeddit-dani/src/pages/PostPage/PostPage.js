import { PostPageStyled } from "./PostPageStyled"
import logo from "../../assets/labeddit-logo.png"
import { Link, useNavigate } from "react-router-dom"
import { goToLoginPage } from "../../routes/coordinator"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import { GlobalContext } from "../../contexts/GlobalContext"
import PostCard from "../../components/Post/PostCard"
import line from "../../assets/line.svg"
const PostPage = (post) => {
    const [content, setContent] = useState("");
    const [comment, setComment] = useState([]);

    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);

    const [logout, setLogout] = useState(false)
    useEffect(()=>{
        const token = window.localStorage.getItem("labeddit-token")
        if(!token){
          goToLoginPage(navigate)
        }
      },[])
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
    useEffect(()=>{
        fetchPosts()
    },[])
    const fetchPosts = async()=>{
        try {
           const response = await axios.get(`${BASE_URL}/posts`)
            setPosts(response.data)
            
        } catch (error) {
            console.log(error)
        }
    }
    
    const likePost = async (postId) => {
        try {
          let body = {
            like: true,
          };
          await axios.put(`${BASE_URL}/posts/${postId}/like`, body, {
            headers: {
              Authorization: window.localStorage.getItem("labeddit-token"),
            },
          });
          fetchPosts();
        } catch (error) {
          console.log(error);
        }
      };
    
      const dislikePost = async (postId) => {
        try {
          let body = {
            like: false,
          };
          await axios.put(`${BASE_URL}/posts/${postId}/like`, body, {
            headers: {
              Authorization: window.localStorage.getItem("labeddit-token"),
            },
          });
          fetchPosts();
        } catch (error) {
          console.log(error?.response?.data);
          alert(error?.response?.data);
        }
      };

    const createPost = async () => {
        try {
          setIsLoading(true);
    
          const body = {
            content: content,
          };
           const response = await axios.post(
            `${BASE_URL}/posts/create`,
            body
          );
          setPosts(response.data);
          fetchPosts();
          setContent("");
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      const fetchComments = async (postId) => {
        try {
          const config = {
            headers: {
              Authorization: window.localStorage.getItem("labeddit-token"),
            },
          };
          const response = await axios.get(
            `${BASE_URL}/posts/comment/${postId}`,
            config
          );
          setComment(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchComments(post.id);
      }, []);
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
            <main>

            <section className="creat-post-input">
          <div className="input">
            <input className="inputText"
              type="text"
              placeholder="Escreva seu post..."
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </div>
          <button className= 'postButton'type="submit" onClick={createPost} disabled={isLoading}>
            {isLoading ? <div className="loading"></div> : "Postar"}
          </button>
        </section>
        <hr />
        <img src={line}/>
        
        <section className="container-posts">
          {Array.isArray(posts) && posts
            .map((post) => {
              return <PostCard key={post.id} post={post} like={likePost} comment={comment.length} dislike={dislikePost}/>;
            })
            .reverse()}
            
        </section>

        </main>
        </PostPageStyled>

    )
}

export default PostPage