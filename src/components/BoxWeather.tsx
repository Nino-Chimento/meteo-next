import { FC } from 'react';
import Image from 'next/image';
import styles from '@/styles/BoxWeather.module.css';
import { useRouter } from 'next/router';
interface BoxWeatherProps {
  date: string;
  condition?: Condition;
  name: string;
}
interface Condition {
  code: number;
  icon: string;
  text: string;
}
export const BoxWeather: FC<BoxWeatherProps> = ({ date, condition, name }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push({
      pathname: '/details',
      query: { name, date },
    });
  };
  return (
    <div>
      <div>
        <div className={styles.flex} onClick={handleClick}>
          <div>{date}</div>
          <div>{condition?.text}</div>
          <div>
            {/*   <Image
          src={`http:${condition?.icon}`}
          alt="Weather data by WeatherAPI.com"
          width={50}
          height={50}
        /> */}
            <img src={condition?.icon} alt="Weather data by WeatherAPI.com" />
          </div>
        </div>
      </div>
    </div>
  );
};
