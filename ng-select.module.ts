/* common module */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SuiSelectModule} from 'ng2-semantic-ui';
import {NgSelectComponent} from "app/shared/ng-select/ng-select.component";
import {SelectModule} from "ng-select";
import {TagInputModule} from "ngx-chips";
@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        SuiSelectModule,
        TagInputModule,
        SelectModule
    ],
    exports: [
        NgSelectComponent
    ],
    declarations: [
        NgSelectComponent
    ]
})

export class NgSelectModule {

}
