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

  viewerUrl = 'https://radiweb-3d.web.app/';


thumbNiftiOverlaySrc = 'assets/imgs/features/thumb-nifti.png';
thumbNiftiAtlas = 'assets/imgs/features/thumb-atlas.png';
thumbMprLinesSrc= 'assets/imgs/features/thumb-mpr.png';
thumb2dTransferFunctionSrc = 'assets/imgs/features/thumb-2d-transfer-function.jpg'
thumbTabletUiSrc = 'assets/imgs/features/thumb-tablet-ui.jpg';

thumbRtStructSrc = 'assets/imgs/features/thumb-rtstruct.jpg';
thumbRtDoseSrc   = 'assets/imgs/features/thumb-rtdose.jpg';
thumbDvhSrc      = 'assets/imgs/features/thumb-dvh.jpg';
thumbRtPlanSrc = 'assets/imgs/features/thumb-rtplan.jpg';
thumbBrachySrc = 'assets/imgs/features/thumb-brachy.png';

thumbMarchingCubesSrc = 'assets/imgs/features/thumb-mcube.png';

thumbKidney= 'assets/imgs/features/thumb-kidney.png';
thumbLung= 'assets/imgs/features/thumb-lung.png';
thumbLung2 = 'assets/imgs/features/thumb-lung2.png';
thumbSr = 'assets/imgs/features/thumb-sr.png';
thumbBrain = 'assets/imgs/features/thumb-brain.png';
thumbKidneys = 'assets/imgs/features/vr_kidneys.gif';
thumbHnRadio = 'assets/imgs/features/thumb-hn-radio.png';
thumbLungSeg = 'assets/imgs/features/thumb-lung-seg.png';

linkdin_logo = 'assets/imgs/li-logo.png';
github_logo = 'assets/imgs/github-logo.png';
orcid_logo = 'assets/imgs/orcid.png';
author_profile = 'assets/imgs/author.png';
caruselSrc =  [
                
                
                { img: this.thumbLung, label: 'Lung VR' },
                { img: this.thumbKidney, label: 'Kidney VR' },
                {img: this.thumbBrain, label: 'brain VR'},
                { img: this.thumbLung2, label: 'Lung VR' },
                { img: this.thumbSr, label: 'chest SR' },
        
                    { img: this.thumbHnRadio, label: 'head neck' },
                      { img: this.thumbLungSeg, label: 'Segment' },
              ]
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