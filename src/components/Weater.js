import React from 'react'
import NextDayWeater from './NextDayWeater'

const mockData = {
    current_day: 'April 30',
    day: 'Monday',
    type: 'Party Cloudy',
    temp: 24,
    feel_like: 22,
    high: 20,
    low: 27,
    wind: 6,
    rain_percent: 72,
    next_day: [
        {
            day: 'THU',
            type: 'sun',
            temp: '20'
        },
        {
            day: 'THU',
            type: 'cloud',
            temp: '23'
        },
        {
            day: 'THU',
            type: 'rain',
            temp: '19'
        }
    ]
}

const Weater = () => {
    const { current_day, day, type, temp, feel_like, high, low, wind, rain_percent, next_day } = mockData

    const getWeaterIcon = () => {
        switch (type) {
            case 'Party Cloudy':
                return 'https://img.icons8.com/cotton/64/000000/partly-cloudy-day--v2.png'
        
            default:
                return 'https://img.icons8.com/cotton/64/000000/partly-cloudy-day--v2.png'
        }
    }
    return (
    <div className={'wheater-container'}>
        <div className={'wheater-title'}>
            <div>CITY NAME</div>
            <div className={'wheater-date'}>
                <button>{'<'}</button>
                <span>{current_day}</span>
                <button>{'>'}</button>
            </div>
        </div>
        <div className={'wheater-sub-title'}>Monday</div>
        <div className={'whether-content-container'}>
            <div className={'image'}>
                <div className={'center box-img'}><img src={getWeaterIcon()}/></div>
                <div className={'center'}>Party Cloudy</div>
            </div>
            <div className={'temp'}>
                <div className={'center box-temp'}><span>{temp}°</span></div>
                <div className={'center'}>Feel Like {feel_like}°</div>

            </div>
            <div className={'detail'}>
                <div className={'detail-header'}>
                    <div>△ {high}° </div>
                    <div>▽ {low}°</div>
                </div>
                <div>
                    <span>Wind: {wind}km/h</span> <br />
                    <span>💧 {low}%</span>
                </div>
            </div>
        </div>
        <hr />
        <div className={'next-weater'}>
            {next_day.map((e) => {
                return <NextDayWeater {...e} />
            })}
        </div>

    </div>)
}

export default Weater