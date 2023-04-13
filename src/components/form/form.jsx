
import {useEffect, useState} from 'react';
import { Button } from '../button/button';
import { Input } from '../input/input';
import "./form.scss"
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '../spinner/spinner';
import { clearFilter, setFiltered } from '../../redux/main/mainSlice';

export const CountryForm = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const {summary ,sortType,sortDirection, filteredCountries, loading} = useSelector(state => state.main)

    useEffect( () => {
        console.log(search);
        const filtered = summary.Countries?.filter( country => {
            return country.Country?.toLowerCase().includes(search.toLowerCase());
        })
        if (filtered?.length === 0 || search === '') {
            dispatch(clearFilter());
        } else {
            dispatch(setFiltered(filtered));
        }





        if (filtered) {
            let sortedCountries = [...filtered ] ;
        
            if(sortType) {
                sortedCountries.sort((a, b) => {
                    const valueA = typeof a[sortType] === "string" ? a[sortType].toUpperCase() : a[sortType];
                    const valueB = typeof b[sortType] === "string" ? b[sortType].toUpperCase() : b[sortType];
                    if (sortDirection === "up") {
                      return valueA > valueB ? 1 : -1;
                    } else {
                      return valueA < valueB ? 1 : -1;
                    }
                  });
            }

            dispatch(setFiltered(sortedCountries));
        }
        
    }, [search])


    if (loading) return <Spinner />

    return( 
        <div className="search-form-container">
            <Input type='text' placeholder='Enter country name' onChange={ (inputElement) => 
                setSearch(inputElement.target.value)
            }
            value={search}
            required
            autoComplete="on"
            list="countries"
            />
        </div>
    )
}