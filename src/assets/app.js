collapse = function () {
  console.log("etete");
  var x = document.getElementsByClassName("itemMain");
  console.log(x);
  if (x[0].style.display === "none") {
    x[0].style.display = "inline-block";
  } else {
    x[0].style.display = "none";
  }
}

addItem=function(){
  
}

openItem = function (event, info) {
  // Get the modal
  var modal = document.getElementById('myModal');
  modal.style.display = "block";

  var iImg, iName, iInfo, iMain;
  iImg=document.getElementsByClassName('itemImg1');
  iName=document.getElementsByClassName('nameData1');
  iInfo=document.getElementsByClassName('mainData1');
  iMain=document.getElementsByClassName('currDate1');

  console.log(iImg);
  for (ele1 in info) {
    // console.log(info[ele1]);
    console.log(ele1);
 
    switch(ele1){
      case 'infoImg':
      iImg[0].innerHTML=`<img src=${info[ele1]}>`;
      break;
      case 'iName':
      iName[0].innerHTML=info[ele1];
      break;
      case 'iInfo':
      iInfo[0].innerHTML=info[ele1];
      break;
      case 'iMain':
      iMain[0].innerHTML=info[ele1];
      break;
    }
  }

  //get span element then when user clicks x close the modal
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function (e) {
    modal.style.display = "none";
  }
  //when user clicks anywhere else outside the modal it also closes
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}




// Using only HTML, create a template for the structure depicted in the mock-ups.
// Using CSS, style your template so it matches the mock-ups as closely as possible.
// Create an Angular list component from your code and import it to the project.
// Display system's current date in the format shown in the mock-ups.
// Display the total number of items in the list header.
// Display the total number of new items as red badge in the list header.--TODO
// Display default image placeholder if item is missing icon.--TODO

// Add collapse functionality to the list component.
// Configure the component so it loads hardcoded data object.
// Create functions for Add and Delete buttons.--TODO
// Truncate long texts in list items.
// Component behavior:
// New items are indicated by blue border.--TODO
// List components can be collapsed by clicking the caret icon.
// The entire list item including the icon is clickable to open the record.
// The component must be responsive.--TODO
// List item icons are hidden in mobile view.--TODO
// Note: Do NOT use any CSS frameworks or Angular Libraries.
