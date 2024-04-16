import { useEffect, useState } from "react";
import axios from 'axios';
import moment from 'moment';
function PageWeather() {
  const [type, setType] = useState('Bishkek')
  function fromselect(fromoption) {
    setType(fromoption)
    WeatherF();
    
  }

  const [weather, setWeather] = useState();
  let WeatherF = async () => {
    let weatherData = await axios({
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/history.json',
      params: {
        q: `${type}`,
        dt: '2024-04-09',
        lang: 'en',
        end_dt: '2024-04-14'
      },
      headers: {
        'X-RapidAPI-Key': 'fcf2bc098bmshbfb842195086f81p119c91jsn8fd65cc07d26',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    })
    console.log(weatherData)
    if (weatherData.status = 200) {
      setWeather(weatherData.data)
    }
    else {
      setWeather([])
    }
  }
  function weatherinfo() {
    WeatherF();
  }

  function translateText(gg) {
    if (gg == 'Light rain shower') {
      return ('Небольшой дождь моросит')
    }
    if (gg == 'United Kingdom') {
      return ('Великобритания')
    }
    if (gg == 'City of London, Greater London') {
      return ('Лондонский Сити, Большой Лондон')
    }
    if (gg == 'Europe/London') {
      return ('Европа/Лондон')
    }
    if (gg == 'Kyrghyzstan') {
      return ('Кыргызстан')
    }
    if (gg == 'Bishkek') {
      return ('Бишкек')
    }
    if (gg == 'Asia/Bishkek') {
      return ('Азия/Бишкек')
    }
    if (gg == 'Asia/Tashkent') {
      return ('Азия/Ташкент')
    }
    if (gg == 'Toshkent') {
      return ('Ташкент')
    }
    if (gg == 'Uzbekistan') {
      return ('Узбекистан')
    }
    if (gg == 'Astana') {
      return ('Астана')
    }
    if (gg == 'Kazakhstan') {
      return ('Казахстан')
    }
    if (gg == 'Asia/Almaty') {
      return ('Алматы')
    }
  }

  useEffect(() => {
    WeatherF();
  })
  return (
    <div className="container-fluid alldisplay">
      <div className="row p-0">
        <div className="text-center text-white p-2 bg-success" onClick={weatherinfo}>WeatherInfo</div>
        {weather != null ?
          <>
            <div className="col-12">
              <div className="row">
                <div className="col-12 pb-5 bgLocation mt-1">
                  <div className="row">
                    <div className="col-12">
                      <h1 className="text-center">Локация</h1>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12 text-center medial2">
                        <ul className="ulWeather text-center">
                          <li className="ulWeather">
                            Страна: {translateText(weather.location.country)}
                          </li>
                          <li className="ulWeather">
                            Время: {moment(weather.location.localtime).format('LT')}
                          </li>
                          <li className="ulWeather">
                            Регион: {translateText(weather.location.region)}
                          </li>
                          <li className="ulWeather">
                            Континент: {translateText(weather.location.tz_id)}
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>

                  <div className="col-12 mt-2 text-center">
                    <select className="btn btn-dark" name="" id="" onChange={(fromoption) => fromselect(fromoption.target.value)}>
                      <option value="Bishkek">
                        Bishkek
                      </option>
                      <option value="London">
                        London
                      </option>
                      <option value="Tashkent">
                        Tashkent
                      </option>
                      <option value="Astana">
                        Astana
                      </option>
                      <option>
                        Almaty
                      </option>
                    </select>
                  </div>
                </div>
                {weather.forecast.forecastday.map(i =>
                  <>
                    <div className="col-12 border p-5">
                      <div className="row">
                        <div className="col-12 text-center pb-4">
                          <h4>Дата: {moment(i.date).format('MMMM Do YYYY, h:mm:ss a')}</h4>
                        </div>
                        <div className="col-xl-6 col-sm-12 col-md-12 ">
                          <div className="bg-dark text-white weatherinfo">
                            <div className="row">
                              <div className="col-12 text-center">
                                <img src={i.day.condition.icon} alt="" /><br />
                                <b>{translateText(i.day.condition.text)}</b>
                              </div>
                              <div className="col-md-12 col-sm-12 d-xl-none text-center">
                                <div className="row p-0">
                                  <div className="col-12 pt-1 pb-1">Влажность:<br /><b>{i.day.avghumidity}</b></div>
                                  <div className="col-12 pt-1 pb-1">Средняя температура в C: <br /><b>{i.day.avgtemp_c}°C</b></div>
                                  <div className="col-12 pt-1 pb-1">Средняя температура в F: <br /><b>{i.day.avgtemp_f}°C</b></div>
                                  <div className="col-12 pt-1 pb-1">Скорость ветра в км: <br /><b>{i.day.avgvis_km}</b></div>
                                  <div className="col-12 pt-1 pb-1">Скорость ветра в мили: <br /><b>{i.day.avgvis_miles}</b></div>
                                  <div className="col-12 pt-1 pb-1">Веротяность дождя: <br /><b>{i.day.daily_chance_of_rain}</b></div>
                                  <div className="col-12 pt-1 pb-1">Вероятность снега: <br /><b>{i.day.daily_chance_of_snow}</b></div>
                                  <div className="col-12 pt-1 pb-1">Максимальная температура в C: <br /><b>{i.day.maxtemp_c}°C</b></div>
                                  <div className="col-12 pt-1 pb-1">Максимальная температура в F: <br /><b>{i.day.maxtemp_f}</b></div>
                                  <div className="col-12 pt-1 pb-1">Максимальная скорость ветра в км: <br /><b>{i.day.maxwind_kph}</b></div>
                                  <div className="col-12 pt-1 pb-1">Максимальная скорость ветра в мили: <br /><b>{i.day.maxwind_mph}</b></div>
                                  <div className="col-12 pt-1 pb-1">Минимальная температура в С: <br /><b>{i.day.mintemp_c}°C</b></div>
                                  <div className="col-12 pt-1 pb-1">Минимальная температура в F: <br /><b>{i.day.mintemp_f}</b></div>
                                  <div className="col-12 pt-1 pb-1">Дождь:<br /><b>{i.day.daily_will_it_rain}</b></div>
                                  <div className="col-12 pt-1 pb-1">Снег:<br /><b>{i.day.daily_will_it_snow}</b></div>
                                  <div className="col-12 pt-1 pb-1">Количество осадков: <br /><b>{i.day.totalprecip_in}</b></div>
                                  <div className="col-12 pt-1 pb-5">Количество снего: <br /><b>{i.day.totalsnow_cm}</b></div>
                                </div>
                              </div>
                              <div className="d-xl-block col-xl-12  d-sm-none d-md-none weatherxl">
                                <div className="row">
                                  <div className="col-7 informationWeather2" style={{ textAlign: "right" }}>
                                    <ul className="ulWeather">
                                      <li>Влажность:</li>
                                      <li>Средняя температура в C:</li>
                                      <li>Средняя температура в F:</li>
                                      <li>Скорость ветра в км:</li>
                                      <li>Скорость ветра в мили:</li>
                                      <li>Веротяность дождя:</li>
                                      <li>Вероятность снега:</li>
                                      <li>Дождь:</li>
                                      <li>Снег:</li>
                                      <li>Максимальная температура в C:</li>
                                      <li>Максимальная температура в F:</li>
                                      <li>Максимальная скорость ветра в км:</li>
                                      <li>Максимальная скорость ветра в мили:</li>
                                      <li>Минимальная температура в С:</li>
                                      <li>Минимальная температура в F:</li>
                                      <li>Количество осадков:</li>
                                      <li>Количество снего:</li>
                                    </ul>
                                  </div>
                                  <div className="col-5 mt-1" style={{ textAlign: "left" }}>
                                    <ul className="ulWeather">
                                      <li>{i.day.avghumidity}</li>
                                      <li>{i.day.avgtemp_c}°C</li>
                                      <li>{i.day.avgtemp_f}°C</li>
                                      <li>{i.day.avgvis_km}</li>
                                      <li>{i.day.avgvis_miles}</li>
                                      <li>{i.day.daily_chance_of_rain}</li>
                                      <li>{i.day.daily_chance_of_snow}</li>
                                      <li>{i.day.daily_will_it_rain}</li>
                                      <li>{i.day.daily_will_it_snow}</li>
                                      <li>{i.day.maxtemp_c}°C</li>
                                      <li>{i.day.maxtemp_f}</li>
                                      <li>{i.day.maxwind_kph}</li>
                                      <li>{i.day.maxwind_mph}</li>
                                      <li>{i.day.mintemp_c}°C</li>
                                      <li>{i.day.mintemp_f}</li>
                                      <li>{i.day.totalprecip_in}</li>
                                      <li>{i.day.totalsnow_cm}</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 informationWeather2">
                          <div className="row">
                            <div className="col-12 ">
                              <div className="hourly">
                                <h5 className="mt-3 text-center">По часам</h5>
                                <div className="hourlyInfo">
                                  <div className="row">
                                    <div className="col-6 mt-5 pt-4 col-xs-12" style={{ textAlign: "right", paddingRight: "30px" }}>
                                      <ul className="ulWeather">
                                        <li>Вермя: </li>
                                        <li>вероятность дождя:</li>
                                        <li>вероятность снега:</li>
                                        <li>облако:</li>
                                        <li>Ощущается как:</li>
                                        <li>Прорыв ветра:</li>
                                        <li>Направление ветра:</li>
                                        <li>Скорость ветра:</li>
                                        <li>Температура:</li>
                                        <li>Влажность:</li>
                                        <li>Осадки:</li>
                                        <li>Давление:</li>
                                      </ul>
                                    </div>
                                    <div className="col-6 mt-2">
                                      <div style={{ overflowX: "scroll", overflowY: "hidden", height: "450px", width: "250px", display: "flex" }}>
                                        {i.hour.map(i =>
                                          <>
                                            <div style={{ width: "250px", height: "400px", }}>
                                              <div className="text-center" style={{ float: "left", width: "100%" }}>
                                                <img className="iconweather" src={i.condition.icon} alt="" /><br />
                                              </div>
                                              <div style={{ width: "100%", float: "left" }}>
                                                <ul className="ulWeather">
                                                  <li><b>{moment(i.time).format('LT')}</b></li>
                                                  <li><b>{i.chance_of_rain}</b></li>
                                                  <li><b>{i.chance_of_snow}</b></li>
                                                  <li><b>{i.cloud}</b></li>
                                                  <li><b>{i.feelslike_c}</b></li>
                                                  <li><b>{i.gust_kph}</b></li>
                                                  <li><b>{i.wind_dir}</b></li>
                                                  <li><b>{i.wind_kph}</b></li>
                                                  <li><b>{i.temp_c}°C</b></li>
                                                  <li><b>{i.humidity}</b></li>
                                                  <li><b>{i.precip_in}</b></li>
                                                  <li><b>{i.pressure_in}</b></li>
                                                </ul>
                                              </div>
                                            </div>
                                          </>)}
                                      </div >
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-12 d-xl-none col-xl-12 mt-4 bg-dark text-white pt-3 pb-3 rounded">
                          <div className="row">
                            <div className="col-8">
                              <b>Вермя: </b><br />
                              <b>вероятность дождя:</b><br />
                              <b>вероятность снега:</b><br />
                              <b>облако:</b><br />
                              <b>Ощущается как:</b><br />
                              <b>Прорыв ветра:</b><br />
                              <b>Направление ветра:</b><br />
                              <b>Скорость ветра:</b><br />
                              <b>Температура:</b><br />
                              <b>Влажность:</b><br />
                              <b>Осадки:</b><br />
                              <b>Давление:</b><br />
                            </div>
                            <div className="col-4">
                              <div className="HourlyWeatherMedia d-flex">
                                {i.hour.map(i =>
                                  <>
                                    <div className="InHourlyWeatherMedia border text-center">
                                      <b>{moment(i.time).format('LT')}</b><br />
                                      <b>{i.chance_of_rain}</b><br />
                                      <b>{i.chance_of_snow}</b><br />
                                      <b>{i.cloud}</b><br />
                                      <b>{i.feelslike_c}</b><br />
                                      <b>{i.gust_kph}</b><br />
                                      <b>{i.wind_dir}</b><br />
                                      <b>{i.wind_kph}</b><br />
                                      <b>{i.temp_c}°C</b><br />
                                      <b>{i.humidity}</b><br />
                                      <b>{i.precip_in}</b><br />
                                      <b>{i.pressure_in}</b><br />
                                      <img className="iconweather" src={i.condition.icon} alt="" /><br />
                                    </div>
                                  </>)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
          :
          <>
            loading
          </>
        }
      </div>
    </div>
  )
}
export default PageWeather