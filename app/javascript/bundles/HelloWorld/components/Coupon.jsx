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
        <div className="container" style={{marginTop: 50+'px'}}>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="big-head-wrap">
                <img src={Heart}/>
              </div>
              <h2 className="big-heading mt-0 mt-0">Вітаємо, <span className="custom-color">тепер ти маєш</span></h2>
              <img className="headline_1" src={Simple} />
            </div>
          </div>
        </div>
        <div className='text-center'>
          <img src={`/images/coupons/${this.props.number}.jpg`} style={{width: 700+'px'}}/>
          <h3 style={{marginTop: 50+'px', marginBottom: 50+'px'}}>Для реєстрації сертифіката, вибери себе зі списку та натисни кнопку "Зареєструвати"</h3>
          <div className='row'>
            <div className='col-sm-6 offset-sm-3'>
              { !this.state.loading && (
                <select className='form-control' onChange={this.selectUser} style={{marginBottom: 50+'px'}}>
                  <option value=''>Вибери себе зі списку</option>
                  {this.state.guests.map((user, index) => {
                    return (<option value={user.id}>{user.name}</option>)})}
                </select>)}
            </div>
          </div>
          <button style={{marginBottom: 50+'px', paddingTop: 30+'px', paddingBottom: 30+'px', paddingLeft: 150+'px', paddingRight: 150+'px'}} className='btn btn-default fill-btn' onClick={this.submitCoupon}>Зареєструвати</button>
        </div>
      </Fragment>
    );
  }
}
