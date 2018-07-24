import { Component, OnInit } from "@angular/core";
import { getLocaleMonthNames } from "../../../node_modules/@angular/common";
import { $ } from "../../../node_modules/protractor";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  itemCount: number;
  plusImage: any = "assets/icons8-plus-math-30.png";
  caretImage: any = "assets/icons8-down-button-50.png";
  trashImage: any= "assets/icons8-trash-can-24.png"

  infoImg:string;
  iName: string;
  iInfo: string;
  iMain: string;
  today= new Date().toJSON().slice(0,10);

  infoObj = [
    {
      infoImg:"assets/Large_breaking_wave.jpg",
      iName: "Curabitur rutrum ut",
      iInfo: "Vivamus quis enim vitae est",
      iMain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      
    },
    {
      infoImg:"assets/Large_breaking_wave.jpg",
      iName: "Nunc nibh purus",
      iInfo: "Vivamus quis enim vitae est",
      iMain: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
      infoImg:"assets/Large_breaking_wave.jpg",
      iName: "Nunc nibh purus",
      iInfo: "Vivamus quis enim vitae est",
      iMain: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
    }
  ];

  constructor() {}

  ngOnInit() {
    this.itemCount = this.infoObj.length;
    console.log(this.today);
    
  }

 
}
