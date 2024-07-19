import {Component, ViewChild} from '@angular/core';
import { PdfService } from '../../services/pdf.service';

@Component({
  selector: 'app-pdf-upload',
  templateUrl: './pdf-upload.component.html',
  standalone: true,
  styleUrls: ['./pdf-upload.component.css']
})
export class PdfUploadComponent {

  selectedFile: File | null = null;
  message: string="";
  @ViewChild("takeInput", {static: false}) InputVar: any;
  PdfText: string="";

  constructor(private pdfUploadService: PdfService) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      const generatedId = Math.floor(Math.random() * 1000000); // Generate a random ID
      this.pdfUploadService.uploadPdf(generatedId, this.selectedFile).subscribe(
        response => {
          console.log('Upload successful', response);
         this.InputVar.nativeElement.value = "";
         this.message= "Upload successful"
          this.onGetText(generatedId)
        },
        error => {
          console.error('Upload failed', error);
          this.message= "Upload failed" + error.message
        }
      );
    }
  }

  onGetText(id:number) {
    this.pdfUploadService.getPdf(id).subscribe(
      response => {
        console.log('Get successful', response);
        this.PdfText = response.text;
      },
      error => {
        console.error('Get failed', error);
        this.PdfText = "Get failed" + error.message;
      }
    );
  }
}
