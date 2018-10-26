import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../angular-material/material.module'
import { TestFormComponent } from './test-form/test-form.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputComponent } from './input/input.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { TestButtonComponent } from './test-button/test-button.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { TestProgressComponent } from './test-progress/test-progress.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TestDialogsComponent } from './test-dialogs/test-dialogs.component';
import { DialogComponent, TestDialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import { TableComponent } from './table/table.component';
import { TestTableComponent } from './test-table/test-table.component';
import { CardComponent } from './card/card.component';
import { DividerComponent } from './divider/divider.component';
import { ListComponent } from './list/list.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { TestLayoutComponent } from './test-layout/test-layout.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabsComponent } from './tabs/tabs.component';
import { TestPanelComponent } from './test-panel/test-panel.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [TestFormComponent,
    AutoCompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    FormFieldComponent, InputComponent, RadioButtonComponent, SelectComponent, SliderComponent, SlideToggleComponent,
    ButtonComponent, TestButtonComponent, ButtonToggleComponent, TestProgressComponent, SpinnerComponent,
    ProgressBarComponent, TestDialogsComponent, DialogComponent, TestDialogComponent, TooltipComponent, SnackbarComponent, 
    PaginatorComponent, SortHeaderComponent, TableComponent, TestTableComponent, CardComponent, DividerComponent, ListComponent, GridListComponent, TestLayoutComponent, ExpansionPanelComponent, StepperComponent, TabsComponent, TestPanelComponent],
  exports: [TestFormComponent,
    AutoCompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    FormFieldComponent, InputComponent, RadioButtonComponent, SelectComponent, SliderComponent, SlideToggleComponent,
    ButtonComponent, TestButtonComponent, ButtonToggleComponent, TestProgressComponent, SpinnerComponent,
    ProgressBarComponent, TestDialogsComponent, DialogComponent, TestDialogComponent, TooltipComponent, SnackbarComponent, 
    PaginatorComponent, SortHeaderComponent, TableComponent, TestTableComponent, CardComponent, DividerComponent, ListComponent, GridListComponent, TestLayoutComponent, ExpansionPanelComponent, StepperComponent, TabsComponent, TestPanelComponent],
  entryComponents: [TestDialogComponent]
})
export class TestModule { }
