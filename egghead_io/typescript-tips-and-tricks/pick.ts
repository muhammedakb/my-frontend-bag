type Item = {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
};

const item: Item = {
  name: 'Macbook',
  description: 'Macbook Pro 2019',
  price: 3923,
  currency: 'USD',
  image: 'https://cdn.apple.com/mbpro.png',
};

type ItemPreview = Pick<Item, 'name' | 'image'>;

const itemPreview: ItemPreview = {
  name: item.name,
  image: item.image,
};

// bir type veya interface üzerinde sadece belirli alanlaı kullanacaksak
// bunun için baştan yeni type yazmak yerine Pick ile gerekli alanları seçebiliriz.
