import React from 'react'
import './Card.scss'
export interface ICard {
  year: number | string;
  title: string;
}

const Card = ({ year, title }: ICard) => {
  return (
    <article className='card__container'>
      <h3 className='card__year'>{year}</h3>
      <p className='card__title'>{title}</p>
    </article>
  )
}

export default Card
