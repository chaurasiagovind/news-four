// //our root app component
// import {Component} from '@angular/core'
// import {DomSanitizer} from "@angular/platform-browser";
// @Component({
//   selector: 'news-reader',
//   template: `
//     <div>
//       <h2>Hello {{name}}</h2>
//        <iframe [src]="pdfUrl" width="500" height="600" type='application/pdf'></iframe>
//     </div>
//   `,
// })
// export class ReaderComponent {
//   pdfURL = "";
//   constructor(private domSanitizer : DomSanitizer) {
//     this.name = 'Angular2'
//   }
//   ngOnInit() {
//       this.pdfUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://blog.mozilla.org/security/files/2015/05/HTTPS-FAQ.pdf');
//   }
// }


// export class ReaderModule {}