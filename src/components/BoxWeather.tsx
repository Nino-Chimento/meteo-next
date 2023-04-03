import { FC } from 'react';
import Image from 'next/image';
import styles from '@/styles/BoxWeather.module.css';
interface BoxWeatherProps {
  date: string;
  condition?: Condition;
}
interface Condition {
  code: number;
  icon: string;
  text: string;
}
export const BoxWeather: FC<BoxWeatherProps> = ({ date, condition }) => {
  return (
    <div className={styles.flex}>
      <div className={styles.flex}>
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
  );
};
