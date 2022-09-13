import React, {useState, useEffect} from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { Lot } from './models';
import { getLots } from './utils/getLots';

export const App = () => {
  const [lots, setLots] = useState<Lot[]>([]);

  useEffect(() => {
    getLots().then(res => setLots(res));
  }, [])

  return (
    <div className="App">
      <h1>Lots:</h1>
      {lots.length ? lots.map(item => <Card item={item} key={item.id}/>) : 'Лотов нет!:('}
    </div>
  );
}