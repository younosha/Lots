import React from 'react';
import { Lot } from '../../models';
import './Card.css';

interface CardProps {
    item: Lot
}

export const Card = ({item}: CardProps) => {
    return (
        <div className='container'>
            <div className='block' style={{width: '45%'}}>
                <p className='grayColor'>{item.dealType}</p>
                <p className='greenColor'>№ {item.number}</p>
                <p >{item.item.description} / {item.item.group}</p>
                <p className='grayColor'>{item.item.category}</p>
                <p className='greenColor'>{item.item.totalPrice} ₽</p>
                <div className='flex'>
                    <p className='blue'>Локация:</p>
                    <p>{item.location ? item.location : 'не определено'}</p>
                </div>
            </div>
            <div className='block' style={{width: '30%'}}>
                <p className='grayColor'>Количество</p>
                <p>{item.item.quantity}</p>
                <p className='grayColor'>Единицы измерения</p>
                <p>{item.item.measurementUnit}</p>
                <p className='grayColor'>Стоимость за единицу измерения</p>
                <p>{item.item.price} ₽</p>
            </div>
            <div className='block' style={{width: '25%'}}>
                <p className='grayColor'>Начало сбора предложений</p>
                <p>{new Date(item.beginDate).toLocaleDateString('ru-RU', {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })}
                </p>
                <p className='grayColor'>Окончание сбора предложений</p>
                <p>{new Date(item.endDate).toLocaleDateString('ru-RU', {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })}</p>
                <p className='grayColor'>Участников</p>
                <p>{item.participants.count}</p>
            </div>
        </div>
    )
}