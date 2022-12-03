const luke = {
  name: "luke skywalker",
  jedi: true,
  parents: {
    father: {
      jedi: true,
    },
    mother: {
      jedi: false,
    },
  },
};

const han = {
  name: "han solo",
  jedi: false,
  parents: {
    father: {
      jedi: false,
    },
    mother: {
      jedi: false,
    },
  },
};

const anakin = {
  name: "anakin skywalker",
  jedi: true,
  parents: {
    mother: {
      jedi: false,
    },
  },
};

const characters = [luke, han, anakin];

const fatherWasJedi = (character) => {
  const path = "parents.father.jedi";
  return path.split(".").reduce((obj, field) => {
    if (obj) {
      return obj[field];
    }
    return false;
  }, character);
};

characters.forEach((character) => {
  console.log(
    `${character.name} 's father was jedi: ${fatherWasJedi(character)}`
  );
});
