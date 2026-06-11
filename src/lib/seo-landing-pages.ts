export type SeoLandingPageKind = "area" | "service";

export interface SeoLandingPage {
  slug: string;
  name: string;
  keyword: string;
  h1: string;
  seoTitle: string;
  description: string;
  kind: SeoLandingPageKind;
  cluster: string;
  district: string;
  priority: number;
  nearby: string[];
  landmarks: string[];
  deliveryAngle: string;
  productAngle: string;
  occasionAngle: string;
  audienceAngle: string;
}

interface AreaInput {
  slug: string;
  name?: string;
  baseName?: string;
  district: string;
  cluster: string;
  nearby: string[];
  landmarks: string[];
  deliveryAngle: string;
  productAngle: string;
  occasionAngle: string;
  audienceAngle: string;
  priority?: number;
}

interface VariantInput {
  slug: string;
  baseName: string;
  district: string;
  cluster: string;
  intent: "sipariş" | "gönder";
  nearby: string[];
  landmarks: string[];
  deliveryAngle: string;
  productAngle: string;
  occasionAngle: string;
  audienceAngle: string;
  priority?: number;
}

interface ServiceInput {
  slug: string;
  name: string;
  keyword: string;
  title: string;
  description: string;
  cluster: string;
  nearby: string[];
  landmarks: string[];
  deliveryAngle: string;
  productAngle: string;
  occasionAngle: string;
  audienceAngle: string;
  priority?: number;
}

function areaPage(input: AreaInput): SeoLandingPage {
  const name = input.name ?? input.baseName;

  if (!name) {
    throw new Error(`SEO landing page is missing a name for ${input.slug}`);
  }

  const keyword = `${name} çiçekçi`;

  return {
    slug: input.slug,
    name,
    keyword,
    h1: `${name} çiçekçi ve aynı gün çiçek gönderimi`,
    seoTitle: `${name} Çiçekçi | Aynı Gün Çiçek Siparişi | Sümbül Garden`,
    description: `${name} çiçekçi arayanlar için aynı gün çiçek siparişi, buket, orkide, gül buketi ve özel gün çiçekleri. Sümbül Garden WhatsApp ile hızlı teslimat sağlar.`,
    kind: "area",
    cluster: input.cluster,
    district: input.district,
    priority: input.priority ?? 0.74,
    nearby: input.nearby,
    landmarks: input.landmarks,
    deliveryAngle: input.deliveryAngle,
    productAngle: input.productAngle,
    occasionAngle: input.occasionAngle,
    audienceAngle: input.audienceAngle,
  };
}

function variantPage(input: VariantInput): SeoLandingPage {
  const keyword =
    input.intent === "sipariş"
      ? `${input.baseName} çiçek siparişi`
      : `${input.baseName} çiçek gönder`;
  const readableIntent = input.intent === "sipariş" ? "çiçek siparişi" : "çiçek gönderimi";

  return {
    slug: input.slug,
    name: input.baseName,
    keyword,
    h1: `${input.baseName} ${readableIntent} ve hızlı teslimat`,
    seoTitle:
      input.intent === "sipariş"
        ? `${input.baseName} Çiçek Siparişi | Aynı Gün Teslimat | Sümbül Garden`
        : `${input.baseName} Çiçek Gönder | Aynı Gün Çiçek Gönderimi | Sümbül Garden`,
    description: `${input.baseName} ${readableIntent} için Sümbül Garden. Aynı gün teslimat, WhatsApp siparişi, buket çiçek, orkide, gül buketi ve özel gün tasarımları.`,
    kind: "area",
    cluster: input.cluster,
    district: input.district,
    priority: input.priority ?? 0.78,
    nearby: input.nearby,
    landmarks: input.landmarks,
    deliveryAngle: input.deliveryAngle,
    productAngle: input.productAngle,
    occasionAngle: input.occasionAngle,
    audienceAngle: input.audienceAngle,
  };
}

function servicePage(input: ServiceInput): SeoLandingPage {
  return {
    slug: input.slug,
    name: input.name,
    keyword: input.keyword,
    h1: input.title,
    seoTitle: `${input.title} | Sümbül Garden`,
    description: input.description,
    kind: "service",
    cluster: input.cluster,
    district: "İstanbul Avrupa Yakası",
    priority: input.priority ?? 0.76,
    nearby: input.nearby,
    landmarks: input.landmarks,
    deliveryAngle: input.deliveryAngle,
    productAngle: input.productAngle,
    occasionAngle: input.occasionAngle,
    audienceAngle: input.audienceAngle,
  };
}

const priorityAreaDetails = {
  bahcesehir: {
    baseName: "Bahçeşehir",
    district: "Başakşehir",
    cluster: "bahcesehir",
    nearby: ["Esenkent", "Ispartakule", "Bahçekent", "Hoşdere"],
    landmarks: ["Bahçeşehir Gölet", "Akbatı aksı", "site ve rezidans bölgeleri"],
    deliveryAngle:
      "Bahçeşehir'de site girişleri, güvenlik noktaları ve blok teslimleri için alıcı adı, telefon ve blok bilgisiyle ilerleyen pratik bir teslimat planı kullanılır.",
    productAngle:
      "Bölgede en çok tercih edilen seçenekler pastel buketler, kutu çiçekler, orkide, saksı çiçekleri ve zarif gül buketi tasarımlarıdır.",
    occasionAngle:
      "Doğum günü, yıldönümü, yeni iş, geçmiş olsun ve ev hediyesi siparişlerinde mesaj kartı ve teslim saati özenle not edilir.",
    audienceAngle:
      "Bahçeşehir'de yaşayanlar kadar bölgedeki ofis, okul, klinik ve site yönetimleri de hızlı ve düzenli çiçek siparişi akışına ihtiyaç duyar.",
  },
  basaksehir: {
    baseName: "Başakşehir",
    district: "Başakşehir",
    cluster: "basaksehir",
    nearby: ["Kayabaşı", "Kayaşehir", "Altınşehir", "Güvercintepe"],
    landmarks: ["Başakşehir merkez", "Kayaşehir konutları", "Kayabaşı Park Mavera çevresi"],
    deliveryAngle:
      "Başakşehir çevresinde teslimatlar mahalle, cadde ve site bilgisini birlikte değerlendirerek planlanır; yoğun saatlerde WhatsApp üzerinden net konum istenir.",
    productAngle:
      "Buket çiçek, orkide, salon bitkileri, açılış çiçekleri ve kurumsal gönderiler Başakşehir siparişlerinde öne çıkar.",
    occasionAngle:
      "Nişan, söz, doğum günü, açılış, öğretmenler günü ve geçmiş olsun gönderilerinde sade ama gösterişli tasarımlar hazırlanır.",
    audienceAngle:
      "Başakşehir'deki aileler, işletmeler ve kurumsal müşteriler için telefonla teyit edilen güvenli bir sipariş süreci kullanılır.",
  },
  esenkent: {
    baseName: "Esenkent",
    district: "Esenyurt",
    cluster: "esenyurt",
    nearby: ["Bahçeşehir", "Akbatı", "Koza", "Hoşdere"],
    landmarks: ["Esenkent konutları", "Akbatı çevresi", "Bahçeşehir bağlantısı"],
    deliveryAngle:
      "Esenkent teslimatlarında alıcı adresi çoğu zaman site veya cadde bazlı olduğu için teslim öncesi kapı, blok ve güvenlik bilgisi netleştirilir.",
    productAngle:
      "Renkli buketler, vazolu çiçekler, orkide ve gül buketi Esenkent'te günlük siparişlerde sık tercih edilir.",
    occasionAngle:
      "Yıldönümü, sevgiliye çiçek, doğum günü ve geçmiş olsun gönderilerinde hızlı hazırlanabilen taze tasarımlar seçilir.",
    audienceAngle:
      "Esenkent'te yaşayan müşteriler için kolay sipariş, hızlı dönüş ve aynı gün çiçek gönderimi en önemli beklentidir.",
  },
  esenyurt: {
    baseName: "Esenyurt",
    district: "Esenyurt",
    cluster: "esenyurt",
    nearby: ["Esenkent", "Güzelyurt", "Koza", "Akbatı"],
    landmarks: ["Esenyurt merkez", "Güzelyurt çevresi", "Koza Mahallesi"],
    deliveryAngle:
      "Esenyurt geniş bir teslimat alanına sahip olduğu için siparişlerde mahalle ve saat bilgisi erken alınır, kurye planı buna göre yapılır.",
    productAngle:
      "Buket çiçek, orkide, saksı çiçekleri, doğum günü çiçekleri ve açılış aranjmanları Esenyurt siparişlerinde güçlü seçeneklerdir.",
    occasionAngle:
      "Acil çiçek siparişi, doğum günü, iş yeri açılışı, nişan ve özel gün gönderilerinde görsel onaylı hazırlık yapılabilir.",
    audienceAngle:
      "Esenyurt'ta hem bireysel hem kurumsal adreslere teslimat yapılırken alıcıya ulaşma ve zamanlama konusu özellikle takip edilir.",
  },
  avcilar: {
    baseName: "Avcılar",
    district: "Avcılar",
    cluster: "avcilar",
    nearby: ["Ispartakule", "Tahtakale", "Yeşilkent", "Küçükçekmece"],
    landmarks: ["Avcılar merkez", "Ispartakule bağlantısı", "Tahtakale çevresi"],
    deliveryAngle:
      "Avcılar hattında trafik ve bağlantı yolları dikkate alınarak aynı gün teslimat için sipariş saati ve adres ayrıntısı netleştirilir.",
    productAngle:
      "Gül buketi, kutu çiçek, orkide, teraryum ve saksı bitkileri Avcılar çevresinde sık talep edilen ürünlerdir.",
    occasionAngle:
      "Mezuniyet, doğum günü, geçmiş olsun, açılış ve sevgiliye çiçek gönderiminde sade ve şık tasarımlar öne çıkar.",
    audienceAngle:
      "Avcılar'da ev, okul, hastane ve iş yeri adreslerine teslimat için alıcı bilgisi WhatsApp üzerinden teyit edilir.",
  },
  tahtakale: {
    baseName: "Tahtakale",
    district: "Avcılar",
    cluster: "avcilar",
    nearby: ["Ispartakule", "Avcılar", "Esenkent", "Bahçeşehir"],
    landmarks: ["Tahtakale Mahallesi", "Ispartakule yolu", "site konutları"],
    deliveryAngle:
      "Tahtakale çevresinde yakın teslimat avantajı sayesinde aynı gün çiçek gönderimi için hızlı hazırlık ve pratik rota planı yapılır.",
    productAngle:
      "Modern buketler, orkide, saksı çiçekleri ve minimal kutu çiçekler Tahtakale siparişlerinde kullanışlı seçeneklerdir.",
    occasionAngle:
      "Yeni ev, komşu ziyareti, doğum günü, söz ve nişan gibi yakın çevre gönderilerinde taze çiçek seçimi önem kazanır.",
    audienceAngle:
      "Tahtakale'deki site yaşamında alıcıya ulaşmak için blok, daire ve güvenlik notları siparişin ayrılmaz parçası kabul edilir.",
  },
  ispartakule: {
    baseName: "Ispartakule",
    district: "Avcılar",
    cluster: "avcilar",
    nearby: ["Tahtakale", "Bahçeşehir", "Esenkent", "Avcılar"],
    landmarks: ["Ispartakule konutları", "Bahçeşehir bağlantısı", "Avcılar-Tahtakale hattı"],
    deliveryAngle:
      "Ispartakule'de yüksek katlı konutlar ve site teslimleri için sipariş öncesi blok, güvenlik ve teslim notu dikkatle alınır.",
    productAngle:
      "Şık buket çiçek, premium orkide, zarif gül buketi ve dekoratif saksı çiçekleri Ispartakule için güçlü alternatiflerdir.",
    occasionAngle:
      "Yıldönümü, sevgililer günü, doğum günü, geçmiş olsun ve yeni ev hediyesi gönderilerinde özenli paketleme tercih edilir.",
    audienceAngle:
      "Ispartakule müşterileri genellikle hızlı yanıt, temiz görsel sunum ve teslimat sonrası bilgilendirme bekler.",
  },
  istanbul: {
    baseName: "İstanbul",
    district: "İstanbul",
    cluster: "istanbul",
    nearby: ["Başakşehir", "Bahçeşehir", "Esenyurt", "Avcılar"],
    landmarks: ["İstanbul Avrupa Yakası", "Başakşehir çevresi", "Bahçeşehir teslimat hattı"],
    deliveryAngle:
      "İstanbul teslimatlarında yoğunluk, mesafe ve özel gün trafiği hesaba katılarak gerçekçi saat aralığı paylaşılır.",
    productAngle:
      "Buket çiçek, orkide, gül buketi, saksı çiçekleri, açılış çelenkleri ve özel gün aranjmanları İstanbul geneli için hazırlanır.",
    occasionAngle:
      "Düğün, nişan, açılış, doğum günü, yıldönümü, taziye ve kurumsal davetlerde ihtiyaca göre ürün yönlendirmesi yapılır.",
    audienceAngle:
      "İstanbul'da hem bireysel hem kurumsal müşteriler için online çiçek siparişi ve WhatsApp üzerinden hızlı iletişim esastır.",
  },
};

