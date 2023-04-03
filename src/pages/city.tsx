import { BoxWeather } from '@/components/BoxWeather';

export default function City({ data }: { data: any }) {
  return (
    <>
      {data.forecast.forecastday.map((day: any, index: number) => (
        <BoxWeather key={index} condition={day.day.condition} date={day.date} />
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const res =
    await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_METEO}&q=rome&days=7&aqi=no&alerts=no
  `);
  const data = await res.json();

  return { props: { data } };
}
