import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LocalStorageService } from 'src/services/local-storage/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

  @ViewChild('canvasId') canvasRef: ElementRef | undefined;

  draw() {
    let ctx: CanvasRenderingContext2D =
      this.canvasRef!.nativeElement.getContext('2d');

    console.log("canvas size: ", ctx.canvas.width, ctx.canvas.height);
  }

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
      if(this.first){
        this.south();
      }
      else if(this.next){
        this.southNext();
      }
    }
    else{
      console.log("Others");
    }
  }

  north(){
    this.roomNum = 0;
  }
  south(){
    this.roomNum = 1;
    this.next = true;
    this.first = false;
  }
  east(){
    this.roomNum = 2;
  }
  west(){
    this.roomNum = 2;
  }
  southNext(){
    this.roomNum = 3;
  }

  imageName:String = "castle.gif";

  rooms = ['/assets/images/start.png', '/assets/images/next.png', '/assets/images/start2.png','/assets/images/end.png'];
  roomNum: number = 0;
}

