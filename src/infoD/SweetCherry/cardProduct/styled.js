
import styled from 'styled-components'


const Container = styled.div`
  
  background-color: #D1EAF5;
  width: 20em;
  height: 30em;

  border-radius: 20px;
  cursor: pointer;


  .img-doce img{
      margin: 2em 0em 1em 2.5em;

      width: 15em;
      height: 12em;
  }

  .sobre-fav {
      display: flex;
      flex-direction: row;

      margin-left: 40px;
  }

  .nm-doce {
      font-size: 20px;
  }

  .icones {
      display: flex;
      flex-direction: row;

      margin-left: 60px;
  }

  .icone-carrinho img{
      width: 35px;
      height: auto;

      margin-right: 10px;
  }

  .preco {
      font-size: 20px;
      text-align: center;

      margin: 30px 0px 30px 0px;
  }

  button {
      background-color: #2F1747;

      color: #ffffff;
      border: 0px;
      border-radius: 50px;

      width:  100px;
      height: 50px;

      margin-left: 110px;
      cursor: pointer;
  }

  button:hover {
      background-color: #52277D;
      transition: all 0.5s ease-in;
  }

`


export { Container }