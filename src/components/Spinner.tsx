import React from 'react';
import { Circles } from 'react-loader-spinner';


export default function SpinnerLoading() {
  return (
    <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      visible={true}
    />
  );
}
