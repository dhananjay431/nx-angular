import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-settings',
  imports: [],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Settings {}
