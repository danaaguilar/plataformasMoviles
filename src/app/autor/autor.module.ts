import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutorPageRoutingModule } from './autor-routing.module';

import { AutorPage } from './autor.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AutorPage]
})
export class AutorPageModule {}
