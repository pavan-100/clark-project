import { Component, OnInit } from '@angular/core';
import { ResumesService } from './resumes.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
content: any[];
  constructor(
    private _resumeService: ResumesService) {
      this.content = _resumeService.getContent();
     }

  ngOnInit() {
  }

}
