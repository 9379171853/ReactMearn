import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component{
    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);  
        this.state = {
          username : '',
          emailid:'',
          mobileno: '',
          password: ''         
        }                 
      }

      componentDidMount() {
        axios.get('http://localhost:4000/register/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                  username: response.data.username, 
                  emailid: response.data.emailid,
                  mobileno: response.data.mobileno,
                  password: response.data.password
                 });
            })
            .catch(function (error) {
                console.log(error);
            })
      }

      onSubmit(e) {
        e.preventDefault();
        const obj = {
          username: this.state.username,
          emailid: this.state.emailid,
          mobileno: this.state.mobileno,
          password: this.state.password
        };
        axios.post('http://localhost:4000/register/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/users');
      }

      onChangeUserName(e){
        this.setState({
          username: e.target.value
        });
      }
   
      onChangeEmail(e){
       this.setState({
         emailid: e.target.value
       });
     }
 
     onChangeMobile(e){
       this.setState({
         mobileno: e.target.value
       });
     }
      
     onChangePassword(e){
       this.setState({
         password: e.target.value
       });
     }

     render() {
        return (
            <div id="register" style={{ marginTop: 10 }}>
            <h3>User Registration</h3>
            <form onSubmit= {this.onSubmit}>
                <div className="form-group">
                    <label>User Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.username}
                      onChange={this.onChangeUserName}
                      />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.emailid}
                      onChange={this.onChangeEmail}
                      />
                </div>
                <div className="form-group">
                    <label>Phone Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.mobileno}
                      onChange={this.onChangeMobile}
                      />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      />
                </div>
                    <div className="form-group">
                        <input type="submit" 
                          value="Update Users" 
                          className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
      }

}