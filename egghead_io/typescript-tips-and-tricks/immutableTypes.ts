/*
const user = {
  name: 'John Doe',
  age: 26,
  education: {
    degree: 'SE',
  },
} as const;

const languages = ['Javascript', 'Typescript'] as const;

// yukarıdaki objeyi veya array'i as const diyerek immutable hale getirebiliriz.

// user.name = 'Muhammet Akbulut';
// user.education.degree = 'IT';

// languages.push('python');
*/

type User = {
  readonly name: string;
  readonly age: number;
  readonly education: {
    readonly degree: string;
  };
  //   readonly skills: Readonly<string[]>;
  readonly skills: ReadonlyArray<string>;
};

const user: User = {
  name: 'John Doe',
  age: 26,
  education: {
    degree: 'SE',
  },
  skills: ['Javascript', 'Typescript'],
};

/*
user.name = 'Jane Doe';
user.age = 22;
user.education = {
  degree: 'asdfas',
};
user.skills.push('Css');
*/

// veya readonly özelliği ile yapabiliriz
