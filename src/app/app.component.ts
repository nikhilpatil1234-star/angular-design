import { Component, HostListener,OnInit  } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'designs';
  constructor(private sharedService: SharedService){
  }
  ngOnInit(): void {
    this.changeBackgroundColor();
      }


  changeBackgroundColor() {
    // List of elegant light background colors
    const elegantColors = [
      '#FFE4E1', // Misty Rose
      '#FFF0F5', // Lavender Blush
      '#F0F8FF', // Alice Blue
      '#E6E6FA', // Lavender
      '#F0FFF0', // Honeydew
      '#E0FFFF', // Light Cyan
      '#B0E0E6', // Powder Blue
      '#FFEBCD', // Blanched Almond
      '#FDF5E6', // Old Lace
      '#FAF0E6' , // Linen
      "#a6d1c9"
    ];

    // Get a random color from the list
    const randomColor = elegantColors[Math.floor(Math.random() * elegantColors.length)];

    // Set the background color of the document body
    document.body.style.backgroundColor = "rgb(30 31 33)";

  }


}
