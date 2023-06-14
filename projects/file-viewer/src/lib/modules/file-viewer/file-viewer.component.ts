import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'lib-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.scss'],
})
export class FileViewerComponent {
  @Input() imageUrl!: string;
  @Output('download') downloadUrl = new EventEmitter<string>();
  @ViewChild('image') image!: ElementRef;

  width = 80;
  rotation = 0;

  zoom(event: number) {
    this.width = event;
  }
  rotate(event: number | any) {
    this.rotation = event;
  }
  print(event: boolean) {
    const dataToPrint = this.image.nativeElement.innerHTML;
    const newWindow = window.open('', '_blank', 'width=1000,heigth=1000');
    newWindow?.document.open();
    newWindow?.document.write(`<html>
    <head>
      <title>Tabela para impressão</title>
    </head>
    <body onload="window.print();">${dataToPrint}</body>
  </html>`);
    newWindow?.document.close();
  }
}
