import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { LocalStorageService } from 'src/services/local-storage/local-storage.service';
import { ROOMS} from "src/app/game/GAME";
import { Item } from '../game/models/item/item.model';
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
  inventory:Item[] = [];
  currentRoom = this.rooms[0];
  options: any[] = this.currentRoom.getOptions();
  
  index: number = 0;
  depth: number = 0;
  description: String = "Fuckers in school telling me always in the barber shop \"Chief keef aint bout this chief keef aint bout that\" My boy a BD on fucking lamron and them he he they say that man dont be putting in no work shut the fuck up";
  question:String = "";
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
    console.log(this.inventory);
    if ('room' in this.options[index]){
      const nextRoomIndex = this.options[index]['room'];
      this.resetRoomAndOptions(nextRoomIndex);
    }
    else if (('item' in this.options[index])){
      this.description = "\nPicked up " + this.options[index]["item"].getName();
      this.currentRoom.getOptions().splice(index,1);
      this.inventory.push(this.options[index]["item"])
      this.index = 0;
      this.options = this.currentRoom.getOptions().filter(option => !option.hasOwnProperty("label"));
      this.question = "";
    }
    else{ // this is more complicated stuffs
      if ('options' in this.options[index]){ // This is when they have a questions or riddles
        this.question = this.options[index]["m"];
        this.options = this.options[index]["options"];
      }
      else if ('next' in this.options[index]){ 
        if(this.options[index]['next'] == "wrong"){
          location.href = '/home'
        }
        this.options = this.currentRoom.getOptions().filter(options => options.label == this.options[index]['next']) 
        this.index = 0;
      }
      else{
        this.question = "";
        this.options = this.currentRoom.getOptions().filter(option => !option.hasOwnProperty("label"));
      }
    }
  }

  reloadDescription(description:String){
      this.description = description;
  }

  resetRoomAndOptions(roomNum: number){
    this.index = 0;
    this.depth = 0;
    this.currentRoom = this.rooms[roomNum];
    this.options = this.currentRoom.getOptions().filter(option => !option.hasOwnProperty("label") );
    this.reloadDescription(this.currentRoom.getDescription())
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

