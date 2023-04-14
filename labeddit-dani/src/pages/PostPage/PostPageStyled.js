import styled from "styled-components";

export const PostPageStyled = styled.header`
  display: grid;
  flex-wrap:wrap;
  align-items: center;
  justify-content: center;
  background-color: #E5E5E5;

  header{
    background-color: #E5E5E5;
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
  main{
    background-color:#FFFFFF ;
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
    .inputText{
      background-color: #EDEDED;
      display: flex;
      justify-content: center;
      margin-left:20px;
      margin-right: 20px;
      margin-top: 20px;
    }
    .creat-post-input{
      margin-top:100;
      margin-left: 300px;
      border-radius: 12px;
      display: grid;
      align-items: center;
      justify-content: center;  

    }
    .postButton{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 12px 145px;
      width: 340px;
      height: 47px;
      left: 33px;
      top: 269px;
      background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
      border-radius: 12px;
      color: #FFF;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 23px;
      margin-top: 3%;
      margin-bottom: 4%;
      margin-right: 20%;

    }
.input{
width: 340px;
height: 131px;
margin-left: auto;
margin-top: 126px;
background: #EDEDED;
border-radius: 12px;      
color: #6F6F6F;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;
justify-content: center;
align-items: center;
margin-top: 20px;

}
hr{
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
  margin-bottom: 10px;

}
.container-posts{
  display: grid;
  border-radius: 12px;  
  justify-content: center;
  align-items: center;
  text-align: center;
}
.creat-post-input{
margin: auto;
opacity:10;
justify-content: center;
align-items: center;
}
`