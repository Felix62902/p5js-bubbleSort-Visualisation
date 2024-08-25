// list of columns random Heights
let columns;
let columnWidth;
// first and second column used for compariosn in each loop
let c1 = 0;
let c2 = 1;

function setup() {
  //init global variables;
  createCanvas(812, 400);
  columnWidth = 20;
  columns = new Array(floor(width / columnWidth));

  //populate random height to columns
  for (let i = 0; i < columns.length; i++) {
    columns[i] = new Column(columnWidth);
  }
}

function draw() {
  background(0, 121, 128);

  let xcoord = 0;
  //initialise the unsorted columns UI
  for (let i = 0; i < columns.length; i++) {
    columns[i].updateState();
    stroke(0);
    fill(columns[i].r, columns[i].g, columns[i].b);
    rect(xcoord, height - columns[i].h, columnWidth, columns[i].h);
    xcoord += columnWidth + 2;
  }

  //the iteration,slow down the sort algorithm to better visualise it
  if (c1 < columns.length - 1) {
    // Reset all unsorted columns to grey
    for (let i = c1 + 1; i < columns.length; i++) {
      columns[i].state = 0;
    }

    if (c2 >= columns.length) {
      columns[c1].state = 2;
      c2 = c1 + 1;
      c1++;
    }

    if (c2 < columns.length) {
      columns[c2].state = 1;
    }
    //sort ascending, if descending, switch > to < instead
    if (columns[c2].h < columns[c1].h) {
      swap(columns, c1, c2);
    }
    c2++;
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
//       }
//     }
//   }
// }
