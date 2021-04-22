import { Component, OnInit } from '@angular/core';
import * as experienceData from './work-experience-data.json';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent implements OnInit {
  works= experienceData.workplaces;
  constructor() { }

  ngOnInit() {}

}
