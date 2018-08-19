import React, {Fragment} from 'react';
import axios from 'axios';
import Heart from './headline_hearth.svg'
import Simple from './headline_simple.svg'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class Tables extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tables: {},
      popoverOpen: false,
      hoverId: '1',
      tableId: '1',
      loading: true
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    axios.get('/sits')
      .then(res => {
        this.setState({ tables: res.data.tables, loading: false });
      });
  }

  sitUser = (tableId, chairId) => {
    if (confirm('Хочеш сісти тут?')) {
      axios.get(`/sit?chair_id=${chairId}`).then(res => {
        if (res.data.success) {
          window.location.reload()
        } else {
          if (res.data.error == '0') {
            window.location = `/users/sign_in?chair_id=${chairId}`
          } else if (res.data.error == '2') {
            alert("Спочатку натисни кнопку - Дякую за запрошення, я обов'язково буду")
          } else {
            alert('Спочатку натисни кнопку - Я хочу пересісти!')
          }
        }
      });
    }
  }

  toggle(e) {
    this.setState({
      hoverId: e.target.dataset.chair,
      tableId: e.target.dataset.table,
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    console.log(this.state)
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="big-head-wrap">
                <img src={Heart}/>
              </div>
              <h2 className="big-heading mt-0 mt-0">Розстановка <span className="custom-color">столів</span></h2>
              <img className="headline_1" src={Simple} />
            </div>
          </div>
        </div>
        { this.state.popoverOpen &&
          <Popover placement="bottom" isOpen={this.state.popoverOpen} target={`Popover${this.state.hoverId}`} toggle={this.toggle}>
            <PopoverBody>{this.state.tables[this.state.tableId][this.state.hoverId] && this.state.tables[this.state.tableId][this.state.hoverId].name}</PopoverBody>
          </Popover>}
        { !this.state.loading &&
          <div className='row text-center'>
            <div className='col-lg-6 offset-lg-3 wedding-table'>
              <div className='row'>
                <div className='col-sm-2'><img src='/images/12552981_927774783959446_8226873663936347331_n.jpg' alt="/images/missing.jpg"/></div>
                <div className='col-sm-2'><img src='https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/28698807_593697030987111_7099525507591448863_o.jpg?_nc_cat=0&oh=851a6c8dbb32f5d3cffb71fbb8b9edba&oe=5C02CC73' alt="/images/missing.jpg"/></div>
                <div className='col-sm-2'><img src='/images/eUuai1kaCeY.jpg' alt="/images/missing.jpg"/></div>
                <div className='col-sm-2'><img src='/images/8L_KvCOJ7wE.jpg' alt="/images/missing.jpg"/></div>
                <div className='col-sm-2'><img src='https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/18814623_1580588805345869_2399258320305741025_o.jpg?_nc_cat=0&oh=47e56c30e64d26626f3cf76a3809df59&oe=5C0089BC' alt="/images/missing.jpg"/></div>
                <div className='col-sm-2'><img src='/images/22853113_367986120303019_8357080663215630_n.jpg' alt="/images/missing.jpg"/></div>
              </div>
            </div>
            <div className='col-sm-12'></div>
            <div className='col-sm-4'>
              <div className='table'>
                <div className='circle-container'>
                  <a href='#' className='table-name center'>1</a>
                  { Object.keys(this.state.tables[Object.keys(this.state.tables)[0]]).map((chairId, i) => { return (
                    <Fragment key={i}>
                      { !!this.state.tables[Object.keys(this.state.tables)[0]][chairId].userId ?
                        <a className={`deg${i} user`} href='#'>
                          <div className="image-cropper">
                            <img src={ !!this.state.tables[Object.keys(this.state.tables)[0]][chairId].avatar ? this.state.tables[Object.keys(this.state.tables)[0]][chairId].avatar : '/images/missing.jpg'} id={`Popover${chairId}`} onMouseOver={this.toggle} data-table={Object.keys(this.state.tables)[0]} data-chair={chairId} alt={this.state.tables[Object.keys(this.state.tables)[0]][chairId].name}/>
                          </div>
                        </a>
                        : <a onClick={() => this.sitUser(Object.keys(this.state.tables)[0], chairId)} className={`deg${i}`}>{this.state.tables[Object.keys(this.state.tables)[0]][chairId].number}</a>}
                    </Fragment>
                  )})}
                </div>
              </div>
              <div className='table'>
                <div className='circle-container'>
                  <a href='#' className='table-name center'>2</a>
                  { Object.keys(this.state.tables[Object.keys(this.state.tables)[1]]).map((chairId, i) => { return (
                    <Fragment key={i}>
                      { !!this.state.tables[Object.keys(this.state.tables)[1]][chairId].userId ?
                        <a className={`deg${i} user`} href='#'>
                          <div className="image-cropper">
                            <img src={ !!this.state.tables[Object.keys(this.state.tables)[1]][chairId].avatar ? this.state.tables[Object.keys(this.state.tables)[1]][chairId].avatar : '/images/missing.jpg'} id={`Popover${chairId}`} onMouseOver={this.toggle} data-table={Object.keys(this.state.tables)[1]} data-chair={chairId} alt={this.state.tables[Object.keys(this.state.tables)[1]][chairId].name}/>
                          </div>
                        </a>
                        : <a onClick={() => this.sitUser(Object.keys(this.state.tables)[1], chairId)} className={`deg${i}`}>{this.state.tables[Object.keys(this.state.tables)[1]][chairId].number}</a>}
                    </Fragment>
                  )})}
                </div>
              </div>
            </div>
            <div className='col-sm-4 text-center'>
              <div className='colon'>Колона</div>
              <div className='table middle'>
                <div className='circle-container'>
                  <a href='#' className='table-name center'>3</a>
                  { Object.keys(this.state.tables[Object.keys(this.state.tables)[2]]).map((chairId, i) => { return (
                    <Fragment key={i}>
                      { !!this.state.tables[Object.keys(this.state.tables)[2]][chairId].userId ?
                        <a className={`deg${i} user`} href='#'>
                          <div className="image-cropper">
                            <img src={ !!this.state.tables[Object.keys(this.state.tables)[2]][chairId].avatar ? this.state.tables[Object.keys(this.state.tables)[2]][chairId].avatar : '/images/missing.jpg'} id={`Popover${chairId}`} onMouseOver={this.toggle} data-table={Object.keys(this.state.tables)[2]} data-chair={chairId} alt={this.state.tables[Object.keys(this.state.tables)[2]][chairId].name}/>
                          </div>
                        </a>
                        : <a onClick={() => this.sitUser(Object.keys(this.state.tables)[2], chairId)} className={`deg${i}`}>{this.state.tables[Object.keys(this.state.tables)[2]][chairId].number}</a>}
                    </Fragment>
                  )})}
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='table'>
                <div className='circle-container'>
                  <a href='#' className='table-name center'>4</a>
                  { Object.keys(this.state.tables[Object.keys(this.state.tables)[3]]).map((chairId, i) => { return (
                    <Fragment key={i}>
                      { !!this.state.tables[Object.keys(this.state.tables)[3]][chairId].userId ?
                        <a className={`deg${i} user`} href='#'>
                          <div className="image-cropper">
                            <img src={ !!this.state.tables[Object.keys(this.state.tables)[3]][chairId].avatar ? this.state.tables[Object.keys(this.state.tables)[3]][chairId].avatar : '/images/missing.jpg'} id={`Popover${chairId}`} onMouseOver={this.toggle} data-table={Object.keys(this.state.tables)[3]} data-chair={chairId} alt={this.state.tables[Object.keys(this.state.tables)[3]][chairId].name}/>
                          </div>
                        </a>
                        : <a onClick={() => this.sitUser(Object.keys(this.state.tables)[3], chairId)} className={`deg${i}`}>{this.state.tables[Object.keys(this.state.tables)[3]][chairId].number}</a>}
                    </Fragment>
                  )})}
                </div>
              </div>
              <div className='table'>
                <div className='circle-container'>
                  <a href='#' className='table-name center'>5</a>
                  { Object.keys(this.state.tables[Object.keys(this.state.tables)[4]]).map((chairId, i) => { return (
                    <Fragment key={i}>
                      { !!this.state.tables[Object.keys(this.state.tables)[4]][chairId].userId ?
                        <a className={`deg${i} user`} href='#'>
                          <div className="image-cropper">
                            <img src={ !!this.state.tables[Object.keys(this.state.tables)[4]][chairId].avatar ? this.state.tables[Object.keys(this.state.tables)[4]][chairId].avatar : '/images/missing.jpg'} id={`Popover${chairId}`} onMouseOver={this.toggle} data-table={Object.keys(this.state.tables)[4]} data-chair={chairId} alt={this.state.tables[Object.keys(this.state.tables)[4]][chairId].name}/>
                          </div>
                        </a>
                        : <a onClick={() => this.sitUser(Object.keys(this.state.tables)[4], chairId)} className={`deg${i}`}>{this.state.tables[Object.keys(this.state.tables)[4]][chairId].number}</a>}
                    </Fragment>
                  )})}
                </div>
              </div>
            </div>
            <div className='clearfix' style={{padding: 50+'px'}}></div>
          </div>}
      </section>
    );
  }
}
