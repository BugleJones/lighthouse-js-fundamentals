
function range (start, end, step) {
var series = [];
  if( start === null || end === null || step === null || end < start || step < 0 ){
    series = [];
  } else {
    for(var i = start; i <= end; i = i + step){
      series.push(i);
    }
  }
  return series;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
