type Item = {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
};

type PricelessItem = Omit<Item, 'price' | 'currency'>;

const item: PricelessItem = {
  name: 'Macbook',
  description: 'Macbook Pro 2019',
  //   price: 3923,
  //   currency: 'USD',
  image: 'https://cdn.apple.com/mbpro.png',
};

// bir type veya interface üzerinde belirli alanlar hariç geri kalanı kullanacaksak
// bunun için baştan yeni type yazmak yerine Omit ile gereksiz alanları kaldırabiliriz.
