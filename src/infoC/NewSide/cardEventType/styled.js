import styled from 'styled-components'


const Container = styled.div`

  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center;
   
  color: white; 
  width: 15em; 


  button {
      border: none;
      border-radius: 5em;
      padding: 0.6em 3em;
      background-color: #F0F8FF;
      color: black;
      font-family: Roboto;
      font-weight: 900;

      cursor: pointer;
  } 

.Text-sc {
    text-align: center; 
    padding: 1em 0em 1em 0em; 
    font-size: 1em; 
}


`

export { Container }