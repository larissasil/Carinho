import styled from 'styled-components'

const Container = styled.div`

  margin-top: 1.5em;
  justify-content: left;
  margin: 1em;

  .aval img{
      width:4em;
      height:auto;
      
  }
  .aval{
      margin-right:6em;
      margin-bottom:0.3em;
  }
  .descr{
      margin-bottom:0.3em; 
  }
  .date{
      margin-bottom:1.4em; 
      font-size: 13px;
      font-weight: bold;
  }
  .botao button{
      background-color: #24BF99;
      border:none;
      color: white;
      width: 180px;
      height: 32px;
      border-radius: 0.5em;
  }
  .botao{
      margin-bottom: 2.5em;
  }
`



export { Container }