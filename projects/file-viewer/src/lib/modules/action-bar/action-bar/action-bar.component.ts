import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
})
export class ActionBarComponent implements OnInit {
  @Input() width: number = 80;
  @Input() imageUrl!: string;
  @Input() rotation: number = 0;
  @Output('download') downloadUrl = new EventEmitter<string>();
  @Output('zoomIn') zoomInEvt = new EventEmitter<number>();
  @Output('zoomOut') zoomOutEvt = new EventEmitter<number>();
  @Output('print') printEvt = new EventEmitter<boolean>();
  @Output('rotate') rotateEvt = new EventEmitter<number>();
  printing: boolean = false;

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
  print() {
    this.printEvt.emit(true);
  }
  rotate(direction: 'left' | 'right') {
    console.log(direction)
    if (direction == 'left') {
      this.rotation -= 90;
      this.rotateEvt.emit(this.rotation);
    } else {
      this.rotation += 90;
      this.rotateEvt.emit(this.rotation)
    }
  }
}
