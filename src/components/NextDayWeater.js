import React from 'react'

const NextDayWeater = (props) => {
    const { day, type, temp } =props

    const getIconWheater = () => {
        console.log(type);
        switch (type) {
            case 'sun':
                return 'https://img.icons8.com/cotton/64/000000/sun--v1.png'
            case 'cloud':
                return 'https://img.icons8.com/cotton/64/000000/clouds--v3.png'
            case 'rain':
                return 'https://img.icons8.com/cotton/64/000000/rain--v1.png'
            default:
                return 'https://img.icons8.com/cotton/64/000000/sun--v1.png'
        }
    }
    return (
    <div className={'center flex-1 card-weater'}>
        <div className={'m-1'}>{day}</div>
        <div><img className={'icon-weater'} src={getIconWheater()}/></div>
        <div className={'m-1'}>{temp}°</div>
    </div>)
}



export default NextDayWeater