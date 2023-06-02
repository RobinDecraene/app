import React from 'react';
import style from './notfound.module.css';

const NotFound = () => {
  return (
    <section className={style.box}>
      <h1 className={style.title}>404</h1>
      <p className={style.description}>This page could not be found</p>
    </section>

  );
};

export default NotFound;