import { Arena } from './Arena';
import { Player } from './Player';

const arena = new Arena();

if (arena.created) {
    console.log('Arena created');
    const player = new Player();
}