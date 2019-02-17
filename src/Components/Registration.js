import React ,{Component} from 'react';
import './Registration.css';
import axios from 'axios';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);  
        this.state = {
          username : '',
          emailid:'',
          mobileno: '',
          password: ''         
        }                 
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
    submituserRegistrationForm(e) {
        e.preventDefault();        
           console.log(`the values are ${this.state.username},
           ${this.state.emailid}, ${this.state.mobileno},${this.state.password}`)          
           const obj = {
             username: this.state.username,
             emailid: this.state.emailid,
             mobileno: this.state.mobileno,
             password: this.state.password
           };
           axios.post('http://localhost:4000/register/add',obj)
           .then(res => console.log(res.data));
           
           this.setState({
             username:'',
             emailid:'',
             mobileno:'',
             password:''
           })
      }
  
    render() {
      return (


        <div id="register" style={{ marginTop: 10 }}>
            <h3>User Registration</h3>
            <form onSubmit= {this.submituserRegistrationForm}>
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
                    <input type="submit" value="Register" className="btn btn-primary"/>
                </div>
            </form>
        </div>
 

  //     <div id="main-registration-container">
  //      <div id="register">
  //         <h3>Registration page</h3>
  //         <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
  //         <label>Name</label>
  //         <input type="text" name="username" 
  //         value={this.state.username} 
  //         onChange={this.onChangeUserName} />
         
  //         <label>Email ID:</label>
  //         <input type="text" name="emailid" 
  //         value={this.state.emailid} 
  //         onChange={this.onChangeEmail}  />
         
  //         <label>Mobile No:</label>
  //         <input type="text" 
  //         name="mobileno" 
  //         value={this.state.mobileno} 
  //         onChange={this.onChangeMobile}   />
         
  //         <label>Password</label>
  //         <input type="password" 
  //         name="password" 
  //         value={this.state.password}
  //         onChange={this.onChangePassword}  />
         
  //         <input type="submit" className="button"  value="Register"/>
  //         </form>
  //     </div>
  // </div>
  
        );
    }
  
  
  }

export default Registration

