import React from "react"
import styled from "styled-components"
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

const Wrapper = styled.div`
color: white;
text-align: center;
h1 {
  @media(max-width: 999px) {
    font-size: 6vw;
  }
}
`
const Opis = styled.div`
@media(max-width: 999px) {
  display: none;
}
  width: 80vw;
  margin-left: 10vw;
  margin-right: 10vw;
  margin-bottom: 2.9vw;
  margin-top: 2vw;

`
const Wpisy = styled.div`
@media(max-width: 999px) {
  min-height: 160vw;
}
  width: 100vw;
  a {
    color: inherit;
    text-decoration: none;
  }
` 
const Wpis = styled.div`
border: solid white 3px;
  border-radius: 50px;
  width: 90vw;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-bottom: 5vw;
  padding-right: 2vw;
  padding-left: 2vw;
@media(min-width: 1000px) {
  width: 80vw;
  min-height: 10vw;
  margin-right: 10vw;
  margin-left: 10vw;
  margin-bottom: 3vw;
  :hover {
    border: solid blue 3px;
    color: blue;
  }
}
  

`
const Title = styled.h1`
  text-align: center;
  @media(min-width: 1000px) {
    font-size: 1.3vw;
}
@media(max-width: 999px) {
  font-size: 5vw;
}
`
const Thumbnail = styled.h3`
@media(max-width: 999px) {
  font-size: 3vw;
}
@media(min-width: 1000px) {
}
`

const IndexPage = ({data}) => {
  const opis = data.allDatoCmsDescription.edges;
  const wpis = data.allDatoCmsArticle.edges;
  return (
  <>
    <Wrapper>
      {opis.map(({node}) => {
        return (
          <Opis>{node.paragraph}</Opis>
        )
      })}
      <h1>Wpisy na Blogu</h1>
      <Wpisy>
        {wpis.map(({node}) => {
          return (
            <div key={node.slug}>
              <Link href={node.slug}>
                <Wpis>
                  <Title>{node.title}</Title>
                  <Thumbnail>{node.thumbnail}</Thumbnail>
                </Wpis>
              </Link>
            </div>
          )
        })}
      </Wpisy>
    </Wrapper>
  </>
  )
}

export const query = graphql`
  query {
    allDatoCmsDescription {
      edges {
        node {
          paragraph
        }
      }
    }
    allDatoCmsArticle {
      edges {
        node {
          id,
          title
          thumbnail
          slug
          paragraph
        }
      }
    }
  }
`

export default IndexPage
