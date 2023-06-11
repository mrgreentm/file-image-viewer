import { NgModule } from '@angular/core';
import { FileViewerComponent } from './file-viewer.component';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { ActionBarComponent } from '../action-bar/action-bar/action-bar.component';

const MATERIAL_MODULES = [MatIconModule];

@NgModule({
  declarations: [FileViewerComponent, ActionBarComponent],
  imports: [...MATERIAL_MODULES, CommonModule],
  exports: [FileViewerComponent, ActionBarComponent],
})
export class FileViewerModule {}
