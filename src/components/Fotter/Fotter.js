import React from "react"
import styled from "styled-components"

const StyledFotter = styled.div`
@media(max-width: 999px) {
    h1 {
        font-size: 6vw;
    }
}
    width: 100vw;
    text-align: center;
    border-top: solid 3px white;
    margin-top: 5vw;
    h1 {
        color: white;
        span {
            color: blue;
        }
    }
`

const Header = () => (
  <StyledFotter>
      <h1>Created by Jay<span>Code</span></h1>
  </StyledFotter>
)

export default Header
