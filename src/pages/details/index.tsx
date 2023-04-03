import { BoxWeather } from '@/components/BoxWeather';
import styles from '@/styles/BoxWeather.module.css';
export default function CityDetails({
  data,
  name,
  date,
}: {
  data: any;
  name: string;
  date: string;
}) {
  console.log(data);
  const { hour } = data.forecast.forecastday[0];

  return (
    <div className={styles.flex}>
      <h1>{name}</h1>
      {hour.map((item: any, index: number) => (
        <BoxWeather
          key={index}
          date={item.time}
          name={name}
          condition={item.condition}
        />
      ))}
    </div>
  );
}

export async function getServerSideProps(context: {
  query: { name: string; date: string };
}) {
  const { name, date } = context.query;
  const res =
    await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_METEO}&q=${name}&dt=${date}
  `);
  const data = await res.json();

  return { props: { data, name, date } };
}
