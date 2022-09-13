import axios from 'axios';
import { Lot } from '../models';

export const getLots = (): Promise<[Lot]> => {
    return axios('https://development.alliance-eco.ru:8100/api/lots/best').then(response => {
        return Promise.resolve(response.data);
    });
}