const areaPages = [
  areaPage({ slug: "bahcesehir-cicekci", priority: 0.94, ...priorityAreaDetails.bahcesehir }),
  areaPage({ slug: "basaksehir-cicekci", priority: 0.94, ...priorityAreaDetails.basaksehir }),
  areaPage({ slug: "esenkent-cicekci", priority: 0.88, ...priorityAreaDetails.esenkent }),
  areaPage({ slug: "esenyurt-cicekci", priority: 0.9, ...priorityAreaDetails.esenyurt }),
  areaPage({ slug: "avcilar-cicekci", priority: 0.86, ...priorityAreaDetails.avcilar }),
  areaPage({ slug: "ispartakule-cicekci", priority: 0.9, ...priorityAreaDetails.ispartakule }),
  areaPage({ slug: "tahtakale-cicekci", priority: 0.86, ...priorityAreaDetails.tahtakale }),
  areaPage({
    slug: "kayaşehir-cicekci",
    name: "Kayaşehir",
    district: "Başakşehir",
    cluster: "basaksehir",
    nearby: ["Kayabaşı", "Başakşehir", "Bahçekent", "Altınşehir"],
    landmarks: ["Kayaşehir konutları", "Kayabaşı bağlantısı", "Başakşehir merkez"],
    deliveryAngle:
      "Kayaşehir teslimatlarında geniş konut alanları nedeniyle site adı, blok bilgisi ve alıcı telefonu siparişin başında netleştirilir.",
    productAngle:
      "Buket çiçek, orkide, saksı bitkileri ve özel gün kutu çiçekleri Kayaşehir çevresi için hızlı hazırlanabilir.",
    occasionAngle:
      "Doğum günü, yeni ev, geçmiş olsun, nişan ve aile ziyaretlerinde sade ama taze tasarımlar tercih edilir.",
    audienceAngle:
      "Kayaşehir'de yaşayan müşteriler için hızlı dönüş, anlaşılır fiyat ve WhatsApp üzerinden görsel paylaşımı önemlidir.",
    priority: 0.84,
  }),
  areaPage({
    slug: "bahcekent-cicekci",
    name: "Bahçekent",
    district: "Başakşehir",
    cluster: "bahcesehir",
    nearby: ["Bahçeşehir", "Hoşdere", "Esenkent", "Kayabaşı"],
    landmarks: ["Bahçekent siteleri", "Hoşdere bağlantısı", "Bahçeşehir hattı"],
    deliveryAngle:
      "Bahçekent için aynı gün teslimat planında site girişleri ve yeni konut projelerinin adres detayları özellikle kontrol edilir.",
    productAngle:
      "Buket çiçek, saksı çiçekleri, orkide ve zarif gül buketi Bahçekent siparişlerinde sık kullanılır.",
    occasionAngle:
      "Yeni ev hediyesi, doğum günü, geçmiş olsun ve yıldönümü için taze çiçeklerle temiz bir sunum hazırlanır.",
    audienceAngle:
      "Bahçekent müşterileri için kolay sipariş, teslimat sonrası bilgi ve hızlı WhatsApp iletişimi güven verir.",
    priority: 0.86,
  }),
  areaPage({
    slug: "hoşdere-cicekci",
    name: "Hoşdere",
    district: "Başakşehir",
    cluster: "bahcesehir",
    nearby: ["Bahçeşehir", "Bahçekent", "Esenkent", "Büyükçekmece"],
    landmarks: ["Hoşdere yolu", "Bahçekent çevresi", "Bahçeşehir bağlantısı"],
    deliveryAngle:
      "Hoşdere çevresinde teslimatlar konut projeleri, cadde erişimi ve yoğun saatler dikkate alınarak planlanır.",
    productAngle:
      "Canlı renkli buketler, orkide, vazolu tasarımlar ve saksı çiçekleri Hoşdere için uygun seçeneklerdir.",
    occasionAngle:
      "Düğün, nişan hazırlığı, doğum günü ve özel ziyaretlerde çiçeğin gün içinde taze hazırlanması öne çıkar.",
    audienceAngle:
      "Hoşdere'deki müşteriler için net fiyat, hızlı kurye yönlendirmesi ve WhatsApp üzerinden kolay sipariş önceliklidir.",
    priority: 0.8,
  }),
  areaPage({
    slug: "beylikduzu-cicekci",
    name: "Beylikdüzü",
    district: "Beylikdüzü",
    cluster: "avrupa-yakasi",
    nearby: ["Esenyurt", "Büyükçekmece", "Avcılar", "Güzelyurt"],
    landmarks: ["Beylikdüzü yaşam alanları", "E-5 hattı", "sahil ve merkez çevresi"],
    deliveryAngle:
      "Beylikdüzü teslimatlarında mesafe ve trafik etkisi sipariş saatine göre değerlendirilir, uygun ürün ve teslim aralığı önerilir.",
    productAngle:
      "Buket çiçek, orkide, açılış çiçekleri ve doğum günü aranjmanları Beylikdüzü siparişlerinde öne çıkar.",
    occasionAngle:
      "Açılış, kurumsal kutlama, doğum günü, yıldönümü ve geçmiş olsun gönderileri için düzenli seçenekler sunulur.",
    audienceAngle:
      "Beylikdüzü'nde bireysel ve kurumsal adreslere teslimatta alıcı bilgisi önceden teyit edilir.",
    priority: 0.78,
  }),
  areaPage({
    slug: "buyukcekmece-cicekci",
    name: "Büyükçekmece",
    district: "Büyükçekmece",
    cluster: "avrupa-yakasi",
    nearby: ["Bahçeşehir", "Hoşdere", "Esenyurt", "Beylikdüzü"],
    landmarks: ["Büyükçekmece merkez", "göl çevresi", "Avrupa Yakası batı hattı"],
    deliveryAngle:
      "Büyükçekmece yönünde teslimat için sipariş zamanı, rota ve ürün dayanıklılığı birlikte değerlendirilir.",
    productAngle:
      "Orkide, saksı çiçekleri, dayanıklı buketler ve açılış aranjmanları Büyükçekmece gönderilerinde avantaj sağlar.",
    occasionAngle:
      "Düğün, nişan, doğum günü, yazlık ev ziyareti ve kurumsal tebriklerde kalıcı tasarımlar tercih edilir.",
    audienceAngle:
      "Büyükçekmece müşterileri için önceden planlanan gönderilerde saat ve teslim bilgisi düzenli takip edilir.",
    priority: 0.76,
  }),
  areaPage({
    slug: "hadimkoy-cicekci",
    name: "Hadımköy",
    district: "Arnavutköy",
    cluster: "avrupa-yakasi",
    nearby: ["Arnavutköy", "Başakşehir", "Büyükçekmece", "Bahçeşehir"],
    landmarks: ["Hadımköy sanayi çevresi", "Arnavutköy hattı", "lojistik bölgeler"],
    deliveryAngle:
      "Hadımköy teslimatlarında iş yeri, fabrika ve depo adresleri için alıcı departmanı ve güvenlik bilgisi özellikle not edilir.",
    productAngle:
      "Kurumsal çiçek siparişi, açılış çiçekleri, orkide ve dayanıklı saksı bitkileri Hadımköy için uygundur.",
    occasionAngle:
      "Açılış, terfi, kurumsal tebrik, yıl dönümü ve özel ziyaretlerde sade ve etkili tasarımlar hazırlanır.",
    audienceAngle:
      "Hadımköy'de şirket adreslerine teslimatta fatura, kart notu ve teslim saatinin net olması müşteriye hız kazandırır.",
    priority: 0.74,
  }),
  areaPage({
    slug: "arnavutkoy-cicekci",
    name: "Arnavutköy",
    district: "Arnavutköy",
    cluster: "avrupa-yakasi",
    nearby: ["Hadımköy", "Başakşehir", "Kayaşehir", "Bolluca"],
    landmarks: ["Arnavutköy merkez", "Hadımköy bağlantısı", "Kuzey Avrupa Yakası hattı"],
    deliveryAngle:
      "Arnavutköy teslimatlarında mesafe ve rota planı açıkça paylaşılır; uygun siparişlerde aynı gün çiçek gönderimi yapılır.",
    productAngle:
      "Buket çiçek, orkide, gül buketi, saksı bitkileri ve açılış aranjmanları Arnavutköy için hazırlanabilir.",
    occasionAngle:
      "Düğün, nişan, doğum günü, yeni iş ve açılış gibi özel günlerde taze çiçek seçimi yapılır.",
    audienceAngle:
      "Arnavutköy müşterileri için telefonla ulaşılabilirlik ve WhatsApp üzerinden hızlı bilgi paylaşımı siparişi kolaylaştırır.",
    priority: 0.74,
  }),
  areaPage({
    slug: "kucukcekmece-cicekci",
    name: "Küçükçekmece",
    district: "Küçükçekmece",
    cluster: "avrupa-yakasi",
    nearby: ["Halkalı", "Atakent", "Kanarya", "Avcılar"],
    landmarks: ["Halkalı", "Atakent", "Küçükçekmece göl çevresi"],
    deliveryAngle:
      "Küçükçekmece'de mahalle yoğunluğu ve trafik dikkate alınarak aynı gün teslimat için gerçekçi zaman aralığı verilir.",
    productAngle:
      "Buket çiçek, orkide, doğum günü çiçekleri ve saksı çiçekleri Küçükçekmece siparişlerinde dengeli seçeneklerdir.",
    occasionAngle:
      "Doğum günü, geçmiş olsun, ev ziyareti, düğün ve nişan hazırlıklarında taze ve şık tasarımlar hazırlanır.",
    audienceAngle:
      "Küçükçekmece'de ev, okul, ofis ve hastane adreslerine siparişlerde alıcı bilgisi dikkatle teyit edilir.",
    priority: 0.78,
  }),
  areaPage({
    slug: "altinsehir-cicekci",
    name: "Altınşehir",
    district: "Başakşehir",
    cluster: "basaksehir",
    nearby: ["Başakşehir", "Güvercintepe", "Şahintepe", "Kayabaşı"],
    landmarks: ["Altınşehir Mahallesi", "Başakşehir bağlantısı", "mahalle içi adresler"],
    deliveryAngle:
      "Altınşehir içinde teslimatlarda sokak ve kapı bilgisi hızlı alındığında aynı gün çiçek gönderimi daha rahat planlanır.",
    productAngle:
      "Günlük buketler, gül buketi, orkide ve küçük saksı çiçekleri Altınşehir siparişlerinde pratik seçeneklerdir.",
    occasionAngle:
      "Doğum günü, geçmiş olsun, özür çiçeği ve aile ziyaretlerinde taze buketler öne çıkar.",
    audienceAngle:
      "Altınşehir müşterileri için yakın çiçekçi hissi veren hızlı iletişim ve net fiyatlandırma önemlidir.",
  }),
  areaPage({
    slug: "guvercintepe-cicekci",
    name: "Güvercintepe",
    district: "Başakşehir",
    cluster: "basaksehir",
    nearby: ["Altınşehir", "Şahintepe", "Başakşehir", "Kayabaşı"],
    landmarks: ["Güvercintepe Mahallesi", "Başakşehir çevre yolu", "mahalle esnafı"],
    deliveryAngle:
      "Güvercintepe teslimatlarında doğru sokak tarifi ve alıcı telefonunun paylaşılması kurye sürecini hızlandırır.",
    productAngle:
      "Buket çiçek, saksı çiçekleri, uygun fiyatlı aranjmanlar ve gül buketi Güvercintepe için tercih edilir.",
    occasionAngle:
      "Doğum günü, geçmiş olsun, açılış ve özel gün gönderilerinde ekonomik ama özenli çözümler sunulur.",
    audienceAngle:
      "Güvercintepe'de hızlı çiçek siparişi vermek isteyen müşteriler WhatsApp üzerinden görsel ve fiyat alabilir.",
  }),
  areaPage({
    slug: "sahintepe-cicekci",
    name: "Şahintepe",
    district: "Başakşehir",
    cluster: "basaksehir",
    nearby: ["Güvercintepe", "Altınşehir", "Kayabaşı", "Başakşehir"],
    landmarks: ["Şahintepe Mahallesi", "Başakşehir bağlantısı", "yerel konut alanları"],
    deliveryAngle:
      "Şahintepe içinde teslimat için açık adres ve telefon bilgisi netleştiğinde aynı gün çiçek gönderimi kolaylaşır.",
    productAngle:
      "Renkli buketler, gül buketi, orkide ve açılış çiçekleri Şahintepe siparişlerinde kullanılabilir.",
    occasionAngle:
      "Aile kutlamaları, doğum günü, geçmiş olsun ve tebrik gönderilerinde samimi tasarımlar tercih edilir.",
    audienceAngle:
      "Şahintepe müşterileri için ulaşılabilir telefon hattı ve hızlı WhatsApp dönüşü sipariş güvenini artırır.",
  }),
  areaPage({
    slug: "kayabasi-cicekci",
    name: "Kayabaşı",
    district: "Başakşehir",
    cluster: "basaksehir",
    nearby: ["Kayaşehir", "Başakşehir", "Bahçekent", "Altınşehir"],
    landmarks: ["Park Mavera", "Kayabaşı Mahallesi", "Kayaşehir bağlantısı"],
    deliveryAngle:
      "Kayabaşı teslimatlarında Park Mavera ve çevredeki site blokları için ayrıntılı adres notu alınır.",
    productAngle:
      "Buket çiçek, orkide, salon bitkileri ve özel gün aranjmanları Kayabaşı için hızlı hazırlanabilir.",
    occasionAngle:
      "Doğum günü, yıldönümü, yeni ev, geçmiş olsun ve iş yeri tebriklerinde taze çiçekler kullanılır.",
    audienceAngle:
      "Kayabaşı'nda yakın çiçekçi arayan müşteriler mağazaya ve WhatsApp hattına hızlıca ulaşabilir.",
    priority: 0.88,
  }),
  areaPage({
    slug: "bahcesehir-1-kisim-cicekci",
    name: "Bahçeşehir 1. Kısım",
    district: "Başakşehir",
    cluster: "bahcesehir",
    nearby: ["Bahçeşehir Gölet", "Esenkent", "Akbatı", "Bahçekent"],
    landmarks: ["Bahçeşehir 1. Kısım", "Gölet çevresi", "site girişleri"],
    deliveryAngle:
      "Bahçeşehir 1. Kısım'da teslimatlar Gölet ve site çevresi yoğunluğu dikkate alınarak planlanır.",
    productAngle:
      "Premium buketler, kutu çiçekler, orkide ve gül buketi bu bölge için şık seçenekler oluşturur.",
    occasionAngle:
      "Yıldönümü, sevgililer günü, doğum günü ve özel davetlerde zarif paketleme önem kazanır.",
    audienceAngle:
      "Bahçeşehir 1. Kısım müşterileri için görsel sunum ve teslimat bilgisi sipariş deneyimini güçlendirir.",
  }),
  areaPage({
    slug: "bahcesehir-2-kisim-cicekci",
    name: "Bahçeşehir 2. Kısım",
    district: "Başakşehir",
    cluster: "bahcesehir",
    nearby: ["Bahçekent", "Hoşdere", "Esenkent", "Bahçeşehir"],
    landmarks: ["Bahçeşehir 2. Kısım", "Bahçekent bağlantısı", "yeni konut projeleri"],
    deliveryAngle:
      "Bahçeşehir 2. Kısım için teslimatlar yeni konut projeleri ve site güvenlik noktaları üzerinden düzenlenir.",
    productAngle:
      "Orkide, buket çiçek, saksı çiçekleri ve doğum günü aranjmanları bölgede sık tercih edilir.",
    occasionAngle:
      "Yeni ev, geçmiş olsun, doğum günü ve aile ziyareti gönderilerinde taze ve dayanıklı ürünler önerilir.",
    audienceAngle:
      "Bahçeşehir 2. Kısım müşterileri için sipariş kolaylığı ve teslimat sonrası bilgilendirme değerlidir.",
  }),
  areaPage({
    slug: "bahcesehir-gol-cicekci",
    name: "Bahçeşehir Göl",
    district: "Başakşehir",
    cluster: "bahcesehir",
    nearby: ["Bahçeşehir Gölet", "Bahçeşehir 1. Kısım", "Esenkent", "Akbatı"],
    landmarks: ["Bahçeşehir Gölet", "göl çevresi", "kafe ve yaşam alanları"],
    deliveryAngle:
      "Bahçeşehir Göl çevresindeki teslimatlarda buluşma noktası, işletme adı veya site girişi önceden netleştirilir.",
    productAngle:
      "Romantik gül buketi, renkli buketler, orkide ve kutu çiçekler göl çevresi siparişlerinde öne çıkar.",
    occasionAngle:
      "Yıldönümü, buluşma, sürpriz hediye ve doğum günü için görsel etkisi güçlü tasarımlar hazırlanır.",
    audienceAngle:
      "Bahçeşehir Göl çevresinde sürpriz yapmak isteyen müşteriler için zamanlama ve gizlilik özenle takip edilir.",
  }),
  areaPage({
    slug: "boazkoy-cicekci",
    name: "Boğazköy",
    district: "Arnavutköy",
    cluster: "avrupa-yakasi",
    nearby: ["Arnavutköy", "Başakşehir", "Hadımköy", "Kayaşehir"],
    landmarks: ["Boğazköy çevresi", "Arnavutköy bağlantısı", "yerleşim alanları"],
    deliveryAngle:
      "Boğazköy çevresinde teslimat için adres tarifi ve uygun saat bilgisi önceden alınarak rota hazırlanır.",
    productAngle:
      "Buket çiçek, orkide, saksı bitkileri ve özel gün aranjmanları Boğazköy için planlanabilir.",
    occasionAngle:
      "Düğün, nişan, doğum günü ve açılış gönderilerinde ürün dayanıklılığı ve sunum birlikte değerlendirilir.",
    audienceAngle:
      "Boğazköy müşterileri için telefonla ulaşılabilirlik ve doğru yönlendirme sipariş sürecini kolaylaştırır.",
  }),
  areaPage({
    slug: "yesilkent-cicekci",
    name: "Yeşilkent",
    district: "Avcılar",
    cluster: "avcilar",
    nearby: ["Avcılar", "Tahtakale", "Ispartakule", "Küçükçekmece"],
    landmarks: ["Yeşilkent Mahallesi", "Avcılar bağlantısı", "konut alanları"],
    deliveryAngle:
      "Yeşilkent teslimatlarında açık adres, bina ve alıcı telefonu hızlıca teyit edilerek aynı gün gönderim planlanır.",
    productAngle:
      "Gül buketi, renkli buketler, orkide ve uygun fiyatlı aranjmanlar Yeşilkent için tercih edilir.",
    occasionAngle:
      "Doğum günü, geçmiş olsun, özür ve kutlama çiçeklerinde pratik ve taze seçenekler hazırlanır.",
    audienceAngle:
      "Yeşilkent'te çiçekçi arayan müşteriler için hızlı cevap ve net ürün görseli güven sağlar.",
  }),
  areaPage({
    slug: "guzelyurt-cicekci",
    name: "Güzelyurt",
    district: "Esenyurt",
    cluster: "esenyurt",
    nearby: ["Esenyurt", "Beylikdüzü", "Koza", "Esenkent"],
    landmarks: ["Güzelyurt Mahallesi", "Esenyurt-Beylikdüzü hattı", "E-5 bağlantısı"],
    deliveryAngle:
      "Güzelyurt çevresinde trafik ve cadde erişimi dikkate alınarak sipariş için uygun teslim aralığı paylaşılır.",
    productAngle:
      "Buket çiçek, orkide, saksı çiçekleri ve açılış aranjmanları Güzelyurt siparişlerinde kullanılabilir.",
    occasionAngle:
      "İş yeri açılışı, doğum günü, geçmiş olsun ve tebrik çiçeklerinde canlı ve taze ürünler öne çıkar.",
    audienceAngle:
      "Güzelyurt müşterileri için çevrim içi sipariş kolaylığı ve WhatsApp üzerinden hızlı teyit önemlidir.",
  }),
  areaPage({
    slug: "akbati-cicekci",
    name: "Akbatı",
    district: "Esenyurt",
    cluster: "bahcesehir",
    nearby: ["Bahçeşehir", "Esenkent", "Koza", "Spradon"],
    landmarks: ["Akbatı AVM", "Esenkent çevresi", "Bahçeşehir bağlantısı"],
    deliveryAngle:
      "Akbatı çevresinde AVM, rezidans ve yakın site teslimleri için alıcı konumu ve teslim noktası önceden netleştirilir.",
    productAngle:
      "Şık buketler, orkide, kutu çiçek ve zarif gül buketi Akbatı çevresindeki sürprizler için uygundur.",
    occasionAngle:
      "Yıldönümü, buluşma, doğum günü ve özel davetlerde görsel etkisi yüksek çiçekler hazırlanır.",
    audienceAngle:
      "Akbatı çevresinde çiçek göndermek isteyen müşteriler için hızlı hazırlık ve estetik sunum önceliklidir.",
  }),
  areaPage({
    slug: "koza-cicekci",
    name: "Koza",
    district: "Esenyurt",
    cluster: "esenyurt",
    nearby: ["Akbatı", "Esenkent", "Güzelyurt", "Bahçeşehir"],
    landmarks: ["Koza Mahallesi", "Akbatı çevresi", "site konutları"],
    deliveryAngle:
      "Koza teslimatlarında site adı, blok ve güvenlik bilgisi alınarak kurye yönlendirmesi hızlandırılır.",
    productAngle:
      "Buket çiçek, orkide, saksı çiçekleri ve romantik gül buketi Koza çevresinde öne çıkan ürünlerdir.",
    occasionAngle:
      "Sevgiliye çiçek, doğum günü, yeni ev ve geçmiş olsun gönderilerinde zarif tasarımlar tercih edilir.",
    audienceAngle:
      "Koza'da yaşayan müşteriler için hızlı WhatsApp dönüşü ve ürün görseliyle onay alma süreci kullanışlıdır.",
  }),
  areaPage({
    slug: "spradon-cicekci",
    name: "Spradon",
    district: "Esenyurt",
    cluster: "esenyurt",
    nearby: ["Akbatı", "Koza", "Esenkent", "Bahçeşehir"],
    landmarks: ["Spradon konutları", "Akbatı bağlantısı", "Esenkent çevresi"],
    deliveryAngle:
      "Spradon çevresinde site teslimleri için blok, daire ve güvenlik notu doğru alındığında teslimat daha sorunsuz ilerler.",
    productAngle:
      "Kutu çiçek, buket çiçek, orkide ve saksı çiçekleri Spradon siparişleri için uygun seçeneklerdir.",
    occasionAngle:
      "Yıldönümü, doğum günü, geçmiş olsun ve özel gün sürprizlerinde temiz paketleme ve zamanlama önemlidir.",
    audienceAngle:
      "Spradon müşterileri için modern sunum, hızlı teslimat ve net iletişim çiçek siparişini kolaylaştırır.",
  }),
  areaPage({
    slug: "evviva-cicekci",
    name: "Evviva",
    district: "Esenyurt",
    cluster: "esenyurt",
    nearby: ["Esenkent", "Akbatı", "Koza", "Bahçeşehir"],
    landmarks: ["Evviva yaşam alanları", "Esenkent bağlantısı", "site çevresi"],
    deliveryAngle:
      "Evviva çevresindeki teslimatlarda site güvenliği ve teslim notu önceden paylaşıldığında kurye süreci hızlanır.",
    productAngle:
      "Renkli buketler, orkide, gül buketi ve saksı bitkileri Evviva için günlük siparişlerde tercih edilir.",
    occasionAngle:
      "Doğum günü, yıldönümü, yeni iş ve geçmiş olsun gönderileri için taze ve dengeli tasarımlar hazırlanır.",
    audienceAngle:
      "Evviva müşterileri için hızlı WhatsApp siparişi ve teslimat sonrası bilgilendirme güven sağlar.",
  }),
  areaPage({
    slug: "tema-istanbul-cicekci",
    name: "Tema İstanbul",
    district: "Küçükçekmece",
    cluster: "kucukcekmece",
    nearby: ["Atakent", "Halkalı", "Başakşehir", "Küçükçekmece"],
    landmarks: ["Tema İstanbul", "Atakent çevresi", "Halkalı bağlantısı"],
    deliveryAngle:
      "Tema İstanbul teslimatlarında büyük site yapısı nedeniyle blok, güvenlik ve alıcı telefonu siparişin başında alınır.",
    productAngle:
      "Premium buketler, orkide, saksı çiçekleri ve özel gün kutu çiçekleri Tema İstanbul için uygundur.",
    occasionAngle:
      "Yeni ev, yıldönümü, doğum günü ve aile ziyareti gönderilerinde şık ama dayanıklı ürünler seçilir.",
    audienceAngle:
      "Tema İstanbul müşterileri için estetik sunum, doğru teslim noktası ve hızlı iletişim siparişi rahatlatır.",
  }),
  areaPage({
    slug: "olimpiyat-cicekci",
    name: "Olimpiyat",
    district: "Başakşehir",
    cluster: "basaksehir",
    nearby: ["Başakşehir", "Atakent", "Halkalı", "Kayaşehir"],
    landmarks: ["Olimpiyat çevresi", "Başakşehir bağlantısı", "Atakent hattı"],
    deliveryAngle:
      "Olimpiyat çevresinde teslimat için ulaşım aksı ve alıcı adresi netleştiğinde aynı gün gönderim daha rahat planlanır.",
    productAngle:
      "Buket çiçek, açılış çiçeği, orkide ve saksı çiçekleri Olimpiyat çevresinde kullanılabilir.",
    occasionAngle:
      "Spor etkinliği, iş yeri tebriki, doğum günü ve açılış gönderilerinde etkili tasarımlar tercih edilir.",
    audienceAngle:
      "Olimpiyat çevresinde çiçekçi arayan müşteriler için telefonla hızlı teyit ve WhatsApp siparişi önemlidir.",
  }),
  areaPage({
    slug: "zekeriyakoy-cicekci",
    name: "Zekeriyaköy",
    district: "Sarıyer",
    cluster: "avrupa-yakasi",
    nearby: ["Sarıyer", "Bahçeköy", "Kemerburgaz", "Avrupa Yakası"],
    landmarks: ["Zekeriyaköy villaları", "Sarıyer kuzey hattı", "bahçe ve villa çevresi"],
    deliveryAngle:
      "Zekeriyaköy yönünde teslimatlarda rota ve ürün dayanıklılığı birlikte planlanır, mümkün olan saat aralığı net paylaşılır.",
    productAngle:
      "Premium orkide, büyük buketler, saksı çiçekleri ve özel tasarım aranjmanlar Zekeriyaköy için uygundur.",
    occasionAngle:
      "Davet, ev hediyesi, doğum günü, nişan ve özel kutlamalarda gösterişli ama zarif tasarımlar hazırlanır.",
    audienceAngle:
      "Zekeriyaköy müşterileri için kaliteli malzeme, düzenli iletişim ve doğru teslimat planı önceliklidir.",
  }),
  areaPage({
    slug: "atakent-cicekci",
    name: "Atakent",
    district: "Küçükçekmece",
    cluster: "kucukcekmece",
    nearby: ["Halkalı", "Tema İstanbul", "Küçükçekmece", "Olimpiyat"],
    landmarks: ["Atakent konutları", "Halkalı çevresi", "Tema İstanbul bağlantısı"],
    deliveryAngle:
      "Atakent teslimatlarında site ve blok bilgisi net alındığında aynı gün çiçek gönderimi daha pratik ilerler.",
    productAngle:
      "Buket çiçek, orkide, saksı bitkileri ve doğum günü aranjmanları Atakent için uygun seçeneklerdir.",
    occasionAngle:
      "Doğum günü, yeni ev, geçmiş olsun, yıldönümü ve aile ziyareti siparişlerinde taze ürünler hazırlanır.",
    audienceAngle:
      "Atakent müşterileri için WhatsApp üzerinden hızlı görsel paylaşımı ve teslimat teyidi siparişi kolaylaştırır.",
  }),
  areaPage({
    slug: "halkali-cicekci",
    name: "Halkalı",
    district: "Küçükçekmece",
    cluster: "kucukcekmece",
    nearby: ["Atakent", "Tema İstanbul", "Küçükçekmece", "Kanarya"],
    landmarks: ["Halkalı merkez", "Marmaray çevresi", "Atakent bağlantısı"],
    deliveryAngle:
      "Halkalı çevresindeki yoğunluk nedeniyle sipariş saati, adres ve alıcı telefonu birlikte değerlendirilir.",
    productAngle:
      "Buket çiçek, orkide, gül buketi, saksı çiçekleri ve özel gün aranjmanları Halkalı için hazırlanabilir.",
    occasionAngle:
      "Doğum günü, işe başlangıç, geçmiş olsun, nişan ve düğün hazırlığında temiz sunum öne çıkar.",
    audienceAngle:
      "Halkalı'da çiçekçi arayan müşteriler için hızlı cevap, net fiyat ve güvenilir teslimat önemlidir.",
  }),
  areaPage({
    slug: "kanarya-cicekci",
    name: "Kanarya",
    district: "Küçükçekmece",
    cluster: "kucukcekmece",
    nearby: ["Halkalı", "Küçükçekmece", "Avcılar", "Yeşilkent"],
    landmarks: ["Kanarya Mahallesi", "Küçükçekmece çevresi", "Halkalı bağlantısı"],
    deliveryAngle:
      "Kanarya teslimatlarında açık adres ve alıcı telefonunun doğru paylaşılması aynı gün gönderim için önemlidir.",
    productAngle:
      "Uygun fiyatlı buketler, gül buketi, orkide ve saksı bitkileri Kanarya siparişleri için tercih edilebilir.",
    occasionAngle:
      "Geçmiş olsun, doğum günü, özür, tebrik ve aile ziyareti çiçeklerinde sıcak ve taze tasarımlar hazırlanır.",
    audienceAngle:
      "Kanarya müşterileri için kolay WhatsApp siparişi ve telefonla hızlı ulaşım güven sağlar.",
  }),
];

