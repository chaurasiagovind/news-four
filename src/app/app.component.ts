import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<div class="md-toolbar-wrap">
  <md-toolbar color="primary">Article</md-toolbar>
</div><router-outlet></router-outlet>`,
styles:['md-toolbar{position: fixed; width: 100%; top:0; z-index: 2}']
})
export class AppComponent {
  title = 'News';

}
