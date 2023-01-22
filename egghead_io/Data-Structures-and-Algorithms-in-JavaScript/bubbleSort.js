// Bubble sort

// Loop through the array (Dizi boyunca döngü)
// If this item > next item, swap them (Bu öğe > sonraki öğe ise, onları değiştirin)
// Indicate a swap occurred (Bir değiş tokuşun gerçekleştiğini belirtin)
// If a swap occurred, loop through the array again (Bir takas meydana gelirse, dizi boyunca tekrar döngü yapın)
// Continue looping until no swaps occur (Hiçbir takas meydana gelene kadar döngüye devam edin)

function bubbleSort(array) {
  let swapped = false;

  do {
    swapped = false;

    array.forEach((item, index) => {
      if (item > array[index + 1]) {
        const temporary = item;

        array[index] = array[index + 1];
        array[index + 1] = temporary;
        swapped = true;
      }
    });
  } while (swapped);
  return array;
}

const numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1];

const result = bubbleSort(numbers);
console.log(result);
