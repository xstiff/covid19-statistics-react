import './tableElement.scss';

export const TableElement = ( { country }) => {
    const {Country, NewConfirmed, NewDeaths, TotalConfirmed, TotalDeaths} = country;
    // const data = new Date(Date).toLocaleDateString("pl-PL").split('.').reverse().join('.')
    // const formattedDate = new Date(Date).toLocaleDateString("pl-PL").split('.').reverse().join('.');

    const formattedDate = new Date(country.Date).toLocaleDateString().split('/').reverse().join('-');

    return(
        <tr className='table-row'>
            <td className='td-el'>{Country}</td>
            <td className='td-el'>{TotalConfirmed.toLocaleString()}</td>
            <td className='td-el'>{NewConfirmed.toLocaleString()}</td>
            <td className='td-el'>{TotalDeaths.toLocaleString()}</td>
            <td className='td-el'>{NewDeaths.toLocaleString()}</td>
            <td className='td-el'>{formattedDate}</td>
        </tr>
    )
}
