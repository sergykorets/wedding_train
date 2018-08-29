import React, {Fragment} from 'react';
import axios from 'axios';

import Heart from './headline_hearth.svg'
import Simple from './headline_simple.svg'


export default class MyCoupons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      coupons: []
    };
  }

  componentDidMount() {
    axios.get('/get_coupons')
      .then(res => {
        this.setState({ coupons: res.data.coupons, loading: false });
      });
  }

  render() {
    return (
      <Fragment>
        <div className="container" style={{marginTop: 50+'px'}}>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="big-head-wrap">
                <img src={Heart}/>
              </div>
              <h2 className="big-heading mt-0 mt-0">Мої <span className="custom-color">сертифікати</span></h2>
              <img className="headline_1" src={Simple} />
            </div>
          </div>
        </div>
        { !this.state.loading && (
          <div className='coupons' style={{marginTop: 50+'px'}}>
            <div className='row text-center'>
              { this.state.coupons.map((coupon, index) => {
                return (
                  <div className='col-sm-4'>
                    <img src={`/images/coupons/${coupon.number}.jpg`} style={{width: 300+'px'}}/>
                  </div>)})}
            </div>
          </div>)}
      </Fragment>
    );
  }
}
