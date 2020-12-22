import{ NgModule} from '@angular/core';
import{CommonModule} from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input/input.component';

@NgModule({
    declarations: [InputComponent],
    imports:[CommonModule, IonicModule],
    providers:[InputComponent],
})
export class inputModule{}
