import React, { Component } from 'react'

export class search extends Component {
  state = {
    text: ''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.text === '') {
      this.props.setAlert ('Please add a search', 'alert-danger')
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: ''});
    }
    
  }



  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} action="">
          <input type="text" name="text" placeholder="search user..." value={this.state.text} onChange={this.onChange}/>
          <input type="submit" value="search" className="btn btn-primary btn-block"/>
        </form>
        {this.props.showClear && (
           <button className="btn btn-light btn-block " onClick={this.props.clearUsers}>Clear</button>
        )}
       
      </div>
    )
  }
}

export default search
