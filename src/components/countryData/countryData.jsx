import './countryData.scss';
import { useSelector } from 'react-redux';
import { Spinner } from '../spinner/spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSkull, faVirusCovid } from '@fortawesome/free-solid-svg-icons'


export const CountryData = () => {
    const mainSelector = useSelector(state => state.main);
    const { countryData, loading } = mainSelector;

    if (loading) return <Spinner />

    return (
        <div className='country-data-container'>
            <div className='date-container'>
                <p className='date'>Last update:</p>
                <p className='subdate'>{countryData.date}</p>
            </div>
            <div className='data-container'>
                <div className='data'>
                    <div className='data-confirmed'>
                        <div className='data-left'>
                            <FontAwesomeIcon icon={faVirusCovid} />
                            <p className='data-title'>Coronavirus Cases:</p>
                            <p className='data-sub'>{countryData.confirmed}</p>
                        </div>
                        <div className='data-right'>
                            <FontAwesomeIcon icon={faVirusCovid} />
                            <p className='data-title'>Recovered: </p>
                            <p className='data-sub'>{countryData.active}</p>
                        </div>
                    </div>
                    <div className='data-confirmed'>
                        <div className='data-left'>
                            <FontAwesomeIcon icon={faSkull} />
                            <p className='data-title'>Deaths: </p>
                            <p className='data-sub'>{countryData.deaths}</p>
                        </div>

{/* 
                        <div className='data-right'>
                             <FontAwesomeIcon icon={faSkull} />
                            <p className='data-title'>Deaths today: </p>
                            <p className='data-sub'>{countryData.newDeaths}</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
