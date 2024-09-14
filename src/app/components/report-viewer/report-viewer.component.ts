import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';
import {saveAs} from 'file-saver';

@Component({
  selector:'app-report-viewer',
  templateUrl:'./report-viewer.component.html',
  styleUrls:['./report-viewer.component.css'],
})
export class ReportViewerComponent implements OnInit {
  pdfUrl: string = '';

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.loadReport();
  }

  
  loadReport(): void {
    this.reportService.viewReport().subscribe((response) => {
      const url = URL.createObjectURL(response);
      this.pdfUrl = url;
    });
  }

 
  downloadReport(format: string): void {
    this.reportService.downloadReport(format).subscribe((response) => {
      const blob = new Blob([response], { type: this.getMimeType(format) });
      saveAs(blob, `report.${format}`);
    });
  }

  getMimeType(format: string): string {
    switch (format) {
      case 'pdf':
        return 'application/pdf';
      case 'docx':
        return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      case 'xlsx':
        return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      default:
        return 'application/octet-stream';
    }
  }
}
