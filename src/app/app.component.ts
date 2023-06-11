import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lib-angular';

  async downloadImage(event: string) {
    const image = await  fetch(event);
    const blob = await image.blob()
    const imageUrl = URL.createObjectURL(blob);
    const anchorElement = document.createElement('a');
    anchorElement.download = 'image';
    anchorElement.href = imageUrl;
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);

  }
}
