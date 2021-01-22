import gql from 'graphql-tag'

const allCategories = gql`
    query {
    allCategories {
        id
        title
    }
}
`

const randomQuestionByCategory = gql`
    query ($categoryId: ID!){
        randomQuestionByCategory(categoryId: $categoryId) {
            id
            question
            answerMinimum
            answerMaximum
        }
    }
`

export { allCategories, randomQuestionByCategory }
