import { Ak47 } from "./gunTypes/ak47";
import { Glob } from "./gunTypes/glob";

export const GunFactory = (gunType: string) => {
  switch (gunType) {
    case 'ak47':
      return new Ak47('ak47', 100);
    case 'glob':
      return new Glob('glob', 50);
    default:
      throw new Error('Invalid gun type');
  }
}