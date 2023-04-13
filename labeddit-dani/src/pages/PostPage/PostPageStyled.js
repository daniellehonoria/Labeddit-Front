import styled from "styled-components";

export const PostPageStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  header{
    background-color: #ededed;
    width: 100%;
    height: 60px;
    display: flex;
    position: relative;
    top: 0;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;
    padding-bottom: 20px;
  }
  .logo{
    align-items: center;
    justify-content: center;

  }
 h1{
    align-items: baseline;
    justify-content: center;
    color: #4088CB;
    font-weight: 600;
    font-size: 18px;
    margin-top: 25px;
    margin-left: 334px;
    
  }
  img {
    width: 30px;
    position: absolute;
    left: 50%;
    justify-content: center;
    align-items: center;
      }
      .loader {
    margin-top: 50%;
    width: 30px;
    height: 30px;
    border: 2px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
`