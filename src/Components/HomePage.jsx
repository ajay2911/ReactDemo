import React from 'react';
import CategoriesTabView from './CategoriesTabView.jsx'
import '../style.css'
import LoginPopup from './LoginPopup';
var div_style= {display:'flex'};

class HomePage extends React.Component {

constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      validSession: false
    }
  }

  authorizeLogin = (enteredUsername, enteredPassword) =>{
    if(enteredUsername === enteredPassword){

      this.setState({
        username: enteredUsername,
        password: enteredPassword,
        validSession: true,
        tabList: []
      });
    }
  }

//AJAX Call to fetch data
/*
 getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

*/

render() {

      return (
        
        <div>
         <div style={div_style}>                    
            <img  style={{ margin:'0 auto'}} className='logoSpan' src={require("../Images/idhp_icon.png")} alt='IDHP Icon'/>
         </div>

         <div style={{ margin:'0 auto'}} className='logoSpan'>   
            {!this.state.validSession ? <LoginPopup username={this.state.username} password={this.state.password} onlogin={this.authorizeLogin}/> : null }

            {this.state.validSession ? <CategoriesTabView /> : null }
         </div>
        </div>
      );
   }
}
export default HomePage;
