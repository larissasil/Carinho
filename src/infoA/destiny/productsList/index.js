import './index.css'

import ProductItem from "../productItem";
import { useState } from 'react';


export default function Index() {

  const [produtos, setProdutos] = useState([]);

  function listar() {
    const apiResponse = [
      {
        nome:"Chuteira Nike Mercurial Vapor 14 Club Unissex",
        preco:"R$ 379,99",
        parcelamento:"ou até 9x de R$ 42,2",
        imagem:"https://s3-alpha-sig.figma.com/img/7347/fc3b/7437ab8d12402ae88a7ccd3c1766eb9d?Expires=1633910400&Signature=frRtA1Y-btRCq2T25AF3ckyDV7U-qXzb5O3zTl92p7Umm1pyzZD6x4q7eee~JoBf3w~jbFfUzUT-I0TErlmKOxgyavYCMV9GwAetGNW9dnY~PEYFgdMNd6Pci99-0XnZlS7eu8hy9J4NubluYjWX9u9olBjPKG0G~u9m0mizI-SwOtMd7qsILs~pQcuBFTnLdR30k1hGJ-UGi5DUTuuFSg3I5UN6x1tkc~2cCtVKV~QgUnop~hkBtheLMklkDpUgK-fPNjqearAyk5IIlLRCkvezW0OH5JlCBhBWI9ZZyOYjOp6lkAaoTnU9S9V2HPeU5zMxm1IRq4jL07DuvkKMSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      },
      {
        nome:"Camiseta Nike Tottenham II 2021 Masculina",
        preco:"R$ 299,99",
        parcelamento:"ou até 7x de R$ 42,85",
        imagem:"https://s3-alpha-sig.figma.com/img/ceff/72ca/74f0583d4054618bafd7be364884f805?Expires=1633910400&Signature=Q-7usUXcUF~Fnb2s-bLqYhoRnxtURH2Okv2S4pZhgtmZnw22Y1dfpTCuZ14nrg~GQ3g7OiEbIdHjpbGmLmYqLuTflagl2Y016L5m5AnZ8sTPq0Kqobmn8SbSN8p9Kz5d9b3LEKuwrqeB5-eWtFwl3S1qs~-DBZMJ7IWO0Z3QDWhe3qa-9zOp6a3tCTbAOzBwOE3aal8pB8HXRV1yU90OrxIQiqZNh-egFYH21cd0d-qnuz1LNXLMFRGT8MD0d6rk6R-RGs~~zg3gB8pLAzVsjYN9Y78ly3oPT82GDcI8EbPnpfsYKOZ7~OPODvvWJ3~8nqe~Fx6zzYEyIgGSTeLR2w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      },
      {
        nome:"Blusão Nike Essential Feminino",
        preco:"R$ 194,99",
        parcelamento:"ou 5x de R$ 38,80",
        imagem:"https://static.netshoes.com.br/produtos/blusao-nike-essential-fnl-po-flc-canguru-feminino/26/HZM-5135-226/HZM-5135-226_zoom1.jpg?ts=1623168014&"
      }
    ]

    setProdutos(apiResponse);
  }



  return (
    <div>

      <button onClick={listar}> Listar </button>

      <div class="container-produto">
        {produtos.map(item => 
          <ProductItem 
            nome={item.nome} 
            preco={item.preco} 
            parcelamento={item.parcelamento}
            imagem={item.imagem} />
        )}        
      </div>

    </div>
  )
}