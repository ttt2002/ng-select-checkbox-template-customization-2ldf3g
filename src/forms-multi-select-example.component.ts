import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'forms-multi-select-example',
  templateUrl: './forms-multi-select-example.component.html',
  styleUrls: ['./forms-multi-select-example.component.scss'],
})
export class FormsMultiSelectExampleComponent {
  isCitiesControlVisible = true;
  cities: any[] = [
    { value: 1, text: 'Group 1' },
    { value: 2, text: 'Group 2' },
    { value: 3, text: 'Group 3' },
    { value: 4, text: 'Group 4' },
    { value: 5, text: 'Group 5' },
    { value: 6, text: 'Group 6' },
    { value: 7, text: 'Group 7' },
  ];

  toggleCitiesControl() {
    this.isCitiesControlVisible = !this.isCitiesControlVisible;
  }

  getDataWithUniqueIds(data: any[]) {
    let result = [];
    data.forEach((x, index) => {
      result.push({
        name: x,
        id: index,
      });
    });
    return result;
  }

}
