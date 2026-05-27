import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
activeLightboxImg: string | null = null;
  constructor(private router: Router) {}

  viewerUrl = 'https://dicom-web-viewer-b4139.firebaseapp.com/';

// launchApp() {
//   window.open(
//     'https://dicom-web-viewer-b4139.firebaseapp.com/',
//     '_blank',
//     'noopener,noreferrer'
//   );
// }


thumbNiftiOverlaySrc = 'assets/imgs/features/thumb-nifti-overlay.jpg';
thumbMprLinesSrc= 'assets/imgs/features/thumb-mpr-lines.jpg';
thumb2dTransferFunctionSrc = 'assets/imgs/features/thumb-2d-transfer-function.jpg'
thumbTabletUiSrc = 'assets/imgs/features/thumb-tablet-ui.jpg';

thumbRtStructSrc = 'assets/imgs/features/thumb-rtstruct.jpg';
thumbRtDoseSrc   = 'assets/imgs/features/thumb-rtdose.jpg';
thumbDvhSrc      = 'assets/imgs/features/thumb-dvh.jpg';
thumbRtPlanSrc = 'assets/imgs/features/thumb-rtplan.jpg';

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


  // New Lightbox methods
  openLightbox(imagePath: string) {

    console.log(imagePath);
    this.activeLightboxImg = imagePath;
  }

  closeLightbox() {
    this.activeLightboxImg = null;
  }
}