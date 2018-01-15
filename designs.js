//for performance checking
//const t0 = performance.now();
let sizePicker=document.getElementById("sizePicker");

function makeGrid(){
  //global variables
  let input_r;
  let input_c;

  //Get the table id and clear it
  var table = document.getElementById("pixel_canvas");
  table.innerHTML = ""; //clear table

  //get input values of width and height
  input_r = document.getElementById("input_height").value;
  input_c = document.getElementById("input_width").value;
  //populate the table with the given width and height
  for(let r = 0;r<input_r;r++){
    var row_elem = table.insertRow(r);
    row_elem.setAttribute("class", "row");
    //add grid columns & color in it
    for(let c= 0;c<input_c;c++){
      var col_elem = row_elem.insertCell(c);
      col_elem.addEventListener('click', function(evt) {
      evt.target.style.backgroundColor = document.getElementById("colorPicker").value;
    });
    }
  }  return false;
}

sizePicker.addEventListener("submit", function(evt) {
  evt.preventDefault();
  makeGrid();
});

//
// for performance checking
// const t1 = performance.now();
// const perf=t1-t0;
// console.log("Performance : " + perf);
