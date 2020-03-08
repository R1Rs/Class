import destructuring from "../src/add";

test ("test destructur", () => {
  const hero = {
    name: "Лучник",
    type: "Bowman",
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: "Двойной выстрел",
        icon: "http://...",
        description: "Двойной выстрел наносит двойной урон"
      },
      {
        id: 9,
        name: "Нокаутирующий удар",
        icon: "http://..."
        // <- обратите внимание, описание "засекречено"
      }
    ]
  };

  const received = destructuring(hero);

  const expected = [
    {
      id: 8,
      name: "Двойной выстрел",
      icon: "http://...",
      description: "Двойной выстрел наносит двойной урон"
    },
    {
      id: 9,
      name: "Нокаутирующий удар",
      icon: "http://...",
      description: "Описание недоступно"
    }
  ];

    expect(received).toEqual(expected);
})



