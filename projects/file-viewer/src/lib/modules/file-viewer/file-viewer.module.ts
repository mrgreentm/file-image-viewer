import { NgModule } from '@angular/core';
import { FileViewerComponent } from './file-viewer.component';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { ActionBarComponent } from '../action-bar/action-bar/action-bar.component';


@NgModule({
  declarations: [FileViewerComponent, ActionBarComponent],
  imports: [MatIconModule, CommonModule],
  exports: [FileViewerComponent, ActionBarComponent],
})
export class FileViewerModule {}
