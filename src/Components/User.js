import React ,{Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export class User extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
      }

      componentDidMount(){
        axios.get('http://localhost:4000/register')
          .then(response => {
            this.setState({ users: response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
      }
      tabRow(){
        return this.state.users.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
      }
  
    render(){
        return(
            <div>
            <h3 align="center">Users List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Email Id</th>
                  <th>Mobile Number</th>
                  <th>Password</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                { this.tabRow() }
              </tbody>
            </table>
          </div>
        )
    }
}

