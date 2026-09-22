import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  menuOpen = false;
  dropdownOpen = '';

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;

    if (!this.menuOpen) {
      this.dropdownOpen = '';
    }
  }

  toggleDropdown(menu: string): void {
    if (this.dropdownOpen === menu) {
      this.dropdownOpen = '';
    } else {
      this.dropdownOpen = menu;
    }
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.dropdownOpen = '';
  }
}