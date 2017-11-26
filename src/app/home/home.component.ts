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
  callInProgress: boolean;
  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.callInProgress = true;
    this.coinService.getCoins()
      .subscribe(coinsList => {
        this.callInProgress = false;
        this.coinsList = coinsList;
      });
  }

}
