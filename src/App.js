import backIcon from './img/back_icon.svg'
import coinsIcon from './img/coins_icon.svg'
import crystalsIcon from './img/crystals_icon.svg'
import plusIcon from './img/plus_icon.svg'
import homeIcon from './img/home_icon.svg'
import background from './img/background.jpg'
import coins1 from './img/coins_1.svg'
import coins2 from './img/coins_2.svg'
import coins3 from './img/coins_3.svg'
import coins4 from './img/coins_4.svg'
import coins5 from './img/coins_5.svg'
import coins6 from './img/coins_6.svg'
import crystals1 from './img/crystals_1.svg'
import crystals2 from './img/crystals_2.svg'
import crystals3 from './img/crystals_3.svg'
import crystals4 from './img/crystals_4.svg'
import crystals5 from './img/crystals_5.svg'
import crystals6 from './img/crystals_6.svg'
import crystals7 from './img/crystals_7.svg'
import crystals8 from './img/crystals_8.svg'
import crystals9 from './img/crystals_9.svg'
import smallCrystals from './img/small_crystals.svg'

function App() {
  return (
    <div className="main">      
        <img className="background" src={background}></img>
        <div className="header">
          <div className="header-container">
            <div className="header-container__back">
              <img className="header-container__back--icon" src={backIcon}></img>
              BACK
            </div>
            <div className="header-container__coins">
              <img src={coinsIcon}></img>
                <div className="info">
                  <div className="info__value">100 254</div>
                  <div className="info__currency">coins</div>
                </div>
              <img className="plus-btn" src={plusIcon}></img>
            </div>
            <div className="header-container__crystals">
              <img src={crystalsIcon}></img>
                <div className="info">
                  <div className="info__value">1 254</div>
                  <div className="info__currency">crystals</div>
                </div>
              <img className="plus-btn" src={plusIcon}></img>
            </div>
            <div className="header-container__home">
              <img className="header-container__home--icon" src={homeIcon}></img>
              HOME
            </div>
          </div>
        </div>
      <div className="body">  
        <div className="body-container">
          <ul className="body-tabs">
            <li className="body-tabs__lists">Монстр Боксы</li>
            <li className="body-tabs__lists">Банк</li>
            <li className="body-tabs__lists">Наборы</li>
            <li className="body-tabs__lists">Спецпредложения</li>
            <li className="body-tabs__lists">Промокоды</li>
          </ul>
          <div className="body-maincontent">
            <div className="body-maincontent__crystals">
              <h1 className="maincontent-name">Кристаллы Незера</h1>
              <div className="body-maincontent__crystals-grid">
                <div class="body-maincontent__crystals-grid-item1">
                  <img className="backgroud-card0" src={crystals1}></img>
                  x100
                  <a className="handful-of-coins">Handful of Coins</a>
                  <div className="crystals-btn">
                    Купить 
                    <a className="symbol">$</a> 
                    10
                  </div>
                </div>
                <div class="body-maincontent__crystals-grid-item2">
                  <img className="backgroud-card" src={crystals2}></img>
                  x500
                  <a className="handful-of-coins">Handful of Coins</a>
                  <div className="crystals-btn">
                    Купить 
                    <a className="symbol">$</a> 
                    10
                  </div>
                </div>
                <div class="body-maincontent__crystals-grid-item3">
                  <img className="backgroud-card" src={crystals3}></img>
                  x1000
                  <a className="handful-of-coins">Handful of Coins</a>
                  <div className="crystals-btn">
                    Купить 
                    <a className="symbol">$</a> 
                    10
                  </div>
                </div>
                <div class="body-maincontent__crystals-grid-item4">
                  <img className="backgroud-card" src={crystals4}></img>
                  x1500
                  <a className="handful-of-coins">Handful of Coins</a>
                  <div className="crystals-btn">
                    Купить 
                    <a className="symbol">$</a> 
                    10
                  </div>                
                </div>
                <div class="body-maincontent__crystals-grid-item5">
                  <img className="backgroud-card" src={crystals5}></img>
                  x100
                  <a className="handful-of-coins">Handful of Coins</a>
                  <div className="crystals-btn">
                    Купить 
                    <a className="symbol">$</a> 
                    10
                  </div> 
                </div>
                <div class="body-maincontent__crystals-grid-item6">
                  <img className="backgroud-card" src={crystals6}></img>
                  x500
                  <a className="handful-of-coins">Handful of Coins</a>
                  <div className="crystals-btn">
                    Купить 
                    <a className="symbol">$</a> 
                    10
                  </div> 
                </div>
                <div class="body-maincontent__crystals-grid-item7">
                  <img className="backgroud-card" src={crystals7}></img>
                  x1000
                  <a className="handful-of-coins">Handful of Coins</a>
                  <div className="crystals-btn">
                    Купить 
                    <a className="symbol">$</a> 
                    10
                  </div>  
                </div>
                <div class="body-maincontent__crystals-grid-item8">
                  <img className="backgroud-card" src={crystals8}></img>
                  x1500
                  <a className="handful-of-coins">Handful of Coins</a>
                  <div className="crystals-btn">
                    Купить 
                    <a className="symbol">$</a> 
                    10
                  </div>     
                </div>
                <div class="body-maincontent__crystals-grid-item9">
                  <img className="backgroud-card" src={crystals9}></img>
                  x100
                  <a className="handful-of-coins">Handful of Coins</a>
                  <div className="crystals-btn">
                    Купить 
                    <a className="symbol">$</a> 
                    10
                  </div>
                </div>
              </div>
            </div>
            <div className="body-maincontent__coins">
              <h1 className="maincontent-name">Монеты Незера</h1>
              <div className="body-maincontent__coins-grid">
                <div class="body-maincontent__coins-grid-item1">
                  <img className="backgroud-card" src={coins1}></img>
                  x1000
                  <a className="handful-of-coins">Handful of Coins</a>
                  <div className="coins-btn">
                    Купить
                    <img className="small-crystals" src={smallCrystals}></img>
                    10
                  </div>
                </div>
                <div class="body-maincontent__coins-grid-item2">
                  <img className="backgroud-card" src={coins2}></img>
                  x5000
                  <a className="handful-of-coins">Handful of Coins</a>
                  <div className="coins-btn">
                    Купить
                    <img className="small-crystals" src={smallCrystals}></img>
                    10
                  </div>
                </div>
                <div class="body-maincontent__coins-grid-item3">
                  <img className="backgroud-card" src={coins3}></img>
                  x10000
                  <a className="handful-of-coins">Handful of Coins</a>
                  <div className="coins-btn">
                    Купить
                    <img className="small-crystals" src={smallCrystals}></img>
                    10
                  </div>
                </div>
                <div class="body-maincontent__coins-grid-item4">
                  <img className="backgroud-card" src={coins4}></img>
                  x10000
                  <a className="handful-of-coins">Handful of Coins</a>
                  <div className="coins-btn">
                    Купить
                    <img className="small-crystals" src={smallCrystals}></img>
                    10
                  </div>
                </div>
                <div class="body-maincontent__coins-grid-item5">
                  <img className="backgroud-card" src={coins5}></img>
                  x1000
                  <a className="handful-of-coins">Handful of Coins</a>
                  <div className="coins-btn">
                    Купить
                    <img className="small-crystals" src={smallCrystals}></img>
                    10
                  </div>
                </div>
                <div class="body-maincontent__coins-grid-item6">
                  <img className="backgroud-card" src={coins6}></img>
                  x5000
                  <a className="handful-of-coins">Handful of Coins</a>
                  <div className="coins-btn">
                    Купить
                    <img className="small-crystals" src={smallCrystals}></img>
                    10
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
