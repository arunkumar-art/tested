import React from 'react';
import {connect} from 'react-redux';

class Login extends React.Component {
    state={
        uname:'',
        password: '',
    };
    componentDidMount() {
        const {fetchList} = this.props;
        fetchList();
    }
    handleChange = (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleAction=(e)=>{
        e.preventDefault();
        const {loginSuccess} = this.props;
loginSuccess();
    }

    render() {
        const {uname, password} = this.state;
        return (
            <form method="post">

                <div className="container">
                    <label for="uname"><b>Username</b></label><br />
                    <input type="text" placeholder="Enter Username" name="uname" onChange={(e)=> this.handleChange(e)} value={uname} required /><br /><br />

                    <label for="psw"><b>Password</b></label><br />
                    <input type="password" placeholder="Enter Password" onChange={(e)=> this.handleChange(e)} value={password} name="password" required /><br /><br />
                        
                    <button type="submit" onClick={this.handleAction}>Login</button><br />
                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                </div>
            </form>
        );
    }
};
const mapStateToProps = (state, ownProps) => ({
    lists: state.list,
    lists: state.isloggedIn,
    
  });


const mapDispatchToProps = dispatch => {
    return {
      fetchList: () => dispatch({ type: 'GET_LISTS' }),
      loginSuccess: () => dispatch({ type: 'LOGIN_SUCCESS' })
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
