import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  options: any[] = this.rooms[0].getOptions();

  draw() {

  }
  index: number = 0;

  keyMap(e: any){
    if(e.keyCode == '38' ){
      this.indexSub();
      console.log(this.index);
    }
    else if(e.keyCode == '40'){
      this.indexAdd();
      console.log(this.index);
    }
    else if(e.keyCode == '13'){ // enter key

    }
  }

  indexAdd(){
    if(this.index < this.options.length){
      this.index++;
    }
  }
  indexSub(){
    if(this.index < 0){
      this.index--;
    }
  }
  


  imageName:String = "castle.gif";
 
}

