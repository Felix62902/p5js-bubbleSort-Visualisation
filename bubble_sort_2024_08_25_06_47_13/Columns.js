class Column {
  
  constructor(w){
    this.h = random(height);
    this.w = w;
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.state = 0; // 0 = unsorted (grey), 1 = sorting (red), 2 = sorted (green)
    this.setColor(214,214,214); //Default to gret for unsorted columns
  }
  
  setColor(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
  }
  
  //update color based on state
  updateState(){
    if (this.state === 0) {
      this.setColor(214,214,214); // Grey for unsorted
    } else if (this.state === 1) {
      this.setColor(208, 55, 114); // Red for sorting
    } else if (this.state === 2) {
      this.setColor(210, 220, 91); // Green for sorted
    }
  }
}