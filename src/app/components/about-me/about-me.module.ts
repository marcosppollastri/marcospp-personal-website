import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from 'src/app/home/home-routing.module';
import { MessageComponentModule } from 'src/app/message/message.module';
import { AboutMeComponent } from './about-me.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    HomePageRoutingModule
  ],
  declarations: [AboutMeComponent],
  exports: [AboutMeComponent]
})
export class AboutMeModule { }
