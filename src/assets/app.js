collapse = function () {
  console.log("etete");
  var x = document.getElementsByClassName("itemMain");
  var spanFoot = document.getElementsByClassName('load');
  console.log(spanFoot[0]);
  console.log(x);
  if (x[0].style.display === "none") {
    x[0].style.display = "inline-block";
    spanFoot[0].style.display = "inline-block";
  } else {
    x[0].style.display = "none";
    spanFoot[0].style.display = "none";

  }
}

openModalToAdd = function () {
  var modal = document.getElementById('addModal');
  modal.style.display = "block";

  //get span element then when user clicks x close the modal
  var span = document.getElementsByClassName("closeAdd")[0];
  span.onclick = function (e) {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

openModalToView = function (event, info) {
  // Get the modal
  var modal = document.getElementById('viewModal');
  modal.style.display = "block";

  var iImg, iName, iInfo, iMain;
  iImg = document.getElementsByClassName('itemImg1');
  iName = document.getElementsByClassName('nameData1');
  iInfo = document.getElementsByClassName('mainData1');
  iMain = document.getElementsByClassName('currDate1');
  console.log(iImg[0])

  console.log(iImg);
  for (ele1 in info) {
    // console.log(info[ele1]);
    console.log(ele1);

    switch (ele1) {
      case 'infoImg':
        iImg[0].innerHTML = `<img src=${info[ele1]}>`;
        break;
      case 'iName':
        iName[0].innerHTML = info[ele1];
        break;
      case 'iInfo':
        iInfo[0].innerHTML = info[ele1];
        break;
      case 'iMain':
        iMain[0].innerHTML = info[ele1];
        break;
    }
    iImg[0].getElementsByTagName('img')[0].style.maxWidth = '100%';
    iImg[0].getElementsByTagName('img')[0].style.display = 'block';
    iImg[0].getElementsByTagName('img')[0].style.height = 'auto';
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


showNewView = function (elValue,elOld) {
  var newItemSpan = document.getElementById('newItem');
  var styleItem=document.getElementById('newItem');
  console.log(newItemSpan);
  console.log(elValue);
  if (elValue > 0) {
    newItemSpan.innerHTML = elValue;
    var findidx=(elValue+elOld)-1;
    console.log(findidx);
    styleItem.style.backgroundColor="red";
    styleItem.style.borderRadius="80%";
    styleItem.style.borderRadius="80%";
  }
}



// Using only HTML, create a template for the structure depicted in the mock-ups. -DONE
// Using CSS, style your template so it matches the mock-ups as closely as possible. -DONE
// Create an Angular list component from your code and import it to the project. -DONE
// Display system's current date in the format shown in the mock-ups. -DONE
// Display the total number of items in the list header. -DONE
// Display the total number of new items as red badge in the list header.--DONE
// Display default image placeholder if item is missing icon.--DONE

// Add collapse functionality to the list component. -DONE
// Configure the component so it loads hardcoded data object. -DONE
// Create functions for Add and Delete buttons. -DONE
// Truncate long texts in list items. -DONE

// Component behavior:
// New items are indicated by blue border.--TODO
// List components can be collapsed by clicking the caret icon. -DONE
// The entire list item including the icon is clickable to open the record. -DONE---not sure if instructions wanted a route but for simplicity implemented simple modal
// The component must be responsive.--TODO
// List item icons are hidden in mobile view.--TODO

// Note: Do NOT use any CSS frameworks or Angular Libraries.
