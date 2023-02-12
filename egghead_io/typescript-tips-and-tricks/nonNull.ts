type User = {
  name: string;
  age: number;
  profession?: string;
};

const user: User = {
  name: 'John Doe',
  age: 27,
  profession: 'Engineer',
};

const output: string = user.profession!;

// output'un tipini string yaptık 
// fakat user objesi içindeki profession değeri optional olduğu için
// undefined | string olaak gelir bu yüzden output hata verir
// bunun null olmadığını belirtmek için ! non-null assertion operator
// kullanabiliriz