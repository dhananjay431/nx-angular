import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Profile {}
