import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const Title = styled.h1`
    text-align: center;
    color: blue;
    @media(max-width: 999px) {
        font-size: 7vw;
    }
`
const Wrapper = styled.div`
@media(max-width: 999px) {
    min-height: 160vw;
    h3 {
        font-size: 3vw;
    }
}
  width: 90vw;
  min-height: 40vw;
  margin-right: 5vw;
  margin-left: 5vw;
  padding-right: 5vw;
  padding-left: 5vw;
  border: solid white 3px;
  border-radius: 50px;
  color: white;
`

const Article = ({ pageContext: { slug }, data: { article }}) => {
    return (
        <div>
            <Title>{article.title}</Title>
            <Wrapper>
                <h3>{article.paragraph}</h3>
            </Wrapper>
        </div>
    )
}

export const query = graphql`
    query fetchArticle($slug: String) {
        article: datoCmsArticle(slug: {eq: $slug }) {
            id,
            slug
            title
            thumbnail
            paragraph
        }
    }
`

export default Article;