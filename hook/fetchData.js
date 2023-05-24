import { useState, useEffect } from 'react'

import axios from 'axios'

const useFetchData = (query, location) => {

    const [data, setData] = useState([])
    const [isLoadingData, setIsLoading] = useState(false)
    const [errorData, setError] = useState(null)

    var options = {
        method: 'GET',
        url: 'https://local-business-data.p.rapidapi.com/search',
        params: {
            query: query,
            limit: '10',
            lat: location !== null ? location.latitude : null,
            lng: location !== null ? location.longitude : null,
            zoom: '13',
            language: 'en',
            region: 'us'
        },
        headers: {
            'X-RapidAPI-Key': 'a9cff68acemsh98ae88adc7ec51ap1e1bcajsn111ed967183c',
            'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com'
        }
    }

    const fetchData = async () => {
        setIsLoading(true)

        try {
            if (options.params.query !== null && options.params.lat !== null && options.params.lng !== null) {
                const response = await axios.request(options);
                console.log(response.data);
                setData(response.data)
            }
        } catch (error) {
            console.error(error)
            setError(error)
            alert('error in fetching data')
        } finally {
            setIsLoading(false)
        }
    }

    const refetchData = (query, location) => {
        setIsLoading(true)
        options.params.query = query
        options.params.lat = location.latitude
        options.params.lng = location.longitude
        fetchData()
    }

    return { data, isLoadingData, errorData, refetchData }
}

export default useFetchData