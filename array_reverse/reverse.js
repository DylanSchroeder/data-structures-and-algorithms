function reverseArray(a) {
  for(let i = 0, r = a.length-1; i < r; i++, r--)
    [a[i], a[r]] = [a[r], a[i]];
}
let a = [1, 2, 3, 4, 5, 6];

reverseArray(a);
console.log(a);