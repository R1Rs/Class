export {Character, Bowman, Swordsman, Magician, Undead, Zombie, Daemon};

class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.attack = attack;
    this.defence = defence;
  }
  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

class Bowman extends Character {
   constructor(name) {
     super(name, "Bowman", 25, 25);
   }
}

class Swordsman extends Character {
  constructor(name) {
    super(name, "Swordsman", 40, 40);
  }
}

class Magician extends Character {
  constructor(name) {
    super(name, "Magician", 10, 40);
  }
}

class Undead extends Character {
  constructor(name) {
    super(name, "Undead", 25, 25);
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name, "Zombie", 40, 10);
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon", 10, 40);
  }
}


