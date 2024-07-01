import { IBeef, IChicken, IFish } from "../interfaces";

export class CookedChicken implements IChicken {
  getExpirationDate() {
    return new Date();
  }

  getCreationDate(): Date {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return date;
  }

  getName(): string {
    return "cooked chicken";
  }
}

export class CookedFish implements IFish {
  getExpirationDate() {
    return new Date();
  }

  getCreationDate(): Date {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return date;
  }

  getName(): string {
    return "cooked fish";
  }
}

export class CookedBeef implements IBeef {
  getExpirationDate() {
    return new Date();
  }

  getCreationDate(): Date {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return date;
  }

  getName(): string {
    return "cooked beef";
  }
}