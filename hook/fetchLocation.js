import { useState, useEffect } from 'react'
import * as Location from 'expo-location'

const useFetchLocation = () => {
    const [location, setLocation] = useState(null)
    const [error, setError] = useState(null)
    const [locationIsLoading, setIsLoading] = useState(true)

    const fetchLocation = async () => {
        setIsLoading(true)

        try{
            const response = await Location.requestForegroundPermissionsAsync()
            const { status } = response

            if(status !== 'granted'){
                setError('Permission to access location was denied')
                return
            }

            const currentLocation = await Location.getCurrentPositionAsync()
            const { coords } = currentLocation
            const { latitude, longitude } = coords

            setLocation({ latitude, longitude })
        }catch(error){
            setError(error)
        }finally{
            setIsLoading(false)
            
        }
    }

    useEffect(() => {
        fetchLocation()
    }, [])

    const refetchLocation = () => {
        setIsLoading(true)
        fetchLocation()
    }

    return { location, error, locationIsLoading, refetchLocation }
}

export default useFetchLocation