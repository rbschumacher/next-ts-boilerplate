import styled from "styled-components"

const Home = () => {
  return (
    <Main>
      <h1>Welcome to Schumacher's Next.js boilerplate</h1>
    </Main>
  )
}

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #131313;
  color: white
`

export default Home
