import React, {Fragment} from 'react';
import axios from 'axios';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: {},
      loading: true,
      popoverOpen: false,
      hoverId: '1'
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    axios.get('/places')
      .then(res => {
        this.setState({ places: res.data.places, loading: false });
      });
  }

  handleReservation(place) {
    if (this.state.places[place].userId) {
      alert(`${this.state.places[place].userName} вже тут їде`)
    } else {
      if (confirm('Хочеш їхати тут?')) {
        axios.put('/reserve', {
          place: place
        })
          .then(res => {
            if (res.success) {
              window.location.reload()
            } else {
              window.location = '/users/sign_in'
            }
          });
      }
    }
  }

  toggle(e) {
    this.setState({
      hoverId: e.target.dataset.place,
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <Fragment>
        <h1>Займаємо місця на поїзд 13 вересня (Київ - Івано-франківськ)</h1>
        <h4>Для замовлення поїзда потрібно точно знати кількість людей, тому вибирайте собі місце і бронюйте за собою</h4>
        <h6>Для резервації місця потрібно пройти швидку авторизацію через Facebook або зареєструватися за допомогою пошти</h6>
        <div className="wagon-scheme">
          <div className="inner">
            <div className="scheme">
              <div className="wagon-floors">
                { !this.state.loading &&
                  <div className="floor floor-1" style={{width: 868 + 'px', height: 125 + 'px'}}>
                    <Popover placement="bottom" isOpen={this.state.popoverOpen} target={`Popover${this.state.hoverId}`} toggle={this.toggle}>
                      <PopoverBody>{this.state.places[this.state.hoverId] && this.state.places[this.state.hoverId].userName}</PopoverBody>
                    </Popover>
                    <div id="Popover2" onMouseOver={this.toggle}  data-place="2" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[2].userId ? 'oc place' : 'fr place'} style={{left: 78+'px', top: 5+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>2</div>
                    <div id="Popover4" onMouseOver={this.toggle} data-place="4" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[4].userId ? 'oc place' : 'fr place'} style={{left: 118+'px', top: 5+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>4</div>
                    <div id="Popover6" onMouseOver={this.toggle} data-place="6" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[6].userId ? 'oc place' : 'fr place'} style={{left: 158+'px', top: 5+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>6</div>
                    <div id="Popover8" onMouseOver={this.toggle} data-place="8" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[8].userId ? 'oc place' : 'fr place'} style={{left: 198+'px', top: 5+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>8</div>
                    <div id="Popover10" onMouseOver={this.toggle} data-place="10" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[10].userId ? 'oc place' : 'fr place'} style={{left: 238+'px', top: 5+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>10</div>
                    <div id="Popover12" onMouseOver={this.toggle} data-place="12" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[12].userId ? 'oc place' : 'fr place'} style={{left: 278+'px', top: 5+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>12</div>
                    <div id="Popover14" onMouseOver={this.toggle} data-place="14" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[14].userId ? 'oc place' : 'fr place'} style={{left: 318+'px', top: 5+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>14</div>
                    <div id="Popover16" onMouseOver={this.toggle} data-place="16" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[16].userId ? 'oc place' : 'fr place'} style={{left: 358+'px', top: 5+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>16</div>
                    <div id="Popover18" onMouseOver={this.toggle} data-place="18" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[18].userId ? 'oc place' : 'fr place'} style={{left: 398+'px', top: 5+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>18</div>
                    <div id="Popover20" onMouseOver={this.toggle} data-place="20" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[20].userId ? 'oc place' : 'fr place'} style={{left: 438+'px', top: 5+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>20</div>
                    <div id="Popover22" onMouseOver={this.toggle} data-place="22" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[22].userId ? 'oc place' : 'fr place'} style={{left: 478+'px', top: 5+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>22</div>
                    <div id="Popover24" onMouseOver={this.toggle} data-place="24" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[24].userId ? 'oc place' : 'fr place'} style={{left: 518+'px', top: 5+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>24</div>
                    <div id="Popover26" onMouseOver={this.toggle} data-place="26" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[26].userId ? 'oc place' : 'fr place'} style={{left: 558+'px', top: 5+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>26</div>
                    <div id="Popover28" onMouseOver={this.toggle} data-place="28" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[28].userId ? 'oc place' : 'fr place'} style={{left: 598+'px', top: 5+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>28</div>
                    <div id="Popover30" onMouseOver={this.toggle} data-place="30" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[30].userId ? 'oc place' : 'fr place'} style={{left: 638+'px', top: 5+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>30</div>
                    <div id="Popover32" onMouseOver={this.toggle} data-place="32" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[32].userId ? 'oc place' : 'fr place'} style={{left: 678+'px', top: 5+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>32</div>
                    <div id="Popover34" onMouseOver={this.toggle} data-place="34" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[34].userId ? 'oc place' : 'fr place'} style={{left: 718+'px', top: 5+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>34</div>
                    <div id="Popover36" onMouseOver={this.toggle} data-place="36" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[36].userId ? 'oc place' : 'fr place'} style={{left: 758+'px', top: 5+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>36</div>
                    <div id="Popover1" onMouseOver={this.toggle} data-place="1" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[1].userId ? 'oc place' : 'fr place'} style={{left: 78+'px', top: 35+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>1</div>
                    <div id="Popover3" onMouseOver={this.toggle} data-place="3" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[3].userId ? 'oc place' : 'fr place'} style={{left: 118+'px', top: 35+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>3</div>
                    <div id="Popover5" onMouseOver={this.toggle} data-place="5" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[5].userId ? 'oc place' : 'fr place'} style={{left: 158+'px', top: 35+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>5</div>
                    <div id="Popover7" onMouseOver={this.toggle} data-place="7" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[7].userId ? 'oc place' : 'fr place'} style={{left: 198+'px', top: 35+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>7</div>
                    <div id="Popover9" onMouseOver={this.toggle} data-place="9" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[9].userId ? 'oc place' : 'fr place'} style={{left: 238+'px', top: 35+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>9</div>
                    <div id="Popover11" onMouseOver={this.toggle} data-place="11" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[11].userId ? 'oc place' : 'fr place'} style={{left: 278+'px', top: 35+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>11</div>
                    <div id="Popover13" onMouseOver={this.toggle} data-place="13" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[13].userId ? 'oc place' : 'fr place'} style={{left: 318+'px', top: 35+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>13</div>
                    <div id="Popover15" onMouseOver={this.toggle} data-place="15" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[15].userId ? 'oc place' : 'fr place'} style={{left: 358+'px', top: 35+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>15</div>
                    <div id="Popover17" onMouseOver={this.toggle} data-place="17" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[17].userId ? 'oc place' : 'fr place'} style={{left: 398+'px', top: 35+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>17</div>
                    <div id="Popover19" onMouseOver={this.toggle} data-place="19" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[19].userId ? 'oc place' : 'fr place'} style={{left: 438+'px', top: 35+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>19</div>
                    <div id="Popover21" onMouseOver={this.toggle} data-place="21" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[21].userId ? 'oc place' : 'fr place'} style={{left: 478+'px', top: 35+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>21</div>
                    <div id="Popover23" onMouseOver={this.toggle} data-place="23" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[23].userId ? 'oc place' : 'fr place'} style={{left: 518+'px', top: 35+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>23</div>
                    <div id="Popover25" onMouseOver={this.toggle} data-place="25" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[25].userId ? 'oc place' : 'fr place'} style={{left: 558+'px', top: 35+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>25</div>
                    <div id="Popover27" onMouseOver={this.toggle} data-place="27" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[27].userId ? 'oc place' : 'fr place'} style={{left: 598+'px', top: 35+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>27</div>
                    <div id="Popover29" onMouseOver={this.toggle} data-place="29" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[29].userId ? 'oc place' : 'fr place'} style={{left: 638+'px', top: 35+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>29</div>
                    <div id="Popover31" onMouseOver={this.toggle} data-place="31" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[31].userId ? 'oc place' : 'fr place'} style={{left: 678+'px', top: 35+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>31</div>
                    <div id="Popover33" onMouseOver={this.toggle} data-place="33" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[33].userId ? 'oc place' : 'fr place'} style={{left: 718+'px', top: 35+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>33</div>
                    <div id="Popover35" onMouseOver={this.toggle} data-place="35" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[35].userId ? 'oc place' : 'fr place'} style={{left: 758+'px', top: 35+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>35</div>
                    <div id="Popover54" onMouseOver={this.toggle} data-place="54" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[54].userId ? 'oc place' : 'fr place'} style={{left: 78+'px', top: 95+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>54</div>
                    <div id="Popover53" onMouseOver={this.toggle} data-place="53" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[53].userId ? 'oc place' : 'fr place'} style={{left: 118+'px', top: 95+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>53</div>
                    <div id="Popover52" onMouseOver={this.toggle} data-place="52" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[52].userId ? 'oc place' : 'fr place'} style={{left: 158+'px', top: 95+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>52</div>
                    <div id="Popover51" onMouseOver={this.toggle} data-place="51" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[51].userId ? 'oc place' : 'fr place'} style={{left: 198+'px', top: 95+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>51</div>
                    <div id="Popover50" onMouseOver={this.toggle} data-place="50" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[50].userId ? 'oc place' : 'fr place'} style={{left: 238+'px', top: 95+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>50</div>
                    <div id="Popover49" onMouseOver={this.toggle} data-place="49" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[49].userId ? 'oc place' : 'fr place'} style={{left: 278+'px', top: 95+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>49</div>
                    <div id="Popover48" onMouseOver={this.toggle} data-place="48" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[48].userId ? 'oc place' : 'fr place'} style={{left: 318+'px', top: 95+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>48</div>
                    <div id="Popover47" onMouseOver={this.toggle} data-place="47" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[47].userId ? 'oc place' : 'fr place'} style={{left: 358+'px', top: 95+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>47</div>
                    <div id="Popover46" onMouseOver={this.toggle} data-place="46" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[46].userId ? 'oc place' : 'fr place'} style={{left: 398+'px', top: 95+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>46</div>
                    <div id="Popover45" onMouseOver={this.toggle} data-place="45" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[45].userId ? 'oc place' : 'fr place'} style={{left: 438+'px', top: 95+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>45</div>
                    <div id="Popover44" onMouseOver={this.toggle} data-place="44" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[44].userId ? 'oc place' : 'fr place'} style={{left: 478+'px', top: 95+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>44</div>
                    <div id="Popover43" onMouseOver={this.toggle} data-place="43" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[43].userId ? 'oc place' : 'fr place'} style={{left: 518+'px', top: 95+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>43</div>
                    <div id="Popover42" onMouseOver={this.toggle} data-place="42" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[42].userId ? 'oc place' : 'fr place'} style={{left: 558+'px', top: 95+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>42</div>
                    <div id="Popover41" onMouseOver={this.toggle} data-place="41" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[41].userId ? 'oc place' : 'fr place'} style={{left: 598+'px', top: 95+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>41</div>
                    <div id="Popover40" onMouseOver={this.toggle} data-place="40" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[40].userId ? 'oc place' : 'fr place'} style={{left: 638+'px', top: 95+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>40</div>
                    <div id="Popover39" onMouseOver={this.toggle} data-place="39" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[39].userId ? 'oc place' : 'fr place'} style={{left: 678+'px', top: 95+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>39</div>
                    <div id="Popover38" onMouseOver={this.toggle} data-place="38" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[38].userId ? 'oc place' : 'fr place'} style={{left: 718+'px', top: 95+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>38</div>
                    <div id="Popover37" onMouseOver={this.toggle} data-place="37" onClick={(e) => this.handleReservation(e.target.dataset.place)} className={this.state.places[37].userId ? 'oc place' : 'fr place'} style={{left: 758+'px', top: 95+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}>37</div>
                    <div className="wall" style={{left: 33+'px', top: 0+'px', height: 35+'px', lineHeight: 35+'px'}}></div>
                    <div className="wall" style={{left: 73+'px', top: 0+'px', height: 65+'px', lineHeight: 65+'px'}}></div>
                    <div className="wall" style={{left: 153+'px', top: 0+'px', height: 65+'px', lineHeight: 65+'px'}}></div>
                    <div className="wall" style={{left: 233+'px', top: 0+'px', height: 65+'px', lineHeight: 65+'px'}}></div>
                    <div className="wall" style={{left: 313+'px', top: 0+'px', height: 65+'px', lineHeight: 65+'px'}}></div>
                    <div className="wall" style={{left: 393+'px', top: 0+'px', height: 65+'px', lineHeight: 65+'px'}}></div>
                    <div className="wall" style={{left: 473+'px', top: 0+'px', height: 65+'px', lineHeight: 65+'px'}}></div>
                    <div className="wall" style={{left: 553+'px', top: 0+'px', height: 65+'px', lineHeight: 65+'px'}}></div>
                    <div className="wall" style={{left: 633+'px', top: 0+'px', height: 65+'px', lineHeight: 65+'px'}}></div>
                    <div className="wall" style={{left: 713+'px', top: 0+'px', height: 65+'px', lineHeight: 65+'px'}}></div>
                    <div className="wall" style={{left: 793+'px', top: 0+'px', height: 65+'px', lineHeight: 65+'px'}}></div>
                    <div className="wall" style={{left: 833+'px', top: 0+'px', height: 65+'px', lineHeight: 65+'px'}}></div>
                    <div className="wall" style={{left: 73+'px', top: 90+'px', height: 35+'px', lineHeight: 35+'px'}}></div>
                    <div className="wall" style={{left: 33+'px', top: 90+'px', height: 35+'px', lineHeight: 35+'px'}}></div>
                    <div className="wall" style={{left: 153+'px', top: 90+'px', height: 35+'px', lineHeight: 35+'px'}}></div>
                    <div className="wall" style={{left: 233+'px', top: 90+'px', height: 35+'px', lineHeight: 35+'px'}}></div>
                    <div className="wall" style={{left: 313+'px', top: 90+'px', height: 35+'px', lineHeight: 35+'px'}}></div>
                    <div className="wall" style={{left: 393+'px', top: 90+'px', height: 35+'px', lineHeight: 35+'px'}}></div>
                    <div className="wall" style={{left: 473+'px', top: 90+'px', height: 35+'px', lineHeight: 35+'px'}}></div>
                    <div className="wall" style={{left: 553+'px', top: 90+'px', height: 35+'px', lineHeight: 35+'px'}}></div>
                    <div className="wall" style={{left: 633+'px', top: 90+'px', height: 35+'px', lineHeight: 35+'px'}}></div>
                    <div className="wall" style={{left: 713+'px', top: 90+'px', height: 35+'px', lineHeight: 35+'px'}}></div>
                    <div className="wall" style={{left: 793+'px', top: 90+'px', height: 35+'px', lineHeight: 35+'px'}}></div>
                    <div className="wall" style={{left: 833+'px', top: 90+'px', height: 35+'px', lineHeight: 35+'px'}}></div>
                    <div className="toilet" style={{left: 38+'px', top: 5+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}></div>
                    <div className="toilet" style={{left: 798+'px', top: 5+'px', width: 32+'px', height: 25+'px', lineHeight: 25+'px'}}></div>
                  </div>}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
