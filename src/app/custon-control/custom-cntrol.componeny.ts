import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'my-custom-control',
  template: `
    <input type="radio" name="permType" [(ngModel)]="radioSelected" (change)="changeType()" value=""/>
    <!-- <ng-container *ngIf="!!typeView"> -->
        <input [attr.disabled]="isViewDisabled" type="radio" name="permType" [(ngModel)]="radioSelected" (change)="changeType()" [value]="typeView"/>
    <!-- </ng-container> -->
    <input [attr.disabled]="isEditDisabled" type="radio" name="permType" [(ngModel)]="radioSelected" (change)="changeType()" [value]="typeEdit"/>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CustomControlComponent,
    },
  ],
})
export class CustomControlComponent implements ControlValueAccessor {
  @Input() typeView: string = '';
  @Input() typeEdit: string = '';

  currentPermissions: string | string[] = '';
  radioSelected: string | string[] = '';
  isViewDisabled: boolean;
  isEditDisabled: boolean;
  onChange = (permissions) => {};
  onTouched = () => {};
  touched = false;
  disabled = false;

  writeValue(currentPermissions: string | string[]) {
    const hasViewType = currentPermissions?.includes(this.typeView);
    const hasEditType = currentPermissions?.includes(this.typeEdit);

    if (!this.typeView) {
      this.isViewDisabled = true;
    } else {
      this.isViewDisabled = null;
    }

    if (!this.typeEdit) {
      this.isEditDisabled = true;
    } else {
      this.isEditDisabled = null;
    }

    if (hasViewType) {
      this.radioSelected = this.typeView;
    }

    if (hasEditType) {
      this.radioSelected = this.typeEdit;
    }
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  changeType() {
    this.markAsTouched();

    if (!this.disabled) {
      let permissions: string | string[] = '';

      if (this.radioSelected === this.typeView) {
        permissions = [this.typeView];
      }

      if (this.radioSelected === this.typeEdit) {
        permissions = [this.typeView, this.typeEdit];
      }

      this.onChange(permissions);
    }
  }
}
