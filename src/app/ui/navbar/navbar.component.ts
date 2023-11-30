import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cursorElement: HTMLElement | null = null;
  bubbleX: number = 0;
  bubbleY: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.cursorElement = document.querySelector('.cursor');

  }
  
  openProfile() {
    console.log('profile clicked', )
    // Function to open the user's profile
  }

  logout() {
    // Function to handle user logout
  }
  // Track cursor movement
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.cursorElement) {
      return;
    }
    this.bubbleX = event.pageX;
    this.bubbleY = event.pageY;
    this.updateBubblePosition();
  }

  // Update bubble position
  updateBubblePosition() {
    if (!this.cursorElement) {
      return;
    }
    this.cursorElement.style.left = this.bubbleX + 'px';
    this.cursorElement.style.top = this.bubbleY + 'px';
  }

}
