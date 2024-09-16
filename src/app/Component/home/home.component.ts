// home.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  navigateAndShowNav() {
    // Example navigation
    this.router.navigate(['/ge']);
  }

  showLoading() {
    const overlay = document.getElementById('loading-overlay') as HTMLElement;
    if (overlay) {
      overlay.style.display = 'flex'; // Show the overlay

     
      setTimeout(() => {
        overlay.style.display = 'none'; // Hide the overlay
        window.location.href = '/some-path'; // Replace with your desired URL
      }, 2000); // Adjust the timeout duration to match your loading animation
    }
  }


}
