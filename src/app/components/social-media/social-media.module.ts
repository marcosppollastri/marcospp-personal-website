import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from './social-media.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [SocialMediaComponent],
  exports: [SocialMediaComponent]
})
export class SocialMediaModule { }
