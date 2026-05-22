import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'lib-ui',
  imports: [],
  templateUrl: './ui.html',
  styleUrl: './ui.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Ui {
  title = input('Reusable UI component');
  description = input('Shared Bootstrap-compatible UI building block.');
}