const variantPages = [
  variantPage({ slug: "bahcesehir-cicek-siparisi", priority: 0.92, intent: "sipariş", ...priorityAreaDetails.bahcesehir }),
  variantPage({ slug: "bahcesehir-cicek-gonder", priority: 0.9, intent: "gönder", ...priorityAreaDetails.bahcesehir }),
  variantPage({ slug: "basaksehir-cicek-siparisi", priority: 0.92, intent: "sipariş", ...priorityAreaDetails.basaksehir }),
  variantPage({ slug: "basaksehir-cicek-gonder", priority: 0.9, intent: "gönder", ...priorityAreaDetails.basaksehir }),
  variantPage({ slug: "esenkent-cicek-siparisi", priority: 0.84, intent: "sipariş", ...priorityAreaDetails.esenkent }),
  variantPage({ slug: "esenyurt-cicek-siparisi", priority: 0.86, intent: "sipariş", ...priorityAreaDetails.esenyurt }),
  variantPage({ slug: "avcilar-cicek-siparisi", priority: 0.82, intent: "sipariş", ...priorityAreaDetails.avcilar }),
  variantPage({ slug: "tahtakale-cicek-siparisi", priority: 0.82, intent: "sipariş", ...priorityAreaDetails.tahtakale }),
  variantPage({ slug: "ispartakule-cicek-siparisi", priority: 0.86, intent: "sipariş", ...priorityAreaDetails.ispartakule }),
  variantPage({ slug: "istanbul-cicek-siparisi", priority: 0.88, intent: "sipariş", ...priorityAreaDetails.istanbul }),
];

