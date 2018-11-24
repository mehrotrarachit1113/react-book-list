 import React, {Component} from 'react';
 import {connect} from 'react-redux';
 import {selectBook} from '../actions/index';
 import {bindActionCreators} from 'redux';

 class BookList extends Component{

   renderList(){
     return this.props.books.map((book)=>{
       return(
         <li
         key = {book.title}
         className = "list-group-item"
         onClick = {()=>this.props.selectBook(book)}>
         {book.title}
         </li>
       );
     });
   }

   render(){
     return(
       <ul className = "list-group col-sm-4">
         {this.renderList()}
       </ul>
     );
   }
 }

 //Anything returned from this fn(first argument in bindActionCreators) will show up as props in BookList
 function mapDispatchToProps(dispatch){
   //dispatch acts as a funnel which passes the result of action to all the reducers
   return bindActionCreators({ selectBook : selectBook},dispatch);
 }

 //Anything returned from this fn ends up being a props inside BookList
 function mapStateToProps(state){
   return{
     books : state.books
   };
 }

 //Promote BookList from Component to Containers-need to know about new dispatch method,selectBook
 export default connect(mapStateToProps, mapDispatchToProps)(BookList);
