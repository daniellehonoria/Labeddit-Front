import axios from 'axios';
import { useEffect, useState } from 'react'
import { BASE_URL } from '../constants/url';

export default function GlobalState() {
  const [posts, setPosts] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("labeddit-token")

    if(token) {
      setIsLogged(true)
    }
  })

  const context = {
    isLogged: isLogged,
    setIsLogged: setIsLogged
  };

  const fetchPosts = async () => {
    try {
      const config = {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      };
      const response = await axios.get(`${BASE_URL}/posts`, config);
      setPosts(response.data);
    } catch (error) {
      console.log(error?.response?.data);
      window.alert(error?.response?.data?.message);
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
      setComments(response.data);
    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  return {
    context,
    fetchPosts,
    posts,
    setPosts,
    fetchComments,
    comments,
    setComments,
    page,
    setPage
  }
}
