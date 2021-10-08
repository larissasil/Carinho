import styled from 'styled-components'


const Container = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: center;
    height: 100vh;

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

.Specific-search {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  height: 50vh; 
  background: linear-gradient(to top, #2f4f4f 0%, #1a4949 100%);
}


`

export { Container }