import './worldData.scss';
import { useSelector } from 'react-redux';
import { Spinner } from '../spinner/spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSkull, faVirusCovid } from '@fortawesome/free-solid-svg-icons'


export const WorldData = () => {
    const mainSelector = useSelector(state => state.main);
    const { summary, loading } = mainSelector;

    if (loading) return <Spinner />
     return (
        <div className='world-data-container'>
            <div className='date-container'>
                <p className='date' onClick={() => console.log(summary)}>Last update:</p>
                <p className='subdate'>{new Date(summary.Global?.Date).toLocaleDateString("pl-PL").split('.').reverse().join('.')}</p>
            </div>
            <div className='data-container'>
                <div className='data'>
                    <div className='data-confirmed'>
                        <div className='data-left'>
                            <FontAwesomeIcon icon={faVirusCovid} />
                            <p className='data-title'>Coronavirus Cases:</p>
                            <p className='data-sub'>{summary.Global?.TotalConfirmed}</p>
                        </div>
                        <div className='data-right'>
                            <FontAwesomeIcon icon={faVirusCovid} />
                            <p className='data-title'>Today new cases: </p>
                            <p className='data-sub'>{summary.Global?.NewConfirmed}</p>
                        </div>
                    </div>
                    <div className='data-confirmed'>
                        <div className='data-left'>
                            <FontAwesomeIcon icon={faSkull} />
                            <p className='data-title'>Total deaths: </p>
                            <p className='data-sub'>{summary.Global?.TotalDeaths}</p>
                        </div>


                        <div className='data-right'>
                             <FontAwesomeIcon icon={faSkull} />
                            <p className='data-title'>Deaths today: </p>
                            <p className='data-sub'>{summary.Global?.NewDeaths}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
