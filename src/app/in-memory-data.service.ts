import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 100, name: 'Homem de Ferro' },
      { id: 101, name: 'Capitao America' },
      { id: 102, name: 'Homem Aranha' },
      { id: 103, name: 'Feiticeira Escarlarte' },
      { id: 104, name: 'Dr.Estranho' },
      { id: 105, name: 'Hulk' },
      { id: 106, name: 'Gaviao Arqueiro' },
      { id: 107, name: 'Viuva Negra' },
      { id: 108, name: 'Pantera Negra' },
      { id: 109, name: 'Homem Formiga' }
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
