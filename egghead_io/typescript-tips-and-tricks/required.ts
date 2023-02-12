type User2 = {
  name: string;
  age?: number;
  gender?: string;
};

const user2: Required<User> = {
  name: 'John Doe',
  age: 23,
  gender: 'male',
};

// User2 type'ında age ve gender değerleri optional verilmiş
// Bunları kullandığımız yerde zorunlu olmasını istiyorsak
// type'ı yeniden yazmak yerine Required ile sarmalayabiliriz
