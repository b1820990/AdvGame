import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { LocalStorageService } from 'src/services/local-storage/local-storage.service';
import { ROOMS, ITEMS } from "src/app/game/GAME";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }


options: any[] = [{"option": "Option1", "i": 0}, {"option": "Option2", "i": 1},
 {"option": "Option3", "i": 2}, {"option": "Option4", "i": 3}, {"option": "Back", "i": 4}];

  room1Options:Array<any> =[
  {m:"Pick up the rusted broadsword.", item: ITEMS[0], "i": 0},
  {m:"Inspect inscription on door.", String: "",  "i": 1},
  {m:"Enter the eastern passage.", room: ROOMS[2], "i": 2},
  {m:"Enter the western passage.",room: ROOMS[3],  "i": 3 },
  {m:"Enter the southern passage.", room: ROOMS[0], "i": 4},
] 

roomStartOptions:Array<any> =[
  {m:"Enter the northern passage."}
] 


  
  rooms = ROOMS;

  draw() {

  }
  index: number = 0;
  roomIndex: number = 0;


  @HostListener('window: keydown', ['$event'])
  keyMap(e: any){
  
    if(e.keyCode == '38' ){
      this.indexSub();
    }
    else if(e.keyCode == '40'){
      this.indexAdd();
    }
    else if(e.keyCode == '13'){
      
    }
  }

  indexAdd(){
    this.index++;
  }
  indexSub(){
    this.index--;
  }
  

  imageName:String = "castle.gif";
 
}

