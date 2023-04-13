import { useSelector, useDispatch } from "react-redux";
import "./allCountries.scss";
import { TableElement } from "./countryList/tableElement";
import {Spinner} from "../spinner/spinner";
import {CountryForm} from "../form/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faMinus } from "@fortawesome/free-solid-svg-icons";
import { setSortType } from "../../redux/main/mainSlice";
import { useEffect } from "react";
import { setFiltered } from "../../redux/main/mainSlice";
export const AllCountries = () => {
    const { summary, error, isFiltered, filteredCountries, loading, sortDirection, sortType } = useSelector(state => state.main);
    const dispatch = useDispatch();
    useEffect(() => { 
        if (filteredCountries || summary) {
            let sortedCountries = filteredCountries?.length > 0 ? [...filteredCountries] :[...summary?.Countries ?? []] ;
        
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
        
        
    }, [sortType, sortDirection, ])

    if (loading) return <Spinner />
    if (error) {
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
        <CountryForm />
        <table className="all-table">
            <thead>
                <tr className="table-headers">
                    <th onClick={() => {
                        dispatch(setSortType('Country'));
                    }}>COUNTRY&nbsp;
                            {(() => {
                            if (sortType === "Country") {
                            if (sortDirection === "up") {
                                return <FontAwesomeIcon icon={faArrowUp} />;
                            } else {
                                return <FontAwesomeIcon icon={faArrowDown} />;
                            }
                            } else {
                            return <FontAwesomeIcon icon={faMinus} />;
                            }
                        })()}
                       </th>
                    <th onClick={() => {
                        dispatch(setSortType('TotalConfirmed'));
                    }}>TOTAL CONFIRMED&nbsp;
                        {(() => {
                            if (sortType === "TotalConfirmed") {
                            if (sortDirection === "up") {
                                return <FontAwesomeIcon icon={faArrowUp} />;
                            } else {
                                return <FontAwesomeIcon icon={faArrowDown} />;
                            }
                            } else {
                            return <FontAwesomeIcon icon={faMinus} />;
                            }
                        })()}
                    
                     </th>
                    <th onClick={() => {
                        dispatch(setSortType('NewConfirmed'));
                    }}>NEW CONFIRMED
                    &nbsp;
                    {(() => {
                            if (sortType === "NewConfirmed") {
                            if (sortDirection === "up") {
                                return <FontAwesomeIcon icon={faArrowUp} />;
                            } else {
                                return <FontAwesomeIcon icon={faArrowDown} />;
                            }
                            } else {
                            return <FontAwesomeIcon icon={faMinus} />;
                            }
                        })()}
                     </th>
                    <th onClick={() => {
                        dispatch(setSortType('TotalDeaths'));
                    }}>TOTAL DEATHS
                        &nbsp;
                        {(() => {
                            if (sortType === "TotalDeaths") {
                            if (sortDirection === "up") {
                                return <FontAwesomeIcon icon={faArrowUp} />;
                            } else {
                                return <FontAwesomeIcon icon={faArrowDown} />;
                            }
                            } else {
                            return <FontAwesomeIcon icon={faMinus} />;
                            }
                        })()}
                    
                     </th>
                    <th onClick={() => {
                        dispatch(setSortType('NewDeaths'));
                    }}>NEW DEATHS&nbsp;
                    
                    {(() => {
                            if (sortType === "NewDeaths") {
                            if (sortDirection === "up") {
                                return <FontAwesomeIcon icon={faArrowUp} />;
                            } else {
                                return <FontAwesomeIcon icon={faArrowDown} />;
                            }
                            } else {
                            return <FontAwesomeIcon icon={faMinus} />;
                            }
                        })()}
                     </th>
                    <th>DATE</th>
                </tr>
            </thead>
            <tbody>
            {
                isFiltered ? filteredCountries.map( (country, index) => {
                    return <TableElement key={index} country={country} />
                }) :
                summary.Countries?.map( (country, index) => {
                    return <TableElement key={index}  country={country} />
                })
            }
            </tbody>
        </table>
        </>
    )
}