import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from 'src/app/home/home-routing.module';
import { MessageComponentModule } from 'src/app/message/message.module';
import { WorkExperienceComponent } from './work-experience.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [WorkExperienceComponent],
  exports: [WorkExperienceComponent]
})
export class WorkExperienceModule { }