const servicePages = [
  servicePage({
    slug: "istanbul-cicekci",
    name: "İstanbul çiçekçi",
    keyword: "İstanbul çiçekçi",
    title: "İstanbul Çiçekçi ve Avrupa Yakası Çiçek Teslimatı",
    description:
      "İstanbul çiçekçi arayanlar için Sümbül Garden; Avrupa Yakası, Başakşehir ve Bahçeşehir çevresinde aynı gün çiçek gönderimi sağlar.",
    cluster: "istanbul",
    priority: 0.9,
    nearby: priorityAreaDetails.istanbul.nearby,
    landmarks: priorityAreaDetails.istanbul.landmarks,
    deliveryAngle: priorityAreaDetails.istanbul.deliveryAngle,
    productAngle: priorityAreaDetails.istanbul.productAngle,
    occasionAngle: priorityAreaDetails.istanbul.occasionAngle,
    audienceAngle: priorityAreaDetails.istanbul.audienceAngle,
  }),
  servicePage({
    slug: "istanbul-cicek-gonderimi",
    name: "İstanbul çiçek gönderimi",
    keyword: "İstanbul çiçek gönderimi",
    title: "İstanbul Çiçek Gönderimi ve Aynı Gün Teslimat",
    description:
      "İstanbul çiçek gönderimi için buket, orkide, gül buketi, saksı çiçekleri ve özel gün tasarımları WhatsApp ile sipariş edilir.",
    cluster: "istanbul",
    priority: 0.88,
    nearby: ["Başakşehir", "Bahçeşehir", "Esenyurt", "Avcılar"],
    landmarks: ["İstanbul Avrupa Yakası", "özel gün teslimat hattı", "Sümbül Garden mağaza çevresi"],
    deliveryAngle:
      "İstanbul çiçek gönderimi için teslimat saati, alıcı adresi ve ürün dayanıklılığı birlikte değerlendirilir.",
    productAngle:
      "Buket çiçek, orkide, gül buketi, açılış çiçeği ve saksı çiçekleri farklı teslimat senaryolarına göre önerilir.",
    occasionAngle:
      "Doğum günü, yıldönümü, açılış, düğün, nişan ve kurumsal tebriklerde mesaj kartı ile teslimat yapılabilir.",
    audienceAngle:
      "İstanbul'da hızlı çiçek göndermek isteyen müşteriler için WhatsApp siparişi ve telefon teyidi en pratik yoldur.",
  }),
  servicePage({
    slug: "ayni-gun-cicek-gonderimi",
    name: "Aynı gün çiçek gönderimi",
    keyword: "aynı gün çiçek gönderimi",
    title: "Aynı Gün Çiçek Gönderimi İstanbul Avrupa Yakası",
    description:
      "Aynı gün çiçek gönderimi için Başakşehir, Bahçeşehir, Esenyurt, Avcılar ve yakın bölgelere hızlı çiçek teslimatı.",
    cluster: "hizmet",
    priority: 0.86,
    nearby: ["Bahçeşehir", "Başakşehir", "Esenyurt", "Avcılar"],
    landmarks: ["Avrupa Yakası teslimat hattı", "Başakşehir çevresi", "Bahçeşehir bağlantısı"],
    deliveryAngle:
      "Aynı gün teslimatta sipariş saati, ürün hazırlığı ve kurye rotası birlikte planlanır; yoğun günlerde erken sipariş avantaj sağlar.",
    productAngle:
      "Hızlı teslimata uygun buket çiçekler, orkide, gül buketi ve hazır saksı çiçekleri öncelikli önerilir.",
    occasionAngle:
      "Son dakika doğum günü, geçmiş olsun, özür, tebrik ve özel gün gönderilerinde hızlı ama özenli bir hazırlık yapılır.",
    audienceAngle:
      "Acil çiçek ihtiyacı olan müşteriler için WhatsApp üzerinden ürün görseli, fiyat ve teslimat bilgisi hızla paylaşılır.",
  }),
  servicePage({
    slug: "acil-cicek-siparisi",
    name: "Acil çiçek siparişi",
    keyword: "acil çiçek siparişi",
    title: "Acil Çiçek Siparişi ve Hızlı Teslimat",
    description:
      "Acil çiçek siparişi için Sümbül Garden; uygun ürünlerde aynı gün teslimat, WhatsApp siparişi ve telefonla hızlı destek sunar.",
    cluster: "hizmet",
    nearby: ["Başakşehir", "Bahçeşehir", "Esenkent", "Ispartakule"],
    landmarks: ["Sümbül Garden mağaza çevresi", "yakın teslimat bölgeleri", "Avrupa Yakası rotası"],
    deliveryAngle:
      "Acil siparişlerde en uygun ürün hızlıca seçilir, teslimat adresi netleşir ve mümkün olan en gerçekçi saat aralığı paylaşılır.",
    productAngle:
      "Hazırlık süresi kısa olan buketler, orkide, gül buketi ve saksı çiçekleri acil siparişlerde avantaj sağlar.",
    occasionAngle:
      "Unutulan doğum günü, ani ziyaret, geçmiş olsun, özür ve tebrik gönderilerinde pratik ürün önerileri sunulur.",
    audienceAngle:
      "Zamana karşı çiçek siparişi veren müşteriler için gereksiz form adımları yerine doğrudan WhatsApp ve telefon iletişimi kullanılır.",
  }),
  servicePage({
    slug: "online-cicek-siparisi",
    name: "Online çiçek siparişi",
    keyword: "online çiçek siparişi",
    title: "Online Çiçek Siparişi İstanbul",
    description:
      "Online çiçek siparişi için ürünleri inceleyin, WhatsApp ile fiyat ve teslimat bilgisi alın, İstanbul Avrupa Yakası'na çiçek gönderin.",
    cluster: "hizmet",
    nearby: ["İstanbul", "Başakşehir", "Bahçeşehir", "Esenyurt"],
    landmarks: ["online vitrin", "WhatsApp sipariş hattı", "ürün katalog sayfaları"],
    deliveryAngle:
      "Online siparişte ürün, adres ve teslim saati yazılı olarak ilerlediği için hata riski azalır ve sipariş takibi kolaylaşır.",
    productAngle:
      "Buket çiçek, saksı çiçekleri, orkide, gül buketi ve özel gün ürünleri katalog üzerinden seçilebilir.",
    occasionAngle:
      "Düğün, nişan, açılış, doğum günü ve yıldönümü gibi farklı amaçlar için uygun kategoriye yönlendirme yapılır.",
    audienceAngle:
      "Telefonla uzun açıklama yapmak istemeyen müşteriler için online vitrin ve WhatsApp mesajı hızlı bir sipariş deneyimi sağlar.",
  }),
  servicePage({
    slug: "en-yakin-cicekci",
    name: "En yakın çiçekçi",
    keyword: "en yakın çiçekçi",
    title: "En Yakın Çiçekçi Başakşehir ve Bahçeşehir Çevresi",
    description:
      "En yakın çiçekçi arayanlar için Sümbül Garden; Başakşehir, Kayabaşı, Bahçeşehir ve çevresinde hızlı çiçek siparişi alır.",
    cluster: "hizmet",
    priority: 0.84,
    nearby: ["Kayabaşı", "Başakşehir", "Bahçeşehir", "Kayaşehir"],
    landmarks: ["Kayabaşı mağaza çevresi", "Park Mavera", "Başakşehir teslimat hattı"],
    deliveryAngle:
      "Yakın bölge teslimatlarında mağazaya olan mesafe ve ürün hazırlık süresi dikkate alınarak hızlı bir rota oluşturulur.",
    productAngle:
      "Hazır buketler, orkide, saksı çiçekleri ve günlük aranjmanlar yakın teslimatlar için pratik seçeneklerdir.",
    occasionAngle:
      "Yakın çiçekçi ihtiyacı çoğu zaman son dakika doğum günü, geçmiş olsun veya ziyaret hediyesi için doğar.",
    audienceAngle:
      "Başakşehir çevresinde yakın çiçekçi arayan müşteriler için açık telefon hattı ve WhatsApp konum paylaşımı önemlidir.",
  }),
  servicePage({
    slug: "kurumsal-cicek-siparisi",
    name: "Kurumsal çiçek siparişi",
    keyword: "kurumsal çiçek siparişi",
    title: "Kurumsal Çiçek Siparişi ve İş Yeri Teslimatı",
    description:
      "Kurumsal çiçek siparişi için açılış, tebrik, orkide, saksı bitkisi ve özel aranjman seçenekleri İstanbul Avrupa Yakası'na teslim edilir.",
    cluster: "kurumsal",
    priority: 0.82,
    nearby: ["Başakşehir", "Hadımköy", "Esenyurt", "Beylikdüzü"],
    landmarks: ["ofis bölgeleri", "sanayi ve depo adresleri", "mağaza açılışları"],
    deliveryAngle:
      "Kurumsal teslimatlarda firma adı, departman, alıcı yetkili ve teslim saati detayları sipariş notuna eklenir.",
    productAngle:
      "Açılış çiçekleri, çelenk, orkide, saksı bitkileri ve prestijli buketler kurumsal gönderilerde öne çıkar.",
    occasionAngle:
      "Açılış, terfi, toplantı, bayi ziyareti, yeni iş ve teşekkür gönderileri için kurumsal dile uygun kart notu hazırlanır.",
    audienceAngle:
      "Kurumsal müşteriler için düzenli iletişim, net teslim bilgisi ve talebe göre fatura süreci önemlidir.",
  }),
  servicePage({
    slug: "dugun-cicekleri",
    name: "Düğün çiçekleri",
    keyword: "düğün çiçekleri",
    title: "Düğün Çiçekleri ve Gelin Buketi Tasarımları",
    description:
      "Düğün çiçekleri, gelin buketi, masa çiçeği ve özel tasarım aranjmanlar için Sümbül Garden ile iletişime geçin.",
    cluster: "organizasyon",
    nearby: ["Bahçeşehir", "Başakşehir", "Esenyurt", "Avcılar"],
    landmarks: ["düğün salonları", "organizasyon alanları", "Avrupa Yakası mekanları"],
    deliveryAngle:
      "Düğün çiçeklerinde tarih, mekan, teslim saati ve ürün dayanıklılığı önceden planlanır; yoğun günlerde erken rezervasyon önerilir.",
    productAngle:
      "Gelin buketi, yaka çiçeği, masa aranjmanı, beyaz orkide ve pastel buketler düğün hazırlığında değerlendirilebilir.",
    occasionAngle:
      "Nikah, düğün, after party ve aile arası kutlamalarda konsept rengine uygun çiçek seçimi yapılır.",
    audienceAngle:
      "Düğün hazırlığı yapan çiftler için görsel örnek, renk uyumu ve teslimat güvenliği en kritik konulardır.",
  }),
  servicePage({
    slug: "nisan-cicekleri",
    name: "Nişan çiçekleri",
    keyword: "nişan çiçekleri",
    title: "Nişan Çiçekleri ve Kız İsteme Buketleri",
    description:
      "Nişan çiçekleri, kız isteme buketi, söz çiçeği ve özel gün aranjmanları Başakşehir ve Bahçeşehir çevresine hazırlanır.",
    cluster: "organizasyon",
    nearby: ["Başakşehir", "Bahçeşehir", "Esenkent", "Ispartakule"],
    landmarks: ["ev organizasyonları", "nişan mekanları", "özel gün hazırlıkları"],
    deliveryAngle:
      "Nişan çiçeklerinde teslim saatinin tören akışına uyması gerekir; bu yüzden adres ve saat bilgisi önceden netleştirilir.",
    productAngle:
      "Kız isteme buketi, söz çiçeği, orkide, gül buketi ve masa aranjmanları nişan hazırlığında öne çıkar.",
    occasionAngle:
      "Söz, nişan, aile tanışması ve isteme törenlerinde çiçek rengi, ambalaj ve kart notu birlikte düşünülür.",
    audienceAngle:
      "Özel güne hazırlanan aileler için hızlı iletişim, görsel onay ve zamanında teslimat rahatlık sağlar.",
  }),
  servicePage({
    slug: "acilis-cicekleri",
    name: "Açılış çiçekleri",
    keyword: "açılış çiçekleri",
    title: "Açılış Çiçekleri ve Kurumsal Tebrik Gönderimi",
    description:
      "Açılış çiçekleri, çelenk, orkide ve kurumsal tebrik aranjmanları İstanbul Avrupa Yakası'nda iş yerlerine teslim edilir.",
    cluster: "kurumsal",
    priority: 0.82,
    nearby: ["Başakşehir", "Esenyurt", "Hadımköy", "Beylikdüzü"],
    landmarks: ["mağaza açılışları", "ofis ve plaza adresleri", "kurumsal teslimat noktaları"],
    deliveryAngle:
      "Açılış gönderilerinde tören saati, firma adı ve alıcı yetkili önceden alınır; ürünün görünür noktaya ulaşması hedeflenir.",
    productAngle:
      "Ayaklı aranjman, çelenk, orkide, saksı bitkisi ve gösterişli buketler açılış için tercih edilebilir.",
    occasionAngle:
      "Mağaza, ofis, klinik, restoran ve bayi açılışlarında marka diline uygun kart notu hazırlanır.",
    audienceAngle:
      "Kurumsal açılış siparişi veren müşteriler için zamanında teslimat ve fotoğrafla bilgilendirme önemlidir.",
  }),
  servicePage({
    slug: "celenk-siparisi",
    name: "Çelenk siparişi",
    keyword: "çelenk siparişi",
    title: "Çelenk Siparişi ve Açılış Çiçekleri",
    description:
      "Çelenk siparişi için açılış, tören, kurumsal tebrik ve özel gün çelenkleri İstanbul Avrupa Yakası'na ulaştırılır.",
    cluster: "kurumsal",
    nearby: ["Başakşehir", "Bahçeşehir", "Esenyurt", "Avcılar"],
    landmarks: ["açılış alanları", "tören noktaları", "iş yeri adresleri"],
    deliveryAngle:
      "Çelenk teslimatında mekan adı, tören saati ve alıcı firma bilgisi netleştiğinde hazırlık doğru ilerler.",
    productAngle:
      "Açılış çelengi, kurumsal tebrik aranjmanı, büyük ayaklı çiçek ve orkide alternatifleri sunulur.",
    occasionAngle:
      "Açılış, tören, bayi ziyareti ve özel kurumsal kutlamalarda görünür ve düzenli bir çelenk tasarımı tercih edilir.",
    audienceAngle:
      "Çelenk siparişinde firma adına yakışan net kart notu ve zamanında teslimat müşteri için belirleyicidir.",
  }),
  servicePage({
    slug: "orkide-siparisi",
    name: "Orkide siparişi",
    keyword: "orkide siparişi",
    title: "Orkide Siparişi ve Zarif Saksı Çiçekleri",
    description:
      "Orkide siparişi için beyaz orkide, çift dallı orkide, saksı çiçekleri ve özel gün hediyeleri hızlı teslim edilir.",
    cluster: "urun",
    priority: 0.82,
    nearby: ["Bahçeşehir", "Başakşehir", "Esenyurt", "Ispartakule"],
    landmarks: ["ev ve ofis teslimatları", "özel gün adresleri", "site ve rezidans bölgeleri"],
    deliveryAngle:
      "Orkide teslimatında saksı ve çiçek zarar görmeyecek şekilde paketleme yapılır, teslim adresi dikkatle teyit edilir.",
    productAngle:
      "Beyaz orkide, çift dallı orkide, renkli orkide ve dekoratif saksı çiçekleri zarif hediye seçenekleridir.",
    occasionAngle:
      "Yeni iş, geçmiş olsun, doğum günü, ev hediyesi ve kurumsal tebriklerde orkide uzun ömürlü bir seçimdir.",
    audienceAngle:
      "Orkide siparişi veren müşteriler genellikle şık, temiz ve kalıcı bir hediye arar; bu yüzden ürün kalitesi önemlidir.",
  }),
  servicePage({
    slug: "gul-buketi",
    name: "Gül buketi",
    keyword: "gül buketi",
    title: "Gül Buketi Siparişi ve Romantik Çiçek Gönderimi",
    description:
      "Gül buketi siparişi için kırmızı gül, romantik buketler, yıldönümü ve sevgiliye çiçek gönderimi seçenekleri.",
    cluster: "urun",
    priority: 0.82,
    nearby: ["Bahçeşehir", "Başakşehir", "Esenkent", "Ispartakule"],
    landmarks: ["romantik teslimat noktaları", "Bahçeşehir Gölet çevresi", "site ve ev adresleri"],
    deliveryAngle:
      "Gül buketi teslimatında çiçeklerin taze kalması, ambalajın temiz görünmesi ve teslim saatinin sürprize uygun olması hedeflenir.",
    productAngle:
      "Kırmızı gül buketi, pastel güller, karışık romantik buket ve kutu gül seçenekleri hazırlanabilir.",
    occasionAngle:
      "Sevgililer günü, yıldönümü, doğum günü, özür ve özel buluşma anlarında gül buketi güçlü bir mesaj taşır.",
    audienceAngle:
      "Gül buketi siparişi veren müşteriler için kart notu, renk seçimi ve teslimat gizliliği özellikle önemlidir.",
  }),
  servicePage({
    slug: "dogum-gunu-cicekleri",
    name: "Doğum günü çiçekleri",
    keyword: "doğum günü çiçekleri",
    title: "Doğum Günü Çiçekleri ve Aynı Gün Teslimat",
    description:
      "Doğum günü çiçekleri için renkli buketler, orkide, gül buketi ve özel notlu çiçek gönderimi Sümbül Garden'da.",
    cluster: "urun",
    priority: 0.82,
    nearby: ["Başakşehir", "Bahçeşehir", "Esenyurt", "Avcılar"],
    landmarks: ["ev teslimatları", "ofis sürprizleri", "site ve rezidans adresleri"],
    deliveryAngle:
      "Doğum günü teslimatında tarih, saat ve sürpriz notu önemli olduğu için sipariş bilgileri yazılı olarak teyit edilir.",
    productAngle:
      "Renkli buketler, orkide, gül buketi, saksı çiçekleri ve kutu çiçekler doğum günü için tercih edilir.",
    occasionAngle:
      "Arkadaş, eş, aile üyesi, iş arkadaşı veya kurumsal kişi için farklı renk ve sunum önerileri yapılabilir.",
    audienceAngle:
      "Doğum günü çiçeği göndermek isteyen müşteriler için hızlı sipariş, taze ürün ve doğru zamanda teslimat temel beklentidir.",
  }),
];

