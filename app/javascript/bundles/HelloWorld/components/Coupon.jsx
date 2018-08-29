import React, {Fragment} from 'react';
import axios from 'axios';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import Heart from './headline_hearth.svg'
import Simple from './headline_simple.svg'
import Loader from './loader.svg'


export default class Coupon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      guests: [],
      selectedUserId: ''
    };
  }

  componentDidMount() {
    axios.get('/guests')
      .then(res => {
        this.setState({ guests: res.data.attendedUsers, loading: false });
      });
  }

  selectUser = (e) => {
    this.setState({
      selectedUserId: e.target.value
    })
  }

  submitCoupon = () => {
    axios.post('/register_gift', {user_id: this.state.selectedUserId, number: this.props.number}).then(res => {
      if (res.data.success) {
        window.location.href = '/my_coupons'
      }
    });
  }

  render() {
    console.log(this.state)
    return (
      <Fragment>
        { !this.state.loading && (
          <select onChange={this.selectUser}>
            {this.state.guests.map((user, index) => {
              return (<option value={user.id}>{user.name}</option>)})}
          </select>)}
        <button onClick={this.submitCoupon}>Submit</button>
      </Fragment>
    );
  }
}
