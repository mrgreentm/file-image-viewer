import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
})
export class ActionBarComponent implements OnInit {
  @Input() width: number = 80;
  @Input() imageUrl!: string;
  @Output('download') downloadUrl = new EventEmitter<string>();
  @Output('zoomIn') zoomInEvt = new EventEmitter<number>();
  @Output('zoomOut') zoomOutEvt = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  zoomIn() {
    this.width += 10;
    this.zoomInEvt.emit(this.width);
  }
  zoomOut() {
    this.width -= 10;
    this.zoomOutEvt.emit(this.width);
  }

  download() {
    this.downloadUrl.emit(this.imageUrl);
  }
}
