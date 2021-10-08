

import styled from 'styled-components'


const Container = styled.div`

  padding: 0.3em;
  border: solid gray 1px;
  border-radius: 15px;
  margin: 1em;
  max-width: 20em;

  & img {
    border-radius: 14px;
    width: 100%;
    height: auto;
  }


  .prod:hover{
    opacity:0.5;
    cursor: pointer;

  }

  .adc-carrinho button {
    background-color: #5EC5FF;
    font: 1.2em "Bebas Neue";

    text-align: center;
    padding: 0em 2.5em;

    border-radius: 5px;
    border: none;

    cursor: pointer;
    transition-duration: 0.5s;
    text-decoration: none;

    align-content: flex-end;
  }

  .adc-carrinho button:hover{
    cursor: pointer;
    background-color: #577CF5;
    color: #EEF2F2;
  }


  .adc-carrinho {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 2em;
  }

  .nome-produto {
    font: 1em "Oswald";
  }

  .valor {
    font: 1em "Oswald";
    font-weight: 700;
  }

  .parcelamento {
    font: 1em "Oswald";
  }

`



export { Container }