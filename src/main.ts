import { chainify } from './chainify.ts';
import { City } from './city.ts';

const tbs: City = new City('Tbilisi', 123.1, 321.1);

console.log(
  'res',
  chainify(tbs)
    .setName('Pune, India')
    .setLat(111.236)
    .setLong(713.387)
    .getCoords()
); /// [ 111.236, 713.387 ]
