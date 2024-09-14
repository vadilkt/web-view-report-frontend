
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReportViewerComponent } from './components/report-viewer/report-viewer.component';
import { ReportService } from './services/report.service';

@NgModule({
  declarations: [
    AppComponent, 
    ReportViewerComponent
],
  imports: [
    BrowserModule,
     HttpClientModule
    ],
  providers: [ReportService],
  bootstrap: [AppComponent],
})
export class AppModule {}
