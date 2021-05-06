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



  draw() {

  }

  imageName:String = "castle.gif";
}
