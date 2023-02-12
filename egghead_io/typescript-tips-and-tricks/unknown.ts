type Some = {
  something: () => void;
};

function log(val: unknown) {
  if (typeof val === 'string') {
    console.log(val.toUpperCase());
  }
  console.log((val as number) + 20);
  console.log((val as Some).something());
}

log(5);
