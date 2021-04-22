import { Component, OnInit } from '@angular/core';
import * as socialMediaData from './social-media-data.json';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent implements OnInit {

  sites = socialMediaData['social-media'];
  constructor() { }

  ngOnInit() {}

}
