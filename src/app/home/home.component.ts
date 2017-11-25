import { Component, OnInit } from '@angular/core';
import { CoinService, CoinItem } from '../services/coin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message = 'Welcome to Angular5 class';
  coinsList: CoinItem[];
  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.coinService.getCoins()
      .subscribe(coinsList => {
        this.coinsList = coinsList;
      });
  }

}
