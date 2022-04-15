import { GunFactory } from './gun/gunFactory';
import { Ak47 } from './gun/gunTypes/ak47';
import { Glob } from './gun/gunTypes/glob';

const ak47: Ak47 = GunFactory('ak47');
const glob: Glob = GunFactory('glob');

console.log(`ak47: ${ak47.getName()} ${ak47.getPower()}`);
console.log(`glob: ${glob.getName()} ${glob.getPower()}`);