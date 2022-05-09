
# Patika & React Bootcamp Bitirme Projesi

Proje Patika & React Bootcamp'in bitirme projesidir. 

## Demo 
https://ikinciel.emredag.com.tr


## Projenin Amacı

Projenin amacı ikinci el ürünleri almak veya satmak isteyen kişilerin kolay bir şekilde ürünlerini yayınlayabilmesi, dilerse de ürün satın almasıdır.


## Proje Hakkında
Kullanıcı siteye girdikten sonra üye olmadan ilana koyulmuş ürünleri görüntüleyebilir. Ürünleri satın almak isterse veya teklif vermek isterse kullanıcının üye olması gerekmektedir. Üye olduktan sonra dileği ürüne işlem gerçekleştirebilmektedir.

Kullanıcı ürünlerini satmak istediğinde ürün yükleme sayfasından ürünün bilgilerini yazarak, resmini yükleyerek ve dilediği takdirde teklif opsiyonunu da açarak ürünlerini yükleyebilmektedir. 

Teklif verilen ve teklif alınan ürünleri de profil sayfasından takip edip teklifleri onaylama/reddetme, verdiği ve onaylanan teklifleri satın alma yapabilmektedir.


Teklif verilen ürünleri profil sayfasından takip edip tekliflerin durumunu kontrol edebilir. Teklifi hem ürünün detay sayfasından hem de profil sayfasından geri çekebilmektedir. Eğer ki teklifi onaylandıysa ürünü satın alabilmektedir.

Aynı şekilde teklif alınan ürünleri de profil sayfasından takip edip gelen teklifleri onaylayıp, reddedebilmektedir.



## Yol Haritası

#### Kayıt ol / Giriş yap sayfalarının oluşturulması ve tüm authorization işlemleri
Kullanıcının girdiği bilgileri API'a yolluyorum ve kaydını gerçekleştiriyorum. Kullanıcının diğer işlemleri yapabilmesi için tokeni Axios'a ekliyorum.

#### Anasayfanın oluşturulması ve kategori & ürünlerin listelenmesi
API'dan kategorileri ve ürünleri çekiyorum. Seçilen kategoriye göre ürünleri listeliyorum.

#### Ürün detay sayfasının oluşturulması ve ürün satın alma / teklif verme işlemleri
Anasayfadaki ürünlere tıklandığında detay sayfasına yönlendiriyorum. Detay sayfasında ürünlerin açıklama, kullanım durumu gibi detaylarını gösteriyorum. Ürünü satın alabiliyor ya da ürünün durumuna göre kullanıcı teklif verebiliyor. Verdiği teklifi geri çekebiliyor.


#### Ürün ekleme sayfasının oluşturulması ve gerekli validasyonlar
Ürün ekleme sayfasında forma girilen değerleri ve yüklenen fotoğrafı form-data da tutup API'a gönderiyorum. Ardından da kullanıcının yüklediği ürünün detay sayfasına yönlendiriyorum.


#### Profil sayfasının oluşturulması ve tekliflerin listelenmesi
Profil sayfasında "Teklif Verdiklerim" ve "Teklif Aldıklarım" başlıkları bulunuyor. Kullanıcıya gelen teklifleri ve verdiği teklifleri API'den getiriyorum ve durumlarına göre işlem yapmasını sağlıyorum. Örneğin x ürününe gelen tüm teklifleri görüntüleyip, istediğini kabul edebiliyor.


 
## Kullanılan Teknolojiler

**İstemci:** React

React içerisinde: Context, React Dom, React Router, Axios

- Context: Global state tanımlamaları yapmak için

- Router: Yönlendirmeler için

- Axios: API istekleri için

- React Dom: Modallar için



Paketler: Toastify, Antd Uploader, Node-Sass, Formik, Yup

- Toastify: Pop up için
 
- Antd Uploader: Sürükle bırak fotoğraf yükleme için

- Node-Sass: Scss compiler için

- Formik: Formlar için

- Yup: Form validasyonları için

**Sunucu:** REST API

  
## Bilgisayarınızda Çalıştırın

Projeyi klonlayın

```bash
  git clone https://github.com/emredag/e-commerce-app.git
```

Proje dizinine gidin

```bash
  cd e-commerce-app
```

Gerekli paketleri yükleyin

```bash
  npm install / yarn install
```

Sunucuyu çalıştırın

```bash
  npm run start / yarn start
```


## Projeden Bazı Görüntüler

Masaüstü Anasayfa

![desktopIndex](https://user-images.githubusercontent.com/67982673/167363082-b72c056b-b5dd-4d29-ae53-99e7483218c3.png)

Masaüstü Anasayfa Kategori seçili

![desktopSelectCategories](https://user-images.githubusercontent.com/67982673/167363152-aac7758d-c5e3-4398-bbfa-cbb52a67db8a.png)

Masaüstü Ürün Detay Sayfası

![desktopDetailProduct](https://user-images.githubusercontent.com/67982673/167363187-489f9bc9-3198-4ec9-ac80-7c7e0e034d9a.png)

Masaüstü Ürün Satın Alma

![desktopBuyProduct](https://user-images.githubusercontent.com/67982673/167363282-223dafe5-1043-4cef-bfcb-b39dd03fab9f.png)

Masaüstü Teklif Gönderme

![desktopSendOffer](https://user-images.githubusercontent.com/67982673/167363289-bec7a0d8-3753-40de-9033-a63eebbc06cc.png)

Masaüstü Ürün Yükleme ve Validasyonlar

![desktopErrorAddProduct](https://user-images.githubusercontent.com/67982673/167363316-dd9755c1-8159-4135-ba90-4b4f0715a153.png)

Masaüstü Kendi Yüklediğim Ürün

![desktopMyProductDetail](https://user-images.githubusercontent.com/67982673/167363326-b15659fc-28a5-4e10-9adb-72b7fa3b4f7d.png)

Masaüstü Alınan Teklifler

![desktopMyOffers](https://user-images.githubusercontent.com/67982673/167363364-16279469-916d-4cec-bddb-fc3e66c64580.png)

Masaüstü Verilen Teklifler

![desktopGivenOffers](https://user-images.githubusercontent.com/67982673/167363371-f8239fee-e5a5-4cd2-a2fa-7fc0e7d638b5.png)

Mobil Anasayfa 

![mobileIndex](https://user-images.githubusercontent.com/67982673/167363405-8470cf0f-2161-49f8-b262-0576099af581.png)

Mobil Ürün Detay Sayfası

![mobileProductDetail](https://user-images.githubusercontent.com/67982673/167363430-1a424fcd-fb34-423a-8114-cb29de82f664.png)

Mobil Ürün Yükleme Sayfası

![mobileAddProduct](https://user-images.githubusercontent.com/67982673/167363414-9281a15c-e540-4c8a-a163-c76ace0a4344.png)

Performans Testi Sonucu

![desktopPerformance](https://user-images.githubusercontent.com/67982673/167363455-17ba7d9a-99b3-4de2-aab8-6025dcebff2c.png)



  
