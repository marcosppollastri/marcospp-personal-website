import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MessageComponentModule } from '../message/message.module';
import { AboutMeModule } from '../components/about-me/about-me.module';
import { WorkExperienceModule } from '../components/work-experience/work-experience.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    HomePageRoutingModule,
    AboutMeModule,
    WorkExperienceModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
