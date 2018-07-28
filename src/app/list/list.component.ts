import { Component, OnInit } from "@angular/core";
import { identifierModuleUrl } from "../../../node_modules/@angular/compiler";

declare var collapse: any;
declare var openModalToView: any;
declare var openModalToAdd: any;
declare var showNewView: any;
declare var checkNew:any;
declare var showOnlyThree:any;
declare var showAfterDel:any;
declare var showAll:any;

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  itemCount: number;
  newItem: number = 0;
  plusImage: any = "assets/icons8-plus-math-30.png";
  caretImage: any = "assets/icons8-down-button-50.png";
  trashImage: any = "assets/icons8-trash-can-24.png";
  show: number;
  infoImg: string;
  iName: string;
  iInfo: string;
  iMain: string;
  ikey:any;
  today = new Date().toJSON().slice(0, 10);

  infoObj = [
    {
      infoImg: "assets/Large_breaking_wave.jpg",
      iName: "Curabitur rutrum ut",
      iInfo: "Vivamus quis enim vitae est",
      iMain:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      infoImg: "",
      iName: "Nunc nibh purus",
      iInfo: "Vivamus quis enim vitae est",
      iMain:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
      infoImg: "assets/yosemite.jpeg",
      iName: "Nunc nibh purus",
      iInfo: "Vivamus quis enim vitae est",
      iMain:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
    },
    {
      infoImg: "assets/jasper.jpg",
      iName: "Nunc nibh purus",
      iInfo: "Vivamus quis enim vitae est",
      iMain:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
    }
  ];
  origLength=0;
  newItemArr=[];
  getcurr:number;
  getnext:number;
  lookup:number;

  constructor() {}

  ngOnInit() {
    this.itemCount = this.infoObj.length; //itemcount gets number of list items in object above and then this is passed to the view
    this.show = 2; //on initialization pass this to the showThree function
    this.origLength=this.infoObj.length-1;//pass original index
    showOnlyThree(this.show);
  }

  myEvent(event) {
    //this function runs the collapse function when the caret is clicked
    collapse(event);
    // showOnlyThree(this.show);
  }

  del(event, i) {
    //delete a list if user clicks the trash icon
    event.stopPropagation();
    // console.log(event);
    this.infoObj.splice(i, 1);
    // console.log(i);
    showAfterDel(this.show);
    this.itemCount = this.infoObj.length; //updates number of list items after delete
  }

  addToList(event) {
    //this function runs when plus(add new item)sign is clicked
    event.stopPropagation();
    //saves added items to main list here
    this.infoObj.push({
      infoImg: this.infoImg,
      iName: this.iName,
      iInfo: this.iInfo,
      iMain: this.iMain
    });
    //function to higlight left border blue when new item is added for new items
    checkNew();
    // showOnlyThree(this.show);
    this.newItem++; //keeps count of new items
    this.itemCount = this.infoObj.length;
    showNewView(this.newItem); //passes newitem count to function in app.js
    
  }

  openModalView(event, i) {
    //opens modal when user clicks anywhere on the list item/section
    openModalToView(event, this.infoObj[i]);
  }
  openAddModal(event) {
    //opens modal when user clicks on plus sign
    openModalToAdd();
  }

  loadMore(event) {
    //shows only 3 at a time, if more is added, have to click load more to show more
    event.stopPropagation();
      this.show = 2;
      showAll(this.show);
  }
}
