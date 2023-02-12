// type AgesType = {
//   [name: string]: number;
// };

type AgesType = Record<string, number>;

const ages: AgesType = {
  'John Doe': 29,
  'Jane Doe': 25,
  'Baby Doe': 1,
};
