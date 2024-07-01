import { IBeef, IChicken, IFish } from "../interfaces";

export class RawChicken implements IChicken {
  getExpirationDate() {
    return new Date();
  }

  getCreationDate(): Date {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    return date;
  }

  getName(): string {
    return "raw chicken";
  }
}

export class RawFish implements IFish {
  getExpirationDate() {
    return new Date();
  }

  getCreationDate(): Date {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    return date;
  }

  getName(): string {
    return "raw fish";
  }
}

export class RawBeef implements IBeef {
  getExpirationDate() {
    return new Date();
  }

  getCreationDate(): Date {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    return date;
  }

  getName(): string {
    return "raw beef";
  }
}
foodFactory.ts
typescript
Copy code
import {
  CookedBeef,
  CookedChicken,
  CookedFish,
} from "./cookedProducts";
import { RawBeef, RawChicken, RawFish } from "./rawProducts";
import { IFoodFactory } from "../interfaces";

export class RawFoodFactory implements IFoodFactory {
  createChicken() {
    return new RawChicken();
  }
  createFish() {
    return new RawFish();
  }
  createBeef() {
    return new RawBeef();
  }
}

export class CookedFoodFactory implements IFoodFactory {
  createChicken() {
    return new CookedChicken();
  }
  createFish() {
    return new CookedFish();
  }
  createBeef() {
    return new CookedBeef();
  }
}