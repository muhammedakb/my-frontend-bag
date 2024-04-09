const bookClubs = [
  {
    name: 'The Cool Club',
    clubMembers: [
      {
        name: 'John Doe',
        books: [
          { id: 'hs891', title: 'A Perfect' },
          { id: 'ey812', title: 'A Good Book' },
        ],
      },
    ],
  },
  {
    name: 'The Better Club',
    clubMembers: [
      {
        name: 'Jane Doe',
        books: [
          { id: 'u8291', title: 'A Great Book' },
          { id: 'p9201', title: 'A Nice Book' },
        ],
      },
    ],
  },
];

// INFO: Büyük veri setleriyle çalışırken, iterator ve generator'ler daha performanslı çalışır.

function* iterateBooks(books) {
  for (let i = 0; i < books.length; i++) {
    yield books[i];
  }
}

function* iterateMembers(members) {
  for (let i = 0; i < members.length; i++) {
    const clubMember = members[i];
    yield* iterateBooks(clubMember.books);
  }
}

function* iterateBookClubs(bookClubs) {
  for (let i = 0; i < bookClubs.length; i++) {
    const bookClub = bookClubs[i];
    yield* iterateMembers(bookClub.clubMembers);
  }
}

// const it = iterateBookClubs(bookClubs);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

function findBook(id) {
  const genObj = iterateBookClubs(bookClubs);
  let result = genObj.next();

  while (!result.done) {
    if (result.value.id === id) {
      return result.value;
    } else {
      result = genObj.next();
    }
  }
}

const foundedBook = findBook('ey812');
console.log(foundedBook);
