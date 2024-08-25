let columns; // list of columns random Heights
let columnWidth;
// first and second column used for compariosn in each loop
let c1;
let c2;

function setup() {
  createCanvas(800, 400);
  columnWidth = 20;
  columns = new Array(width / columnWidth);
  c1 = 0;
  c2 = 1;

  //populate random height to columns
  for (let i = 0; i < columns.length; i++) {
    columns[i] = random(height);
  }
}

function draw() {
  background(140, 202, 235);

  //sort ascending, if descending, switch < to > instead
  if (columns[c1] < columns[c2]) {
    swap(columns, c1, c2);
  }

  let xcoord = 0;
  //draw the unsorted columns, it draws from x coord downwards
  for (let i = 0; i < columns.length; i++) {
    stroke(0);
    fill(250, 163, 27);
    rect(xcoord, height - columns[i], columnWidth, columns[i]);
    xcoord += columnWidth + 2;
  }

  //steps to slow down the sort algorithm to better visualise/ animate it
  if (c1 < columns.length) {
    c2++;
    if (c2 >= columns.length - 1) {
      c2 = 0;
      c1++;
    }
  } else {
    console.log("Sort Complete");
    noLoop();
  }
}



function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

//the algorithm
// function bubbleSort() {
//   for (let i = 0; i < columns.length; i++) {
//     for (let j = i + 1; j < columns.length - 1; j++) {
//       if (columns[i] < columns[j]) {
//         swap(columns, i, j);
//  }

// next Step: better visualisation by implementing state to columns, red for selected and green for sorted, grey for unsorted columns
