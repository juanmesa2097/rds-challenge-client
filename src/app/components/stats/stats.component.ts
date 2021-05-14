import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { InfoStats } from './stats.interface';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsComponent implements OnInit {
  @Input() data!: InfoStats[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
