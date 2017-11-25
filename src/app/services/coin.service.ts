import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export interface CoinItem {
  Id: string;
  Url: string;
  ImageUrl: string;
  Name: string;
  Symbol: string;
  CoinName: string;
  FullName: string;
  Algorithm: string;
  ProofType: string;
  FullyPremined: string;
  TotalCoinSupply: string;
  PreMinedValue: string;
  TotalCoinsFreeFloat: string;
  SortOrder: string;
  Sponsored: boolean;
}

const dummyData = {
  'Response': 'Success',
  'Message': '',
  'BaseImageUrl': 'https://www.cryptocompare.com',
  'BaseLinkUrl': 'https://www.cryptocompare.com',
  'DefaultWatchlist': {
    'CoinIs': '1182,7605,5038,24854,3807,3808,202330,5324,5031,20131',
    'Sponsored': ''
  },
  'Data': {
    '42': {
      'Id': '4321',
      'Url': '/coins/42/overview',
      'ImageUrl': '/media/12318415/42.png',
      'Name': '42',
      'Symbol': '42',
      'CoinName': '42 Coin',
      'FullName': '42 Coin (42)',
      'Algorithm': 'Scrypt',
      'ProofType': 'PoW/PoS',
      'FullyPremined': '0',
      'TotalCoinSupply': '42',
      'PreMinedValue': 'N/A',
      'TotalCoinsFreeFloat': 'N/A',
      'SortOrder': '34',
      'Sponsored': false
    },
    'BTC': {
      'Id': '1182',
      'Url': '/coins/btc/overview',
      'ImageUrl': '/media/19633/btc.png',
      'Name': 'BTC',
      'Symbol': 'BTC',
      'CoinName': 'Bitcoin',
      'FullName': 'Bitcoin (BTC)',
      'Algorithm': 'SHA256',
      'ProofType': 'PoW',
      'FullyPremined': '0',
      'TotalCoinSupply': '21000000',
      'PreMinedValue': 'N/A',
      'TotalCoinsFreeFloat': 'N/A',
      'SortOrder': '1',
      'Sponsored': false
    },
    '611': {
      'Id': '20909',
      'Url': '/coins/611/overview',
      'ImageUrl': '/media/350985/611.png',
      'Name': '611',
      'Symbol': '611',
      'CoinName': 'SixEleven',
      'FullName': 'SixEleven (611)',
      'Algorithm': 'SHA256',
      'ProofType': 'PoW',
      'FullyPremined': '0',
      'TotalCoinSupply': '611000',
      'PreMinedValue': 'N/A',
      'TotalCoinsFreeFloat': 'N/A',
      'SortOrder': '586',
      'Sponsored': false
    }
  }
};

@Injectable()
export class CoinService {

  constructor(private http: HttpClient) { }

  getCoins() {
    return this.http.get('https://min-api.cryptocompare.com/data/all/coinlist')
          .map(res => this.processCoinList(res));
  }

  processCoinList(response): Array<CoinItem> {
      const coinItems = [];
      for ( const key in response.Data ) {
        if ( response.Data.hasOwnProperty(key) ) {
          response.Data[key].ImageUrl = `${response.BaseImageUrl}${response.Data[key].ImageUrl}`;
          coinItems.push(response.Data[key]);
        }
      }
      return coinItems;
    }

}
