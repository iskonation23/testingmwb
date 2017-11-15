import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentareaPage } from './studentarea';

@NgModule({
  declarations: [
    StudentareaPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentareaPage),
  ],
})
export class StudentareaPageModule {}
