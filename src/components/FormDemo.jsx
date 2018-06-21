import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery'

import '../css/FormDemo.css';

class FormDemo extends Component {
  constructor(props) {
    super(props)
    // state = props.store.getState();
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const {name, email, message} = this.props;
    const data = JSON.stringify({name, email, message})
    $.get(`http://localhost:3030/test?data=${data}`).then((res)=>{
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
    // axios.post(
    //   'http://167.99.75.117:8000/leads/',
    //   { 
    //     headers: {
    //       'accept': 'application/json',
    //       'accept-language': 'en_US',
    //       'content-type': 'application/x-www-form-urlencoded',
    //       'vary': 'Accept'
    //     },
    //     body: data
    //   }
    // ).then((response) => {
    //   console.log(response);
    // }).catch((error) => {
    //   console.log(error);
    // });
  }
  render() {
    return (
      <div className="content">
        <h1>CONTACT US</h1>
        <p>Ready to deploy cutting edge software to boost your productivity and sales? Get in touch with us.</p>
        <form>
          <input type="text" name="name" placeholder="* Your Name" className="name"
            value={this.props.name} onChange={(e) => {this.props.changeName(e)}} />
          <input type="text" name="email" placeholder="* Your Email" className="email"
            value={this.props.email} onChange={(e) => {this.props.changeEmail(e)}} />
          <textarea rows="4" cols="70" name="message" placeholder="Your Message" className="message"
            value={this.props.message} onChange={(e) => {this.props.changeMessage(e)}}></textarea>
        </form>
        <div>
          <button className="submit" onClick={this.handleClick}>SEND MESSAGE</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  var info = state.formData

  return {
    name: info.name,
    email: info.email,
    message: info.message
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeName (e) {
      dispatch({
        type: 'CHANGE_NAME',
        name: e.target.value
      })
    },
    changeEmail (e) {
      dispatch({
        type: 'CHANGE_EMAIL',
        email: e.target.value
      })
    },
    changeMessage (e) {
      dispatch({
        type: 'CHANGE_MESSAGE',
        message: e.target.value
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormDemo)