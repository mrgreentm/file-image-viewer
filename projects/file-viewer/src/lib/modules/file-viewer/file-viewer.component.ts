import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.scss'],
})
export class FileViewerComponent implements OnInit {
  @Input() imageUrl!:string;
  @Output('download') downloadUrl= new EventEmitter<string>();
  width = 80;
  constructor() {}

  ngOnInit(): void {}
  zoomIn() {
    this.width += 10;
  }
  zoomOut() {
    this.width -= 10;
  }
  download() {
    this.downloadUrl.emit(this.imageUrl);
  }
}
