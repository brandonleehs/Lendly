import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  open = signal(false);

  toggleMenu() {
    this.open.update((isOpen) => !isOpen);
  }
}
