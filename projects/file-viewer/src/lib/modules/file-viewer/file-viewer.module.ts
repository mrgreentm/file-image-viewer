import { NgModule } from '@angular/core';
import { FileViewerComponent } from './file-viewer.component';
import { CommonModule } from '@angular/common';

import { ActionBarComponent } from '../action-bar/action-bar/action-bar.component';


@NgModule({
  declarations: [FileViewerComponent, ActionBarComponent],
  imports: [CommonModule],
  exports: [FileViewerComponent, ActionBarComponent],
})
export class FileViewerModule {}
