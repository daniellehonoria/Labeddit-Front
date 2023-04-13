import styled from "styled-components";

export const HeaderStyled = styled.header`
display: flex;
  align-items: center;
  justify-content: center;
  div {
    background-color: #ededed;
    width: 100%;
    height: 50px;
    display: flex;
    position: relative;
    top: 0;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;
  }
  img {
    width: 28px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .close {
    position: absolute;
    left: 40px;
  }`