import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfService } from '../../service/pdf.service';

@Component({
  selector: 'app-pdf-extract',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pdf-extract.component.html',
  styleUrl: './pdf-extract.component.scss'
})
export class PdfExtractComponent {
  selectedFile: File | null = null;
  extractedText: string = '';
  loading: boolean = false;
  error: string = '';

  constructor(private pdfService: PdfService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.extractedText = '';
      this.error = '';
    }
  }

  extractText(): void {
    if (!this.selectedFile) return;
    this.loading = true;
    this.error = '';
    this.pdfService.uploadPdf(this.selectedFile).subscribe({
      next: (response) => {
        this.extractedText = response.text || '';
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to extract text from PDF.';
        this.loading = false;
      }
    });
  }
}
