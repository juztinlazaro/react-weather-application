export const FAKE_LOCATIONS = [
  {
    title: 'San Francisco',
    location_type: 'City',
    woeid: 2487956,
    latt_long: '37.777119, -122.41964',
  },
  {
    title: 'San Diego',
    location_type: 'City',
    woeid: 2487889,
    latt_long: '32.715691,-117.161720',
  },
  {
    title: 'San Jose',
    location_type: 'City',
    woeid: 2488042,
    latt_long: '37.338581,-121.885567',
  },
  {
    title: 'San Antonio',
    location_type: 'City',
    woeid: 2487796,
    latt_long: '29.424580,-98.494614',
  },
  {
    title: 'Santa Cruz',
    location_type: 'City',
    woeid: 2488853,
    latt_long: '36.974018,-122.030952',
  },
  {
    title: 'Santiago',
    location_type: 'City',
    woeid: 349859,
    latt_long: '-33.463039,-70.647942',
  },
  {
    title: 'Santorini',
    location_type: 'City',
    woeid: 56558361,
    latt_long: '36.406651,25.456530',
  },
  {
    title: 'Santander',
    location_type: 'City',
    woeid: 773964,
    latt_long: '43.461498,-3.810010',
  },
  {
    title: 'Busan',
    location_type: 'City',
    woeid: 1132447,
    latt_long: '35.170429,128.999481',
  },
  {
    title: 'Santa Cruz de Tenerife',
    location_type: 'City',
    woeid: 773692,
    latt_long: '28.46163,-16.267059',
  },
  {
    title: 'Santa Fe',
    location_type: 'City',
    woeid: 2488867,
    latt_long: '35.666431,-105.972572',
  },
];

export const FAKE_LOCATION_INFO = {
  consolidated_weather: [
    {
      id: 5331616970833920,
      weather_state_name: 'Light Cloud',
      weather_state_abbr: 'lc',
      wind_direction_compass: 'NNE',
      created: '2019-07-15T10:05:02.784297Z',
      applicable_date: '2019-07-15',
      min_temp: 21.57,
      max_temp: 25.74,
      the_temp: 26.37,
      wind_speed: 7.4527977,
      wind_direction: 18.25,
      air_pressure: 1009.0,
      humidity: 70,
      visibility: 13.057183548079216,
      predictability: 70,
    },
    {
      id: 4817489802297344,
      weather_state_name: 'Clear',
      weather_state_abbr: 'c',
      wind_direction_compass: 'NE',
      created: '2019-07-15T10:05:05.585757Z',
      applicable_date: '2019-07-16',
      min_temp: 22.79,
      max_temp: 26.24,
      the_temp: 25.99,
      wind_speed: 8.34426045,
      wind_direction: 41.25,
      air_pressure: 1006.0,
      humidity: 70,
      visibility: 13.818363258569951,
      predictability: 68,
    },
    {
      id: 5532398638858240,
      weather_state_name: 'Light Cloud',
      weather_state_abbr: 'lc',
      wind_direction_compass: 'NNW',
      created: '2019-07-15T10:05:08.231320Z',
      applicable_date: '2019-07-17',
      min_temp: 22.03,
      max_temp: 24.99,
      the_temp: 25.75,
      wind_speed: 11.94164645,
      wind_direction: 327.5,
      air_pressure: 1005.0,
      humidity: 77,
      visibility: 13.064640002386065,
      predictability: 70,
    },
    {
      id: 4894338297364480,
      weather_state_name: 'Clear',
      weather_state_abbr: 'c',
      wind_direction_compass: 'NNW',
      created: '2019-07-15T10:05:11.236104Z',
      applicable_date: '2019-07-18',
      min_temp: 22.74,
      max_temp: 26.08,
      the_temp: 25.38,
      wind_speed: 17.58231955,
      wind_direction: 337.25,
      air_pressure: 1010.0,
      humidity: 69,
      visibility: 14.024347808796627,
      predictability: 68,
    },
    {
      id: 5796947464028160,
      weather_state_name: 'Light Cloud',
      weather_state_abbr: 'lc',
      wind_direction_compass: 'NNW',
      created: '2019-07-15T10:05:14.345250Z',
      applicable_date: '2019-07-19',
      min_temp: 23.42,
      max_temp: 26.46,
      the_temp: 25.78,
      wind_speed: 16.529844599999997,
      wind_direction: 327.25,
      air_pressure: 1013.0,
      humidity: 69,
      visibility: 14.009124214586812,
      predictability: 70,
    },
    {
      id: 5312337210769408,
      weather_state_name: 'Clear',
      weather_state_abbr: 'c',
      wind_direction_compass: 'NW',
      created: '2019-07-15T10:05:17.181054Z',
      applicable_date: '2019-07-20',
      min_temp: 23.61,
      max_temp: 26.44,
      the_temp: null,
      wind_speed: 15.87,
      wind_direction: 323.0,
      air_pressure: null,
      humidity: 70,
      visibility: 9.999726596675416,
      predictability: 68,
    },
  ],
  time: '2019-07-15T13:17:37.482634+03:00',
  sun_rise: '2019-07-15T06:11:36.569843+03:00',
  sun_set: '2019-07-15T20:36:19.178401+03:00',
  timezone_name: 'LMT',
  parent: {
    title: 'Greece',
    location_type: 'Country',
    woeid: 23424833,
    latt_long: '39.072449,21.845560',
  },
  sources: [
    {
      title: 'BBC',
      slug: 'bbc',
      url: 'http://www.bbc.co.uk/weather/',
      crawl_rate: 360,
    },
    {
      title: 'Forecast.io',
      slug: 'forecast-io',
      url: 'http://forecast.io/',
      crawl_rate: 480,
    },
    {
      title: 'HAMweather',
      slug: 'hamweather',
      url: 'http://www.hamweather.com/',
      crawl_rate: 360,
    },
    {
      title: 'Met Office',
      slug: 'met-office',
      url: 'http://www.metoffice.gov.uk/',
      crawl_rate: 180,
    },
    {
      title: 'OpenWeatherMap',
      slug: 'openweathermap',
      url: 'http://openweathermap.org/',
      crawl_rate: 360,
    },
    {
      title: 'Weather Underground',
      slug: 'wunderground',
      url: 'https://www.wunderground.com/?apiref=fc30dc3cd224e19b',
      crawl_rate: 720,
    },
    {
      title: 'World Weather Online',
      slug: 'world-weather-online',
      url: 'http://www.worldweatheronline.com/',
      crawl_rate: 360,
    },
  ],
  title: 'Santorini',
  location_type: 'City',
  woeid: 56558361,
  latt_long: '36.406651,25.456530',
  timezone: 'Europe/Athens',
};
