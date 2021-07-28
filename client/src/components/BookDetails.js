import React, {Component} from 'react';

import { graphql } from 'react-apollo';
import {flowRight as compose} from 'lodash';
import {updateBookMutation, deleteBookMutation, getBookQuery} from '../queries/queries'


class BookDetails extends Component{
    displayBookDetails(){
        const {book} = this.props.data;
        if(book){
            return(
                <div>
                    <h2>Name:{book.name}</h2>
                    <p>Genre:{book.genre}</p>
                    <p>Author:{book.author.name}</p>
                    <p>All books by this author:</p>
                    <ul className="other-books">
                        {
                            book.author.books.map(item=>{
                                return <li key={item.id}>{item.name}</li>
                            })
                        }
                    </ul>
                   
                </div>
                
            )
        }else{
            return(
                <div>No book selected....</div>
            )
        }
    }
    submitForm(e){
        e.preventDefault();
        this.props.addBookMutation({
            variables:{
                name:this.state.name
            },
        
        })
    }
    render(){
        console.log(this.props)
        return(
             <div id="book-details">
              
                {this.displayBookDetails()}
                
                
                <form id="update-book" onSubmit={this.submitForm.bind(this)}>
                    <div className="field">
                       <label>Book name:</label>
                       <input type="text" onChange={(e) => this.setState({name:e.target.value})}/>

                    </div>
                    
                    
               </form>

             </div>
        );
    }
}

export default compose(
    graphql(getBookQuery,{
    options: (props)=>{
        return{
            variables:{
                id:props.bookId
            }
        }
    }},
    graphql(deleteBookMutation,{name:deleteBookMutation}),
    graphql(updateBookMutation,{name:updateBookMutation})
))(BookDetails);
