class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[];

  constructor(key: Key) {
    this.door = false; // door is closed by default
    this.key = key;
    this.tenants = [];
  }

  comeIn(person: Person): void {
    if (!this.door) {
      console.log("The door is closed. The person cannot enter");
    } else {
      this.tenants.push(person);
      console.log("The person entered the house");
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Door opened");
    } else {
      throw new Error("Wrong key. Door remains closed");
    }
  }
}

// Coming home scenario:
const validKey = new Key();
console.dir(validKey.getSignature());
const wrongKey = new Key();
console.dir(wrongKey.getSignature());

const houseSafe = new MyHouse(validKey);
const houseAlarm = new MyHouse(wrongKey);

const person = new Person(validKey);

// Opening the door with the correct key
houseSafe.openDoor(validKey);

// Person tries to enter using the wrong key
try {
  houseAlarm.openDoor(new Key()); // Door remains closed, alarm is on
} catch (error) {
  console.dir("Person tried to enter with the wrong key");
  console.error(error);
}

// Now the person with the valid key enters the house safely, alarm is off
houseSafe.comeIn(person);

export { Key, Person, House, MyHouse };

/* У цьому завдання вам належить реалізувати сценарій життя, де людина, ключ і будинок взаємодіють один з одним.

Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature, яка генерується випадково при створенні об’єкта цього класу (наприклад Math.random()). Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.

Людина (Person): Створіть клас Person. Конструктор цього класу приймає об’єкт класу Key і зберігає їх у приватному властивості key. Клас Person повинен мати метод getKey, який повертає збережений ключ.

Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true), або закрита (false), і key, яка зберігає об’єкт класу Key. У цьому класі також повинен бути метод comeIn, який додає об’єкт класу Person у масив tenants, якщо door відкрита. Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об’єкт класу Key.

Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House. Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.

Після реалізації всіх класів створіть об’єкти для кожного класу та спробуйте відтворити сценарій, в якому людина приходить додому.

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);*/
