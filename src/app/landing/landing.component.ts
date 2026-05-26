import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  constructor(private router: Router) {}

  viewerUrl = 'https://dicom-web-viewer-b4139.firebaseapp.com/';

// launchApp() {
//   window.open(
//     'https://dicom-web-viewer-b4139.firebaseapp.com/',
//     '_blank',
//     'noopener,noreferrer'
//   );
// }

  launchApp() {
    window.open(this.viewerUrl, '_blank', 'noopener,noreferrer');
  }

 tryDemo() {
    // optional: later you can pass dataset ID
    window.open(
      this.viewerUrl + '?demo=true',
      '_blank',
      'noopener,noreferrer'
    );
  }

  openGithub() {
    window.open('https://github.com/your-org/radiweb3d', '_blank');
  }
}