import { NgModule } from '@angular/core';
import { ValidationMessagePipe } from "./pipes/validation-message.pipe";

const DECLARATIONS = [
  ValidationMessagePipe
]

@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  exports: [
    ...DECLARATIONS
  ],
})
export class CoreModule { }
