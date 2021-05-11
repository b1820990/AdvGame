import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
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


options: any[] = [{"option": "Option1", "i": 0}, {"option": "Option2", "i": 1},
 {"option": "Option3", "i": 2}, {"option": "Option4", "i": 3}, {"option": "Back", "i": 4}];


  
  rooms = ROOMS;

  draw() {

  }
  index: number = 0;

  @HostListener('window: keydown', ['$event'])
  keyMap(e: any){
  
    if(e.keyCode == '38' ){
      this.indexSub();
    }
    else if(e.keyCode == '40'){
      this.indexAdd();
    }
    else if(e.keyCode == '13'){
      console.log(this.index);
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

