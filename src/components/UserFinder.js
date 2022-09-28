import { Fragment, Component } from "react";
import classes from "./UserFinder.module.css";

import Users from "./Users";
import UsersContext from "../store/users-context";

class UserFinder extends Component {
  // use this iso useContext (can only consume a single context per component)
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  //Use this iso useEffect w/ empty dependency array
  componentDidMount() {
    this.setState({ filteredUsers: this.context.users }); //e.g. send http request...
  }

  //Use this iso useEffect w/ dependencies
  componentDidUpdate(prevProps, prevState) {
    // Must check for a condition otherwise will loop infinitely (like using dependencies)
    if (prevState.searchTerm !== this.state.searchTerm) {
      const filteredUsers = this.context.users.filter((user) =>
        user.name.includes(this.state.searchTerm)
      );
      this.setState({ filteredUsers: filteredUsers });
    }
  }

  searchChangeHandler = (event) => {
    // setState always requires an object. React will automatically merge other object values
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <Fragment>
          <div className={classes.finder}>
            <input
              type="search"
              onChange={this.searchChangeHandler.bind(this)}
            />
          </div>
          <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

export default UserFinder;
