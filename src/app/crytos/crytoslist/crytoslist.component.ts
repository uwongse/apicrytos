import { Component, OnInit } from '@angular/core';
import { CrytosService } from "../services/crytos.service";
import { Crytos,Coin } from '../interfaces/crytos.interfaces';




@Component({
  selector: 'app-crytoslist',
  templateUrl: './crytoslist.component.html',
  styleUrls: ['./crytoslist.component.css']
})
export class CrytoslistComponent implements OnInit {
  public cryptos: Crytos[] = [];
  public filtresCryptos: Crytos[] = [];
  public solousdt: Crytos[] = [];
  public cardCrypto: string[] = [];
  public page: number = 0;
  public searchtext: string = '';
  public usdt: string = "usdt";


  constructor(private CrytosService: CrytosService) { }


  ngOnInit(): void {
    this.CrytosService.getAllCrytos().subscribe(resp => {
      this.cryptos = resp, this.filtresCryptos = resp, this.solousdt = resp.filter((coin) => coin.symbol.toLowerCase().includes(this.usdt.toLowerCase()))
      , console.log(resp)
    })

  }


  SearchCrypto() {
    this.filtresCryptos = this.cryptos.filter((coin) => coin.symbol.toLowerCase().includes(this.searchtext.toLowerCase()))

  }
  nextPage() {
    this.page += 15;
  }

  prevPage() {
    if (this.page > 0)
      this.page -= 15;
  }





}
