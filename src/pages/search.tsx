import { BoxWeather } from '@/components/BoxWeather';
import SpinnerLoading from '@/components/Spinner';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Input } from '@chakra-ui/react';
import useDebounce from '@/hooks/useDebounce';
import styles from '@/styles/BoxWeather.module.css';

export default function SearchCity() {
  const [city, setCity] = useState('rome');
  const [weather, setWeather] = useState<any>();
  const [error, setError] = useState(null);
  const debouncedValue = useDebounce<string>(city, 3000);

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=0c5ddc9a402b4888962181915230304&q=${city}&days=7&aqi=no&alerts=no
  `)
      .then((res) => {
        console.log(res);

        if (!res.ok) {
          throw Error('Could not fetch the data for that resource');
        }
        return res.json();
      })
      .catch((err) => setError(err.message))
      .then((data) => setWeather(data));
  }, [debouncedValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setCity(event.target.value);
  };

  return (
    <>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {!weather && !error && <SpinnerLoading />}
      {weather && !error && (
        <div className={styles.flex}>
          <h1>{weather?.location?.name}</h1>
          {weather?.forecast?.forecastday?.map((day: any, index: number) => (
            <BoxWeather
              key={index}
              condition={day.day.condition}
              date={day.date}
            />
          ))}
        </div>
      )}
      <div>
        <Input
          onChange={handleChange}
          style={{ width: '100%', height: '50px' }}
          placeholder="Search City"
          size="lg"
        />
      </div>
    </>
  );
}
