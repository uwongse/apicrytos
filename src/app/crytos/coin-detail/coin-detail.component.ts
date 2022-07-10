import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crytos, Coin, CrytosCard } from '../interfaces/crytos.interfaces';
import { CrytosService } from '../services/crytos.service';


@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css']
})
export class CoinDetailComponent implements OnInit {
  public MY_PREC: any;
  public MY_PREC2: any;
  public filtresCryptos: any;
  public color: string = "black";
  public page: number = 0;
  public cryptos: Crytos[] = [];
  public cardcryptos: CrytosCard[] = [];
  public CrytosSelect: Crytos[] = [];
  public tablafav: any
  public coin: any;
  public CurrentDate = new Date();
  public votos: number = 0;
  public searchtext: string = '';
  art = {
    symbol: ""
  }



  constructor(private activatedRouter: ActivatedRoute,
    private CrytosService: CrytosService) {



  }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe(
      dato => {
        console.log('parametros recibidos en params', dato)
        this.coin = dato
        this.getCoin(dato['symbolcoin']);
        this.getCoinporcentaje(dato['symbolcoin']);
        this.getfavoritas()
       
      }
    )


  }

  getCoin(coinSymbol: any) {
    this.CrytosService.getAllCrytos().subscribe(
      resp => {
        this.cryptos = resp;

        this.cardcryptos = this.cryptos.filter((coin) => coin.symbol.toLowerCase().includes(coinSymbol.toLowerCase()));


        console.log(this.cardcryptos[0].symbol);

      }
    )

  }

  getCoinporcentaje(coinSymbol: any) {
    this.CrytosService.getAllCrytos().subscribe(
      resp => {
        this.cryptos = resp;
        this.CrytosSelect = this.cryptos.filter((coin) => coin.symbol.toLowerCase().includes(coinSymbol.toLowerCase()));
        this.MY_PREC = this.CrytosSelect[0].priceChangePercent
        this.MY_PREC2 = this.MY_PREC *(-1)
        console.log(this.MY_PREC2);

      }
    )

  }
  getfavoritas() {
    this.CrytosService.recogercoins().subscribe(resp => {
      this.tablafav = resp
      this.filtresCryptos = resp
      console.log(resp)
    })
  }
  SearchCrypto() {
    this.filtresCryptos = this.tablafav.filter((coin: { symbol: string; }) => coin.symbol.toLowerCase().includes(this.searchtext.toLowerCase()))

  }

  votar() {




    this.art = { symbol: this.cardcryptos[0].symbol }

    this.CrytosService.votar(this.art).subscribe()
    console.log(this.art)



  }




  nextPage() {
    this.page += 15;
  }

  prevPage() {
    if (this.page > 0)
      this.page -= 15;
  }

}