export const seoLandingPages = [...areaPages, ...variantPages, ...servicePages] satisfies SeoLandingPage[];

function toAsciiLookupSlug(value: string) {
  return value
    .replace(/ÅŸ/g, "ş")
    .replace(/Åž/g, "Ş")
    .replace(/Ä±/g, "ı")
    .replace(/Ä°/g, "İ")
    .replace(/ÄŸ/g, "ğ")
    .replace(/Äž/g, "Ğ")
    .replace(/Ã¼/g, "ü")
    .replace(/Ãœ/g, "Ü")
    .replace(/Ã¶/g, "ö")
    .replace(/Ã–/g, "Ö")
    .replace(/Ã§/g, "ç")
    .replace(/Ã‡/g, "Ç")
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9-]/g, "");
}

export function getSeoLandingPageBySlug(slug: string) {
  let decodedSlug = slug;

  try {
    decodedSlug = decodeURIComponent(slug);
  } catch {
    decodedSlug = slug;
  }

  const lookupSlug = toAsciiLookupSlug(decodedSlug);

  return (
    seoLandingPages.find(
      (page) =>
        page.slug === slug ||
        page.slug === decodedSlug ||
        toAsciiLookupSlug(page.slug) === lookupSlug,
    ) ?? null
  );
}

export function getRelatedSeoLandingPages(page: SeoLandingPage, limit = 8) {
  const sameCluster = seoLandingPages.filter(
    (candidate) => candidate.slug !== page.slug && candidate.cluster === page.cluster,
  );
  const priorityPages = seoLandingPages.filter(
    (candidate) => candidate.slug !== page.slug && candidate.cluster !== page.cluster,
  );

  return [...sameCluster, ...priorityPages]
    .sort((first, second) => second.priority - first.priority)
    .slice(0, limit);
}

