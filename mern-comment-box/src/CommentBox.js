import React, {Component} from 'react'
import CommentList from './CommentList' 
import CommentForm from './CommentForm'
import DATA from './data' //error message says I can't import from outside of src
import style from './style'

class CommentBox extends Component {
    constructor(props) {
        super(props)
        this.state = { data: [] }
    }
render() {
    return(
        <div style={ style.commentBox }>
        <h2>Comments:</h2>
        <CommentList data={ DATA }/>
        <CommentForm />
        </div>
    )
}
}

export default CommentBox
