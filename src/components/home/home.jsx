import './home.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Spinner } from '../spinner/spinner';
import { requestWorldSummary } from '../../redux/main/mainActions';
import { CountryForm } from '../form/form';
import { CountryData } from '../countryData/countryData';
import { WorldData } from '../worldData/worldData';
import { AllCountries } from '../allCountries/allCountries';
import { toast } from 'react-toastify';

export const Home = () => {
    const dispatch = useDispatch();
    const mainSelector = useSelector(state => state.main);
    const { loading, error, summary, filteredCountries } = mainSelector;
    
    useEffect( () => {
        dispatch(requestWorldSummary());
    }, [])

    if (loading) return <Spinner />
    
    else if (error) {
        window.scrollTo(0, 0);
        setTimeout(() => {
            document.location.reload()
            }, 4000)
        return <>
                <h1>Too many requests, please try again later :(</h1>
                <h1>We will try again within 4 seconds</h1>
                </>
    }
    return(
        <>
            {/* <CountryForm/> */}
            <h1 className='data-header'>World data</h1>
            <WorldData />
            <h1 className='data-header'>Data per country</h1>
            <AllCountries />
        </>
    )
};