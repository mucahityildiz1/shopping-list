// Kullanıcıya kaç adet ürün eklemek istediğini soralım
// Kullanıcıdan aldığı cevaba göre ürünleri yazdığında diziye eklesin.
// Console'a tüm ürünleri yazdıralım ve dizi içinde kaç eleman olduğunu yazdıralım.

let urunler = [];

function eklenicekUrun () {
  let urunSayisi = prompt('Kac adet urun eklemek istiyorsunuz? ');

  for (let i = 0; i < urunSayisi; i++) {
    let urun = prompt(`${i + 1}. urunun ismini giriniz:`);
    urunler.push(urun);
  }
  console.log('Eklenen urunler: ');
  for (let i = 0; i < urunler.length; i++) {
    console.log(urunler[i]);
  }
  console.log('Dizi icinde: ' + (urunler.length) + ' eleman vardir.');
}

eklenicekUrun();