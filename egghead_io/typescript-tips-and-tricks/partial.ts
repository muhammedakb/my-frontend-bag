// Use Partial to Create Partially Fillable Types in TypeScript

type User = {
  name: string;
  age: number;
  gender: string;
};

// type PartialUser = {
//   name?: string;
//   age?: number;
//   gender?: string;
// };

// Genelde bir Type'ın veya Interface'in bir çok özelliğe sahip olduğu
// durumlarda, bu özelliklerin sadece belirli bir bölümünü değiştirmek isteyebiliriz.
// Tüm Type'ı veya Interface'i tekrar yazmak yerine, "Partial" kullanabiliriz.

type PartialUser = Partial<User>;

const user: PartialUser = {};

console.log(user);
