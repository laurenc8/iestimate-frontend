import gql from 'graphql-tag'

const allCategories = gql`
    query {
    allCategories {
        id
        title
    }
}
`

const leaderboardByCategory = gql`
    query ($categoryId: ID!) {
        leaderboardByCategory(categoryId: $categoryId) {
            id
            username
            firstName
            lastName
            accuracy
            scoreByCategory(categoryId: $categoryId) {
                score
        }
	}
}
`

export { allCategories, leaderboardByCategory }
