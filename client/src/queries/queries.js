import {gql} from 'apollo-boost';

const getBooksQuery = gql`
{
    books{
        name
        id
    }
}
`

const getAuthorsQuery = gql`
{
    authors{
        name
        id
    }
}
`

const addBookMutation = gql`
mutation($name:String!, $genre:String!, $authorId:ID!){
    addBook(name:$name, genre:$genre, authorId:$authorId){
        name
        id
    }
}
`
const updateBookMutation = gql`
mutation($name:String!){
    updateBook(name:$name, genre:$genre, authorId:$authorId){
        name
        genre
        
    }
}
`
const deleteBookMutation = gql`
mutation($id:ID!){
    deleteBook(id:$id){
        name
        
    }
}
`
const getBookQuery = gql `
query($id:ID){
    book(id:$id){
        id
        name
        genre
        author{
            id
            name
            age
            books{
                name
                id
            }
        }
    }
}
`
export { getAuthorsQuery, getBooksQuery, addBookMutation, updateBookMutation, deleteBookMutation, getBookQuery};