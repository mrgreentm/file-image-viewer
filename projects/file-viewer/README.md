# File Viewer Image

A library for Angular v15+ that provides developers with a convenient way to create an image viewer component. It offers various functions for UI operations such as zoom in, zoom out, download, and printing. The library's selector is lib-file-viewer and it accepts an input imageUrl to display the desired image.

## Installation

To install the File Viewer Image library, run the following command:

```bash
  npm i file-viewer-image
```

## Usage 
1 - Import the *FileViewerModule* into your Angular module:

```typescript
  import { NgModule } from '@angular/core';
  import { FileViewerModule } from 'file-viewer-image';

  @NgModule({
    imports: [
      // ...
      FileViewerModule
    ],
    // ...
  })
  export class AppModule { }
```

2 - Use the *lib-file-viewer* component in your Angular template:

```html
  <lib-file-viewer [imageUrl]="imagePath"></lib-file-viewer>
```
Replace imagePath with the URL of the image you want to display.


## Component Input
The lib-file-viewer component accepts the following input:

imageUrl: The URL of the image to display in the viewer.
Features
### Zoom In
To zoom in on the image, use the zoom in function provided by the library. This allows users to magnify the image for a closer look.

### Zoom Out
To zoom out on the image, use the zoom out function provided by the library. This allows users to reduce the image size for a wider view.

### Download
The library offers a download function that allows users to download the displayed image. This is useful for saving the image locally or sharing it with others.

### Printing
Users can print the displayed image using the print function provided by the library. This enables easy printing of the image directly from the viewer.

## Example
Here's an example of how to use the File Viewer Image library in your Angular application:

```typescript
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-image-viewer',
    template: `
      <lib-file-viewer [imageUrl]="imagePath"></lib-file-viewer>
    `,
  })
  export class ImageViewerComponent {
    imagePath = 'https://example.com/image.jpg';
  }
```
Make sure to replace 'https://example.com/image.jpg' with the actual URL of the image you want to display.

License
This library is released under the MIT License. See LICENSE for more information.

Feel free to contribute to this library by reporting issues, suggesting improvements, or submitting pull requests.
