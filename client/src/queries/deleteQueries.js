import {gql} from 'apollo-boost';


export const mutation = gql`
  mutation DeleteBook($title: String!) {
    deleteBook(title: $title)
  }
`

