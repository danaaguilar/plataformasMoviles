import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvPageRoutingModule } from './cv-routing.module';

import { CvPage } from './cv.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CvPage]
})
export class CvPageModule {}
