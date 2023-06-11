import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.scss'],
})
export class FileViewerComponent {
  @Input() imageUrl!: string;
  @Output('download') downloadUrl = new EventEmitter<string>();
  width = 80;

  zoom(event: number) {
    this.width = event;
  }
}
