import React, { Fragment } from 'react';
import { connect } from 'react-redux';

class Lists extends React.Component {
    state = {
        uname: '',
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleAction = (e) => {
        e.preventDefault();
        const { uname } = this.state;
        const { fetchList } = this.props;
        fetchList(uname);
    }

    render() {
        const { uname } = this.state;
        const { lists } = this.props
        return (
            <Fragment>
                <form method="post">
                    <div className="container">
                        <label for="uname"><b>Movie Name</b></label><br />
                        <input type="text" placeholder="Enter Movie Name" name="uname" onChange={(e) => this.handleChange(e)} value={uname} required /><br /><br />

                        <button type="submit" onClick={this.handleAction}>Search</button><br /> <br />

                    </div>
                </form>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Actors</th>
                        <th>Country</th>
                        <th>Type</th>
                        <th>Director</th>
                        <th>Released</th>
                    </tr>
                    <tr>
                        <td>{lists && lists.Title}</td>
                        <td>{lists && lists.Actors}</td>
                        <td>{lists && lists.Country}</td>
                        <td>{lists && lists.Genre}</td>
                        <td>{lists && lists.Director}</td>
                        <td>{lists && lists.Released}</td>
                    </tr>

                </table>
            </Fragment>
        );
    }
};
const mapStateToProps = (state, ownProps) => ({
    lists: state.list,
});


const mapDispatchToProps = dispatch => {
    return {
        fetchList: (data) => dispatch({ type: 'GET_LISTS', data }),
        loginSuccess: () => dispatch({ type: 'LOGIN_SUCCESS' })
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lists);
