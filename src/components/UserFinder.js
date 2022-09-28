import { Fragment, Component } from "react";
import classes from "./UserFinder.module.css";

import Users from "./Users";
import UsersContext from "../store/users-context";

class UserFinder extends Component {
  static contextType = UsersContext; // use this iso useContext (can only consume a single context per component)
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    //Use this iso useEffect w/ empty dependency array
    this.setState({ filteredUsers: this.context.users }); //e.g. send http request...
  }

  componentDidUpdate(prevProps, prevState) {
    //Use this iso useEffect w/ dependencies
    if (prevState.searchTerm !== this.state.searchTerm) {
      // Must check for a condition otherwise will loop infinitely (like using dependencies)
      const filteredUsers = this.context.users.filter((user) =>
        user.name.includes(this.state.searchTerm)
      );
      this.setState({ filteredUsers: filteredUsers });
    }
  }

  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value }); // setState always requires an object. React will automatically merge other object values
  };

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

export default UserFinder;
