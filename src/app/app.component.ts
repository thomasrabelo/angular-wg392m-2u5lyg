import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-select-search',
  template: `
    <div>
      Teste
      <nz-select nzShowSearch nzAllowClear 
      nzMode="multiple"
            nzPlaceHolder="Select a label"
            [nzShowSearch]="true"
      [(ngModel)]="user_two">
        <nz-option nzCustomContent [nzLabel]="item.realName" [nzValue]="item.id" *ngFor="let item of options">
          <ng-template let-selected>
            <label nz-checkbox [(ngModel)]="selected">{{selected.nzLabel}}</label>
            <small style="color:#999;font-size:12px;">（{{selected.nzLabel}}）</small>
          </ng-template>
          
        </nz-option>
      </nz-select>
    </div>
  `,
  styles: [
    `
      nz-select {
        width: 200px;
      }
    `,
  ],
})
export class NzDemoSelectSearchComponent {
  user_one = null;
  user_two = null;
  options = [
    { id: 1, realName: '张三', userName: 'zhangsan' },
    { id: 2, realName: '李四', userName: 'lisi' },
    { id: 3, realName: '王五', userName: 'wangwu' },
  ];
}