export function getPrioritySeoLandingPages(limit = 12) {
  return [...seoLandingPages]
    .sort((first, second) => second.priority - first.priority)
    .slice(0, limit);
}

export function buildSeoLandingSections(page: SeoLandingPage) {
  const nearbyText = page.nearby.join(", ");
  const landmarkText = page.landmarks.join(", ");
  const serviceList =
    "aynı gün çiçek gönderimi, buket çiçek, saksı çiçekleri, orkide, gül buketi, düğün çiçekleri, nişan çiçekleri, açılış çiçekleri, doğum günü çiçekleri ve özel gün aranjmanları";

  return [
    {
      title: `${page.keyword} arayanlar için hızlı çözüm`,
      paragraphs: [
        `${page.keyword} araması yapan biri çoğu zaman yalnızca güzel bir çiçek görmek istemez; doğru ürünü hızlı seçmek, fiyatı net öğrenmek, teslimatın mümkün olup olmadığını anlamak ve siparişinin gerçekten zamanında ulaşacağını bilmek ister. Sümbül Garden bu ihtiyacı özellikle İstanbul Avrupa Yakası'nda, Başakşehir ve Bahçeşehir çevresinde pratik bir sipariş akışıyla karşılar. Ürün görselleri, açıklamalar, fiyat bilgisi ve WhatsApp iletişimi aynı akış içinde değerlendirilir. Böylece ${page.name} için çiçek siparişi verirken uzun formlar, belirsiz teslimat saatleri veya ulaşılamayan telefonlar yerine doğrudan cevap alınabilen bir süreç oluşur.`,
        `${page.deliveryAngle} Bu yaklaşım, hem aynı gün çiçek gönderimi isteyen müşteriler hem de birkaç gün önceden planlama yapan kişiler için önemlidir. ${page.name} çevresinde gönderim yapılacak adres ev, ofis, okul, hastane, mağaza, düğün salonu veya site içi bir blok olabilir. Sipariş sırasında alıcı adı, telefon, açık adres, teslim saati ve varsa güvenlik notu birlikte alınır. Çiçek hazırlandıktan sonra ürünün tazeliği, paketleme biçimi ve kart notu kontrol edilir. Bu sayede ${page.keyword} ihtiyacında hızlı ama özensiz olmayan bir hizmet hedeflenir.`,
      ],
    },
    {
      title: `${page.name} teslimat avantajı`,
      paragraphs: [
        `${page.name}; ${nearbyText} gibi yakın bölgelerle birlikte düşünüldüğünde Avrupa Yakası'nda çiçek gönderimi için önemli bir teslimat hattı oluşturur. ${landmarkText} gibi noktalar siparişlerde sık tarif edildiği için adresin açık yazılması teslimatı hızlandırır. Özellikle site ve rezidans teslimlerinde blok, kapı, daire, güvenlik girişi ve alıcının müsaitlik durumu önemlidir. Sümbül Garden bu bilgileri siparişin başında alarak çiçeğin beklenmeyen bir noktada kalmasını veya teslimatın uzamasını önlemeye çalışır.`,
        `${page.audienceAngle} Bu nedenle sayfa yalnızca arama motoru için hazırlanmış bir metin değil, gerçekten sipariş verecek kişinin ihtiyaç duyduğu bilgileri de taşır. ${page.name} bölgesine çiçek göndermek isteyen biri ürün kategorilerini inceleyebilir, ürün sayfasına geçebilir, WhatsApp butonuyla mesaj atabilir veya telefonla doğrudan arayabilir. Siparişin amacı, bütçe aralığı, renk tercihi ve teslim saati paylaşıldığında daha doğru ürün önerisi yapılır. Böylece hızlı gönderim ile doğru çiçek seçimi aynı anda ilerler.`,
      ],
    },
    {
      title: "Ürün seçenekleri ve özel günler",
      paragraphs: [
        `${page.productAngle} Çiçek seçimi yapılırken yalnızca görsel güzellik değil, alıcının yaşı, ortamı, gönderim sebebi ve teslimat süresi de dikkate alınır. Buket çiçek kısa sürede etkileyici bir hediye oluştururken, orkide ve saksı çiçekleri daha uzun süre kalıcı bir iz bırakır. Gül buketi romantik mesajlar için güçlüdür; açılış çiçekleri ve çelenk siparişi ise iş yeri veya kurumsal tebriklerde daha görünür bir sunum sağlar. ${page.keyword} arayan müşteriler bu seçenekler arasında kararsız kaldığında WhatsApp üzerinden kullanım amacını yazarak hızlı öneri alabilir.`,
        `${page.occasionAngle} ${serviceList} doğal olarak aynı çatı altında değerlendirilir. Sevgililer Günü, Anneler Günü, Kadınlar Günü, Öğretmenler Günü, doğum günü, yıldönümü, geçmiş olsun, yeni iş, açılış, düğün ve nişan gibi günlerde teslimat yoğunluğu artar. Bu dönemlerde erken sipariş vermek ürün seçeneğini artırır ve teslimat saatini daha rahat planlatır. Yine de uygun ürünlerde aynı gün teslimat için hızlı hazırlık yapılabilir. Önemli olan, siparişin amacını net anlatmak ve alıcı bilgilerini eksiksiz paylaşmaktır.`,
      ],
    },
    {
      title: "WhatsApp ile sipariş akışı",
      paragraphs: [
        `${page.name} için online çiçek siparişi vermek isteyen müşteriler ürünleri inceledikten sonra WhatsApp hattına geçerek seçtikleri ürünün adını, teslimat bölgesini ve istedikleri notu paylaşabilir. Bu yöntem, yanlış ürün seçimi veya eksik adres bilgisi gibi sorunları azaltır. Sipariş sırasında ürünün stok durumu, teslimata uygunluğu, fiyatı ve tahmini teslimat aralığı yazılı olarak netleşir. Böylece müşteri siparişinin hangi aşamada olduğunu daha rahat takip eder.`,
        `Telefonla arama butonu ise acil çiçek siparişi, kurumsal gönderi veya özel organizasyon gibi hızlı konuşma gerektiren durumlar için kullanışlıdır. Düğün çiçekleri, nişan çiçekleri, açılış çiçekleri veya çelenk siparişi gibi detaylı taleplerde tek mesaj yerine kısa bir görüşme daha doğru yönlendirme sağlayabilir. Sümbül Garden, ${page.keyword} ihtiyacını yalnızca bir ürün satışı gibi değil, alıcıya doğru zamanda doğru hissi ulaştıran bir teslimat işi olarak ele alır.`,
      ],
    },
    {
      title: "Teslimat kapsamı ve sipariş notları",
      paragraphs: [
        `${page.name} sayfasında anlatılan hizmet yalnızca tek bir ürün grubuna bağlı değildir. Müşteri ister romantik bir gül buketi, ister ofis için orkide, ister ev hediyesi olarak saksı çiçekleri, ister açılış için çelenk siparişi istesin; siparişin amacı önce anlaşılır. Alıcıya gönderilecek çiçeğin çok büyük, çok küçük, çok resmi veya çok gündelik kalmaması için ortam bilgisi önemlidir. Ev adresine gidecek bir buket ile mağaza açılışına gidecek bir aranjman aynı şekilde planlanmaz. Bu yüzden ${page.keyword} aramasından gelen müşteriye yalnızca ürün adı sorulmaz; teslimat bölgesi, teslim zamanı, özel gün sebebi, kart notu ve varsa renk tercihi de birlikte değerlendirilir.`,
        `İstanbul Avrupa Yakası'nda çiçek teslimatı yaparken yakınlık avantajı kadar doğru zamanlama da değerlidir. ${page.name} çevresine yapılacak gönderilerde trafik, site güvenliği, iş yeri kapanış saati, okul veya hastane teslim kuralları gibi ayrıntılar siparişin sonucunu etkileyebilir. Sümbül Garden bu nedenle müşteriyi gereksiz detayla yormadan, teslimat için kritik bilgileri kısa ve net biçimde ister. Sipariş alındıktan sonra ürün hazırlığı, paketleme, kart notu ve kurye yönlendirmesi aynı hedefe hizmet eder: çiçeğin taze, düzgün ve alıcıya anlamlı bir anda ulaşması. Bu düzenli akış, aynı gün çiçek gönderimi taleplerinde özellikle fark yaratır.`,
      ],
    },
    {
      title: "Yerel SEO ve güven sinyalleri",
      paragraphs: [
        `Bu sayfa ${page.keyword}, ${page.name} çiçek siparişi, ${page.name} aynı gün çiçek gönderimi ve İstanbul çiçek gönderimi aramalarına cevap verecek şekilde hazırlanmıştır. Ancak içerikte kelimeleri gereksiz tekrar etmek yerine bölgenin teslimat mantığı, ürün seçenekleri ve sipariş kolaylığı doğal biçimde anlatılır. Google'da iyi görünürlük için sayfanın başlığı, açıklaması, tek H1 yapısı, canonical adresi, LocalBusiness ve Florist schema verisi, iç linkleri, mobil uyumlu tasarımı ve sitemap kaydı birlikte çalışır.`,
        `Kullanıcı açısından en önemli güven sinyali ise sayfanın gerçekten siparişe yardımcı olmasıdır. Ana sayfaya dönüş, ürünler ve kategoriler sayfasına geçiş, iletişim sayfası, WhatsApp CTA ve telefon CTA bu yüzden görünür tutulur. Müşteri dilerse önce ürünleri inceler, dilerse doğrudan iletişime geçer. ${page.name} ve çevresine çiçek göndermek isteyen biri için amaç; taze çiçek, anlaşılır fiyat, hızlı dönüş, doğru teslimat ve özel güne yakışan bir sunum elde etmektir. Düzenli içerik, açık iletişim, gerçek teslimat bilgisi ve doğru iç linkleme bir araya geldiğinde sayfa hem kullanıcıya hem arama motoruna daha güçlü bir yerel hizmet sinyali verir.`,
      ],
    },
  ];
}

export function getSeoLandingWordCount(page: SeoLandingPage) {
  return buildSeoLandingSections(page)
    .flatMap((section) => [section.title, ...section.paragraphs])
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}
