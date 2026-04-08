import SearchBar from "./SearchBar"
import CurrentWeatherCard from "./CurrentWeatherCard"
import ForecastDay from "./ForecastDay"
import { useState,useEffect } from "react"

const WeatherPage = () => {
    const [curWeather,setCurWeather]=useState(null)
    const [forecastData,setForecastData]=useState(null)
    const [city,setCity]=useState("Hyderabad")
    const [error,setError]=useState(null)
    const [isLoading,setIsLoading]=useState(false)

    // API key
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const curWeatherUrl='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
    const foreCastDayUrl='https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}'
    // fetch data from 2 APIs
    
    const fetchData=async()=>{
        setIsLoading(true)
        setError(null)
        try{
            // featch current weather
            const curRes=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            // fetch forecast data
            const foreRes=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)

            // check res
            if(curRes.status!=200&&foreRes.status!=200){
                throw new Error("city not found")
            }
            // parse data
            const curData=await curRes.json()
            const foreData=await foreRes.json()
            console.log(curData)
            console.log(foreData)
            // update state
            setCurWeather(curData)
            setForecastData(foreData)
        }
        catch(err){
            setError("Failed to fetch weather data")
            setCurWeather(null)
            setForecastData(null)
        }
        finally{
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className="container">
        <SearchBar/>
        <CurrentWeatherCard/>
        <ForecastDay/>
    </div>
  )
}

export default WeatherPage