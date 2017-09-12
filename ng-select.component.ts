import {
    Component, ViewEncapsulation, Input, Output, EventEmitter
} from "@angular/core";

@Component({
    selector: 'ng-select',
    styleUrls: ['./ng-select.component.scss'],
    templateUrl: './ng-select.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class NgSelectComponent {
    public flag: Boolean = true;
    public placeholder = "请输入关键字搜索";
    @Input("item") public item: any[];
    @Input("down") public down: boolean = false;
    @Input("itemsdown") public itemsdown: any[] = [];
    @Output() changeitem = new EventEmitter<any[]>();

    onInit() {
        console.log(this.itemsdown, this.down);
    }
    onInputBlurred($event) {
        // console.log($event);
    }
    onInputFocused($event) {
        // console.log($event);
    }
    onSelected($event) {
        console.log($event);
    }
    onItemRemoved($event) {
        this.changeitem.emit(this.item) ;
    }
    onTextChange($event) {
        // console.log($event);
    }
    onItemAdded($event) {
        // console.log($event);
    }
}
