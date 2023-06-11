import { NgModule } from '@angular/core';
import { FileViewerComponent } from './file-viewer.component';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

const MATERIAL_MODULES = [MatIconModule];

@NgModule({
  declarations: [FileViewerComponent],
  imports: [...MATERIAL_MODULES, CommonModule],
  exports: [FileViewerComponent],
})
export class FileViewerModule {}
