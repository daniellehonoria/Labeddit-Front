//guarda as funções de redirecionamento
export const goToHomePage = (navigate) => {
    navigate("/");
  };
  
  export const goToLoginPage = (navigate) => {
    navigate("/login");
  };
  
  export const goToSignupPage = (navigate) => {
    navigate("/signup");
  };
  
  export const goToPostsPage = (navigate) => {
    navigate("/posts");
  };
  
  export const goToCommentsPage = (navigate, postId) => {
    navigate(`/posts/${postId}/comments`);
  };