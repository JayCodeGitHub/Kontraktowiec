import React from "react"
import styled from "styled-components"

const StyledHeader = styled.div`
@media(max-width: 999px) {
    h1 {
        font-size: 8vw;
    }
}
    width: 100vw;
    text-align: center;
    h1 {
        color: white;
        span {
            color: blue;
        }
    }
`

const Header = () => (
  <StyledHeader>
      <h1>Kontraktowiec<span>.pl</span></h1>
  </StyledHeader>
)

export default Header
