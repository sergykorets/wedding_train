import React, {Fragment} from 'react';
import axios from 'axios';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import Gallery from 'react-grid-gallery';
import YouTube from '@u-wave/react-youtube';
import Heart from './headline_hearth.svg'
import Simple from './headline_simple.svg'
import Loader from './loader.svg'


export default class Wedding extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.guest,
      attended: false,
      images: this.getImages(),
      loading: true
    };
  }

  componentDidMount() {
    axios.get('/guests')
      .then(res => {
        this.setState({ attended: res.data.attended, loading: false });
      });
  }

  getImages = () => {
    const images = [...Array(parseInt(110, 10))].map((item, index) => {
      return (
        { src: `/images/gallery/gallery${index+1}.jpg`,
          thumbnail: `/images/gallery/gallery${index+1}.jpg`,
          aspectRatio: 0})})
    return images
  }

  submitAttending = () => {
    axios.get(`/attend?name=${this.state.name}`).then(res => {
      if (res.success) {
        window.location.reload()
      } else {
        window.location.href = `/users/sign_up?name=${this.state.name}`
      }
    });
  }

  render() {
    return (
    <Fragment>
      { !!this.state.name &&
        <section id="comment">
          <div className="container relative-z">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div id="comment-carousel" className="owl-carousel owl-theme owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div className="owl-stage" style={{ borderRadius: 40 + 'px', paddingLeft: 30 + 'px', paddingRight: 30+'px'}}>
                      <div className="owl-item cloned" style={{width: 860+'px', marginRight: 30+'px'}}>
                        <div className="item">
                          <h3 className="heading text-center">Привіт, {this.state.name}, 14 вересня 2018 року забудь про роботу, вимкни комп’ютер і не плануй нічого крім як приїхати до нас!</h3>
                        </div>
                      </div>
                      <div className="owl-item cloned" style={{width: 860+'px', marginRight: 30+'px'}}>
                        <div className="item">
                          <h3 className="heading text-center">Цей день в році для нас буде незвичайним. І ми ніяк не можемо провести його без тебе.</h3>
                        </div>
                      </div>
                      <div className="owl-item cloned" style={{width: 860+'px', marginRight: 30+'px'}}>
                        <div className="item">
                          <h3 className="heading text-center">Отже прийми наше запрошення провести цей п'ятницький ранок, день, вечір, <strike style={{color: '#D12828'}}>ніч</strike> частину ночі разом з нами.</h3>
                        </div>
                      </div>
                      <div className="owl-item cloned" style={{width: 860+'px', marginRight: 30+'px'}}>
                        <div className="item">
                          <h3 className="heading text-center">Цього дня ми одружуємось.</h3>
                        </div>
                      </div>
                      <div className="owl-item cloned" style={{width: 860+'px', marginRight: 30+'px'}}>
                        <div className="item">
                          <h3 className="heading text-center">Місце проведення - ресторан
                            <a href="https://www.google.com/maps/place/%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD+%22%D0%94%D1%96%D0%B1%D1%80%D0%BE%D0%B2%D0%B0%22/@48.8278502,24.3042801,9.44z/data=!4m13!1m7!3m6!1s0x4730ca3cbca1546f:0x9327cf076f47d349!2z0JTRltCx0YDQvtCy0LAsINCG0LLQsNC90L4t0KTRgNCw0L3QutGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNzc3MDY!3b1!8m2!3d48.7643384!4d24.5030328!3m4!1s0x0:0x654f50cae95f6085!8m2!3d48.7688004!4d24.518888" target='_blank'> "Діброва".</a></h3>
                        </div>
                      </div>
                      <div className="owl-item active" style={{width: 860+'px', marginRight: 30+'px'}}><div className="item">
                      <h3 className="heading text-center">Церемонія розпочинається о 16:00 за київським часом.</h3>
                    </div>
                      </div>
                      <div className="owl-item" style={{width: 860+'px', marginRight: 30+'px'}}><div className="item">
                      <h3 className="heading text-center">Тому бери з собою настрій гуляти, танцювати і веселитись.</h3>
                    </div></div>
                      <div className="owl-item" style={{width: 860+'px', marginRight: 30+'px'}}><div className="item">
                        <h3 className="heading text-center">Сідай на поїзд, пригай в машину, біжи на літак - головне бути на місці у вказаний час!</h3>
                      </div></div></div></div><div className="owl-nav disabled"></div><div className="owl-dots"><div className="owl-dot active"><span></span></div><div className="owl-dot"><span></span></div><div className="owl-dot"><span></span></div></div></div>
              </div>
            </div>
          </div>
          <div className="img-overlay"></div>
        </section>}

      {!!this.state.name &&
        <section>
          <div className="form-group col-md-12 text-center">
            { this.state.attended ?
              <button disabled={true} className='btn btn-default fill-btn'>Дякуємо, що будеш з нами :) Чекаємо 14 вересня</button> :
              <button type="submit" onClick={() => this.submitAttending()} className='btn btn-default fill-btn'>Дякую за запрошення, я обов'язково буду</button>}
          </div>
        </section>}

    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="big-head-wrap">
              <img src={Heart}/>
            </div>
            <h2 className="big-heading mt-0 mt-0">Про <span className="custom-color">нас</span></h2>
            <img className="headline_1" src={Simple} />
            <p className="sub-heading col-lg-8 offset-lg-2 margin-b-5">Ми познайомилися ще зі школи.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 text-center margin-xs-b-2 margin-sm-b-2">
            <figure>
              <img src="/images/eUuai1kaCeY.jpg" alt="bride" className="img-fluid rounded-circle"/>
            </figure>
            <div className="about-content col-sm-8 offset-sm-2">
              <h4>Федорчук
                <span className="custom-color"> Сергій</span>
              </h4>
              <p>Чемпіон студентської ліги м. Києва з картингу сезону 2014/15, футболіст, тенісист, волейболіст, гітарист</p>
              <ul className="social-link">
                <li className="d-inline-block">
                  <a href="https://www.facebook.com/sergy.fedorchuk" target="_blank" title="Facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <figure>
              <img src="./images/8L_KvCOJ7wE.jpg" alt="groom" className="img-fluid rounded-circle"/>
            </figure>
            <div className="about-content col-sm-8 offset-sm-2">
              <h4>Ляшук
                <span className="custom-color"> Надія</span>
              </h4>
              <p>Майбутня дружина чемпіона студентської ліги м. Києва з картингу. Весела, позитивна і відповідальна. Завжди з радістю підтримаю похід в Карпати, покататись на лижах, борді і всьому, що їде :) Стараюсь бути хазяюшкою і мега люблю дітей!</p>
              <ul className="social-link">
                <li className="d-inline-block">
                  <a href="https://www.facebook.com/profile.php?id=100011134265065" target="_blank" title="Facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="story">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="big-head-wrap">
              <img className="headline-hearth" src={Heart} alt=""/>
            </div>
            <h2 className="big-heading mt-0 mt-0">
              <span className="custom-color">Приблизний </span> план дій
            </h2>
            <img className="headline_1" src={Simple} alt=""/>
              <p className="sub-heading col-lg-8 offset-lg-2 margin-b-5"></p>
          </div>
        </div>

        <div className="timeline">
          <div className="row">
            <div className="col-sm-12 col-md-6 pr-70 text-center">
              <div className="tline-thumbnail">
                <div className="img-date-right">
                  <div className="day">13 вересня</div>
                  <div className="month">18:50</div>
                </div>
              </div>
            </div>
            <div className="tline-right-side col-sm-12 col-md-6 pl-70 text-left date-circle margin-b-2">
              <div className="tline-arrow"></div>
              <h4 className="tline-title font-weight-light">Старт потягу в Івано-Франківськ</h4>
              <p>Саньок допомагає недомій туристці закинути речі у вже їдучий потяг. Петруха і Макс витягують її і Санька у тамбур.
                Настя і Наташа жмуть стоп кран, щоб Славон встиг тоже сісти.</p>
              <p><b>План Б:</b> Славон дожене потяг у Новограді або Львові</p>
              <p><b>Увага!</b> Ловимо у Новограді гостей з Корця о <b>22:21</b></p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pl-70 text-center order-2 main-order-xs-1 main-order-sm-1">
              <div className="tline-thumbnail">
                <div className="img-date-left">
                  <div className="day">14 вересня</div>
                  <div className="month">05:44</div>
                </div>
              </div>
            </div>
            <div className="tline-left-side pr-70 col-md-6 text-right date-circle order-1 main-order-xs-2 main-order-sm-2 margin-b-2">
              <div className="tline-arrow"></div>
              <h4 className="tline-title font-weight-light">Прибуття потягу в Івано-Франківськ</h4>
              <p>Хлопці гарно виспані з новими силами, дівчата з нічною зачіскою і макіяжем виходимо з поїзду. Шукаємо по вагонах Максову колонку, будимо Сола (далі "ведучий")</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 pr-70 text-center">
              <div className="tline-thumbnail">
                <div className="img-date-right">
                  <div className="month">06:30</div>
                </div>
              </div>
            </div>
            <div className="tline-right-side col-md-6 pl-70 text-left date-circle margin-b-2">
              <div className="tline-arrow"></div>
              <h4 className="tline-title font-weight-light">Весільний автобус</h4>
              <p>Отець освячує автобус і після цього пакуємся в нього. В автобусі не даємо пити алкоголь Максу, навіть пива, навіть сидру, хай краще Макс поспить.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 pl-70 text-center order-2 main-order-xs-1 main-order-sm-1">
              <div className="tline-thumbnail">
                <div className="img-date-left">
                  <div className="month">07:00</div>
                </div>
              </div>
            </div>
            <div className="tline-left-side col-md-6 pr-70 text-right date-circle order-1 main-order-xs-2 main-order-sm-2 margin-b-2">
              <div className="tline-arrow"></div>
              <h4 className="tline-title font-weight-light">Зустріч у ресторан-готелі "Діброва"</h4>
              <p>Гостей зустрічає персонал. Толік може починати шукати іноземців, щоб побазарити на англійській</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 pr-70 text-center">
              <div className="tline-thumbnail">
                <div className="img-date-right">
                  <div className="month">07:30 - 09:00</div>
                </div>
              </div>
            </div>
            <div className="tline-right-side col-sm-12 col-md-6 pl-70 text-left date-circle margin-b-2">
              <div className="tline-arrow"></div>
              <h4 className="tline-title font-weight-light">Сніданок/Поселення</h4>
              <p>Голодні ідуть снідати, невиспані йдуть спати.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pl-70 text-center order-2 main-order-xs-1 main-order-sm-1">
              <div className="tline-thumbnail">
                <div className="img-date-left">
                  <div className="month">09:00 - 11:00</div>
                </div>
              </div>
            </div>
            <div className="tline-left-side pr-70 col-md-6 text-right date-circle order-1 main-order-xs-2 main-order-sm-2 margin-b-2">
              <div className="tline-arrow"></div>
              <h4 className="tline-title font-weight-light">Вільний час</h4>
              <p>Дівчата наводять очі, чешуть косу, малюють нігті. Невиспані продовжують спати, виспані йдуть до Петрухи, який травить анекдоти</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 pr-70 text-center">
              <div className="tline-thumbnail">
                <div className="img-date-right">
                  <div className="month">11:00 - 16:00</div>
                </div>
              </div>
            </div>
            <div className="tline-right-side col-sm-12 col-md-6 pl-70 text-left date-circle margin-b-2">
              <div className="tline-arrow"></div>
              <h4 className="tline-title font-weight-light">Фотосесія</h4>
              <p>Всі виспались, дівчата накрасилися, хлопці насміялися з анектодів Петрухи. Знімаємося на відео, робимо фото</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pl-70 text-center order-2 main-order-xs-1 main-order-sm-1">
              <div className="tline-thumbnail">
                <div className="img-date-left">
                  <div className="month">16:00</div>
                </div>
              </div>
            </div>
            <div className="tline-left-side pr-70 col-md-6 text-right date-circle order-1 main-order-xs-2 main-order-sm-2 margin-b-2">
              <div className="tline-arrow"></div>
              <h4 className="tline-title font-weight-light">Весільна церемонія</h4>
              <p>Працівник РАГСу задає нам пару питань, мами плачуть, я <strike>втікаю</strike> вдіваю обручку, Надя тоже.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 pr-70 text-center">
              <div className="tline-thumbnail">
                <div className="img-date-right">
                  <div className="month">17:00</div>
                </div>
              </div>
            </div>
            <div className="tline-right-side col-sm-12 col-md-6 pl-70 text-left date-circle margin-b-2">
              <div className="tline-arrow"></div>
              <h4 className="tline-title font-weight-light">Початок бенкету</h4>
              <p>Ведучий запрошує всіх в ресторан. Гості вітають нас з цим чудовим празником. П'ємо по чарці. Набираємо форму до танців і конкурсів</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pl-70 text-center order-2 main-order-xs-1 main-order-sm-1">
              <div className="tline-thumbnail">
                <div className="img-date-left">
                  <div className="month">18:00 - NaN</div>
                </div>
              </div>
            </div>
            <div className="tline-left-side pr-70 col-md-6 text-right date-circle order-1 main-order-xs-2 main-order-sm-2 margin-b-2">
              <div className="tline-arrow"></div>
              <h4 className="tline-title font-weight-light">Весілля</h4>
              <p>Ведучий травить жарти, гості випивають, беруть участь в конкурсах</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="blog">
      <div className="container relative-z">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="big-head-wrap">
              <img className="headline-hearth" src={Heart} alt=""/>
            </div>
            <h2 className="big-heading mt-0 mt-0">
              Свідки <span className="custom-color">наречених</span>
            </h2>
            <img className="headline_1" src={Simple} alt=""/>
          </div>
        </div>
        <div className="card-deck" style={{marginTop: 30+'px'}}>

          <div className="card">
            <img className="card-img-top" src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/12552981_927774783959446_8226873663936347331_n.jpg?_nc_cat=0&oh=bad38e68ab9544d773465ae065fd3dc4&oe=5BC812F3" alt="blog"/>
              <div className="card-body">
                <h5 className="font-weight-light card-title">Міня</h5>
                <p className="card-text">Подорожі - це про Юрку. Їв серерце кобри з її ядом, м'ясо кита і крокодили фаршировані ослами. Знає секрет приготування найсмачнішого бургера у Львові</p>
                <ul className="social-link text-center">
                  <li className="d-inline-block">
                    <a href="https://www.facebook.com/yura.miniv" target="_blank" title="Facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/28698807_593697030987111_7099525507591448863_o.jpg?_nc_cat=0&oh=851a6c8dbb32f5d3cffb71fbb8b9edba&oe=5C02CC73" alt="blog"/>
              <div className="card-body">
                <h5 className="font-weight-light card-title">Оля</h5>
                <p className="card-text">Кароокий педант-перфекціоніст, який працює юристом в ІТ. А в цілому, милий Рапунцель з характером чортеняти.</p>
                <ul className="social-link text-center">
                  <li className="d-inline-block">
                    <a href="https://www.facebook.com/profile.php?id=100010404584377v" target="_blank" title="Facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/18814623_1580588805345869_2399258320305741025_o.jpg?_nc_cat=0&oh=47e56c30e64d26626f3cf76a3809df59&oe=5C0089BC" alt="blog"/>
            <div className="card-body">
              <h5 className="font-weight-light card-title">Славон</h5>
              <p className="card-text">Знає як змагатися з поїздом навипередки. Вміє виживати у надзвичайних ситуаціях. Футбольний плей-мейкер.</p>
              <ul className="social-link text-center">
                <li className="d-inline-block">
                  <a href="https://www.facebook.com/Slavon.Yashchenko" target="_blank" title="Facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/22853113_367986120303019_8357080663215630_n.jpg?_nc_cat=0&oh=69fde3aebf51157f7b56879194189890&oe=5C0023AC" alt="blog"/>
            <div className="card-body">
              <h5 className="font-weight-light card-title">Тоня</h5>
              <p className="card-text">Сестра нареченої. Постійно хоче йти в похід, але ніяк не вибереться.</p>
              <ul className="social-link text-center">
                <li className="d-inline-block">
                  <a href="https://www.facebook.com/tonia.liashuk" target="_blank" title="Facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="img-overlay"></div>
    </section>

      <section id="people">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="big-head-wrap">
                <img className="headline-hearth" src={Heart} alt=""/>
              </div>
              <h2 className="big-heading mt-0 mt-0">
                Батьки <span className="custom-color">наречених</span>
              </h2>
              <img className="headline_1" src={Simple} alt=""/>
            </div>
          </div>
          <div className="row">
            <div className="col col-lg-6 text-center">
              <h4 className="margin-b-2">Батьки Сергія</h4>
              <div className="people-img text-center ml-0">
                <img className="" src='https://scontent.fiev14-1.fna.fbcdn.net/v/t31.0-8/27500919_119342645549096_9209144947785130938_o.jpg?_nc_cat=0&oh=33efdd9b81fd9d38a24745ac246acbc0&oe=5C08F6CF' alt=""/>
                <p>Петро Леонідович</p>
              </div>
              <div className="people-img text-center ml-5">
                <img className="" src='/images/IMG_0355.jpg' alt=""/>
                <p>Людмила Ярославівна</p>
              </div>
            </div>
            <div className="col col-lg-6 text-center">
              <h4 className="margin-b-2">Батьки Надії</h4>
              <div className="people-img text-center ml-0">
                <img className="" src='/images/21686319_356545608113737_2262959078158865177_n.jpg' alt=""/>
                <p>Олександр Миколайович</p>
              </div>
              <div className="people-img text-center ml-5">
                <img className="" src='/images/21766489_356545508113747_3702495786938004637_n.jpg' alt=""/>
                <p>Оксана <br/> Петрівна</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section>
      <div className="container" style={{marginBottom: 50+'px'}}>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="big-head-wrap">
              <img className="headline-hearth" src={Heart} alt=""/>
            </div>
            <h2 className="big-heading mt-0 mt-0">
              Наша <span className="custom-color">галерея</span>
            </h2>
            <img className="headline_1" src={Simple} alt=""/>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <p className="sub-heading col-lg-8 offset-lg-2 margin-b-5">
          Всі наші пригоди всерівно не помістити в цей ряд. Хтось тут знайде себе, усміхнеться і згадає моменти з нашого життя. Відео, які недоступні можна подивитися на YouTube. А яких нема - будемо знімати.
        </p>
        <YouTube video="5wGWetrOkJE"/>
        <YouTube video="0phnArm6JbA"/>
        <YouTube video="yWfUfWUUr2E"/>
        <YouTube video="2DUzUc_lBq4"/>
        <YouTube video="UBPu7yQSGkk"/>
        <YouTube video="YL4i15fDokA"/>
        <YouTube video="e5dHYGXByug"/>
        <YouTube video="awsjgGnBWGI"/>
        <YouTube video="aV8Qx_Z9jg0"/>
        <YouTube video="ui9eVU5K7Ss"/>
        <YouTube video="d0i3jrMaVk4"/>
        <YouTube video="XcQvfdwq_uw"/>
        <YouTube video="QM_NUfHwe3U"/>
        <YouTube video="U41ib6jazTI"/>
        <YouTube video="QIGCBpMT8l0"/>
        <YouTube video="LyDPT-1Xlus"/>
        <YouTube video="uTCzKYoaI2o"/>
        <YouTube video="-GAktJjk014"/>
        <YouTube video="TJsbiukOytg"/>
        <YouTube video="Dt_eIflwM1s"/>
        <YouTube video="BiLejYK62iQ"/>
        <Gallery images={this.state.images}/>
      </div>
    </section>

    </Fragment>
    );
  }
}
