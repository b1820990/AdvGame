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

  imageName:String = "castle.gif";
}
