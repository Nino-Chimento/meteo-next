import { BoxWeather } from '@/components/BoxWeather';
import Link from 'next/link';
import styles from '@/styles/BoxWeather.module.css';

export default function City({ data }: { data: any }) {
  return (
    <div className={styles.flex}>
      <h1>{data?.location?.name}</h1>
      {data.forecast.forecastday.map((day: any, index: number) => (
        <BoxWeather
          key={index}
          condition={day.day.condition}
          date={day.date}
          name={data.location.name}
        />
      ))}
      <div>
        <h2>
          <Link href="/">Home</Link>
        </h2>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res =
    await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_METEO}&q=rome&days=7&aqi=no&alerts=no
  `);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { data } };
}
