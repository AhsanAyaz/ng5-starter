import { Component, OnInit, Input } from '@angular/core';
import { CoinItem } from '../../services/coin.service';

@Component({
  selector: 'app-coin-item',
  templateUrl: './coin-item.component.html',
  styleUrls: ['./coin-item.component.scss']
})
export class CoinItemComponent implements OnInit {
  @Input() item: CoinItem;
  constructor() { }

  ngOnInit() {
  }

}
