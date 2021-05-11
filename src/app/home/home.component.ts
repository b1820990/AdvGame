import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { LocalStorageService } from 'src/services/local-storage/local-storage.service';
import { ROOMS} from "src/app/game/GAME";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }


// options: any[] = [{"option": "Option1", "i": 0}, {"option": "Option2", "i": 1},
//  {"option": "Option3", "i": 2}, {"option": "Option4", "i": 3}, {"option": "Back", "i": 4}];

  rooms = ROOMS;
  
  currentRoom = this.rooms[0];
  options: any[] = this.currentRoom.getOptions();
  
  index: number = 0;
  depth: number = 0;
  description: String = this.currentRoom.description!;


  @HostListener('window: keydown', ['$event'])
  keyMap(e: any){
    if(e.keyCode == '38' ){ // up arror key
      this.indexSub();
    }
    else if(e.keyCode == '40'){
      this.indexAdd();
    }
    else if(e.keyCode == '13'){ // enter key  

      this.enterKey(this.index);
    }
  }


  enterKey(index:number){
    if ('room' in this.currentRoom.getOptions()[index]){
      console.log(this.currentRoom.getOptions()[index]['room'])
      const nextRoomIndex = this.currentRoom.getOptions()[index]['room'];
      this.resetRoomAndOptions(nextRoomIndex);
      this.reloadDescription(this.currentRoom.description!);
    }
  }

  reloadDescription(description:String){
      this.description = description;
  }

  resetRoomAndOptions(roomNum: number){
    this.index = 0;
    this.depth = 0;
    this.currentRoom = this.rooms[roomNum];
    this.options = this.currentRoom.getOptions();
  }
  indexAdd(){
    if(this.index < this.options.length - 1){
      this.index++;
    }
  }
  indexSub(){
    if(this.index > 0){
      this.index--;
    }
  }
  


  imageName:String = "castle.gif";
 
}

