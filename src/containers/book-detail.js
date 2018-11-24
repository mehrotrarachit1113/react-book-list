  import React, {Component} from 'react';
  import {connect} from 'react-redux';

  class BookDetail extends Component{

    render(){
      if(!this.props.activeBook){
        return <div>Select a book</div>
      }
      return(
        <div>
          <h3>Book Details: </h3>
          <div>Title = {this.props.activeBook.title}</div>
          <div>Pages = {this.props.activeBook.pages}</div>
        </div>
      );
    }
  }

  function mapStateToProps(state){
    return{
      activeBook : state.activeBook
    };
  }

  export default connect(mapStateToProps)(BookDetail);
