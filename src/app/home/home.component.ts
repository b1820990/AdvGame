import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { LocalStorageService } from 'src/services/local-storage/local-storage.service';
import { ROOMS } from "src/app/game/GAME";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

  rooms = ROOMS;

  draw() {

  }
  roomNum: number = 0;
  next: boolean = false;
  first: boolean = true;
  keyMap(e: any){
    if(e.keyCode == '37'){
      console.log("Left Key");
      this.west();      
    }
    else if(e.keyCode == '38' ){
      console.log("Up Key");
      this.north();
    }
    else if(e.keyCode == '39'){
      console.log("Right key");
      this.east();
    }
    else if(e.keyCode == '40'){
      console.log("Down key");
      this.south();
    }
    else{
      console.log("Others");
    }
  }

  north(){
    this.roomNum = 1;
  }
  south(){
    this.roomNum = 2;
  }
  east(){
    this.roomNum = 3;
  }
  west(){
    this.roomNum = 4;
  }
  southNext(){
    this.roomNum = 5;
  }

  imageName:String = "castle.gif";
 
}

