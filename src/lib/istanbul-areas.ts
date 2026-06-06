export type IstanbulAreaType = "district" | "neighborhood" | "locality";

export interface IstanbulAreaPage {
  slug: string;
  name: string;
  title: string;
  description: string;
  district: string;
  neighborhood: string | null;
  type: IstanbulAreaType;
}

export const istanbulAreaPages = [
  {
    "slug": "ispartakule-cicekcilik-peyzaj-organizasyon",
    "name": "Ispartakule",
    "title": "Ispartakule Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ispartakule ve Avcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Avcılar",
    "neighborhood": "Tahtakale",
    "type": "locality"
  },
  {
    "slug": "bahcekent-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçekent",
    "title": "Bahçekent Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bahçekent ve Başakşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Başakşehir",
    "neighborhood": "Bahçeşehir 2. Kısım",
    "type": "locality"
  },
  {
    "slug": "bahcesehir-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçeşehir",
    "title": "Bahçeşehir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bahçeşehir ve Başakşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Başakşehir",
    "neighborhood": "Bahçeşehir 1. Kısım",
    "type": "locality"
  },
  {
    "slug": "kayasehir-cicekcilik-peyzaj-organizasyon",
    "name": "Kayaşehir",
    "title": "Kayaşehir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kayaşehir ve Başakşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Başakşehir",
    "neighborhood": "Kayabaşı",
    "type": "locality"
  },
  {
    "slug": "park-mavera-cicekcilik-peyzaj-organizasyon",
    "name": "Park Mavera",
    "title": "Park Mavera Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Park Mavera ve Başakşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Başakşehir",
    "neighborhood": "Kayabaşı",
    "type": "locality"
  },
  {
    "slug": "adalar-cicekcilik-peyzaj-organizasyon",
    "name": "Adalar",
    "title": "Adalar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Adalar ve Adalar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Adalar",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "arnavutkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Arnavutköy",
    "title": "Arnavutköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Arnavutköy ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "atasehir-cicekcilik-peyzaj-organizasyon",
    "name": "Ataşehir",
    "title": "Ataşehir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ataşehir ve Ataşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ataşehir",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "avcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Avcılar",
    "title": "Avcılar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Avcılar ve Avcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Avcılar",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Bağcılar",
    "title": "Bağcılar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bağcılar ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "bahcelievler-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçelievler",
    "title": "Bahçelievler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bahçelievler ve Bahçelievler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bahçelievler",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "bakirkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Bakırköy",
    "title": "Bakırköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bakırköy ve Bakırköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bakırköy",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "basaksehir-cicekcilik-peyzaj-organizasyon",
    "name": "Başakşehir",
    "title": "Başakşehir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Başakşehir ve Başakşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Başakşehir",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "bayrampasa-cicekcilik-peyzaj-organizasyon",
    "name": "Bayrampaşa",
    "title": "Bayrampaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bayrampaşa ve Bayrampaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bayrampaşa",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "besiktas-cicekcilik-peyzaj-organizasyon",
    "name": "Beşiktaş",
    "title": "Beşiktaş Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Beşiktaş ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "beykoz-cicekcilik-peyzaj-organizasyon",
    "name": "Beykoz",
    "title": "Beykoz Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Beykoz ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "beylikduzu-cicekcilik-peyzaj-organizasyon",
    "name": "Beylikdüzü",
    "title": "Beylikdüzü Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Beylikdüzü ve Beylikdüzü çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beylikdüzü",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "beyoglu-cicekcilik-peyzaj-organizasyon",
    "name": "Beyoğlu",
    "title": "Beyoğlu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Beyoğlu ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "buyukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Büyükçekmece",
    "title": "Büyükçekmece Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Büyükçekmece ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "catalca-cicekcilik-peyzaj-organizasyon",
    "name": "Çatalca",
    "title": "Çatalca Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çatalca ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "cekmekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Çekmeköy",
    "title": "Çekmeköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çekmeköy ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "esenler-cicekcilik-peyzaj-organizasyon",
    "name": "Esenler",
    "title": "Esenler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Esenler ve Esenler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenler",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Esenyurt",
    "title": "Esenyurt Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Esenyurt ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "eyupsultan-cicekcilik-peyzaj-organizasyon",
    "name": "Eyüpsultan",
    "title": "Eyüpsultan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Eyüpsultan ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "fatih-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fatih ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "gaziosmanpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Gaziosmanpaşa",
    "title": "Gaziosmanpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gaziosmanpaşa ve Gaziosmanpaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Gaziosmanpaşa",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "gungoren-cicekcilik-peyzaj-organizasyon",
    "name": "Güngören",
    "title": "Güngören Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Güngören ve Güngören çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Güngören",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "kadikoy-cicekcilik-peyzaj-organizasyon",
    "name": "Kadıköy",
    "title": "Kadıköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kadıköy ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "kagithane-cicekcilik-peyzaj-organizasyon",
    "name": "Kağıthane",
    "title": "Kağıthane Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kağıthane ve Kağıthane çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kağıthane",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "kartal-cicekcilik-peyzaj-organizasyon",
    "name": "Kartal",
    "title": "Kartal Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kartal ve Kartal çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kartal",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "kucukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Küçükçekmece",
    "title": "Küçükçekmece Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Küçükçekmece ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "maltepe-cicekcilik-peyzaj-organizasyon",
    "name": "Maltepe",
    "title": "Maltepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Maltepe ve Maltepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Maltepe",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Pendik",
    "title": "Pendik Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Pendik ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "sancaktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Sancaktepe",
    "title": "Sancaktepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sancaktepe ve Sancaktepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sancaktepe",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "sariyer-cicekcilik-peyzaj-organizasyon",
    "name": "Sarıyer",
    "title": "Sarıyer Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sarıyer ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "silivri-cicekcilik-peyzaj-organizasyon",
    "name": "Silivri",
    "title": "Silivri Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Silivri ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Sultanbeyli",
    "title": "Sultanbeyli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sultanbeyli ve Sultanbeyli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultanbeyli",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "sultangazi-cicekcilik-peyzaj-organizasyon",
    "name": "Sultangazi",
    "title": "Sultangazi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sultangazi ve Sultangazi çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultangazi",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "sile-cicekcilik-peyzaj-organizasyon",
    "name": "Şile",
    "title": "Şile Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Şile ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "sisli-cicekcilik-peyzaj-organizasyon",
    "name": "Şişli",
    "title": "Şişli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Şişli ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "tuzla-cicekcilik-peyzaj-organizasyon",
    "name": "Tuzla",
    "title": "Tuzla Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Tuzla ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "Ümraniye",
    "title": "Ümraniye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ümraniye ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "uskudar-cicekcilik-peyzaj-organizasyon",
    "name": "Üsküdar",
    "title": "Üsküdar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Üsküdar ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "zeytinburnu-cicekcilik-peyzaj-organizasyon",
    "name": "Zeytinburnu",
    "title": "Zeytinburnu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Zeytinburnu ve Zeytinburnu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Zeytinburnu",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "burgazada-cicekcilik-peyzaj-organizasyon",
    "name": "Burgazada",
    "title": "Burgazada Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Burgazada ve Adalar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Adalar",
    "neighborhood": "Burgazada",
    "type": "neighborhood"
  },
  {
    "slug": "heybeliada-cicekcilik-peyzaj-organizasyon",
    "name": "Heybeliada",
    "title": "Heybeliada Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Heybeliada ve Adalar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Adalar",
    "neighborhood": "Heybeliada",
    "type": "neighborhood"
  },
  {
    "slug": "kinaliada-cicekcilik-peyzaj-organizasyon",
    "name": "Kınalıada",
    "title": "Kınalıada Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kınalıada ve Adalar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Adalar",
    "neighborhood": "Kınalıada",
    "type": "neighborhood"
  },
  {
    "slug": "maden-cicekcilik-peyzaj-organizasyon",
    "name": "Maden",
    "title": "Maden Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Maden ve Adalar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Adalar",
    "neighborhood": "Maden",
    "type": "neighborhood"
  },
  {
    "slug": "nizam-cicekcilik-peyzaj-organizasyon",
    "name": "Nizam",
    "title": "Nizam Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Nizam ve Adalar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Adalar",
    "neighborhood": "Nizam",
    "type": "neighborhood"
  },
  {
    "slug": "atakoy-1-kisim-cicekcilik-peyzaj-organizasyon",
    "name": "Ataköy 1. Kısım",
    "title": "Ataköy 1. Kısım Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ataköy 1. Kısım ve Bakırköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bakırköy",
    "neighborhood": "Ataköy 1. Kısım",
    "type": "neighborhood"
  },
  {
    "slug": "atakoy-2-5-6-kisim-cicekcilik-peyzaj-organizasyon",
    "name": "Ataköy 2-5-6. Kısım",
    "title": "Ataköy 2-5-6. Kısım Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ataköy 2-5-6. Kısım ve Bakırköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bakırköy",
    "neighborhood": "Ataköy 2-5-6. Kısım",
    "type": "neighborhood"
  },
  {
    "slug": "atakoy-3-4-11-kisim-cicekcilik-peyzaj-organizasyon",
    "name": "Ataköy 3-4-11. Kısım",
    "title": "Ataköy 3-4-11. Kısım Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ataköy 3-4-11. Kısım ve Bakırköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bakırköy",
    "neighborhood": "Ataköy 3-4-11. Kısım",
    "type": "neighborhood"
  },
  {
    "slug": "atakoy-7-8-9-10-kisim-cicekcilik-peyzaj-organizasyon",
    "name": "Ataköy 7-8-9-10. Kısım",
    "title": "Ataköy 7-8-9-10. Kısım Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ataköy 7-8-9-10. Kısım ve Bakırköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bakırköy",
    "neighborhood": "Ataköy 7-8-9-10. Kısım",
    "type": "neighborhood"
  },
  {
    "slug": "basinkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Basınköy",
    "title": "Basınköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Basınköy ve Bakırköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bakırköy",
    "neighborhood": "Basınköy",
    "type": "neighborhood"
  },
  {
    "slug": "cevizlik-cicekcilik-peyzaj-organizasyon",
    "name": "Cevizlik",
    "title": "Cevizlik Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cevizlik ve Bakırköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bakırköy",
    "neighborhood": "Cevizlik",
    "type": "neighborhood"
  },
  {
    "slug": "kartaltepe-cicekcilik-peyzaj-organizasyon",
    "name": "Kartaltepe",
    "title": "Kartaltepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kartaltepe ve Bakırköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bakırköy",
    "neighborhood": "Kartaltepe",
    "type": "neighborhood"
  },
  {
    "slug": "osmaniye-cicekcilik-peyzaj-organizasyon",
    "name": "Osmaniye",
    "title": "Osmaniye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Osmaniye ve Bakırköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bakırköy",
    "neighborhood": "Osmaniye",
    "type": "neighborhood"
  },
  {
    "slug": "sakizagaci-cicekcilik-peyzaj-organizasyon",
    "name": "Sakızağacı",
    "title": "Sakızağacı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sakızağacı ve Bakırköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bakırköy",
    "neighborhood": "Sakızağacı",
    "type": "neighborhood"
  },
  {
    "slug": "senlikkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Şenlikköy",
    "title": "Şenlikköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Şenlikköy ve Bakırköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bakırköy",
    "neighborhood": "Şenlikköy",
    "type": "neighborhood"
  },
  {
    "slug": "yenimahalle-cicekcilik-peyzaj-organizasyon",
    "name": "Yenimahalle",
    "title": "Yenimahalle Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yenimahalle ve Bakırköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bakırköy",
    "neighborhood": "Yenimahalle",
    "type": "neighborhood"
  },
  {
    "slug": "yesilkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilköy",
    "title": "Yeşilköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeşilköy ve Bakırköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bakırköy",
    "neighborhood": "Yeşilköy",
    "type": "neighborhood"
  },
  {
    "slug": "yesilkoy-sb-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilköy Sb",
    "title": "Yeşilköy Sb Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeşilköy Sb ve Bakırköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bakırköy",
    "neighborhood": "Yeşilköy Sb",
    "type": "neighborhood"
  },
  {
    "slug": "yesilyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilyurt",
    "title": "Yeşilyurt Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeşilyurt ve Bakırköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bakırköy",
    "neighborhood": "Yeşilyurt",
    "type": "neighborhood"
  },
  {
    "slug": "zeytinlik-cicekcilik-peyzaj-organizasyon",
    "name": "Zeytinlik",
    "title": "Zeytinlik Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Zeytinlik ve Bakırköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bakırköy",
    "neighborhood": "Zeytinlik",
    "type": "neighborhood"
  },
  {
    "slug": "zuhuratbaba-cicekcilik-peyzaj-organizasyon",
    "name": "Zuhuratbaba",
    "title": "Zuhuratbaba Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Zuhuratbaba ve Bakırköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bakırköy",
    "neighborhood": "Zuhuratbaba",
    "type": "neighborhood"
  },
  {
    "slug": "abbasaga-cicekcilik-peyzaj-organizasyon",
    "name": "Abbasağa",
    "title": "Abbasağa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Abbasağa ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Abbasağa",
    "type": "neighborhood"
  },
  {
    "slug": "akat-cicekcilik-peyzaj-organizasyon",
    "name": "Akat",
    "title": "Akat Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Akat ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Akat",
    "type": "neighborhood"
  },
  {
    "slug": "arnavutkoy-besiktas-cicekcilik-peyzaj-organizasyon",
    "name": "Arnavutköy",
    "title": "Arnavutköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Arnavutköy ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Arnavutköy",
    "type": "neighborhood"
  },
  {
    "slug": "balmumcu-cicekcilik-peyzaj-organizasyon",
    "name": "Balmumcu",
    "title": "Balmumcu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Balmumcu ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Balmumcu",
    "type": "neighborhood"
  },
  {
    "slug": "bebek-cicekcilik-peyzaj-organizasyon",
    "name": "Bebek",
    "title": "Bebek Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bebek ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Bebek",
    "type": "neighborhood"
  },
  {
    "slug": "cihannuma-cicekcilik-peyzaj-organizasyon",
    "name": "Cihannüma",
    "title": "Cihannüma Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cihannüma ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Cihannüma",
    "type": "neighborhood"
  },
  {
    "slug": "dikilitas-cicekcilik-peyzaj-organizasyon",
    "name": "Dikilitaş",
    "title": "Dikilitaş Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Dikilitaş ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Dikilitaş",
    "type": "neighborhood"
  },
  {
    "slug": "etiler-cicekcilik-peyzaj-organizasyon",
    "name": "Etiler",
    "title": "Etiler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Etiler ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Etiler",
    "type": "neighborhood"
  },
  {
    "slug": "gayrettepe-cicekcilik-peyzaj-organizasyon",
    "name": "Gayrettepe",
    "title": "Gayrettepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gayrettepe ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Gayrettepe",
    "type": "neighborhood"
  },
  {
    "slug": "konaklar-cicekcilik-peyzaj-organizasyon",
    "name": "Konaklar",
    "title": "Konaklar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Konaklar ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Konaklar",
    "type": "neighborhood"
  },
  {
    "slug": "kurucesme-cicekcilik-peyzaj-organizasyon",
    "name": "Kuruçeşme",
    "title": "Kuruçeşme Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kuruçeşme ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Kuruçeşme",
    "type": "neighborhood"
  },
  {
    "slug": "kultur-cicekcilik-peyzaj-organizasyon",
    "name": "Kültür",
    "title": "Kültür Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kültür ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Kültür",
    "type": "neighborhood"
  },
  {
    "slug": "levazim-cicekcilik-peyzaj-organizasyon",
    "name": "Levazım",
    "title": "Levazım Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Levazım ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Levazım",
    "type": "neighborhood"
  },
  {
    "slug": "levent-cicekcilik-peyzaj-organizasyon",
    "name": "Levent",
    "title": "Levent Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Levent ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Levent",
    "type": "neighborhood"
  },
  {
    "slug": "mecidiye-cicekcilik-peyzaj-organizasyon",
    "name": "Mecidiye",
    "title": "Mecidiye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mecidiye ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Mecidiye",
    "type": "neighborhood"
  },
  {
    "slug": "muradiye-cicekcilik-peyzaj-organizasyon",
    "name": "Muradiye",
    "title": "Muradiye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Muradiye ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Muradiye",
    "type": "neighborhood"
  },
  {
    "slug": "nisbetiye-cicekcilik-peyzaj-organizasyon",
    "name": "Nisbetiye",
    "title": "Nisbetiye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Nisbetiye ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Nisbetiye",
    "type": "neighborhood"
  },
  {
    "slug": "ortakoy-cicekcilik-peyzaj-organizasyon",
    "name": "Ortaköy",
    "title": "Ortaköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ortaköy ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Ortaköy",
    "type": "neighborhood"
  },
  {
    "slug": "sinanpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Sinanpaşa",
    "title": "Sinanpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sinanpaşa ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Sinanpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "turkali-cicekcilik-peyzaj-organizasyon",
    "name": "Türkali",
    "title": "Türkali Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Türkali ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Türkali",
    "type": "neighborhood"
  },
  {
    "slug": "ulus-cicekcilik-peyzaj-organizasyon",
    "name": "Ulus",
    "title": "Ulus Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ulus ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Ulus",
    "type": "neighborhood"
  },
  {
    "slug": "visnezade-cicekcilik-peyzaj-organizasyon",
    "name": "Vişnezade",
    "title": "Vişnezade Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Vişnezade ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Vişnezade",
    "type": "neighborhood"
  },
  {
    "slug": "yildiz-cicekcilik-peyzaj-organizasyon",
    "name": "Yıldız",
    "title": "Yıldız Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yıldız ve Beşiktaş çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beşiktaş",
    "neighborhood": "Yıldız",
    "type": "neighborhood"
  },
  {
    "slug": "acarlar-cicekcilik-peyzaj-organizasyon",
    "name": "Acarlar",
    "title": "Acarlar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Acarlar ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Acarlar",
    "type": "neighborhood"
  },
  {
    "slug": "akbaba-cicekcilik-peyzaj-organizasyon",
    "name": "Akbaba",
    "title": "Akbaba Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Akbaba ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Akbaba",
    "type": "neighborhood"
  },
  {
    "slug": "alibahadir-cicekcilik-peyzaj-organizasyon",
    "name": "Alibahadır",
    "title": "Alibahadır Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Alibahadır ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Alibahadır",
    "type": "neighborhood"
  },
  {
    "slug": "anadolu-hisari-cicekcilik-peyzaj-organizasyon",
    "name": "Anadolu Hisarı",
    "title": "Anadolu Hisarı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Anadolu Hisarı ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Anadolu Hisarı",
    "type": "neighborhood"
  },
  {
    "slug": "anadolu-kavagi-cicekcilik-peyzaj-organizasyon",
    "name": "Anadolu Kavağı",
    "title": "Anadolu Kavağı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Anadolu Kavağı ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Anadolu Kavağı",
    "type": "neighborhood"
  },
  {
    "slug": "anadolufeneri-cicekcilik-peyzaj-organizasyon",
    "name": "Anadolufeneri",
    "title": "Anadolufeneri Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Anadolufeneri ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Anadolufeneri",
    "type": "neighborhood"
  },
  {
    "slug": "baklaci-cicekcilik-peyzaj-organizasyon",
    "name": "Baklacı",
    "title": "Baklacı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Baklacı ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Baklacı",
    "type": "neighborhood"
  },
  {
    "slug": "bozhane-cicekcilik-peyzaj-organizasyon",
    "name": "Bozhane",
    "title": "Bozhane Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bozhane ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Bozhane",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "camlibahce-cicekcilik-peyzaj-organizasyon",
    "name": "Çamlıbahçe",
    "title": "Çamlıbahçe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çamlıbahçe ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Çamlıbahçe",
    "type": "neighborhood"
  },
  {
    "slug": "cengeldere-cicekcilik-peyzaj-organizasyon",
    "name": "Çengeldere",
    "title": "Çengeldere Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çengeldere ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Çengeldere",
    "type": "neighborhood"
  },
  {
    "slug": "ciftlik-cicekcilik-peyzaj-organizasyon",
    "name": "Çiftlik",
    "title": "Çiftlik Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çiftlik ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Çiftlik",
    "type": "neighborhood"
  },
  {
    "slug": "cigdem-cicekcilik-peyzaj-organizasyon",
    "name": "Çiğdem",
    "title": "Çiğdem Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çiğdem ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Çiğdem",
    "type": "neighborhood"
  },
  {
    "slug": "cubuklu-cicekcilik-peyzaj-organizasyon",
    "name": "Çubuklu",
    "title": "Çubuklu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çubuklu ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Çubuklu",
    "type": "neighborhood"
  },
  {
    "slug": "dereseki-cicekcilik-peyzaj-organizasyon",
    "name": "Dereseki",
    "title": "Dereseki Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Dereseki ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Dereseki",
    "type": "neighborhood"
  },
  {
    "slug": "elmali-cicekcilik-peyzaj-organizasyon",
    "name": "Elmalı",
    "title": "Elmalı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Elmalı ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Elmalı",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-beykoz-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fatih ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "goksu-cicekcilik-peyzaj-organizasyon",
    "name": "Göksu",
    "title": "Göksu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Göksu ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Göksu",
    "type": "neighborhood"
  },
  {
    "slug": "gollu-cicekcilik-peyzaj-organizasyon",
    "name": "Göllü",
    "title": "Göllü Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Göllü ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Göllü",
    "type": "neighborhood"
  },
  {
    "slug": "gorele-cicekcilik-peyzaj-organizasyon",
    "name": "Görele",
    "title": "Görele Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Görele ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Görele",
    "type": "neighborhood"
  },
  {
    "slug": "goztepe-cicekcilik-peyzaj-organizasyon",
    "name": "Göztepe",
    "title": "Göztepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Göztepe ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Göztepe",
    "type": "neighborhood"
  },
  {
    "slug": "gumussuyu-cicekcilik-peyzaj-organizasyon",
    "name": "Gümüşsuyu",
    "title": "Gümüşsuyu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gümüşsuyu ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Gümüşsuyu",
    "type": "neighborhood"
  },
  {
    "slug": "incirkoy-cicekcilik-peyzaj-organizasyon",
    "name": "İncirköy",
    "title": "İncirköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İncirköy ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "İncirköy",
    "type": "neighborhood"
  },
  {
    "slug": "ishakli-cicekcilik-peyzaj-organizasyon",
    "name": "İshaklı",
    "title": "İshaklı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İshaklı ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "İshaklı",
    "type": "neighborhood"
  },
  {
    "slug": "kanlica-cicekcilik-peyzaj-organizasyon",
    "name": "Kanlıca",
    "title": "Kanlıca Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kanlıca ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Kanlıca",
    "type": "neighborhood"
  },
  {
    "slug": "kavacik-cicekcilik-peyzaj-organizasyon",
    "name": "Kavacık",
    "title": "Kavacık Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kavacık ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Kavacık",
    "type": "neighborhood"
  },
  {
    "slug": "kaynarca-cicekcilik-peyzaj-organizasyon",
    "name": "Kaynarca",
    "title": "Kaynarca Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kaynarca ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Kaynarca",
    "type": "neighborhood"
  },
  {
    "slug": "kilicli-cicekcilik-peyzaj-organizasyon",
    "name": "Kılıçlı",
    "title": "Kılıçlı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kılıçlı ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Kılıçlı",
    "type": "neighborhood"
  },
  {
    "slug": "mahmutsevketpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Mahmutşevketpaşa",
    "title": "Mahmutşevketpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mahmutşevketpaşa ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Mahmutşevketpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Merkez",
    "title": "Merkez Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Merkez ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "ortacesme-cicekcilik-peyzaj-organizasyon",
    "name": "Ortaçeşme",
    "title": "Ortaçeşme Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ortaçeşme ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Ortaçeşme",
    "type": "neighborhood"
  },
  {
    "slug": "ogumce-cicekcilik-peyzaj-organizasyon",
    "name": "Öğümce",
    "title": "Öğümce Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Öğümce ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Öğümce",
    "type": "neighborhood"
  },
  {
    "slug": "ornekkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Örnekköy",
    "title": "Örnekköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Örnekköy ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Örnekköy",
    "type": "neighborhood"
  },
  {
    "slug": "pasabahce-cicekcilik-peyzaj-organizasyon",
    "name": "Paşabahçe",
    "title": "Paşabahçe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Paşabahçe ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Paşabahçe",
    "type": "neighborhood"
  },
  {
    "slug": "pasamandira-cicekcilik-peyzaj-organizasyon",
    "name": "Paşamandıra",
    "title": "Paşamandıra Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Paşamandıra ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Paşamandıra",
    "type": "neighborhood"
  },
  {
    "slug": "polonezkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Polonezköy",
    "title": "Polonezköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Polonezköy ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Polonezköy",
    "type": "neighborhood"
  },
  {
    "slug": "poyrazkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Poyrazköy",
    "title": "Poyrazköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Poyrazköy ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Poyrazköy",
    "type": "neighborhood"
  },
  {
    "slug": "riva-cicekcilik-peyzaj-organizasyon",
    "name": "Riva",
    "title": "Riva Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Riva ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Riva",
    "type": "neighborhood"
  },
  {
    "slug": "ruzgarlibahce-cicekcilik-peyzaj-organizasyon",
    "name": "Rüzgarlıbahçe",
    "title": "Rüzgarlıbahçe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Rüzgarlıbahçe ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Rüzgarlıbahçe",
    "type": "neighborhood"
  },
  {
    "slug": "soguksu-cicekcilik-peyzaj-organizasyon",
    "name": "Soğuksu",
    "title": "Soğuksu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Soğuksu ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Soğuksu",
    "type": "neighborhood"
  },
  {
    "slug": "tokatkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Tokatköy",
    "title": "Tokatköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Tokatköy ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Tokatköy",
    "type": "neighborhood"
  },
  {
    "slug": "yalikoy-cicekcilik-peyzaj-organizasyon",
    "name": "Yalıköy",
    "title": "Yalıköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yalıköy ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Yalıköy",
    "type": "neighborhood"
  },
  {
    "slug": "yavuz-selim-cicekcilik-peyzaj-organizasyon",
    "name": "Yavuz Selim",
    "title": "Yavuz Selim Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yavuz Selim ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Yavuz Selim",
    "type": "neighborhood"
  },
  {
    "slug": "yeni-mahalle-cicekcilik-peyzaj-organizasyon",
    "name": "Yeni Mahalle",
    "title": "Yeni Mahalle Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeni Mahalle ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Yeni Mahalle",
    "type": "neighborhood"
  },
  {
    "slug": "zerzavatci-cicekcilik-peyzaj-organizasyon",
    "name": "Zerzavatçı",
    "title": "Zerzavatçı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Zerzavatçı ve Beykoz çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beykoz",
    "neighborhood": "Zerzavatçı",
    "type": "neighborhood"
  },
  {
    "slug": "arap-cami-cicekcilik-peyzaj-organizasyon",
    "name": "Arap Cami",
    "title": "Arap Cami Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Arap Cami ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Arap Cami",
    "type": "neighborhood"
  },
  {
    "slug": "asmali-mescit-cicekcilik-peyzaj-organizasyon",
    "name": "Asmalı Mescit",
    "title": "Asmalı Mescit Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Asmalı Mescit ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Asmalı Mescit",
    "type": "neighborhood"
  },
  {
    "slug": "bedrettin-cicekcilik-peyzaj-organizasyon",
    "name": "Bedrettin",
    "title": "Bedrettin Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bedrettin ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Bedrettin",
    "type": "neighborhood"
  },
  {
    "slug": "bereketzade-cicekcilik-peyzaj-organizasyon",
    "name": "Bereketzade",
    "title": "Bereketzade Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bereketzade ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Bereketzade",
    "type": "neighborhood"
  },
  {
    "slug": "bostan-cicekcilik-peyzaj-organizasyon",
    "name": "Bostan",
    "title": "Bostan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bostan ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Bostan",
    "type": "neighborhood"
  },
  {
    "slug": "bulbul-cicekcilik-peyzaj-organizasyon",
    "name": "Bülbül",
    "title": "Bülbül Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bülbül ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Bülbül",
    "type": "neighborhood"
  },
  {
    "slug": "camiikebir-cicekcilik-peyzaj-organizasyon",
    "name": "Camiikebir",
    "title": "Camiikebir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Camiikebir ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Camiikebir",
    "type": "neighborhood"
  },
  {
    "slug": "cihangir-cicekcilik-peyzaj-organizasyon",
    "name": "Cihangir",
    "title": "Cihangir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cihangir ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Cihangir",
    "type": "neighborhood"
  },
  {
    "slug": "catma-mescit-cicekcilik-peyzaj-organizasyon",
    "name": "Çatma Mescit",
    "title": "Çatma Mescit Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çatma Mescit ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Çatma Mescit",
    "type": "neighborhood"
  },
  {
    "slug": "cukur-cicekcilik-peyzaj-organizasyon",
    "name": "Çukur",
    "title": "Çukur Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çukur ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Çukur",
    "type": "neighborhood"
  },
  {
    "slug": "emekyemez-cicekcilik-peyzaj-organizasyon",
    "name": "Emekyemez",
    "title": "Emekyemez Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Emekyemez ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Emekyemez",
    "type": "neighborhood"
  },
  {
    "slug": "evliya-celebi-cicekcilik-peyzaj-organizasyon",
    "name": "Evliya Çelebi",
    "title": "Evliya Çelebi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Evliya Çelebi ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Evliya Çelebi",
    "type": "neighborhood"
  },
  {
    "slug": "fetihtepe-cicekcilik-peyzaj-organizasyon",
    "name": "Fetihtepe",
    "title": "Fetihtepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fetihtepe ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Fetihtepe",
    "type": "neighborhood"
  },
  {
    "slug": "firuzaga-cicekcilik-peyzaj-organizasyon",
    "name": "Firuzağa",
    "title": "Firuzağa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Firuzağa ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Firuzağa",
    "type": "neighborhood"
  },
  {
    "slug": "gumussuyu-beyoglu-cicekcilik-peyzaj-organizasyon",
    "name": "Gümüşsuyu",
    "title": "Gümüşsuyu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gümüşsuyu ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Gümüşsuyu",
    "type": "neighborhood"
  },
  {
    "slug": "haciahmet-cicekcilik-peyzaj-organizasyon",
    "name": "Hacıahmet",
    "title": "Hacıahmet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hacıahmet ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Hacıahmet",
    "type": "neighborhood"
  },
  {
    "slug": "hacimimi-cicekcilik-peyzaj-organizasyon",
    "name": "Hacımimi",
    "title": "Hacımimi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hacımimi ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Hacımimi",
    "type": "neighborhood"
  },
  {
    "slug": "halicioglu-cicekcilik-peyzaj-organizasyon",
    "name": "Halıcıoğlu",
    "title": "Halıcıoğlu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Halıcıoğlu ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Halıcıoğlu",
    "type": "neighborhood"
  },
  {
    "slug": "huseyinaga-cicekcilik-peyzaj-organizasyon",
    "name": "Hüseyinağa",
    "title": "Hüseyinağa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hüseyinağa ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Hüseyinağa",
    "type": "neighborhood"
  },
  {
    "slug": "istiklal-cicekcilik-peyzaj-organizasyon",
    "name": "İstiklal",
    "title": "İstiklal Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İstiklal ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "İstiklal",
    "type": "neighborhood"
  },
  {
    "slug": "kadimehmet-efendi-cicekcilik-peyzaj-organizasyon",
    "name": "Kadımehmet Efendi",
    "title": "Kadımehmet Efendi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kadımehmet Efendi ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Kadımehmet Efendi",
    "type": "neighborhood"
  },
  {
    "slug": "kalyoncu-kullugu-cicekcilik-peyzaj-organizasyon",
    "name": "Kalyoncu Kulluğu",
    "title": "Kalyoncu Kulluğu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kalyoncu Kulluğu ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Kalyoncu Kulluğu",
    "type": "neighborhood"
  },
  {
    "slug": "kamer-hatun-cicekcilik-peyzaj-organizasyon",
    "name": "Kamer Hatun",
    "title": "Kamer Hatun Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kamer Hatun ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Kamer Hatun",
    "type": "neighborhood"
  },
  {
    "slug": "kaptanpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Kaptanpaşa",
    "title": "Kaptanpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kaptanpaşa ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Kaptanpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "katipmustafa-celebi-cicekcilik-peyzaj-organizasyon",
    "name": "Katipmustafa Çelebi",
    "title": "Katipmustafa Çelebi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Katipmustafa Çelebi ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Katipmustafa Çelebi",
    "type": "neighborhood"
  },
  {
    "slug": "kececi-piri-cicekcilik-peyzaj-organizasyon",
    "name": "Keçeci Piri",
    "title": "Keçeci Piri Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Keçeci Piri ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Keçeci Piri",
    "type": "neighborhood"
  },
  {
    "slug": "kemankes-karamustafapasa-cicekcilik-peyzaj-organizasyon",
    "name": "Kemankeş Karamustafapaşa",
    "title": "Kemankeş Karamustafapaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kemankeş Karamustafapaşa ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Kemankeş Karamustafapaşa",
    "type": "neighborhood"
  },
  {
    "slug": "kilicali-pasa-cicekcilik-peyzaj-organizasyon",
    "name": "Kılıçali Paşa",
    "title": "Kılıçali Paşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kılıçali Paşa ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Kılıçali Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "kocatepe-cicekcilik-peyzaj-organizasyon",
    "name": "Kocatepe",
    "title": "Kocatepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kocatepe ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Kocatepe",
    "type": "neighborhood"
  },
  {
    "slug": "kulaksiz-cicekcilik-peyzaj-organizasyon",
    "name": "Kulaksız",
    "title": "Kulaksız Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kulaksız ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Kulaksız",
    "type": "neighborhood"
  },
  {
    "slug": "kuloglu-cicekcilik-peyzaj-organizasyon",
    "name": "Kuloğlu",
    "title": "Kuloğlu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kuloğlu ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Kuloğlu",
    "type": "neighborhood"
  },
  {
    "slug": "kucuk-piyale-cicekcilik-peyzaj-organizasyon",
    "name": "Küçük Piyale",
    "title": "Küçük Piyale Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Küçük Piyale ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Küçük Piyale",
    "type": "neighborhood"
  },
  {
    "slug": "mueyyetzade-cicekcilik-peyzaj-organizasyon",
    "name": "Müeyyetzade",
    "title": "Müeyyetzade Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Müeyyetzade ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Müeyyetzade",
    "type": "neighborhood"
  },
  {
    "slug": "omer-avni-cicekcilik-peyzaj-organizasyon",
    "name": "Ömer Avni",
    "title": "Ömer Avni Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ömer Avni ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Ömer Avni",
    "type": "neighborhood"
  },
  {
    "slug": "ornektepe-cicekcilik-peyzaj-organizasyon",
    "name": "Örnektepe",
    "title": "Örnektepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Örnektepe ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Örnektepe",
    "type": "neighborhood"
  },
  {
    "slug": "piripasa-cicekcilik-peyzaj-organizasyon",
    "name": "Piripaşa",
    "title": "Piripaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Piripaşa ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Piripaşa",
    "type": "neighborhood"
  },
  {
    "slug": "piyalepasa-cicekcilik-peyzaj-organizasyon",
    "name": "Piyalepaşa",
    "title": "Piyalepaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Piyalepaşa ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Piyalepaşa",
    "type": "neighborhood"
  },
  {
    "slug": "purtelas-hasan-efendi-cicekcilik-peyzaj-organizasyon",
    "name": "Pürtelaş Hasan Efendi",
    "title": "Pürtelaş Hasan Efendi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Pürtelaş Hasan Efendi ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Pürtelaş Hasan Efendi",
    "type": "neighborhood"
  },
  {
    "slug": "sururi-mehmet-efendi-cicekcilik-peyzaj-organizasyon",
    "name": "Sururi Mehmet Efendi",
    "title": "Sururi Mehmet Efendi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sururi Mehmet Efendi ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Sururi Mehmet Efendi",
    "type": "neighborhood"
  },
  {
    "slug": "sutluce-cicekcilik-peyzaj-organizasyon",
    "name": "Sütlüce",
    "title": "Sütlüce Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sütlüce ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Sütlüce",
    "type": "neighborhood"
  },
  {
    "slug": "sahkulu-cicekcilik-peyzaj-organizasyon",
    "name": "Şahkulu",
    "title": "Şahkulu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Şahkulu ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Şahkulu",
    "type": "neighborhood"
  },
  {
    "slug": "sehit-muhtar-cicekcilik-peyzaj-organizasyon",
    "name": "Şehit Muhtar",
    "title": "Şehit Muhtar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Şehit Muhtar ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Şehit Muhtar",
    "type": "neighborhood"
  },
  {
    "slug": "tomtom-cicekcilik-peyzaj-organizasyon",
    "name": "Tomtom",
    "title": "Tomtom Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Tomtom ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Tomtom",
    "type": "neighborhood"
  },
  {
    "slug": "yahya-kahya-cicekcilik-peyzaj-organizasyon",
    "name": "Yahya Kahya",
    "title": "Yahya Kahya Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yahya Kahya ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Yahya Kahya",
    "type": "neighborhood"
  },
  {
    "slug": "yenisehir-cicekcilik-peyzaj-organizasyon",
    "name": "Yenişehir",
    "title": "Yenişehir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yenişehir ve Beyoğlu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beyoğlu",
    "neighborhood": "Yenişehir",
    "type": "neighborhood"
  },
  {
    "slug": "akalan-cicekcilik-peyzaj-organizasyon",
    "name": "Akalan",
    "title": "Akalan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Akalan ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Akalan",
    "type": "neighborhood"
  },
  {
    "slug": "ataturk-cicekcilik-peyzaj-organizasyon",
    "name": "Atatürk",
    "title": "Atatürk Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Atatürk ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Atatürk",
    "type": "neighborhood"
  },
  {
    "slug": "aydinlar-cicekcilik-peyzaj-organizasyon",
    "name": "Aydınlar",
    "title": "Aydınlar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Aydınlar ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Aydınlar",
    "type": "neighborhood"
  },
  {
    "slug": "bahsayis-cicekcilik-peyzaj-organizasyon",
    "name": "Bahşayiş",
    "title": "Bahşayiş Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bahşayiş ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Bahşayiş",
    "type": "neighborhood"
  },
  {
    "slug": "basak-cicekcilik-peyzaj-organizasyon",
    "name": "Başak",
    "title": "Başak Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Başak ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Başak",
    "type": "neighborhood"
  },
  {
    "slug": "belgrat-cicekcilik-peyzaj-organizasyon",
    "name": "Belgrat",
    "title": "Belgrat Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Belgrat ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Belgrat",
    "type": "neighborhood"
  },
  {
    "slug": "celepkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Celepköy",
    "title": "Celepköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Celepköy ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Celepköy",
    "type": "neighborhood"
  },
  {
    "slug": "cakil-cicekcilik-peyzaj-organizasyon",
    "name": "Çakıl",
    "title": "Çakıl Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çakıl ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Çakıl",
    "type": "neighborhood"
  },
  {
    "slug": "canakca-cicekcilik-peyzaj-organizasyon",
    "name": "Çanakça",
    "title": "Çanakça Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çanakça ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Çanakça",
    "type": "neighborhood"
  },
  {
    "slug": "ciftlikkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Çiftlikköy",
    "title": "Çiftlikköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çiftlikköy ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Çiftlikköy",
    "type": "neighborhood"
  },
  {
    "slug": "dagyenice-cicekcilik-peyzaj-organizasyon",
    "name": "Dağyenice",
    "title": "Dağyenice Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Dağyenice ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Dağyenice",
    "type": "neighborhood"
  },
  {
    "slug": "elbasan-cicekcilik-peyzaj-organizasyon",
    "name": "Elbasan",
    "title": "Elbasan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Elbasan ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Elbasan",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-catalca-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fatih ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "ferhatpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Ferhatpaşa",
    "title": "Ferhatpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ferhatpaşa ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Ferhatpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "ferhatpasa-sb-cicekcilik-peyzaj-organizasyon",
    "name": "Ferhatpaşa Sb",
    "title": "Ferhatpaşa Sb Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ferhatpaşa Sb ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Ferhatpaşa Sb",
    "type": "neighborhood"
  },
  {
    "slug": "gokceali-cicekcilik-peyzaj-organizasyon",
    "name": "Gökçeali",
    "title": "Gökçeali Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gökçeali ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Gökçeali",
    "type": "neighborhood"
  },
  {
    "slug": "gumuspinar-cicekcilik-peyzaj-organizasyon",
    "name": "Gümüşpınar",
    "title": "Gümüşpınar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gümüşpınar ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Gümüşpınar",
    "type": "neighborhood"
  },
  {
    "slug": "hallacli-cicekcilik-peyzaj-organizasyon",
    "name": "Hallaçlı",
    "title": "Hallaçlı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hallaçlı ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Hallaçlı",
    "type": "neighborhood"
  },
  {
    "slug": "hisarbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Hisarbeyli",
    "title": "Hisarbeyli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hisarbeyli ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Hisarbeyli",
    "type": "neighborhood"
  },
  {
    "slug": "ihsaniye-cicekcilik-peyzaj-organizasyon",
    "name": "İhsaniye",
    "title": "İhsaniye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İhsaniye ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "İhsaniye",
    "type": "neighborhood"
  },
  {
    "slug": "incegiz-cicekcilik-peyzaj-organizasyon",
    "name": "İnceğiz",
    "title": "İnceğiz Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İnceğiz ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "İnceğiz",
    "type": "neighborhood"
  },
  {
    "slug": "izzettin-cicekcilik-peyzaj-organizasyon",
    "name": "İzzettin",
    "title": "İzzettin Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İzzettin ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "İzzettin",
    "type": "neighborhood"
  },
  {
    "slug": "kabakca-cicekcilik-peyzaj-organizasyon",
    "name": "Kabakça",
    "title": "Kabakça Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kabakça ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Kabakça",
    "type": "neighborhood"
  },
  {
    "slug": "kaleici-cicekcilik-peyzaj-organizasyon",
    "name": "Kaleiçi",
    "title": "Kaleiçi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kaleiçi ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Kaleiçi",
    "type": "neighborhood"
  },
  {
    "slug": "kalfa-cicekcilik-peyzaj-organizasyon",
    "name": "Kalfa",
    "title": "Kalfa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kalfa ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Kalfa",
    "type": "neighborhood"
  },
  {
    "slug": "karacakoy-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Karacaköy Merkez",
    "title": "Karacaköy Merkez Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Karacaköy Merkez ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Karacaköy Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "karamandere-cicekcilik-peyzaj-organizasyon",
    "name": "Karamandere",
    "title": "Karamandere Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Karamandere ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Karamandere",
    "type": "neighborhood"
  },
  {
    "slug": "kestanelik-cicekcilik-peyzaj-organizasyon",
    "name": "Kestanelik",
    "title": "Kestanelik Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kestanelik ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Kestanelik",
    "type": "neighborhood"
  },
  {
    "slug": "kizilcaali-cicekcilik-peyzaj-organizasyon",
    "name": "Kızılcaali",
    "title": "Kızılcaali Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kızılcaali ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Kızılcaali",
    "type": "neighborhood"
  },
  {
    "slug": "muratbey-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Muratbey Merkez",
    "title": "Muratbey Merkez Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Muratbey Merkez ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Muratbey Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "nakkas-cicekcilik-peyzaj-organizasyon",
    "name": "Nakkaş",
    "title": "Nakkaş Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Nakkaş ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Nakkaş",
    "type": "neighborhood"
  },
  {
    "slug": "oklali-cicekcilik-peyzaj-organizasyon",
    "name": "Oklalı",
    "title": "Oklalı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Oklalı ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Oklalı",
    "type": "neighborhood"
  },
  {
    "slug": "ormanli-cicekcilik-peyzaj-organizasyon",
    "name": "Ormanlı",
    "title": "Ormanlı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ormanlı ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Ormanlı",
    "type": "neighborhood"
  },
  {
    "slug": "ovayenice-cicekcilik-peyzaj-organizasyon",
    "name": "Ovayenice",
    "title": "Ovayenice Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ovayenice ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Ovayenice",
    "type": "neighborhood"
  },
  {
    "slug": "orcunlu-cicekcilik-peyzaj-organizasyon",
    "name": "Örcünlü",
    "title": "Örcünlü Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Örcünlü ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Örcünlü",
    "type": "neighborhood"
  },
  {
    "slug": "orencik-cicekcilik-peyzaj-organizasyon",
    "name": "Örencik",
    "title": "Örencik Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Örencik ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Örencik",
    "type": "neighborhood"
  },
  {
    "slug": "subasi-cicekcilik-peyzaj-organizasyon",
    "name": "Subaşı",
    "title": "Subaşı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Subaşı ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Subaşı",
    "type": "neighborhood"
  },
  {
    "slug": "yalikoy-catalca-cicekcilik-peyzaj-organizasyon",
    "name": "Yalıköy",
    "title": "Yalıköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yalıköy ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Yalıköy",
    "type": "neighborhood"
  },
  {
    "slug": "yaylacik-cicekcilik-peyzaj-organizasyon",
    "name": "Yaylacık",
    "title": "Yaylacık Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yaylacık ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Yaylacık",
    "type": "neighborhood"
  },
  {
    "slug": "yazlik-cicekcilik-peyzaj-organizasyon",
    "name": "Yazlık",
    "title": "Yazlık Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yazlık ve Çatalca çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çatalca",
    "neighborhood": "Yazlık",
    "type": "neighborhood"
  },
  {
    "slug": "agacli-cicekcilik-peyzaj-organizasyon",
    "name": "Ağaçlı",
    "title": "Ağaçlı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ağaçlı ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Ağaçlı",
    "type": "neighborhood"
  },
  {
    "slug": "akpinar-cicekcilik-peyzaj-organizasyon",
    "name": "Akpınar",
    "title": "Akpınar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Akpınar ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Akpınar",
    "type": "neighborhood"
  },
  {
    "slug": "aksemsettin-cicekcilik-peyzaj-organizasyon",
    "name": "Akşemsettin",
    "title": "Akşemsettin Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Akşemsettin ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Akşemsettin",
    "type": "neighborhood"
  },
  {
    "slug": "alibeykoy-cicekcilik-peyzaj-organizasyon",
    "name": "Alibeyköy",
    "title": "Alibeyköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Alibeyköy ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Alibeyköy",
    "type": "neighborhood"
  },
  {
    "slug": "circir-cicekcilik-peyzaj-organizasyon",
    "name": "Çırçır",
    "title": "Çırçır Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çırçır ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Çırçır",
    "type": "neighborhood"
  },
  {
    "slug": "ciftalan-cicekcilik-peyzaj-organizasyon",
    "name": "Çiftalan",
    "title": "Çiftalan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çiftalan ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Çiftalan",
    "type": "neighborhood"
  },
  {
    "slug": "defterdar-cicekcilik-peyzaj-organizasyon",
    "name": "Defterdar",
    "title": "Defterdar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Defterdar ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Defterdar",
    "type": "neighborhood"
  },
  {
    "slug": "dugmeciler-cicekcilik-peyzaj-organizasyon",
    "name": "Düğmeciler",
    "title": "Düğmeciler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Düğmeciler ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Düğmeciler",
    "type": "neighborhood"
  },
  {
    "slug": "emniyettepe-cicekcilik-peyzaj-organizasyon",
    "name": "Emniyettepe",
    "title": "Emniyettepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Emniyettepe ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Emniyettepe",
    "type": "neighborhood"
  },
  {
    "slug": "esentepe-cicekcilik-peyzaj-organizasyon",
    "name": "Esentepe",
    "title": "Esentepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Esentepe ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Esentepe",
    "type": "neighborhood"
  },
  {
    "slug": "gokturk-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Göktürk Merkez",
    "title": "Göktürk Merkez Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Göktürk Merkez ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Göktürk Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "guzeltepe-cicekcilik-peyzaj-organizasyon",
    "name": "Güzeltepe",
    "title": "Güzeltepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Güzeltepe ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Güzeltepe",
    "type": "neighborhood"
  },
  {
    "slug": "isiklar-cicekcilik-peyzaj-organizasyon",
    "name": "Işıklar",
    "title": "Işıklar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Işıklar ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Işıklar",
    "type": "neighborhood"
  },
  {
    "slug": "ihsaniye-eyupsultan-cicekcilik-peyzaj-organizasyon",
    "name": "İhsaniye",
    "title": "İhsaniye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İhsaniye ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "İhsaniye",
    "type": "neighborhood"
  },
  {
    "slug": "islambey-cicekcilik-peyzaj-organizasyon",
    "name": "İslambey",
    "title": "İslambey Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İslambey ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "İslambey",
    "type": "neighborhood"
  },
  {
    "slug": "karadolap-cicekcilik-peyzaj-organizasyon",
    "name": "Karadolap",
    "title": "Karadolap Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Karadolap ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Karadolap",
    "type": "neighborhood"
  },
  {
    "slug": "merkez-eyupsultan-cicekcilik-peyzaj-organizasyon",
    "name": "Merkez",
    "title": "Merkez Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Merkez ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "mimar-sinan-cicekcilik-peyzaj-organizasyon",
    "name": "Mimar Sinan",
    "title": "Mimar Sinan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mimar Sinan ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Mimar Sinan",
    "type": "neighborhood"
  },
  {
    "slug": "mithatpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Mithatpaşa",
    "title": "Mithatpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mithatpaşa ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Mithatpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "nisanci-cicekcilik-peyzaj-organizasyon",
    "name": "Nişancı",
    "title": "Nişancı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Nişancı ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Nişancı",
    "type": "neighborhood"
  },
  {
    "slug": "odayeri-cicekcilik-peyzaj-organizasyon",
    "name": "Odayeri",
    "title": "Odayeri Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Odayeri ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Odayeri",
    "type": "neighborhood"
  },
  {
    "slug": "pirincci-cicekcilik-peyzaj-organizasyon",
    "name": "Pirinççi",
    "title": "Pirinççi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Pirinççi ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Pirinççi",
    "type": "neighborhood"
  },
  {
    "slug": "rami-cuma-cicekcilik-peyzaj-organizasyon",
    "name": "Rami Cuma",
    "title": "Rami Cuma Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Rami Cuma ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Rami Cuma",
    "type": "neighborhood"
  },
  {
    "slug": "rami-yeni-cicekcilik-peyzaj-organizasyon",
    "name": "Rami Yeni",
    "title": "Rami Yeni Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Rami Yeni ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Rami Yeni",
    "type": "neighborhood"
  },
  {
    "slug": "sakarya-cicekcilik-peyzaj-organizasyon",
    "name": "Sakarya",
    "title": "Sakarya Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sakarya ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Sakarya",
    "type": "neighborhood"
  },
  {
    "slug": "silahtaraga-cicekcilik-peyzaj-organizasyon",
    "name": "Silahtarağa",
    "title": "Silahtarağa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Silahtarağa ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Silahtarağa",
    "type": "neighborhood"
  },
  {
    "slug": "topcular-cicekcilik-peyzaj-organizasyon",
    "name": "Topçular",
    "title": "Topçular Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Topçular ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Topçular",
    "type": "neighborhood"
  },
  {
    "slug": "yesilpinar-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilpınar",
    "title": "Yeşilpınar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeşilpınar ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "Yeşilpınar",
    "type": "neighborhood"
  },
  {
    "slug": "5levent-cicekcilik-peyzaj-organizasyon",
    "name": "5.levent",
    "title": "5.levent Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "5.levent ve Eyüpsultan çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Eyüpsultan",
    "neighborhood": "5.levent",
    "type": "neighborhood"
  },
  {
    "slug": "aksaray-cicekcilik-peyzaj-organizasyon",
    "name": "Aksaray",
    "title": "Aksaray Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Aksaray ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Aksaray",
    "type": "neighborhood"
  },
  {
    "slug": "aksemsettin-fatih-cicekcilik-peyzaj-organizasyon",
    "name": "Akşemsettin",
    "title": "Akşemsettin Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Akşemsettin ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Akşemsettin",
    "type": "neighborhood"
  },
  {
    "slug": "alemdar-cicekcilik-peyzaj-organizasyon",
    "name": "Alemdar",
    "title": "Alemdar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Alemdar ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Alemdar",
    "type": "neighborhood"
  },
  {
    "slug": "ali-kuscu-cicekcilik-peyzaj-organizasyon",
    "name": "Ali Kuşçu",
    "title": "Ali Kuşçu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ali Kuşçu ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Ali Kuşçu",
    "type": "neighborhood"
  },
  {
    "slug": "atikali-cicekcilik-peyzaj-organizasyon",
    "name": "Atikali",
    "title": "Atikali Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Atikali ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Atikali",
    "type": "neighborhood"
  },
  {
    "slug": "ayvansaray-cicekcilik-peyzaj-organizasyon",
    "name": "Ayvansaray",
    "title": "Ayvansaray Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ayvansaray ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Ayvansaray",
    "type": "neighborhood"
  },
  {
    "slug": "balabanaga-cicekcilik-peyzaj-organizasyon",
    "name": "Balabanağa",
    "title": "Balabanağa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Balabanağa ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Balabanağa",
    "type": "neighborhood"
  },
  {
    "slug": "balat-cicekcilik-peyzaj-organizasyon",
    "name": "Balat",
    "title": "Balat Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Balat ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Balat",
    "type": "neighborhood"
  },
  {
    "slug": "beyazit-cicekcilik-peyzaj-organizasyon",
    "name": "Beyazıt",
    "title": "Beyazıt Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Beyazıt ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Beyazıt",
    "type": "neighborhood"
  },
  {
    "slug": "binbirdirek-cicekcilik-peyzaj-organizasyon",
    "name": "Binbirdirek",
    "title": "Binbirdirek Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Binbirdirek ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Binbirdirek",
    "type": "neighborhood"
  },
  {
    "slug": "cankurtaran-cicekcilik-peyzaj-organizasyon",
    "name": "Cankurtaran",
    "title": "Cankurtaran Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cankurtaran ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Cankurtaran",
    "type": "neighborhood"
  },
  {
    "slug": "cerrahpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Cerrahpaşa",
    "title": "Cerrahpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cerrahpaşa ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Cerrahpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "cibali-cicekcilik-peyzaj-organizasyon",
    "name": "Cibali",
    "title": "Cibali Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cibali ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Cibali",
    "type": "neighborhood"
  },
  {
    "slug": "demirtas-cicekcilik-peyzaj-organizasyon",
    "name": "Demirtaş",
    "title": "Demirtaş Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Demirtaş ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Demirtaş",
    "type": "neighborhood"
  },
  {
    "slug": "dervis-ali-cicekcilik-peyzaj-organizasyon",
    "name": "Derviş Ali",
    "title": "Derviş Ali Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Derviş Ali ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Derviş Ali",
    "type": "neighborhood"
  },
  {
    "slug": "emin-sinan-cicekcilik-peyzaj-organizasyon",
    "name": "Emin Sinan",
    "title": "Emin Sinan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Emin Sinan ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Emin Sinan",
    "type": "neighborhood"
  },
  {
    "slug": "haci-kadin-cicekcilik-peyzaj-organizasyon",
    "name": "Hacı Kadın",
    "title": "Hacı Kadın Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hacı Kadın ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Hacı Kadın",
    "type": "neighborhood"
  },
  {
    "slug": "haseki-sultan-cicekcilik-peyzaj-organizasyon",
    "name": "Haseki Sultan",
    "title": "Haseki Sultan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Haseki Sultan ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Haseki Sultan",
    "type": "neighborhood"
  },
  {
    "slug": "hirka-i-serif-cicekcilik-peyzaj-organizasyon",
    "name": "Hırka-i Şerif",
    "title": "Hırka-i Şerif Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hırka-i Şerif ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Hırka-i Şerif",
    "type": "neighborhood"
  },
  {
    "slug": "hobyar-cicekcilik-peyzaj-organizasyon",
    "name": "Hobyar",
    "title": "Hobyar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hobyar ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Hobyar",
    "type": "neighborhood"
  },
  {
    "slug": "hoca-giyasettin-cicekcilik-peyzaj-organizasyon",
    "name": "Hoca Gıyasettin",
    "title": "Hoca Gıyasettin Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hoca Gıyasettin ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Hoca Gıyasettin",
    "type": "neighborhood"
  },
  {
    "slug": "hocapasa-cicekcilik-peyzaj-organizasyon",
    "name": "Hocapaşa",
    "title": "Hocapaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hocapaşa ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Hocapaşa",
    "type": "neighborhood"
  },
  {
    "slug": "iskenderpasa-cicekcilik-peyzaj-organizasyon",
    "name": "İskenderpaşa",
    "title": "İskenderpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İskenderpaşa ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "İskenderpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "kalenderhane-cicekcilik-peyzaj-organizasyon",
    "name": "Kalenderhane",
    "title": "Kalenderhane Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kalenderhane ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Kalenderhane",
    "type": "neighborhood"
  },
  {
    "slug": "karagumruk-cicekcilik-peyzaj-organizasyon",
    "name": "Karagümrük",
    "title": "Karagümrük Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Karagümrük ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Karagümrük",
    "type": "neighborhood"
  },
  {
    "slug": "katip-kasim-cicekcilik-peyzaj-organizasyon",
    "name": "Katip Kasım",
    "title": "Katip Kasım Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Katip Kasım ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Katip Kasım",
    "type": "neighborhood"
  },
  {
    "slug": "kemalpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Kemalpaşa",
    "title": "Kemalpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kemalpaşa ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Kemalpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "koca-mustafapasa-cicekcilik-peyzaj-organizasyon",
    "name": "Koca Mustafapaşa",
    "title": "Koca Mustafapaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Koca Mustafapaşa ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Koca Mustafapaşa",
    "type": "neighborhood"
  },
  {
    "slug": "kucuk-ayasofya-cicekcilik-peyzaj-organizasyon",
    "name": "Küçük Ayasofya",
    "title": "Küçük Ayasofya Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Küçük Ayasofya ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Küçük Ayasofya",
    "type": "neighborhood"
  },
  {
    "slug": "mercan-cicekcilik-peyzaj-organizasyon",
    "name": "Mercan",
    "title": "Mercan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mercan ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Mercan",
    "type": "neighborhood"
  },
  {
    "slug": "mesihpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Mesihpaşa",
    "title": "Mesihpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mesihpaşa ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Mesihpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "mevlanakapi-cicekcilik-peyzaj-organizasyon",
    "name": "Mevlanakapı",
    "title": "Mevlanakapı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mevlanakapı ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Mevlanakapı",
    "type": "neighborhood"
  },
  {
    "slug": "mimar-hayrettin-cicekcilik-peyzaj-organizasyon",
    "name": "Mimar Hayrettin",
    "title": "Mimar Hayrettin Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mimar Hayrettin ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Mimar Hayrettin",
    "type": "neighborhood"
  },
  {
    "slug": "mimar-kemalettin-cicekcilik-peyzaj-organizasyon",
    "name": "Mimar Kemalettin",
    "title": "Mimar Kemalettin Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mimar Kemalettin ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Mimar Kemalettin",
    "type": "neighborhood"
  },
  {
    "slug": "molla-fenari-cicekcilik-peyzaj-organizasyon",
    "name": "Molla Fenari",
    "title": "Molla Fenari Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Molla Fenari ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Molla Fenari",
    "type": "neighborhood"
  },
  {
    "slug": "molla-gurani-cicekcilik-peyzaj-organizasyon",
    "name": "Molla Gürani",
    "title": "Molla Gürani Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Molla Gürani ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Molla Gürani",
    "type": "neighborhood"
  },
  {
    "slug": "molla-husrev-cicekcilik-peyzaj-organizasyon",
    "name": "Molla Hüsrev",
    "title": "Molla Hüsrev Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Molla Hüsrev ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Molla Hüsrev",
    "type": "neighborhood"
  },
  {
    "slug": "muhsine-hatun-cicekcilik-peyzaj-organizasyon",
    "name": "Muhsine Hatun",
    "title": "Muhsine Hatun Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Muhsine Hatun ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Muhsine Hatun",
    "type": "neighborhood"
  },
  {
    "slug": "nisanca-cicekcilik-peyzaj-organizasyon",
    "name": "Nişanca",
    "title": "Nişanca Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Nişanca ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Nişanca",
    "type": "neighborhood"
  },
  {
    "slug": "rustempasa-cicekcilik-peyzaj-organizasyon",
    "name": "Rüstempaşa",
    "title": "Rüstempaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Rüstempaşa ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Rüstempaşa",
    "type": "neighborhood"
  },
  {
    "slug": "sarac-ishak-cicekcilik-peyzaj-organizasyon",
    "name": "Saraç İshak",
    "title": "Saraç İshak Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Saraç İshak ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Saraç İshak",
    "type": "neighborhood"
  },
  {
    "slug": "saridemir-cicekcilik-peyzaj-organizasyon",
    "name": "Sarıdemir",
    "title": "Sarıdemir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sarıdemir ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Sarıdemir",
    "type": "neighborhood"
  },
  {
    "slug": "seyyid-omer-cicekcilik-peyzaj-organizasyon",
    "name": "Seyyid Ömer",
    "title": "Seyyid Ömer Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Seyyid Ömer ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Seyyid Ömer",
    "type": "neighborhood"
  },
  {
    "slug": "silivrikapi-cicekcilik-peyzaj-organizasyon",
    "name": "Silivrikapı",
    "title": "Silivrikapı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Silivrikapı ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Silivrikapı",
    "type": "neighborhood"
  },
  {
    "slug": "sultan-ahmet-cicekcilik-peyzaj-organizasyon",
    "name": "Sultan Ahmet",
    "title": "Sultan Ahmet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sultan Ahmet ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Sultan Ahmet",
    "type": "neighborhood"
  },
  {
    "slug": "sururi-cicekcilik-peyzaj-organizasyon",
    "name": "Sururi",
    "title": "Sururi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sururi ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Sururi",
    "type": "neighborhood"
  },
  {
    "slug": "suleymaniye-cicekcilik-peyzaj-organizasyon",
    "name": "Süleymaniye",
    "title": "Süleymaniye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Süleymaniye ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Süleymaniye",
    "type": "neighborhood"
  },
  {
    "slug": "sumbul-efendi-cicekcilik-peyzaj-organizasyon",
    "name": "Sümbül Efendi",
    "title": "Sümbül Efendi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sümbül Efendi ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Sümbül Efendi",
    "type": "neighborhood"
  },
  {
    "slug": "sehremini-cicekcilik-peyzaj-organizasyon",
    "name": "Şehremini",
    "title": "Şehremini Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Şehremini ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Şehremini",
    "type": "neighborhood"
  },
  {
    "slug": "sehsuvar-bey-cicekcilik-peyzaj-organizasyon",
    "name": "Şehsuvar Bey",
    "title": "Şehsuvar Bey Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Şehsuvar Bey ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Şehsuvar Bey",
    "type": "neighborhood"
  },
  {
    "slug": "tahtakale-cicekcilik-peyzaj-organizasyon",
    "name": "Tahtakale",
    "title": "Tahtakale Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Tahtakale ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Tahtakale",
    "type": "neighborhood"
  },
  {
    "slug": "taya-hatun-cicekcilik-peyzaj-organizasyon",
    "name": "Taya Hatun",
    "title": "Taya Hatun Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Taya Hatun ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Taya Hatun",
    "type": "neighborhood"
  },
  {
    "slug": "topkapi-cicekcilik-peyzaj-organizasyon",
    "name": "Topkapı",
    "title": "Topkapı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Topkapı ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Topkapı",
    "type": "neighborhood"
  },
  {
    "slug": "yavuz-sinan-cicekcilik-peyzaj-organizasyon",
    "name": "Yavuz Sinan",
    "title": "Yavuz Sinan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yavuz Sinan ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Yavuz Sinan",
    "type": "neighborhood"
  },
  {
    "slug": "yavuz-sultan-selim-cicekcilik-peyzaj-organizasyon",
    "name": "Yavuz Sultan Selim",
    "title": "Yavuz Sultan Selim Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yavuz Sultan Selim ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Yavuz Sultan Selim",
    "type": "neighborhood"
  },
  {
    "slug": "yedikule-cicekcilik-peyzaj-organizasyon",
    "name": "Yedikule",
    "title": "Yedikule Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yedikule ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Yedikule",
    "type": "neighborhood"
  },
  {
    "slug": "zeyrek-cicekcilik-peyzaj-organizasyon",
    "name": "Zeyrek",
    "title": "Zeyrek Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Zeyrek ve Fatih çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Fatih",
    "neighborhood": "Zeyrek",
    "type": "neighborhood"
  },
  {
    "slug": "baglarbasi-cicekcilik-peyzaj-organizasyon",
    "name": "Bağlarbaşı",
    "title": "Bağlarbaşı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bağlarbaşı ve Gaziosmanpaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Bağlarbaşı",
    "type": "neighborhood"
  },
  {
    "slug": "barbaros-hayrettin-pasa-cicekcilik-peyzaj-organizasyon",
    "name": "Barbaros Hayrettin Paşa",
    "title": "Barbaros Hayrettin Paşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Barbaros Hayrettin Paşa ve Gaziosmanpaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Barbaros Hayrettin Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "fevzi-cakmak-cicekcilik-peyzaj-organizasyon",
    "name": "Fevzi Çakmak",
    "title": "Fevzi Çakmak Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fevzi Çakmak ve Gaziosmanpaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Fevzi Çakmak",
    "type": "neighborhood"
  },
  {
    "slug": "hurriyet-cicekcilik-peyzaj-organizasyon",
    "name": "Hürriyet",
    "title": "Hürriyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hürriyet ve Gaziosmanpaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Hürriyet",
    "type": "neighborhood"
  },
  {
    "slug": "karadeniz-cicekcilik-peyzaj-organizasyon",
    "name": "Karadeniz",
    "title": "Karadeniz Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Karadeniz ve Gaziosmanpaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Karadeniz",
    "type": "neighborhood"
  },
  {
    "slug": "karayollari-cicekcilik-peyzaj-organizasyon",
    "name": "Karayolları",
    "title": "Karayolları Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Karayolları ve Gaziosmanpaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Karayolları",
    "type": "neighborhood"
  },
  {
    "slug": "karlitepe-cicekcilik-peyzaj-organizasyon",
    "name": "Karlıtepe",
    "title": "Karlıtepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Karlıtepe ve Gaziosmanpaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Karlıtepe",
    "type": "neighborhood"
  },
  {
    "slug": "kazim-karabekir-cicekcilik-peyzaj-organizasyon",
    "name": "Kazım Karabekir",
    "title": "Kazım Karabekir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kazım Karabekir ve Gaziosmanpaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Kazım Karabekir",
    "type": "neighborhood"
  },
  {
    "slug": "merkez-gaziosmanpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Merkez",
    "title": "Merkez Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Merkez ve Gaziosmanpaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "mevlana-cicekcilik-peyzaj-organizasyon",
    "name": "Mevlana",
    "title": "Mevlana Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mevlana ve Gaziosmanpaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Mevlana",
    "type": "neighborhood"
  },
  {
    "slug": "pazarici-cicekcilik-peyzaj-organizasyon",
    "name": "Pazariçi",
    "title": "Pazariçi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Pazariçi ve Gaziosmanpaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Pazariçi",
    "type": "neighborhood"
  },
  {
    "slug": "sarigol-cicekcilik-peyzaj-organizasyon",
    "name": "Sarıgöl",
    "title": "Sarıgöl Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sarıgöl ve Gaziosmanpaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Sarıgöl",
    "type": "neighborhood"
  },
  {
    "slug": "semsipasa-cicekcilik-peyzaj-organizasyon",
    "name": "Şemsipaşa",
    "title": "Şemsipaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Şemsipaşa ve Gaziosmanpaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Şemsipaşa",
    "type": "neighborhood"
  },
  {
    "slug": "yeni-mahalle-gaziosmanpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Yeni Mahalle",
    "title": "Yeni Mahalle Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeni Mahalle ve Gaziosmanpaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Yeni Mahalle",
    "type": "neighborhood"
  },
  {
    "slug": "yenidogan-cicekcilik-peyzaj-organizasyon",
    "name": "Yenidoğan",
    "title": "Yenidoğan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yenidoğan ve Gaziosmanpaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Yenidoğan",
    "type": "neighborhood"
  },
  {
    "slug": "yildiztabya-cicekcilik-peyzaj-organizasyon",
    "name": "Yıldıztabya",
    "title": "Yıldıztabya Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yıldıztabya ve Gaziosmanpaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Yıldıztabya",
    "type": "neighborhood"
  },
  {
    "slug": "19-mayis-cicekcilik-peyzaj-organizasyon",
    "name": "19 Mayıs",
    "title": "19 Mayıs Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "19 Mayıs ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": "19 Mayıs",
    "type": "neighborhood"
  },
  {
    "slug": "acibadem-cicekcilik-peyzaj-organizasyon",
    "name": "Acıbadem",
    "title": "Acıbadem Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Acıbadem ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": "Acıbadem",
    "type": "neighborhood"
  },
  {
    "slug": "bostanci-cicekcilik-peyzaj-organizasyon",
    "name": "Bostancı",
    "title": "Bostancı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bostancı ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": "Bostancı",
    "type": "neighborhood"
  },
  {
    "slug": "caddebostan-cicekcilik-peyzaj-organizasyon",
    "name": "Caddebostan",
    "title": "Caddebostan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Caddebostan ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": "Caddebostan",
    "type": "neighborhood"
  },
  {
    "slug": "caferaga-cicekcilik-peyzaj-organizasyon",
    "name": "Caferağa",
    "title": "Caferağa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Caferağa ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": "Caferağa",
    "type": "neighborhood"
  },
  {
    "slug": "dumlupinar-cicekcilik-peyzaj-organizasyon",
    "name": "Dumlupınar",
    "title": "Dumlupınar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Dumlupınar ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": "Dumlupınar",
    "type": "neighborhood"
  },
  {
    "slug": "egitim-cicekcilik-peyzaj-organizasyon",
    "name": "Eğitim",
    "title": "Eğitim Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Eğitim ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": "Eğitim",
    "type": "neighborhood"
  },
  {
    "slug": "erenkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Erenköy",
    "title": "Erenköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Erenköy ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": "Erenköy",
    "type": "neighborhood"
  },
  {
    "slug": "fenerbahce-cicekcilik-peyzaj-organizasyon",
    "name": "Fenerbahçe",
    "title": "Fenerbahçe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fenerbahçe ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": "Fenerbahçe",
    "type": "neighborhood"
  },
  {
    "slug": "feneryolu-cicekcilik-peyzaj-organizasyon",
    "name": "Feneryolu",
    "title": "Feneryolu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Feneryolu ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": "Feneryolu",
    "type": "neighborhood"
  },
  {
    "slug": "fikirtepe-cicekcilik-peyzaj-organizasyon",
    "name": "Fikirtepe",
    "title": "Fikirtepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fikirtepe ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": "Fikirtepe",
    "type": "neighborhood"
  },
  {
    "slug": "goztepe-kadikoy-cicekcilik-peyzaj-organizasyon",
    "name": "Göztepe",
    "title": "Göztepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Göztepe ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": "Göztepe",
    "type": "neighborhood"
  },
  {
    "slug": "hasanpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Hasanpaşa",
    "title": "Hasanpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hasanpaşa ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": "Hasanpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "kosuyolu-cicekcilik-peyzaj-organizasyon",
    "name": "Koşuyolu",
    "title": "Koşuyolu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Koşuyolu ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": "Koşuyolu",
    "type": "neighborhood"
  },
  {
    "slug": "kozyatagi-cicekcilik-peyzaj-organizasyon",
    "name": "Kozyatağı",
    "title": "Kozyatağı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kozyatağı ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": "Kozyatağı",
    "type": "neighborhood"
  },
  {
    "slug": "merdivenkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Merdivenköy",
    "title": "Merdivenköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Merdivenköy ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": "Merdivenköy",
    "type": "neighborhood"
  },
  {
    "slug": "osmanaga-cicekcilik-peyzaj-organizasyon",
    "name": "Osmanağa",
    "title": "Osmanağa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Osmanağa ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": "Osmanağa",
    "type": "neighborhood"
  },
  {
    "slug": "rasimpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Rasimpaşa",
    "title": "Rasimpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Rasimpaşa ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": "Rasimpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "sahrayicedit-cicekcilik-peyzaj-organizasyon",
    "name": "Sahrayıcedit",
    "title": "Sahrayıcedit Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sahrayıcedit ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": "Sahrayıcedit",
    "type": "neighborhood"
  },
  {
    "slug": "suadiye-cicekcilik-peyzaj-organizasyon",
    "name": "Suadiye",
    "title": "Suadiye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Suadiye ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": "Suadiye",
    "type": "neighborhood"
  },
  {
    "slug": "zuhtupasa-cicekcilik-peyzaj-organizasyon",
    "name": "Zühtüpaşa",
    "title": "Zühtüpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Zühtüpaşa ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": "Zühtüpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "cicekcilik-peyzaj-organizasyon",
    "name": "",
    "title": " Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": " ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": null,
    "type": "neighborhood"
  },
  {
    "slug": "atalar-cicekcilik-peyzaj-organizasyon",
    "name": "Atalar",
    "title": "Atalar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Atalar ve Kartal çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kartal",
    "neighborhood": "Atalar",
    "type": "neighborhood"
  },
  {
    "slug": "cevizli-cicekcilik-peyzaj-organizasyon",
    "name": "Cevizli",
    "title": "Cevizli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cevizli ve Kartal çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kartal",
    "neighborhood": "Cevizli",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-kartal-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet ve Kartal çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kartal",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "cavusoglu-cicekcilik-peyzaj-organizasyon",
    "name": "Çavuşoğlu",
    "title": "Çavuşoğlu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çavuşoğlu ve Kartal çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kartal",
    "neighborhood": "Çavuşoğlu",
    "type": "neighborhood"
  },
  {
    "slug": "esentepe-kartal-cicekcilik-peyzaj-organizasyon",
    "name": "Esentepe",
    "title": "Esentepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Esentepe ve Kartal çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kartal",
    "neighborhood": "Esentepe",
    "type": "neighborhood"
  },
  {
    "slug": "gumuspinar-kartal-cicekcilik-peyzaj-organizasyon",
    "name": "Gümüşpınar",
    "title": "Gümüşpınar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gümüşpınar ve Kartal çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kartal",
    "neighborhood": "Gümüşpınar",
    "type": "neighborhood"
  },
  {
    "slug": "hurriyet-kartal-cicekcilik-peyzaj-organizasyon",
    "name": "Hürriyet",
    "title": "Hürriyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hürriyet ve Kartal çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kartal",
    "neighborhood": "Hürriyet",
    "type": "neighborhood"
  },
  {
    "slug": "karliktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Karlıktepe",
    "title": "Karlıktepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Karlıktepe ve Kartal çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kartal",
    "neighborhood": "Karlıktepe",
    "type": "neighborhood"
  },
  {
    "slug": "kordonboyu-cicekcilik-peyzaj-organizasyon",
    "name": "Kordonboyu",
    "title": "Kordonboyu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kordonboyu ve Kartal çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kartal",
    "neighborhood": "Kordonboyu",
    "type": "neighborhood"
  },
  {
    "slug": "orhantepe-cicekcilik-peyzaj-organizasyon",
    "name": "Orhantepe",
    "title": "Orhantepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Orhantepe ve Kartal çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kartal",
    "neighborhood": "Orhantepe",
    "type": "neighborhood"
  },
  {
    "slug": "orta-cicekcilik-peyzaj-organizasyon",
    "name": "Orta",
    "title": "Orta Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Orta ve Kartal çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kartal",
    "neighborhood": "Orta",
    "type": "neighborhood"
  },
  {
    "slug": "petrol-is-cicekcilik-peyzaj-organizasyon",
    "name": "Petrol İş",
    "title": "Petrol İş Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Petrol İş ve Kartal çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kartal",
    "neighborhood": "Petrol İş",
    "type": "neighborhood"
  },
  {
    "slug": "soganlik-yeni-cicekcilik-peyzaj-organizasyon",
    "name": "Soğanlık Yeni",
    "title": "Soğanlık Yeni Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Soğanlık Yeni ve Kartal çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kartal",
    "neighborhood": "Soğanlık Yeni",
    "type": "neighborhood"
  },
  {
    "slug": "topselvi-cicekcilik-peyzaj-organizasyon",
    "name": "Topselvi",
    "title": "Topselvi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Topselvi ve Kartal çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kartal",
    "neighborhood": "Topselvi",
    "type": "neighborhood"
  },
  {
    "slug": "ugur-mumcu-cicekcilik-peyzaj-organizasyon",
    "name": "Uğur Mumcu",
    "title": "Uğur Mumcu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Uğur Mumcu ve Kartal çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kartal",
    "neighborhood": "Uğur Mumcu",
    "type": "neighborhood"
  },
  {
    "slug": "yakacik-carsi-cicekcilik-peyzaj-organizasyon",
    "name": "Yakacık Çarşı",
    "title": "Yakacık Çarşı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yakacık Çarşı ve Kartal çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kartal",
    "neighborhood": "Yakacık Çarşı",
    "type": "neighborhood"
  },
  {
    "slug": "yakacik-yeni-cicekcilik-peyzaj-organizasyon",
    "name": "Yakacık Yeni",
    "title": "Yakacık Yeni Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yakacık Yeni ve Kartal çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kartal",
    "neighborhood": "Yakacık Yeni",
    "type": "neighborhood"
  },
  {
    "slug": "yali-cicekcilik-peyzaj-organizasyon",
    "name": "Yalı",
    "title": "Yalı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yalı ve Kartal çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kartal",
    "neighborhood": "Yalı",
    "type": "neighborhood"
  },
  {
    "slug": "yukari-cicekcilik-peyzaj-organizasyon",
    "name": "Yukarı",
    "title": "Yukarı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yukarı ve Kartal çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kartal",
    "neighborhood": "Yukarı",
    "type": "neighborhood"
  },
  {
    "slug": "yunus-cicekcilik-peyzaj-organizasyon",
    "name": "Yunus",
    "title": "Yunus Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yunus ve Kartal çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kartal",
    "neighborhood": "Yunus",
    "type": "neighborhood"
  },
  {
    "slug": "ayazaga-cicekcilik-peyzaj-organizasyon",
    "name": "Ayazağa",
    "title": "Ayazağa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ayazağa ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Ayazağa",
    "type": "neighborhood"
  },
  {
    "slug": "bahcekoy-kemer-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçeköy Kemer",
    "title": "Bahçeköy Kemer Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bahçeköy Kemer ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Bahçeköy Kemer",
    "type": "neighborhood"
  },
  {
    "slug": "bahcekoy-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçeköy Merkez",
    "title": "Bahçeköy Merkez Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bahçeköy Merkez ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Bahçeköy Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "bahcekoy-yeni-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçeköy Yeni",
    "title": "Bahçeköy Yeni Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bahçeköy Yeni ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Bahçeköy Yeni",
    "type": "neighborhood"
  },
  {
    "slug": "baltalimani-cicekcilik-peyzaj-organizasyon",
    "name": "Baltalimanı",
    "title": "Baltalimanı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Baltalimanı ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Baltalimanı",
    "type": "neighborhood"
  },
  {
    "slug": "buyukdere-cicekcilik-peyzaj-organizasyon",
    "name": "Büyükdere",
    "title": "Büyükdere Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Büyükdere ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Büyükdere",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-sariyer-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "camlitepe-cicekcilik-peyzaj-organizasyon",
    "name": "Çamlıtepe",
    "title": "Çamlıtepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çamlıtepe ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Çamlıtepe",
    "type": "neighborhood"
  },
  {
    "slug": "cayirbasi-cicekcilik-peyzaj-organizasyon",
    "name": "Çayırbaşı",
    "title": "Çayırbaşı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çayırbaşı ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Çayırbaşı",
    "type": "neighborhood"
  },
  {
    "slug": "darussafaka-cicekcilik-peyzaj-organizasyon",
    "name": "Darüşşafaka",
    "title": "Darüşşafaka Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Darüşşafaka ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Darüşşafaka",
    "type": "neighborhood"
  },
  {
    "slug": "demircikoy-cicekcilik-peyzaj-organizasyon",
    "name": "Demirciköy",
    "title": "Demirciköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Demirciköy ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Demirciköy",
    "type": "neighborhood"
  },
  {
    "slug": "emirgan-cicekcilik-peyzaj-organizasyon",
    "name": "Emirgan",
    "title": "Emirgan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Emirgan ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Emirgan",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-sultan-mehmet-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih Sultan Mehmet",
    "title": "Fatih Sultan Mehmet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fatih Sultan Mehmet ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Fatih Sultan Mehmet",
    "type": "neighborhood"
  },
  {
    "slug": "ferahevler-cicekcilik-peyzaj-organizasyon",
    "name": "Ferahevler",
    "title": "Ferahevler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ferahevler ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Ferahevler",
    "type": "neighborhood"
  },
  {
    "slug": "garipce-cicekcilik-peyzaj-organizasyon",
    "name": "Garipçe",
    "title": "Garipçe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Garipçe ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Garipçe",
    "type": "neighborhood"
  },
  {
    "slug": "gumusdere-cicekcilik-peyzaj-organizasyon",
    "name": "Gümüşdere",
    "title": "Gümüşdere Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gümüşdere ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Gümüşdere",
    "type": "neighborhood"
  },
  {
    "slug": "huzur-cicekcilik-peyzaj-organizasyon",
    "name": "Huzur",
    "title": "Huzur Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Huzur ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Huzur",
    "type": "neighborhood"
  },
  {
    "slug": "istinye-cicekcilik-peyzaj-organizasyon",
    "name": "İstinye",
    "title": "İstinye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İstinye ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "İstinye",
    "type": "neighborhood"
  },
  {
    "slug": "kazim-karabekir-pasa-cicekcilik-peyzaj-organizasyon",
    "name": "Kazım Karabekir Paşa",
    "title": "Kazım Karabekir Paşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kazım Karabekir Paşa ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Kazım Karabekir Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "kisirkaya-cicekcilik-peyzaj-organizasyon",
    "name": "Kısırkaya",
    "title": "Kısırkaya Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kısırkaya ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Kısırkaya",
    "type": "neighborhood"
  },
  {
    "slug": "kirecburnu-cicekcilik-peyzaj-organizasyon",
    "name": "Kireçburnu",
    "title": "Kireçburnu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kireçburnu ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Kireçburnu",
    "type": "neighborhood"
  },
  {
    "slug": "kocatas-cicekcilik-peyzaj-organizasyon",
    "name": "Kocataş",
    "title": "Kocataş Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kocataş ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Kocataş",
    "type": "neighborhood"
  },
  {
    "slug": "kumkoy-kilyos-cicekcilik-peyzaj-organizasyon",
    "name": "Kumköy (kilyos)",
    "title": "Kumköy (kilyos) Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kumköy (kilyos) ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Kumköy (kilyos)",
    "type": "neighborhood"
  },
  {
    "slug": "maden-sariyer-cicekcilik-peyzaj-organizasyon",
    "name": "Maden",
    "title": "Maden Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Maden ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Maden",
    "type": "neighborhood"
  },
  {
    "slug": "maslak-cicekcilik-peyzaj-organizasyon",
    "name": "Maslak",
    "title": "Maslak Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Maslak ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Maslak",
    "type": "neighborhood"
  },
  {
    "slug": "pinar-cicekcilik-peyzaj-organizasyon",
    "name": "Pınar",
    "title": "Pınar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Pınar ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Pınar",
    "type": "neighborhood"
  },
  {
    "slug": "poligon-cicekcilik-peyzaj-organizasyon",
    "name": "Poligon",
    "title": "Poligon Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Poligon ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Poligon",
    "type": "neighborhood"
  },
  {
    "slug": "ptt-evleri-cicekcilik-peyzaj-organizasyon",
    "name": "Ptt Evleri",
    "title": "Ptt Evleri Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ptt Evleri ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Ptt Evleri",
    "type": "neighborhood"
  },
  {
    "slug": "resitpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Reşitpaşa",
    "title": "Reşitpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Reşitpaşa ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Reşitpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "rumelifeneri-cicekcilik-peyzaj-organizasyon",
    "name": "Rumelifeneri",
    "title": "Rumelifeneri Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Rumelifeneri ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Rumelifeneri",
    "type": "neighborhood"
  },
  {
    "slug": "rumelihisari-cicekcilik-peyzaj-organizasyon",
    "name": "Rumelihisarı",
    "title": "Rumelihisarı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Rumelihisarı ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Rumelihisarı",
    "type": "neighborhood"
  },
  {
    "slug": "rumelikavagi-cicekcilik-peyzaj-organizasyon",
    "name": "Rumelikavağı",
    "title": "Rumelikavağı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Rumelikavağı ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Rumelikavağı",
    "type": "neighborhood"
  },
  {
    "slug": "sariyer-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Sarıyer Merkez",
    "title": "Sarıyer Merkez Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sarıyer Merkez ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Sarıyer Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "tarabya-cicekcilik-peyzaj-organizasyon",
    "name": "Tarabya",
    "title": "Tarabya Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Tarabya ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Tarabya",
    "type": "neighborhood"
  },
  {
    "slug": "uskumrukoy-cicekcilik-peyzaj-organizasyon",
    "name": "Uskumruköy",
    "title": "Uskumruköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Uskumruköy ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Uskumruköy",
    "type": "neighborhood"
  },
  {
    "slug": "yeni-cicekcilik-peyzaj-organizasyon",
    "name": "Yeni",
    "title": "Yeni Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeni ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Yeni",
    "type": "neighborhood"
  },
  {
    "slug": "yenikoy-cicekcilik-peyzaj-organizasyon",
    "name": "Yeniköy",
    "title": "Yeniköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeniköy ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Yeniköy",
    "type": "neighborhood"
  },
  {
    "slug": "zekeriyakoy-cicekcilik-peyzaj-organizasyon",
    "name": "Zekeriyaköy",
    "title": "Zekeriyaköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Zekeriyaköy ve Sarıyer çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sarıyer",
    "neighborhood": "Zekeriyaköy",
    "type": "neighborhood"
  },
  {
    "slug": "akoren-cicekcilik-peyzaj-organizasyon",
    "name": "Akören",
    "title": "Akören Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Akören ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Akören",
    "type": "neighborhood"
  },
  {
    "slug": "alibey-cicekcilik-peyzaj-organizasyon",
    "name": "Alibey",
    "title": "Alibey Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Alibey ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Alibey",
    "type": "neighborhood"
  },
  {
    "slug": "alipasa-cicekcilik-peyzaj-organizasyon",
    "name": "Alipaşa",
    "title": "Alipaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Alipaşa ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Alipaşa",
    "type": "neighborhood"
  },
  {
    "slug": "balaban-cicekcilik-peyzaj-organizasyon",
    "name": "Balaban",
    "title": "Balaban Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Balaban ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Balaban",
    "type": "neighborhood"
  },
  {
    "slug": "bekirli-cicekcilik-peyzaj-organizasyon",
    "name": "Bekirli",
    "title": "Bekirli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bekirli ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Bekirli",
    "type": "neighborhood"
  },
  {
    "slug": "beyciler-cicekcilik-peyzaj-organizasyon",
    "name": "Beyciler",
    "title": "Beyciler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Beyciler ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Beyciler",
    "type": "neighborhood"
  },
  {
    "slug": "buyuk-cavuslu-cicekcilik-peyzaj-organizasyon",
    "name": "Büyük Çavuşlu",
    "title": "Büyük Çavuşlu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Büyük Çavuşlu ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Büyük Çavuşlu",
    "type": "neighborhood"
  },
  {
    "slug": "buyuk-kilicli-cicekcilik-peyzaj-organizasyon",
    "name": "Büyük Kılıçlı",
    "title": "Büyük Kılıçlı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Büyük Kılıçlı ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Büyük Kılıçlı",
    "type": "neighborhood"
  },
  {
    "slug": "buyuk-sinekli-cicekcilik-peyzaj-organizasyon",
    "name": "Büyük Sinekli",
    "title": "Büyük Sinekli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Büyük Sinekli ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Büyük Sinekli",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-silivri-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "cayirdere-cicekcilik-peyzaj-organizasyon",
    "name": "Çayırdere",
    "title": "Çayırdere Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çayırdere ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Çayırdere",
    "type": "neighborhood"
  },
  {
    "slug": "celtik-cicekcilik-peyzaj-organizasyon",
    "name": "Çeltik",
    "title": "Çeltik Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çeltik ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Çeltik",
    "type": "neighborhood"
  },
  {
    "slug": "danamandira-cicekcilik-peyzaj-organizasyon",
    "name": "Danamandıra",
    "title": "Danamandıra Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Danamandıra ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Danamandıra",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-silivri-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fatih ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "fener-cicekcilik-peyzaj-organizasyon",
    "name": "Fener",
    "title": "Fener Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fener ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Fener",
    "type": "neighborhood"
  },
  {
    "slug": "fevzipasa-cicekcilik-peyzaj-organizasyon",
    "name": "Fevzipaşa",
    "title": "Fevzipaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fevzipaşa ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Fevzipaşa",
    "type": "neighborhood"
  },
  {
    "slug": "gazitepe-cicekcilik-peyzaj-organizasyon",
    "name": "Gazitepe",
    "title": "Gazitepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gazitepe ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Gazitepe",
    "type": "neighborhood"
  },
  {
    "slug": "gumusyaka-cicekcilik-peyzaj-organizasyon",
    "name": "Gümüşyaka",
    "title": "Gümüşyaka Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gümüşyaka ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Gümüşyaka",
    "type": "neighborhood"
  },
  {
    "slug": "hurriyet-silivri-cicekcilik-peyzaj-organizasyon",
    "name": "Hürriyet",
    "title": "Hürriyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hürriyet ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Hürriyet",
    "type": "neighborhood"
  },
  {
    "slug": "ismetpasa-cicekcilik-peyzaj-organizasyon",
    "name": "İsmetpaşa",
    "title": "İsmetpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İsmetpaşa ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "İsmetpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "kadikoy-silivri-cicekcilik-peyzaj-organizasyon",
    "name": "Kadıköy",
    "title": "Kadıköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kadıköy ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Kadıköy",
    "type": "neighborhood"
  },
  {
    "slug": "kavakli-cicekcilik-peyzaj-organizasyon",
    "name": "Kavaklı",
    "title": "Kavaklı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kavaklı ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Kavaklı",
    "type": "neighborhood"
  },
  {
    "slug": "kurfalli-cicekcilik-peyzaj-organizasyon",
    "name": "Kurfallı",
    "title": "Kurfallı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kurfallı ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Kurfallı",
    "type": "neighborhood"
  },
  {
    "slug": "kucuk-kilicli-cicekcilik-peyzaj-organizasyon",
    "name": "Küçük Kılıçlı",
    "title": "Küçük Kılıçlı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Küçük Kılıçlı ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Küçük Kılıçlı",
    "type": "neighborhood"
  },
  {
    "slug": "kucuk-sinekli-cicekcilik-peyzaj-organizasyon",
    "name": "Küçük Sinekli",
    "title": "Küçük Sinekli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Küçük Sinekli ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Küçük Sinekli",
    "type": "neighborhood"
  },
  {
    "slug": "mimar-sinan-silivri-cicekcilik-peyzaj-organizasyon",
    "name": "Mimar Sinan",
    "title": "Mimar Sinan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mimar Sinan ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Mimar Sinan",
    "type": "neighborhood"
  },
  {
    "slug": "ortakoy-silivri-cicekcilik-peyzaj-organizasyon",
    "name": "Ortaköy",
    "title": "Ortaköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ortaköy ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Ortaköy",
    "type": "neighborhood"
  },
  {
    "slug": "piri-mehmet-pasa-cicekcilik-peyzaj-organizasyon",
    "name": "Piri Mehmet Paşa",
    "title": "Piri Mehmet Paşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Piri Mehmet Paşa ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Piri Mehmet Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "sancaktepe-silivri-cicekcilik-peyzaj-organizasyon",
    "name": "Sancaktepe",
    "title": "Sancaktepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sancaktepe ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Sancaktepe",
    "type": "neighborhood"
  },
  {
    "slug": "sayalar-cicekcilik-peyzaj-organizasyon",
    "name": "Sayalar",
    "title": "Sayalar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sayalar ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Sayalar",
    "type": "neighborhood"
  },
  {
    "slug": "selimpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Selimpaşa",
    "title": "Selimpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Selimpaşa ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Selimpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "semizkumlar-cicekcilik-peyzaj-organizasyon",
    "name": "Semizkumlar",
    "title": "Semizkumlar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Semizkumlar ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Semizkumlar",
    "type": "neighborhood"
  },
  {
    "slug": "seymen-cicekcilik-peyzaj-organizasyon",
    "name": "Seymen",
    "title": "Seymen Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Seymen ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Seymen",
    "type": "neighborhood"
  },
  {
    "slug": "yeni-silivri-cicekcilik-peyzaj-organizasyon",
    "name": "Yeni",
    "title": "Yeni Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeni ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Yeni",
    "type": "neighborhood"
  },
  {
    "slug": "yolcati-cicekcilik-peyzaj-organizasyon",
    "name": "Yolçatı",
    "title": "Yolçatı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yolçatı ve Silivri çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Silivri",
    "neighborhood": "Yolçatı",
    "type": "neighborhood"
  },
  {
    "slug": "agacdere-cicekcilik-peyzaj-organizasyon",
    "name": "Ağaçdere",
    "title": "Ağaçdere Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ağaçdere ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Ağaçdere",
    "type": "neighborhood"
  },
  {
    "slug": "agva-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Ağva Merkez",
    "title": "Ağva Merkez Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ağva Merkez ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Ağva Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "ahmetli-cicekcilik-peyzaj-organizasyon",
    "name": "Ahmetli",
    "title": "Ahmetli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ahmetli ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Ahmetli",
    "type": "neighborhood"
  },
  {
    "slug": "akcakese-cicekcilik-peyzaj-organizasyon",
    "name": "Akçakese",
    "title": "Akçakese Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Akçakese ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Akçakese",
    "type": "neighborhood"
  },
  {
    "slug": "alacali-cicekcilik-peyzaj-organizasyon",
    "name": "Alacalı",
    "title": "Alacalı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Alacalı ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Alacalı",
    "type": "neighborhood"
  },
  {
    "slug": "avcikoru-cicekcilik-peyzaj-organizasyon",
    "name": "Avcıkoru",
    "title": "Avcıkoru Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Avcıkoru ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Avcıkoru",
    "type": "neighborhood"
  },
  {
    "slug": "balibey-cicekcilik-peyzaj-organizasyon",
    "name": "Balibey",
    "title": "Balibey Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Balibey ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Balibey",
    "type": "neighborhood"
  },
  {
    "slug": "bickidere-cicekcilik-peyzaj-organizasyon",
    "name": "Bıçkıdere",
    "title": "Bıçkıdere Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bıçkıdere ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Bıçkıdere",
    "type": "neighborhood"
  },
  {
    "slug": "bozgoca-cicekcilik-peyzaj-organizasyon",
    "name": "Bozgoca",
    "title": "Bozgoca Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bozgoca ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Bozgoca",
    "type": "neighborhood"
  },
  {
    "slug": "bucakli-cicekcilik-peyzaj-organizasyon",
    "name": "Bucaklı",
    "title": "Bucaklı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bucaklı ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Bucaklı",
    "type": "neighborhood"
  },
  {
    "slug": "catakli-cicekcilik-peyzaj-organizasyon",
    "name": "Çataklı",
    "title": "Çataklı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çataklı ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Çataklı",
    "type": "neighborhood"
  },
  {
    "slug": "cavus-cicekcilik-peyzaj-organizasyon",
    "name": "Çavuş",
    "title": "Çavuş Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çavuş ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Çavuş",
    "type": "neighborhood"
  },
  {
    "slug": "cayirbasi-sile-cicekcilik-peyzaj-organizasyon",
    "name": "Çayırbaşı",
    "title": "Çayırbaşı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çayırbaşı ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Çayırbaşı",
    "type": "neighborhood"
  },
  {
    "slug": "celebi-cicekcilik-peyzaj-organizasyon",
    "name": "Çelebi",
    "title": "Çelebi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çelebi ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Çelebi",
    "type": "neighborhood"
  },
  {
    "slug": "cengilli-cicekcilik-peyzaj-organizasyon",
    "name": "Çengilli",
    "title": "Çengilli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çengilli ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Çengilli",
    "type": "neighborhood"
  },
  {
    "slug": "darlik-cicekcilik-peyzaj-organizasyon",
    "name": "Darlık",
    "title": "Darlık Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Darlık ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Darlık",
    "type": "neighborhood"
  },
  {
    "slug": "degirmencayiri-cicekcilik-peyzaj-organizasyon",
    "name": "Değirmençayırı",
    "title": "Değirmençayırı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Değirmençayırı ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Değirmençayırı",
    "type": "neighborhood"
  },
  {
    "slug": "dogancili-cicekcilik-peyzaj-organizasyon",
    "name": "Doğancılı",
    "title": "Doğancılı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Doğancılı ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Doğancılı",
    "type": "neighborhood"
  },
  {
    "slug": "erenler-cicekcilik-peyzaj-organizasyon",
    "name": "Erenler",
    "title": "Erenler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Erenler ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Erenler",
    "type": "neighborhood"
  },
  {
    "slug": "esenceli-cicekcilik-peyzaj-organizasyon",
    "name": "Esenceli",
    "title": "Esenceli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Esenceli ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Esenceli",
    "type": "neighborhood"
  },
  {
    "slug": "geredeli-cicekcilik-peyzaj-organizasyon",
    "name": "Geredeli",
    "title": "Geredeli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Geredeli ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Geredeli",
    "type": "neighborhood"
  },
  {
    "slug": "goce-cicekcilik-peyzaj-organizasyon",
    "name": "Göçe",
    "title": "Göçe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Göçe ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Göçe",
    "type": "neighborhood"
  },
  {
    "slug": "gokmasli-cicekcilik-peyzaj-organizasyon",
    "name": "Gökmaşlı",
    "title": "Gökmaşlı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gökmaşlı ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Gökmaşlı",
    "type": "neighborhood"
  },
  {
    "slug": "goksu-sile-cicekcilik-peyzaj-organizasyon",
    "name": "Göksu",
    "title": "Göksu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Göksu ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Göksu",
    "type": "neighborhood"
  },
  {
    "slug": "haci-kasim-cicekcilik-peyzaj-organizasyon",
    "name": "Hacı Kasım",
    "title": "Hacı Kasım Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hacı Kasım ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Hacı Kasım",
    "type": "neighborhood"
  },
  {
    "slug": "hacilli-cicekcilik-peyzaj-organizasyon",
    "name": "Hacıllı",
    "title": "Hacıllı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hacıllı ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Hacıllı",
    "type": "neighborhood"
  },
  {
    "slug": "hasanli-cicekcilik-peyzaj-organizasyon",
    "name": "Hasanlı",
    "title": "Hasanlı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hasanlı ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Hasanlı",
    "type": "neighborhood"
  },
  {
    "slug": "imrendere-cicekcilik-peyzaj-organizasyon",
    "name": "İmrendere",
    "title": "İmrendere Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İmrendere ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "İmrendere",
    "type": "neighborhood"
  },
  {
    "slug": "imrenli-cicekcilik-peyzaj-organizasyon",
    "name": "İmrenli",
    "title": "İmrenli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İmrenli ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "İmrenli",
    "type": "neighborhood"
  },
  {
    "slug": "isakoy-cicekcilik-peyzaj-organizasyon",
    "name": "İsaköy",
    "title": "İsaköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İsaköy ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "İsaköy",
    "type": "neighborhood"
  },
  {
    "slug": "kabakoz-cicekcilik-peyzaj-organizasyon",
    "name": "Kabakoz",
    "title": "Kabakoz Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kabakoz ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Kabakoz",
    "type": "neighborhood"
  },
  {
    "slug": "kadikoy-sile-cicekcilik-peyzaj-organizasyon",
    "name": "Kadıköy",
    "title": "Kadıköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kadıköy ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Kadıköy",
    "type": "neighborhood"
  },
  {
    "slug": "kalem-cicekcilik-peyzaj-organizasyon",
    "name": "Kalem",
    "title": "Kalem Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kalem ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Kalem",
    "type": "neighborhood"
  },
  {
    "slug": "karabeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Karabeyli",
    "title": "Karabeyli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Karabeyli ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Karabeyli",
    "type": "neighborhood"
  },
  {
    "slug": "karacakoy-cicekcilik-peyzaj-organizasyon",
    "name": "Karacaköy",
    "title": "Karacaköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Karacaköy ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Karacaköy",
    "type": "neighborhood"
  },
  {
    "slug": "karakiraz-cicekcilik-peyzaj-organizasyon",
    "name": "Karakiraz",
    "title": "Karakiraz Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Karakiraz ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Karakiraz",
    "type": "neighborhood"
  },
  {
    "slug": "karamandere-sile-cicekcilik-peyzaj-organizasyon",
    "name": "Karamandere",
    "title": "Karamandere Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Karamandere ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Karamandere",
    "type": "neighborhood"
  },
  {
    "slug": "kervansaray-cicekcilik-peyzaj-organizasyon",
    "name": "Kervansaray",
    "title": "Kervansaray Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kervansaray ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Kervansaray",
    "type": "neighborhood"
  },
  {
    "slug": "kizilca-cicekcilik-peyzaj-organizasyon",
    "name": "Kızılca",
    "title": "Kızılca Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kızılca ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Kızılca",
    "type": "neighborhood"
  },
  {
    "slug": "korucu-cicekcilik-peyzaj-organizasyon",
    "name": "Korucu",
    "title": "Korucu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Korucu ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Korucu",
    "type": "neighborhood"
  },
  {
    "slug": "komurluk-cicekcilik-peyzaj-organizasyon",
    "name": "Kömürlük",
    "title": "Kömürlük Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kömürlük ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Kömürlük",
    "type": "neighborhood"
  },
  {
    "slug": "kumbaba-cicekcilik-peyzaj-organizasyon",
    "name": "Kumbaba",
    "title": "Kumbaba Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kumbaba ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Kumbaba",
    "type": "neighborhood"
  },
  {
    "slug": "kurfalli-sile-cicekcilik-peyzaj-organizasyon",
    "name": "Kurfallı",
    "title": "Kurfallı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kurfallı ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Kurfallı",
    "type": "neighborhood"
  },
  {
    "slug": "kurna-cicekcilik-peyzaj-organizasyon",
    "name": "Kurna",
    "title": "Kurna Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kurna ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Kurna",
    "type": "neighborhood"
  },
  {
    "slug": "mesrutiyet-cicekcilik-peyzaj-organizasyon",
    "name": "Meşrutiyet",
    "title": "Meşrutiyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Meşrutiyet ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Meşrutiyet",
    "type": "neighborhood"
  },
  {
    "slug": "orucoglu-cicekcilik-peyzaj-organizasyon",
    "name": "Oruçoğlu",
    "title": "Oruçoğlu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Oruçoğlu ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Oruçoğlu",
    "type": "neighborhood"
  },
  {
    "slug": "osmankoy-cicekcilik-peyzaj-organizasyon",
    "name": "Osmanköy",
    "title": "Osmanköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Osmanköy ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Osmanköy",
    "type": "neighborhood"
  },
  {
    "slug": "ovacik-cicekcilik-peyzaj-organizasyon",
    "name": "Ovacık",
    "title": "Ovacık Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ovacık ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Ovacık",
    "type": "neighborhood"
  },
  {
    "slug": "sahilkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Sahilköy",
    "title": "Sahilköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sahilköy ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Sahilköy",
    "type": "neighborhood"
  },
  {
    "slug": "satmazli-cicekcilik-peyzaj-organizasyon",
    "name": "Satmazlı",
    "title": "Satmazlı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Satmazlı ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Satmazlı",
    "type": "neighborhood"
  },
  {
    "slug": "sofular-cicekcilik-peyzaj-organizasyon",
    "name": "Sofular",
    "title": "Sofular Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sofular ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Sofular",
    "type": "neighborhood"
  },
  {
    "slug": "sogullu-cicekcilik-peyzaj-organizasyon",
    "name": "Soğullu",
    "title": "Soğullu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Soğullu ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Soğullu",
    "type": "neighborhood"
  },
  {
    "slug": "sortullu-cicekcilik-peyzaj-organizasyon",
    "name": "Sortullu",
    "title": "Sortullu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sortullu ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Sortullu",
    "type": "neighborhood"
  },
  {
    "slug": "suayipli-cicekcilik-peyzaj-organizasyon",
    "name": "Şuayipli",
    "title": "Şuayipli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Şuayipli ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Şuayipli",
    "type": "neighborhood"
  },
  {
    "slug": "teke-cicekcilik-peyzaj-organizasyon",
    "name": "Teke",
    "title": "Teke Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Teke ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Teke",
    "type": "neighborhood"
  },
  {
    "slug": "ulupelit-cicekcilik-peyzaj-organizasyon",
    "name": "Ulupelit",
    "title": "Ulupelit Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ulupelit ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Ulupelit",
    "type": "neighborhood"
  },
  {
    "slug": "uvezli-cicekcilik-peyzaj-organizasyon",
    "name": "Üvezli",
    "title": "Üvezli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Üvezli ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Üvezli",
    "type": "neighborhood"
  },
  {
    "slug": "yaka-cicekcilik-peyzaj-organizasyon",
    "name": "Yaka",
    "title": "Yaka Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yaka ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Yaka",
    "type": "neighborhood"
  },
  {
    "slug": "yaylali-cicekcilik-peyzaj-organizasyon",
    "name": "Yaylalı",
    "title": "Yaylalı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yaylalı ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Yaylalı",
    "type": "neighborhood"
  },
  {
    "slug": "yazimanayir-cicekcilik-peyzaj-organizasyon",
    "name": "Yazımanayır",
    "title": "Yazımanayır Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yazımanayır ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Yazımanayır",
    "type": "neighborhood"
  },
  {
    "slug": "yenikoy-sile-cicekcilik-peyzaj-organizasyon",
    "name": "Yeniköy",
    "title": "Yeniköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeniköy ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Yeniköy",
    "type": "neighborhood"
  },
  {
    "slug": "yesilvadi-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilvadi",
    "title": "Yeşilvadi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeşilvadi ve Şile çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şile",
    "neighborhood": "Yeşilvadi",
    "type": "neighborhood"
  },
  {
    "slug": "19-mayis-sisli-cicekcilik-peyzaj-organizasyon",
    "name": "19 Mayıs",
    "title": "19 Mayıs Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "19 Mayıs ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "19 Mayıs",
    "type": "neighborhood"
  },
  {
    "slug": "bozkurt-cicekcilik-peyzaj-organizasyon",
    "name": "Bozkurt",
    "title": "Bozkurt Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bozkurt ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Bozkurt",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-sisli-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "duatepe-cicekcilik-peyzaj-organizasyon",
    "name": "Duatepe",
    "title": "Duatepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Duatepe ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Duatepe",
    "type": "neighborhood"
  },
  {
    "slug": "ergenekon-cicekcilik-peyzaj-organizasyon",
    "name": "Ergenekon",
    "title": "Ergenekon Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ergenekon ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Ergenekon",
    "type": "neighborhood"
  },
  {
    "slug": "esentepe-sisli-cicekcilik-peyzaj-organizasyon",
    "name": "Esentepe",
    "title": "Esentepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Esentepe ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Esentepe",
    "type": "neighborhood"
  },
  {
    "slug": "eskisehir-cicekcilik-peyzaj-organizasyon",
    "name": "Eskişehir",
    "title": "Eskişehir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Eskişehir ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Eskişehir",
    "type": "neighborhood"
  },
  {
    "slug": "ferikoy-cicekcilik-peyzaj-organizasyon",
    "name": "Feriköy",
    "title": "Feriköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Feriköy ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Feriköy",
    "type": "neighborhood"
  },
  {
    "slug": "fulya-cicekcilik-peyzaj-organizasyon",
    "name": "Fulya",
    "title": "Fulya Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fulya ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Fulya",
    "type": "neighborhood"
  },
  {
    "slug": "gulbahar-cicekcilik-peyzaj-organizasyon",
    "name": "Gülbahar",
    "title": "Gülbahar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gülbahar ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Gülbahar",
    "type": "neighborhood"
  },
  {
    "slug": "halaskargazi-cicekcilik-peyzaj-organizasyon",
    "name": "Halaskargazi",
    "title": "Halaskargazi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Halaskargazi ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Halaskargazi",
    "type": "neighborhood"
  },
  {
    "slug": "halide-edip-adivar-cicekcilik-peyzaj-organizasyon",
    "name": "Halide Edip Adıvar",
    "title": "Halide Edip Adıvar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Halide Edip Adıvar ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Halide Edip Adıvar",
    "type": "neighborhood"
  },
  {
    "slug": "halil-rifat-pasa-cicekcilik-peyzaj-organizasyon",
    "name": "Halil Rıfat Paşa",
    "title": "Halil Rıfat Paşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Halil Rıfat Paşa ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Halil Rıfat Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "harbiye-cicekcilik-peyzaj-organizasyon",
    "name": "Harbiye",
    "title": "Harbiye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Harbiye ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Harbiye",
    "type": "neighborhood"
  },
  {
    "slug": "inonu-cicekcilik-peyzaj-organizasyon",
    "name": "İnönü",
    "title": "İnönü Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İnönü ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "İnönü",
    "type": "neighborhood"
  },
  {
    "slug": "izzet-pasa-cicekcilik-peyzaj-organizasyon",
    "name": "İzzet Paşa",
    "title": "İzzet Paşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İzzet Paşa ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "İzzet Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "kaptanpasa-sisli-cicekcilik-peyzaj-organizasyon",
    "name": "Kaptanpaşa",
    "title": "Kaptanpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kaptanpaşa ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Kaptanpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "kustepe-cicekcilik-peyzaj-organizasyon",
    "name": "Kuştepe",
    "title": "Kuştepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kuştepe ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Kuştepe",
    "type": "neighborhood"
  },
  {
    "slug": "mahmut-sevket-pasa-cicekcilik-peyzaj-organizasyon",
    "name": "Mahmut Şevket Paşa",
    "title": "Mahmut Şevket Paşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mahmut Şevket Paşa ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Mahmut Şevket Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "mecidiyekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Mecidiyeköy",
    "title": "Mecidiyeköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mecidiyeköy ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Mecidiyeköy",
    "type": "neighborhood"
  },
  {
    "slug": "merkez-sisli-cicekcilik-peyzaj-organizasyon",
    "name": "Merkez",
    "title": "Merkez Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Merkez ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "mesrutiyet-sisli-cicekcilik-peyzaj-organizasyon",
    "name": "Meşrutiyet",
    "title": "Meşrutiyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Meşrutiyet ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Meşrutiyet",
    "type": "neighborhood"
  },
  {
    "slug": "pasa-cicekcilik-peyzaj-organizasyon",
    "name": "Paşa",
    "title": "Paşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Paşa ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "tesvikiye-cicekcilik-peyzaj-organizasyon",
    "name": "Teşvikiye",
    "title": "Teşvikiye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Teşvikiye ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Teşvikiye",
    "type": "neighborhood"
  },
  {
    "slug": "yayla-cicekcilik-peyzaj-organizasyon",
    "name": "Yayla",
    "title": "Yayla Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yayla ve Şişli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Şişli",
    "neighborhood": "Yayla",
    "type": "neighborhood"
  },
  {
    "slug": "acibadem-uskudar-cicekcilik-peyzaj-organizasyon",
    "name": "Acıbadem",
    "title": "Acıbadem Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Acıbadem ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Acıbadem",
    "type": "neighborhood"
  },
  {
    "slug": "ahmediye-cicekcilik-peyzaj-organizasyon",
    "name": "Ahmediye",
    "title": "Ahmediye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ahmediye ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Ahmediye",
    "type": "neighborhood"
  },
  {
    "slug": "altunizade-cicekcilik-peyzaj-organizasyon",
    "name": "Altunizade",
    "title": "Altunizade Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Altunizade ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Altunizade",
    "type": "neighborhood"
  },
  {
    "slug": "aziz-mahmut-hudayi-cicekcilik-peyzaj-organizasyon",
    "name": "Aziz Mahmut Hüdayi",
    "title": "Aziz Mahmut Hüdayi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Aziz Mahmut Hüdayi ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Aziz Mahmut Hüdayi",
    "type": "neighborhood"
  },
  {
    "slug": "bahcelievler-uskudar-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçelievler",
    "title": "Bahçelievler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bahçelievler ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Bahçelievler",
    "type": "neighborhood"
  },
  {
    "slug": "barbaros-cicekcilik-peyzaj-organizasyon",
    "name": "Barbaros",
    "title": "Barbaros Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Barbaros ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Barbaros",
    "type": "neighborhood"
  },
  {
    "slug": "beylerbeyi-cicekcilik-peyzaj-organizasyon",
    "name": "Beylerbeyi",
    "title": "Beylerbeyi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Beylerbeyi ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Beylerbeyi",
    "type": "neighborhood"
  },
  {
    "slug": "bulgurlu-cicekcilik-peyzaj-organizasyon",
    "name": "Bulgurlu",
    "title": "Bulgurlu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bulgurlu ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Bulgurlu",
    "type": "neighborhood"
  },
  {
    "slug": "burhaniye-cicekcilik-peyzaj-organizasyon",
    "name": "Burhaniye",
    "title": "Burhaniye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Burhaniye ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Burhaniye",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-uskudar-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "cengelkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Çengelköy",
    "title": "Çengelköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çengelköy ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Çengelköy",
    "type": "neighborhood"
  },
  {
    "slug": "ferah-cicekcilik-peyzaj-organizasyon",
    "name": "Ferah",
    "title": "Ferah Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ferah ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Ferah",
    "type": "neighborhood"
  },
  {
    "slug": "guzeltepe-uskudar-cicekcilik-peyzaj-organizasyon",
    "name": "Güzeltepe",
    "title": "Güzeltepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Güzeltepe ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Güzeltepe",
    "type": "neighborhood"
  },
  {
    "slug": "icadiye-cicekcilik-peyzaj-organizasyon",
    "name": "İcadiye",
    "title": "İcadiye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İcadiye ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "İcadiye",
    "type": "neighborhood"
  },
  {
    "slug": "kandilli-cicekcilik-peyzaj-organizasyon",
    "name": "Kandilli",
    "title": "Kandilli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kandilli ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Kandilli",
    "type": "neighborhood"
  },
  {
    "slug": "kisikli-cicekcilik-peyzaj-organizasyon",
    "name": "Kısıklı",
    "title": "Kısıklı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kısıklı ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Kısıklı",
    "type": "neighborhood"
  },
  {
    "slug": "kirazlitepe-cicekcilik-peyzaj-organizasyon",
    "name": "Kirazlıtepe",
    "title": "Kirazlıtepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kirazlıtepe ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Kirazlıtepe",
    "type": "neighborhood"
  },
  {
    "slug": "kuleli-cicekcilik-peyzaj-organizasyon",
    "name": "Kuleli",
    "title": "Kuleli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kuleli ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Kuleli",
    "type": "neighborhood"
  },
  {
    "slug": "kuzguncuk-cicekcilik-peyzaj-organizasyon",
    "name": "Kuzguncuk",
    "title": "Kuzguncuk Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kuzguncuk ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Kuzguncuk",
    "type": "neighborhood"
  },
  {
    "slug": "kucuk-camlica-cicekcilik-peyzaj-organizasyon",
    "name": "Küçük Çamlıca",
    "title": "Küçük Çamlıca Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Küçük Çamlıca ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Küçük Çamlıca",
    "type": "neighborhood"
  },
  {
    "slug": "kucuksu-cicekcilik-peyzaj-organizasyon",
    "name": "Küçüksu",
    "title": "Küçüksu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Küçüksu ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Küçüksu",
    "type": "neighborhood"
  },
  {
    "slug": "kupluce-cicekcilik-peyzaj-organizasyon",
    "name": "Küplüce",
    "title": "Küplüce Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Küplüce ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Küplüce",
    "type": "neighborhood"
  },
  {
    "slug": "mehmet-akif-ersoy-cicekcilik-peyzaj-organizasyon",
    "name": "Mehmet Akif Ersoy",
    "title": "Mehmet Akif Ersoy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mehmet Akif Ersoy ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Mehmet Akif Ersoy",
    "type": "neighborhood"
  },
  {
    "slug": "mimar-sinan-uskudar-cicekcilik-peyzaj-organizasyon",
    "name": "Mimar Sinan",
    "title": "Mimar Sinan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mimar Sinan ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Mimar Sinan",
    "type": "neighborhood"
  },
  {
    "slug": "muratreis-cicekcilik-peyzaj-organizasyon",
    "name": "Muratreis",
    "title": "Muratreis Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Muratreis ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Muratreis",
    "type": "neighborhood"
  },
  {
    "slug": "salacak-cicekcilik-peyzaj-organizasyon",
    "name": "Salacak",
    "title": "Salacak Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Salacak ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Salacak",
    "type": "neighborhood"
  },
  {
    "slug": "selami-ali-cicekcilik-peyzaj-organizasyon",
    "name": "Selami Ali",
    "title": "Selami Ali Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Selami Ali ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Selami Ali",
    "type": "neighborhood"
  },
  {
    "slug": "selimiye-cicekcilik-peyzaj-organizasyon",
    "name": "Selimiye",
    "title": "Selimiye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Selimiye ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Selimiye",
    "type": "neighborhood"
  },
  {
    "slug": "sultantepe-cicekcilik-peyzaj-organizasyon",
    "name": "Sultantepe",
    "title": "Sultantepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sultantepe ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Sultantepe",
    "type": "neighborhood"
  },
  {
    "slug": "unalan-cicekcilik-peyzaj-organizasyon",
    "name": "Ünalan",
    "title": "Ünalan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ünalan ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Ünalan",
    "type": "neighborhood"
  },
  {
    "slug": "valide-i-atik-cicekcilik-peyzaj-organizasyon",
    "name": "Valide-i Atik",
    "title": "Valide-i Atik Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Valide-i Atik ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Valide-i Atik",
    "type": "neighborhood"
  },
  {
    "slug": "yavuzturk-cicekcilik-peyzaj-organizasyon",
    "name": "Yavuztürk",
    "title": "Yavuztürk Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yavuztürk ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Yavuztürk",
    "type": "neighborhood"
  },
  {
    "slug": "zeynep-kamil-cicekcilik-peyzaj-organizasyon",
    "name": "Zeynep Kamil",
    "title": "Zeynep Kamil Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Zeynep Kamil ve Üsküdar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Üsküdar",
    "neighborhood": "Zeynep Kamil",
    "type": "neighborhood"
  },
  {
    "slug": "bestelsiz-cicekcilik-peyzaj-organizasyon",
    "name": "Beştelsiz",
    "title": "Beştelsiz Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Beştelsiz ve Zeytinburnu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Zeytinburnu",
    "neighborhood": "Beştelsiz",
    "type": "neighborhood"
  },
  {
    "slug": "cirpici-cicekcilik-peyzaj-organizasyon",
    "name": "Çırpıcı",
    "title": "Çırpıcı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çırpıcı ve Zeytinburnu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Zeytinburnu",
    "neighborhood": "Çırpıcı",
    "type": "neighborhood"
  },
  {
    "slug": "gokalp-cicekcilik-peyzaj-organizasyon",
    "name": "Gökalp",
    "title": "Gökalp Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gökalp ve Zeytinburnu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Zeytinburnu",
    "neighborhood": "Gökalp",
    "type": "neighborhood"
  },
  {
    "slug": "kazlicesme-cicekcilik-peyzaj-organizasyon",
    "name": "Kazlıçeşme",
    "title": "Kazlıçeşme Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kazlıçeşme ve Zeytinburnu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Zeytinburnu",
    "neighborhood": "Kazlıçeşme",
    "type": "neighborhood"
  },
  {
    "slug": "maltepe-zeytinburnu-cicekcilik-peyzaj-organizasyon",
    "name": "Maltepe",
    "title": "Maltepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Maltepe ve Zeytinburnu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Zeytinburnu",
    "neighborhood": "Maltepe",
    "type": "neighborhood"
  },
  {
    "slug": "merkezefendi-cicekcilik-peyzaj-organizasyon",
    "name": "Merkezefendi",
    "title": "Merkezefendi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Merkezefendi ve Zeytinburnu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Zeytinburnu",
    "neighborhood": "Merkezefendi",
    "type": "neighborhood"
  },
  {
    "slug": "nuripasa-cicekcilik-peyzaj-organizasyon",
    "name": "Nuripaşa",
    "title": "Nuripaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Nuripaşa ve Zeytinburnu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Zeytinburnu",
    "neighborhood": "Nuripaşa",
    "type": "neighborhood"
  },
  {
    "slug": "seyitnizam-cicekcilik-peyzaj-organizasyon",
    "name": "Seyitnizam",
    "title": "Seyitnizam Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Seyitnizam ve Zeytinburnu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Zeytinburnu",
    "neighborhood": "Seyitnizam",
    "type": "neighborhood"
  },
  {
    "slug": "sumer-cicekcilik-peyzaj-organizasyon",
    "name": "Sümer",
    "title": "Sümer Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sümer ve Zeytinburnu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Zeytinburnu",
    "neighborhood": "Sümer",
    "type": "neighborhood"
  },
  {
    "slug": "telsiz-cicekcilik-peyzaj-organizasyon",
    "name": "Telsiz",
    "title": "Telsiz Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Telsiz ve Zeytinburnu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Zeytinburnu",
    "neighborhood": "Telsiz",
    "type": "neighborhood"
  },
  {
    "slug": "veliefendi-cicekcilik-peyzaj-organizasyon",
    "name": "Veliefendi",
    "title": "Veliefendi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Veliefendi ve Zeytinburnu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Zeytinburnu",
    "neighborhood": "Veliefendi",
    "type": "neighborhood"
  },
  {
    "slug": "yenidogan-zeytinburnu-cicekcilik-peyzaj-organizasyon",
    "name": "Yenidoğan",
    "title": "Yenidoğan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yenidoğan ve Zeytinburnu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Zeytinburnu",
    "neighborhood": "Yenidoğan",
    "type": "neighborhood"
  },
  {
    "slug": "yesiltepe-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşiltepe",
    "title": "Yeşiltepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeşiltepe ve Zeytinburnu çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Zeytinburnu",
    "neighborhood": "Yeşiltepe",
    "type": "neighborhood"
  },
  {
    "slug": "19-mayis-buyukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "19 Mayıs",
    "title": "19 Mayıs Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "19 Mayıs ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "19 Mayıs",
    "type": "neighborhood"
  },
  {
    "slug": "ahmediye-buyukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Ahmediye",
    "title": "Ahmediye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ahmediye ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Ahmediye",
    "type": "neighborhood"
  },
  {
    "slug": "alkent-2000-cicekcilik-peyzaj-organizasyon",
    "name": "Alkent 2000",
    "title": "Alkent 2000 Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Alkent 2000 ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Alkent 2000",
    "type": "neighborhood"
  },
  {
    "slug": "ataturk-buyukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Atatürk",
    "title": "Atatürk Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Atatürk ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Atatürk",
    "type": "neighborhood"
  },
  {
    "slug": "bahcelievler-buyukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçelievler",
    "title": "Bahçelievler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bahçelievler ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Bahçelievler",
    "type": "neighborhood"
  },
  {
    "slug": "celaliye-cicekcilik-peyzaj-organizasyon",
    "name": "Celaliye",
    "title": "Celaliye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Celaliye ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Celaliye",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-buyukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "cakmakli-cicekcilik-peyzaj-organizasyon",
    "name": "Çakmaklı",
    "title": "Çakmaklı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çakmaklı ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Çakmaklı",
    "type": "neighborhood"
  },
  {
    "slug": "dizdariye-cicekcilik-peyzaj-organizasyon",
    "name": "Dizdariye",
    "title": "Dizdariye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Dizdariye ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Dizdariye",
    "type": "neighborhood"
  },
  {
    "slug": "ekinoba-cicekcilik-peyzaj-organizasyon",
    "name": "Ekinoba",
    "title": "Ekinoba Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ekinoba ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Ekinoba",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-buyukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fatih ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "guzelce-cicekcilik-peyzaj-organizasyon",
    "name": "Güzelce",
    "title": "Güzelce Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Güzelce ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Güzelce",
    "type": "neighborhood"
  },
  {
    "slug": "hurriyet-buyukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Hürriyet",
    "title": "Hürriyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hürriyet ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Hürriyet",
    "type": "neighborhood"
  },
  {
    "slug": "kamiloba-cicekcilik-peyzaj-organizasyon",
    "name": "Kamiloba",
    "title": "Kamiloba Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kamiloba ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Kamiloba",
    "type": "neighborhood"
  },
  {
    "slug": "karaagac-cicekcilik-peyzaj-organizasyon",
    "name": "Karaağaç",
    "title": "Karaağaç Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Karaağaç ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Karaağaç",
    "type": "neighborhood"
  },
  {
    "slug": "kumburgaz-cicekcilik-peyzaj-organizasyon",
    "name": "Kumburgaz",
    "title": "Kumburgaz Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kumburgaz ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Kumburgaz",
    "type": "neighborhood"
  },
  {
    "slug": "mimaroba-cicekcilik-peyzaj-organizasyon",
    "name": "Mimaroba",
    "title": "Mimaroba Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mimaroba ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Mimaroba",
    "type": "neighborhood"
  },
  {
    "slug": "mimarsinan-cicekcilik-peyzaj-organizasyon",
    "name": "Mimarsinan",
    "title": "Mimarsinan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mimarsinan ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Mimarsinan",
    "type": "neighborhood"
  },
  {
    "slug": "murat-cesme-cicekcilik-peyzaj-organizasyon",
    "name": "Murat Çesme",
    "title": "Murat Çesme Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Murat Çesme ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Murat Çesme",
    "type": "neighborhood"
  },
  {
    "slug": "pinartepe-cicekcilik-peyzaj-organizasyon",
    "name": "Pınartepe",
    "title": "Pınartepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Pınartepe ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Pınartepe",
    "type": "neighborhood"
  },
  {
    "slug": "sinanoba-cicekcilik-peyzaj-organizasyon",
    "name": "Sinanoba",
    "title": "Sinanoba Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sinanoba ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Sinanoba",
    "type": "neighborhood"
  },
  {
    "slug": "turkoba-cicekcilik-peyzaj-organizasyon",
    "name": "Türkoba",
    "title": "Türkoba Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Türkoba ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Türkoba",
    "type": "neighborhood"
  },
  {
    "slug": "ulus-buyukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Ulus",
    "title": "Ulus Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ulus ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Ulus",
    "type": "neighborhood"
  },
  {
    "slug": "yenimahalle-buyukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Yenimahalle",
    "title": "Yenimahalle Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yenimahalle ve Büyükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Büyükçekmece",
    "neighborhood": "Yenimahalle",
    "type": "neighborhood"
  },
  {
    "slug": "caglayan-cicekcilik-peyzaj-organizasyon",
    "name": "Çağlayan",
    "title": "Çağlayan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çağlayan ve Kağıthane çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kağıthane",
    "neighborhood": "Çağlayan",
    "type": "neighborhood"
  },
  {
    "slug": "celiktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Çeliktepe",
    "title": "Çeliktepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çeliktepe ve Kağıthane çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kağıthane",
    "neighborhood": "Çeliktepe",
    "type": "neighborhood"
  },
  {
    "slug": "emniyet-evleri-cicekcilik-peyzaj-organizasyon",
    "name": "Emniyet Evleri",
    "title": "Emniyet Evleri Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Emniyet Evleri ve Kağıthane çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kağıthane",
    "neighborhood": "Emniyet Evleri",
    "type": "neighborhood"
  },
  {
    "slug": "gultepe-cicekcilik-peyzaj-organizasyon",
    "name": "Gültepe",
    "title": "Gültepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gültepe ve Kağıthane çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kağıthane",
    "neighborhood": "Gültepe",
    "type": "neighborhood"
  },
  {
    "slug": "gursel-cicekcilik-peyzaj-organizasyon",
    "name": "Gürsel",
    "title": "Gürsel Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gürsel ve Kağıthane çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kağıthane",
    "neighborhood": "Gürsel",
    "type": "neighborhood"
  },
  {
    "slug": "hamidiye-cicekcilik-peyzaj-organizasyon",
    "name": "Hamidiye",
    "title": "Hamidiye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hamidiye ve Kağıthane çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kağıthane",
    "neighborhood": "Hamidiye",
    "type": "neighborhood"
  },
  {
    "slug": "harmantepe-cicekcilik-peyzaj-organizasyon",
    "name": "Harmantepe",
    "title": "Harmantepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Harmantepe ve Kağıthane çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kağıthane",
    "neighborhood": "Harmantepe",
    "type": "neighborhood"
  },
  {
    "slug": "hurriyet-kagithane-cicekcilik-peyzaj-organizasyon",
    "name": "Hürriyet",
    "title": "Hürriyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hürriyet ve Kağıthane çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kağıthane",
    "neighborhood": "Hürriyet",
    "type": "neighborhood"
  },
  {
    "slug": "mehmet-akif-ersoy-kagithane-cicekcilik-peyzaj-organizasyon",
    "name": "Mehmet Akif Ersoy",
    "title": "Mehmet Akif Ersoy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mehmet Akif Ersoy ve Kağıthane çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kağıthane",
    "neighborhood": "Mehmet Akif Ersoy",
    "type": "neighborhood"
  },
  {
    "slug": "merkez-kagithane-cicekcilik-peyzaj-organizasyon",
    "name": "Merkez",
    "title": "Merkez Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Merkez ve Kağıthane çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kağıthane",
    "neighborhood": "Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "nurtepe-cicekcilik-peyzaj-organizasyon",
    "name": "Nurtepe",
    "title": "Nurtepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Nurtepe ve Kağıthane çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kağıthane",
    "neighborhood": "Nurtepe",
    "type": "neighborhood"
  },
  {
    "slug": "ortabayir-cicekcilik-peyzaj-organizasyon",
    "name": "Ortabayır",
    "title": "Ortabayır Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ortabayır ve Kağıthane çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kağıthane",
    "neighborhood": "Ortabayır",
    "type": "neighborhood"
  },
  {
    "slug": "seyrantepe-cicekcilik-peyzaj-organizasyon",
    "name": "Seyrantepe",
    "title": "Seyrantepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Seyrantepe ve Kağıthane çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kağıthane",
    "neighborhood": "Seyrantepe",
    "type": "neighborhood"
  },
  {
    "slug": "sultan-selim-cicekcilik-peyzaj-organizasyon",
    "name": "Sultan Selim",
    "title": "Sultan Selim Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sultan Selim ve Kağıthane çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kağıthane",
    "neighborhood": "Sultan Selim",
    "type": "neighborhood"
  },
  {
    "slug": "sirintepe-cicekcilik-peyzaj-organizasyon",
    "name": "Şirintepe",
    "title": "Şirintepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Şirintepe ve Kağıthane çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kağıthane",
    "neighborhood": "Şirintepe",
    "type": "neighborhood"
  },
  {
    "slug": "talatpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Talatpaşa",
    "title": "Talatpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Talatpaşa ve Kağıthane çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kağıthane",
    "neighborhood": "Talatpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "telsizler-cicekcilik-peyzaj-organizasyon",
    "name": "Telsizler",
    "title": "Telsizler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Telsizler ve Kağıthane çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kağıthane",
    "neighborhood": "Telsizler",
    "type": "neighborhood"
  },
  {
    "slug": "yahya-kemal-cicekcilik-peyzaj-organizasyon",
    "name": "Yahya Kemal",
    "title": "Yahya Kemal Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yahya Kemal ve Kağıthane çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kağıthane",
    "neighborhood": "Yahya Kemal",
    "type": "neighborhood"
  },
  {
    "slug": "yesilce-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilce",
    "title": "Yeşilce Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeşilce ve Kağıthane çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kağıthane",
    "neighborhood": "Yeşilce",
    "type": "neighborhood"
  },
  {
    "slug": "atakent-cicekcilik-peyzaj-organizasyon",
    "name": "Atakent",
    "title": "Atakent Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Atakent ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "Atakent",
    "type": "neighborhood"
  },
  {
    "slug": "ataturk-kucukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Atatürk",
    "title": "Atatürk Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Atatürk ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "Atatürk",
    "type": "neighborhood"
  },
  {
    "slug": "besyol-cicekcilik-peyzaj-organizasyon",
    "name": "Beşyol",
    "title": "Beşyol Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Beşyol ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "Beşyol",
    "type": "neighborhood"
  },
  {
    "slug": "cennet-cicekcilik-peyzaj-organizasyon",
    "name": "Cennet",
    "title": "Cennet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cennet ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "Cennet",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-kucukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-kucukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fatih ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "fevzi-cakmak-kucukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Fevzi Çakmak",
    "title": "Fevzi Çakmak Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fevzi Çakmak ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "Fevzi Çakmak",
    "type": "neighborhood"
  },
  {
    "slug": "gultepe-kucukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Gültepe",
    "title": "Gültepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gültepe ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "Gültepe",
    "type": "neighborhood"
  },
  {
    "slug": "halkali-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Halkalı Merkez",
    "title": "Halkalı Merkez Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Halkalı Merkez ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "Halkalı Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "inonu-kucukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "İnönü",
    "title": "İnönü Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İnönü ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "İnönü",
    "type": "neighborhood"
  },
  {
    "slug": "istasyon-cicekcilik-peyzaj-organizasyon",
    "name": "İstasyon",
    "title": "İstasyon Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İstasyon ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "İstasyon",
    "type": "neighborhood"
  },
  {
    "slug": "kanarya-cicekcilik-peyzaj-organizasyon",
    "name": "Kanarya",
    "title": "Kanarya Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kanarya ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "Kanarya",
    "type": "neighborhood"
  },
  {
    "slug": "kartaltepe-kucukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Kartaltepe",
    "title": "Kartaltepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kartaltepe ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "Kartaltepe",
    "type": "neighborhood"
  },
  {
    "slug": "kemalpasa-kucukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Kemalpaşa",
    "title": "Kemalpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kemalpaşa ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "Kemalpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "kucukcekmece-ikitelliosb-cicekcilik-peyzaj-organizasyon",
    "name": "Küçükçekmece İkitelliosb",
    "title": "Küçükçekmece İkitelliosb Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Küçükçekmece İkitelliosb ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "Küçükçekmece İkitelliosb",
    "type": "neighborhood"
  },
  {
    "slug": "mehmet-akif-cicekcilik-peyzaj-organizasyon",
    "name": "Mehmet Akif",
    "title": "Mehmet Akif Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mehmet Akif ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "Mehmet Akif",
    "type": "neighborhood"
  },
  {
    "slug": "sogutlu-cesme-cicekcilik-peyzaj-organizasyon",
    "name": "Söğütlü Çeşme",
    "title": "Söğütlü Çeşme Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Söğütlü Çeşme ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "Söğütlü Çeşme",
    "type": "neighborhood"
  },
  {
    "slug": "sultan-murat-cicekcilik-peyzaj-organizasyon",
    "name": "Sultan Murat",
    "title": "Sultan Murat Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sultan Murat ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "Sultan Murat",
    "type": "neighborhood"
  },
  {
    "slug": "tevfikbey-cicekcilik-peyzaj-organizasyon",
    "name": "Tevfikbey",
    "title": "Tevfikbey Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Tevfikbey ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "Tevfikbey",
    "type": "neighborhood"
  },
  {
    "slug": "yarimburgaz-cicekcilik-peyzaj-organizasyon",
    "name": "Yarımburgaz",
    "title": "Yarımburgaz Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yarımburgaz ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "Yarımburgaz",
    "type": "neighborhood"
  },
  {
    "slug": "yeni-mahalle-kucukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Yeni Mahalle",
    "title": "Yeni Mahalle Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeni Mahalle ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "Yeni Mahalle",
    "type": "neighborhood"
  },
  {
    "slug": "yesilova-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilova",
    "title": "Yeşilova Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeşilova ve Küçükçekmece çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Küçükçekmece",
    "neighborhood": "Yeşilova",
    "type": "neighborhood"
  },
  {
    "slug": "ahmet-yesevi-cicekcilik-peyzaj-organizasyon",
    "name": "Ahmet Yesevi",
    "title": "Ahmet Yesevi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ahmet Yesevi ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Ahmet Yesevi",
    "type": "neighborhood"
  },
  {
    "slug": "bahcelievler-pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçelievler",
    "title": "Bahçelievler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bahçelievler ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Bahçelievler",
    "type": "neighborhood"
  },
  {
    "slug": "ballica-cicekcilik-peyzaj-organizasyon",
    "name": "Ballıca",
    "title": "Ballıca Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ballıca ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Ballıca",
    "type": "neighborhood"
  },
  {
    "slug": "bati-cicekcilik-peyzaj-organizasyon",
    "name": "Batı",
    "title": "Batı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Batı ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Batı",
    "type": "neighborhood"
  },
  {
    "slug": "camcesme-cicekcilik-peyzaj-organizasyon",
    "name": "Çamçeşme",
    "title": "Çamçeşme Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çamçeşme ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Çamçeşme",
    "type": "neighborhood"
  },
  {
    "slug": "camlik-cicekcilik-peyzaj-organizasyon",
    "name": "Çamlık",
    "title": "Çamlık Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çamlık ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Çamlık",
    "type": "neighborhood"
  },
  {
    "slug": "cinardere-cicekcilik-peyzaj-organizasyon",
    "name": "Çınardere",
    "title": "Çınardere Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çınardere ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Çınardere",
    "type": "neighborhood"
  },
  {
    "slug": "dogu-cicekcilik-peyzaj-organizasyon",
    "name": "Doğu",
    "title": "Doğu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Doğu ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Doğu",
    "type": "neighborhood"
  },
  {
    "slug": "dumlupinar-pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Dumlupınar",
    "title": "Dumlupınar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Dumlupınar ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Dumlupınar",
    "type": "neighborhood"
  },
  {
    "slug": "emirli-cicekcilik-peyzaj-organizasyon",
    "name": "Emirli",
    "title": "Emirli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Emirli ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Emirli",
    "type": "neighborhood"
  },
  {
    "slug": "ertugrul-gazi-cicekcilik-peyzaj-organizasyon",
    "name": "Ertuğrul Gazi",
    "title": "Ertuğrul Gazi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ertuğrul Gazi ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Ertuğrul Gazi",
    "type": "neighborhood"
  },
  {
    "slug": "esenler-pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Esenler",
    "title": "Esenler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Esenler ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Esenler",
    "type": "neighborhood"
  },
  {
    "slug": "esenyali-cicekcilik-peyzaj-organizasyon",
    "name": "Esenyalı",
    "title": "Esenyalı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Esenyalı ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Esenyalı",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fatih ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "fevzi-cakmak-pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Fevzi Çakmak",
    "title": "Fevzi Çakmak Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fevzi Çakmak ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Fevzi Çakmak",
    "type": "neighborhood"
  },
  {
    "slug": "gocbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Göçbeyli",
    "title": "Göçbeyli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Göçbeyli ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Göçbeyli",
    "type": "neighborhood"
  },
  {
    "slug": "gullu-baglar-cicekcilik-peyzaj-organizasyon",
    "name": "Güllü Bağlar",
    "title": "Güllü Bağlar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Güllü Bağlar ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Güllü Bağlar",
    "type": "neighborhood"
  },
  {
    "slug": "guzelyali-cicekcilik-peyzaj-organizasyon",
    "name": "Güzelyalı",
    "title": "Güzelyalı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Güzelyalı ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Güzelyalı",
    "type": "neighborhood"
  },
  {
    "slug": "harmandere-cicekcilik-peyzaj-organizasyon",
    "name": "Harmandere",
    "title": "Harmandere Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Harmandere ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Harmandere",
    "type": "neighborhood"
  },
  {
    "slug": "kavakpinar-cicekcilik-peyzaj-organizasyon",
    "name": "Kavakpınar",
    "title": "Kavakpınar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kavakpınar ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Kavakpınar",
    "type": "neighborhood"
  },
  {
    "slug": "kaynarca-pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Kaynarca",
    "title": "Kaynarca Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kaynarca ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Kaynarca",
    "type": "neighborhood"
  },
  {
    "slug": "kurna-pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Kurna",
    "title": "Kurna Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kurna ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Kurna",
    "type": "neighborhood"
  },
  {
    "slug": "kurtdogmus-cicekcilik-peyzaj-organizasyon",
    "name": "Kurtdoğmuş",
    "title": "Kurtdoğmuş Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kurtdoğmuş ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Kurtdoğmuş",
    "type": "neighborhood"
  },
  {
    "slug": "kurtkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Kurtköy",
    "title": "Kurtköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kurtköy ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Kurtköy",
    "type": "neighborhood"
  },
  {
    "slug": "orhangazi-cicekcilik-peyzaj-organizasyon",
    "name": "Orhangazi",
    "title": "Orhangazi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Orhangazi ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Orhangazi",
    "type": "neighborhood"
  },
  {
    "slug": "orta-pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Orta",
    "title": "Orta Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Orta ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Orta",
    "type": "neighborhood"
  },
  {
    "slug": "ramazanoglu-cicekcilik-peyzaj-organizasyon",
    "name": "Ramazanoğlu",
    "title": "Ramazanoğlu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ramazanoğlu ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Ramazanoğlu",
    "type": "neighborhood"
  },
  {
    "slug": "sanayi-cicekcilik-peyzaj-organizasyon",
    "name": "Sanayi",
    "title": "Sanayi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sanayi ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Sanayi",
    "type": "neighborhood"
  },
  {
    "slug": "sapan-baglari-cicekcilik-peyzaj-organizasyon",
    "name": "Sapan Bağları",
    "title": "Sapan Bağları Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sapan Bağları ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Sapan Bağları",
    "type": "neighborhood"
  },
  {
    "slug": "suluntepe-cicekcilik-peyzaj-organizasyon",
    "name": "Sülüntepe",
    "title": "Sülüntepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sülüntepe ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Sülüntepe",
    "type": "neighborhood"
  },
  {
    "slug": "seyhli-cicekcilik-peyzaj-organizasyon",
    "name": "Şeyhli",
    "title": "Şeyhli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Şeyhli ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Şeyhli",
    "type": "neighborhood"
  },
  {
    "slug": "velibaba-cicekcilik-peyzaj-organizasyon",
    "name": "Velibaba",
    "title": "Velibaba Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Velibaba ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Velibaba",
    "type": "neighborhood"
  },
  {
    "slug": "yayalar-cicekcilik-peyzaj-organizasyon",
    "name": "Yayalar",
    "title": "Yayalar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yayalar ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Yayalar",
    "type": "neighborhood"
  },
  {
    "slug": "yeni-pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Yeni",
    "title": "Yeni Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeni ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Yeni",
    "type": "neighborhood"
  },
  {
    "slug": "yenisehir-pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Yenişehir",
    "title": "Yenişehir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yenişehir ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Yenişehir",
    "type": "neighborhood"
  },
  {
    "slug": "yesilbaglar-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilbağlar",
    "title": "Yeşilbağlar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeşilbağlar ve Pendik çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Pendik",
    "neighborhood": "Yeşilbağlar",
    "type": "neighborhood"
  },
  {
    "slug": "adem-yavuz-cicekcilik-peyzaj-organizasyon",
    "name": "Adem Yavuz",
    "title": "Adem Yavuz Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Adem Yavuz ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Adem Yavuz",
    "type": "neighborhood"
  },
  {
    "slug": "altinsehir-cicekcilik-peyzaj-organizasyon",
    "name": "Altınşehir",
    "title": "Altınşehir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Altınşehir ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Altınşehir",
    "type": "neighborhood"
  },
  {
    "slug": "armaganevler-cicekcilik-peyzaj-organizasyon",
    "name": "Armağanevler",
    "title": "Armağanevler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Armağanevler ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Armağanevler",
    "type": "neighborhood"
  },
  {
    "slug": "asagi-dudullu-cicekcilik-peyzaj-organizasyon",
    "name": "Aşağı Dudullu",
    "title": "Aşağı Dudullu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Aşağı Dudullu ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Aşağı Dudullu",
    "type": "neighborhood"
  },
  {
    "slug": "atakent-umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "Atakent",
    "title": "Atakent Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Atakent ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Atakent",
    "type": "neighborhood"
  },
  {
    "slug": "ataturk-umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "Atatürk",
    "title": "Atatürk Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Atatürk ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Atatürk",
    "type": "neighborhood"
  },
  {
    "slug": "cemil-meric-cicekcilik-peyzaj-organizasyon",
    "name": "Cemil Meriç",
    "title": "Cemil Meriç Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cemil Meriç ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Cemil Meriç",
    "type": "neighborhood"
  },
  {
    "slug": "cakmak-cicekcilik-peyzaj-organizasyon",
    "name": "Çakmak",
    "title": "Çakmak Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çakmak ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Çakmak",
    "type": "neighborhood"
  },
  {
    "slug": "camlik-umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "Çamlık",
    "title": "Çamlık Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çamlık ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Çamlık",
    "type": "neighborhood"
  },
  {
    "slug": "dudullu-osb-cicekcilik-peyzaj-organizasyon",
    "name": "Dudullu Osb",
    "title": "Dudullu Osb Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Dudullu Osb ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Dudullu Osb",
    "type": "neighborhood"
  },
  {
    "slug": "dumlupinar-umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "Dumlupınar",
    "title": "Dumlupınar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Dumlupınar ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Dumlupınar",
    "type": "neighborhood"
  },
  {
    "slug": "elmalikent-cicekcilik-peyzaj-organizasyon",
    "name": "Elmalıkent",
    "title": "Elmalıkent Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Elmalıkent ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Elmalıkent",
    "type": "neighborhood"
  },
  {
    "slug": "esenevler-cicekcilik-peyzaj-organizasyon",
    "name": "Esenevler",
    "title": "Esenevler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Esenevler ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Esenevler",
    "type": "neighborhood"
  },
  {
    "slug": "esenkent-cicekcilik-peyzaj-organizasyon",
    "name": "Esenkent",
    "title": "Esenkent Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Esenkent ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Esenkent",
    "type": "neighborhood"
  },
  {
    "slug": "esensehir-cicekcilik-peyzaj-organizasyon",
    "name": "Esenşehir",
    "title": "Esenşehir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Esenşehir ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Esenşehir",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-sultan-mehmet-umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih Sultan Mehmet",
    "title": "Fatih Sultan Mehmet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fatih Sultan Mehmet ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Fatih Sultan Mehmet",
    "type": "neighborhood"
  },
  {
    "slug": "finanskent-cicekcilik-peyzaj-organizasyon",
    "name": "Finanskent",
    "title": "Finanskent Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Finanskent ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Finanskent",
    "type": "neighborhood"
  },
  {
    "slug": "hekimbasi-cicekcilik-peyzaj-organizasyon",
    "name": "Hekimbaşı",
    "title": "Hekimbaşı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hekimbaşı ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Hekimbaşı",
    "type": "neighborhood"
  },
  {
    "slug": "huzur-umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "Huzur",
    "title": "Huzur Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Huzur ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Huzur",
    "type": "neighborhood"
  },
  {
    "slug": "ihlamurkuyu-cicekcilik-peyzaj-organizasyon",
    "name": "Ihlamurkuyu",
    "title": "Ihlamurkuyu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ihlamurkuyu ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Ihlamurkuyu",
    "type": "neighborhood"
  },
  {
    "slug": "inkilap-cicekcilik-peyzaj-organizasyon",
    "name": "İnkılap",
    "title": "İnkılap Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İnkılap ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "İnkılap",
    "type": "neighborhood"
  },
  {
    "slug": "istiklal-umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "İstiklal",
    "title": "İstiklal Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İstiklal ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "İstiklal",
    "type": "neighborhood"
  },
  {
    "slug": "kazim-karabekir-umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "Kazım Karabekir",
    "title": "Kazım Karabekir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kazım Karabekir ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Kazım Karabekir",
    "type": "neighborhood"
  },
  {
    "slug": "madenler-cicekcilik-peyzaj-organizasyon",
    "name": "Madenler",
    "title": "Madenler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Madenler ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Madenler",
    "type": "neighborhood"
  },
  {
    "slug": "mehmet-akif-umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "Mehmet Akif",
    "title": "Mehmet Akif Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mehmet Akif ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Mehmet Akif",
    "type": "neighborhood"
  },
  {
    "slug": "namik-kemal-cicekcilik-peyzaj-organizasyon",
    "name": "Namık Kemal",
    "title": "Namık Kemal Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Namık Kemal ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Namık Kemal",
    "type": "neighborhood"
  },
  {
    "slug": "necip-fazil-cicekcilik-peyzaj-organizasyon",
    "name": "Necip Fazıl",
    "title": "Necip Fazıl Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Necip Fazıl ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Necip Fazıl",
    "type": "neighborhood"
  },
  {
    "slug": "parseller-cicekcilik-peyzaj-organizasyon",
    "name": "Parseller",
    "title": "Parseller Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Parseller ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Parseller",
    "type": "neighborhood"
  },
  {
    "slug": "saray-cicekcilik-peyzaj-organizasyon",
    "name": "Saray",
    "title": "Saray Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Saray ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Saray",
    "type": "neighborhood"
  },
  {
    "slug": "site-cicekcilik-peyzaj-organizasyon",
    "name": "Site",
    "title": "Site Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Site ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Site",
    "type": "neighborhood"
  },
  {
    "slug": "serifali-cicekcilik-peyzaj-organizasyon",
    "name": "Şerifali",
    "title": "Şerifali Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Şerifali ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Şerifali",
    "type": "neighborhood"
  },
  {
    "slug": "tantavi-cicekcilik-peyzaj-organizasyon",
    "name": "Tantavi",
    "title": "Tantavi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Tantavi ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Tantavi",
    "type": "neighborhood"
  },
  {
    "slug": "tatlisu-cicekcilik-peyzaj-organizasyon",
    "name": "Tatlısu",
    "title": "Tatlısu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Tatlısu ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Tatlısu",
    "type": "neighborhood"
  },
  {
    "slug": "tepeustu-cicekcilik-peyzaj-organizasyon",
    "name": "Tepeüstü",
    "title": "Tepeüstü Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Tepeüstü ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Tepeüstü",
    "type": "neighborhood"
  },
  {
    "slug": "topagaci-cicekcilik-peyzaj-organizasyon",
    "name": "Topağacı",
    "title": "Topağacı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Topağacı ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Topağacı",
    "type": "neighborhood"
  },
  {
    "slug": "yamanevler-cicekcilik-peyzaj-organizasyon",
    "name": "Yamanevler",
    "title": "Yamanevler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yamanevler ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Yamanevler",
    "type": "neighborhood"
  },
  {
    "slug": "yenisehir-umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "Yenişehir",
    "title": "Yenişehir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yenişehir ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Yenişehir",
    "type": "neighborhood"
  },
  {
    "slug": "yukari-dudullu-cicekcilik-peyzaj-organizasyon",
    "name": "Yukarı Dudullu",
    "title": "Yukarı Dudullu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yukarı Dudullu ve Ümraniye çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ümraniye",
    "neighborhood": "Yukarı Dudullu",
    "type": "neighborhood"
  },
  {
    "slug": "altintepsi-cicekcilik-peyzaj-organizasyon",
    "name": "Altıntepsi",
    "title": "Altıntepsi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Altıntepsi ve Bayrampaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bayrampaşa",
    "neighborhood": "Altıntepsi",
    "type": "neighborhood"
  },
  {
    "slug": "cevatpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Cevatpaşa",
    "title": "Cevatpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cevatpaşa ve Bayrampaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bayrampaşa",
    "neighborhood": "Cevatpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "ismet-pasa-cicekcilik-peyzaj-organizasyon",
    "name": "İsmet Paşa",
    "title": "İsmet Paşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İsmet Paşa ve Bayrampaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bayrampaşa",
    "neighborhood": "İsmet Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "kartaltepe-bayrampasa-cicekcilik-peyzaj-organizasyon",
    "name": "Kartaltepe",
    "title": "Kartaltepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kartaltepe ve Bayrampaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bayrampaşa",
    "neighborhood": "Kartaltepe",
    "type": "neighborhood"
  },
  {
    "slug": "kocatepe-bayrampasa-cicekcilik-peyzaj-organizasyon",
    "name": "Kocatepe",
    "title": "Kocatepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kocatepe ve Bayrampaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bayrampaşa",
    "neighborhood": "Kocatepe",
    "type": "neighborhood"
  },
  {
    "slug": "muratpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Muratpaşa",
    "title": "Muratpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Muratpaşa ve Bayrampaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bayrampaşa",
    "neighborhood": "Muratpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "orta-bayrampasa-cicekcilik-peyzaj-organizasyon",
    "name": "Orta",
    "title": "Orta Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Orta ve Bayrampaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bayrampaşa",
    "neighborhood": "Orta",
    "type": "neighborhood"
  },
  {
    "slug": "terazidere-cicekcilik-peyzaj-organizasyon",
    "name": "Terazidere",
    "title": "Terazidere Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Terazidere ve Bayrampaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bayrampaşa",
    "neighborhood": "Terazidere",
    "type": "neighborhood"
  },
  {
    "slug": "vatan-cicekcilik-peyzaj-organizasyon",
    "name": "Vatan",
    "title": "Vatan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Vatan ve Bayrampaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bayrampaşa",
    "neighborhood": "Vatan",
    "type": "neighborhood"
  },
  {
    "slug": "yenidogan-bayrampasa-cicekcilik-peyzaj-organizasyon",
    "name": "Yenidoğan",
    "title": "Yenidoğan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yenidoğan ve Bayrampaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bayrampaşa",
    "neighborhood": "Yenidoğan",
    "type": "neighborhood"
  },
  {
    "slug": "yildirim-cicekcilik-peyzaj-organizasyon",
    "name": "Yıldırım",
    "title": "Yıldırım Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yıldırım ve Bayrampaşa çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bayrampaşa",
    "neighborhood": "Yıldırım",
    "type": "neighborhood"
  },
  {
    "slug": "ambarli-cicekcilik-peyzaj-organizasyon",
    "name": "Ambarlı",
    "title": "Ambarlı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ambarlı ve Avcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Avcılar",
    "neighborhood": "Ambarlı",
    "type": "neighborhood"
  },
  {
    "slug": "cihangir-avcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Cihangir",
    "title": "Cihangir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cihangir ve Avcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Avcılar",
    "neighborhood": "Cihangir",
    "type": "neighborhood"
  },
  {
    "slug": "denizkoskler-cicekcilik-peyzaj-organizasyon",
    "name": "Denizköşkler",
    "title": "Denizköşkler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Denizköşkler ve Avcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Avcılar",
    "neighborhood": "Denizköşkler",
    "type": "neighborhood"
  },
  {
    "slug": "firuzkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Firuzköy",
    "title": "Firuzköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Firuzköy ve Avcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Avcılar",
    "neighborhood": "Firuzköy",
    "type": "neighborhood"
  },
  {
    "slug": "gumuspala-cicekcilik-peyzaj-organizasyon",
    "name": "Gümüşpala",
    "title": "Gümüşpala Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gümüşpala ve Avcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Avcılar",
    "neighborhood": "Gümüşpala",
    "type": "neighborhood"
  },
  {
    "slug": "merkez-avcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Merkez",
    "title": "Merkez Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Merkez ve Avcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Avcılar",
    "neighborhood": "Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "mustafa-kemalpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Mustafa Kemalpaşa",
    "title": "Mustafa Kemalpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mustafa Kemalpaşa ve Avcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Avcılar",
    "neighborhood": "Mustafa Kemalpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "tahtakale-avcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Tahtakale",
    "title": "Tahtakale Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Tahtakale ve Avcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Avcılar",
    "neighborhood": "Tahtakale",
    "type": "neighborhood"
  },
  {
    "slug": "universite-cicekcilik-peyzaj-organizasyon",
    "name": "Üniversite",
    "title": "Üniversite Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Üniversite ve Avcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Avcılar",
    "neighborhood": "Üniversite",
    "type": "neighborhood"
  },
  {
    "slug": "yesilkent-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilkent",
    "title": "Yeşilkent Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeşilkent ve Avcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Avcılar",
    "neighborhood": "Yeşilkent",
    "type": "neighborhood"
  },
  {
    "slug": "100-yil-cicekcilik-peyzaj-organizasyon",
    "name": "100. Yıl",
    "title": "100. Yıl Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "100. Yıl ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "100. Yıl",
    "type": "neighborhood"
  },
  {
    "slug": "15-temmuz-cicekcilik-peyzaj-organizasyon",
    "name": "15 Temmuz",
    "title": "15 Temmuz Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "15 Temmuz ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "15 Temmuz",
    "type": "neighborhood"
  },
  {
    "slug": "baglar-cicekcilik-peyzaj-organizasyon",
    "name": "Bağlar",
    "title": "Bağlar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bağlar ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "Bağlar",
    "type": "neighborhood"
  },
  {
    "slug": "barbaros-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Barbaros",
    "title": "Barbaros Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Barbaros ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "Barbaros",
    "type": "neighborhood"
  },
  {
    "slug": "cinar-cicekcilik-peyzaj-organizasyon",
    "name": "Çınar",
    "title": "Çınar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çınar ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "Çınar",
    "type": "neighborhood"
  },
  {
    "slug": "demirkapi-cicekcilik-peyzaj-organizasyon",
    "name": "Demirkapı",
    "title": "Demirkapı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Demirkapı ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "Demirkapı",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fatih ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "fevzi-cakmak-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Fevzi Çakmak",
    "title": "Fevzi Çakmak Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fevzi Çakmak ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "Fevzi Çakmak",
    "type": "neighborhood"
  },
  {
    "slug": "goztepe-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Göztepe",
    "title": "Göztepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Göztepe ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "Göztepe",
    "type": "neighborhood"
  },
  {
    "slug": "gunesli-cicekcilik-peyzaj-organizasyon",
    "name": "Güneşli",
    "title": "Güneşli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Güneşli ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "Güneşli",
    "type": "neighborhood"
  },
  {
    "slug": "hurriyet-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Hürriyet",
    "title": "Hürriyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hürriyet ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "Hürriyet",
    "type": "neighborhood"
  },
  {
    "slug": "inonu-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "İnönü",
    "title": "İnönü Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İnönü ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "İnönü",
    "type": "neighborhood"
  },
  {
    "slug": "kazim-karabekir-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Kazım Karabekir",
    "title": "Kazım Karabekir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kazım Karabekir ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "Kazım Karabekir",
    "type": "neighborhood"
  },
  {
    "slug": "kemalpasa-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Kemalpaşa",
    "title": "Kemalpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kemalpaşa ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "Kemalpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "kirazli-cicekcilik-peyzaj-organizasyon",
    "name": "Kirazlı",
    "title": "Kirazlı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kirazlı ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "Kirazlı",
    "type": "neighborhood"
  },
  {
    "slug": "mahmutbey-cicekcilik-peyzaj-organizasyon",
    "name": "Mahmutbey",
    "title": "Mahmutbey Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mahmutbey ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "Mahmutbey",
    "type": "neighborhood"
  },
  {
    "slug": "merkez-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Merkez",
    "title": "Merkez Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Merkez ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "sancaktepe-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Sancaktepe",
    "title": "Sancaktepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sancaktepe ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "Sancaktepe",
    "type": "neighborhood"
  },
  {
    "slug": "yavuz-selim-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Yavuz Selim",
    "title": "Yavuz Selim Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yavuz Selim ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "Yavuz Selim",
    "type": "neighborhood"
  },
  {
    "slug": "yenigun-cicekcilik-peyzaj-organizasyon",
    "name": "Yenigün",
    "title": "Yenigün Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yenigün ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "Yenigün",
    "type": "neighborhood"
  },
  {
    "slug": "yenimahalle-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Yenimahalle",
    "title": "Yenimahalle Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yenimahalle ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "Yenimahalle",
    "type": "neighborhood"
  },
  {
    "slug": "yildiztepe-cicekcilik-peyzaj-organizasyon",
    "name": "Yıldıztepe",
    "title": "Yıldıztepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yıldıztepe ve Bağcılar çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bağcılar",
    "neighborhood": "Yıldıztepe",
    "type": "neighborhood"
  },
  {
    "slug": "bahcelievler-bahcelievler-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçelievler",
    "title": "Bahçelievler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bahçelievler ve Bahçelievler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bahçelievler",
    "neighborhood": "Bahçelievler",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-bahcelievler-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet ve Bahçelievler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bahçelievler",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "cobancesme-cicekcilik-peyzaj-organizasyon",
    "name": "Çobançeşme",
    "title": "Çobançeşme Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çobançeşme ve Bahçelievler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bahçelievler",
    "neighborhood": "Çobançeşme",
    "type": "neighborhood"
  },
  {
    "slug": "fevzi-cakmak-bahcelievler-cicekcilik-peyzaj-organizasyon",
    "name": "Fevzi Çakmak",
    "title": "Fevzi Çakmak Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fevzi Çakmak ve Bahçelievler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bahçelievler",
    "neighborhood": "Fevzi Çakmak",
    "type": "neighborhood"
  },
  {
    "slug": "hurriyet-bahcelievler-cicekcilik-peyzaj-organizasyon",
    "name": "Hürriyet",
    "title": "Hürriyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hürriyet ve Bahçelievler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bahçelievler",
    "neighborhood": "Hürriyet",
    "type": "neighborhood"
  },
  {
    "slug": "kocasinan-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Kocasinan Merkez",
    "title": "Kocasinan Merkez Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kocasinan Merkez ve Bahçelievler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bahçelievler",
    "neighborhood": "Kocasinan Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "siyavuspasa-cicekcilik-peyzaj-organizasyon",
    "name": "Siyavuşpaşa",
    "title": "Siyavuşpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Siyavuşpaşa ve Bahçelievler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bahçelievler",
    "neighborhood": "Siyavuşpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "soganli-cicekcilik-peyzaj-organizasyon",
    "name": "Soğanlı",
    "title": "Soğanlı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Soğanlı ve Bahçelievler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bahçelievler",
    "neighborhood": "Soğanlı",
    "type": "neighborhood"
  },
  {
    "slug": "sirinevler-cicekcilik-peyzaj-organizasyon",
    "name": "Şirinevler",
    "title": "Şirinevler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Şirinevler ve Bahçelievler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bahçelievler",
    "neighborhood": "Şirinevler",
    "type": "neighborhood"
  },
  {
    "slug": "yenibosna-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Yenibosna Merkez",
    "title": "Yenibosna Merkez Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yenibosna Merkez ve Bahçelievler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bahçelievler",
    "neighborhood": "Yenibosna Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "zafer-cicekcilik-peyzaj-organizasyon",
    "name": "Zafer",
    "title": "Zafer Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Zafer ve Bahçelievler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Bahçelievler",
    "neighborhood": "Zafer",
    "type": "neighborhood"
  },
  {
    "slug": "abdurrahman-nafiz-gurman-cicekcilik-peyzaj-organizasyon",
    "name": "Abdurrahman Nafiz Gürman",
    "title": "Abdurrahman Nafiz Gürman Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Abdurrahman Nafiz Gürman ve Güngören çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Güngören",
    "neighborhood": "Abdurrahman Nafiz Gürman",
    "type": "neighborhood"
  },
  {
    "slug": "akincilar-cicekcilik-peyzaj-organizasyon",
    "name": "Akıncılar",
    "title": "Akıncılar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Akıncılar ve Güngören çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Güngören",
    "neighborhood": "Akıncılar",
    "type": "neighborhood"
  },
  {
    "slug": "gencosman-cicekcilik-peyzaj-organizasyon",
    "name": "Gençosman",
    "title": "Gençosman Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gençosman ve Güngören çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Güngören",
    "neighborhood": "Gençosman",
    "type": "neighborhood"
  },
  {
    "slug": "gunestepe-cicekcilik-peyzaj-organizasyon",
    "name": "Güneştepe",
    "title": "Güneştepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Güneştepe ve Güngören çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Güngören",
    "neighborhood": "Güneştepe",
    "type": "neighborhood"
  },
  {
    "slug": "guven-cicekcilik-peyzaj-organizasyon",
    "name": "Güven",
    "title": "Güven Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Güven ve Güngören çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Güngören",
    "neighborhood": "Güven",
    "type": "neighborhood"
  },
  {
    "slug": "haznedar-cicekcilik-peyzaj-organizasyon",
    "name": "Haznedar",
    "title": "Haznedar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Haznedar ve Güngören çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Güngören",
    "neighborhood": "Haznedar",
    "type": "neighborhood"
  },
  {
    "slug": "maresal-cakmak-cicekcilik-peyzaj-organizasyon",
    "name": "Mareşal Çakmak",
    "title": "Mareşal Çakmak Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mareşal Çakmak ve Güngören çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Güngören",
    "neighborhood": "Mareşal Çakmak",
    "type": "neighborhood"
  },
  {
    "slug": "mehmet-nesih-ozmen-cicekcilik-peyzaj-organizasyon",
    "name": "Mehmet Nesih Özmen",
    "title": "Mehmet Nesih Özmen Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mehmet Nesih Özmen ve Güngören çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Güngören",
    "neighborhood": "Mehmet Nesih Özmen",
    "type": "neighborhood"
  },
  {
    "slug": "merkez-gungoren-cicekcilik-peyzaj-organizasyon",
    "name": "Merkez",
    "title": "Merkez Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Merkez ve Güngören çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Güngören",
    "neighborhood": "Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "sanayi-gungoren-cicekcilik-peyzaj-organizasyon",
    "name": "Sanayi",
    "title": "Sanayi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sanayi ve Güngören çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Güngören",
    "neighborhood": "Sanayi",
    "type": "neighborhood"
  },
  {
    "slug": "tozkoparan-cicekcilik-peyzaj-organizasyon",
    "name": "Tozkoparan",
    "title": "Tozkoparan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Tozkoparan ve Güngören çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Güngören",
    "neighborhood": "Tozkoparan",
    "type": "neighborhood"
  },
  {
    "slug": "altaycesme-cicekcilik-peyzaj-organizasyon",
    "name": "Altayçeşme",
    "title": "Altayçeşme Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Altayçeşme ve Maltepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Maltepe",
    "neighborhood": "Altayçeşme",
    "type": "neighborhood"
  },
  {
    "slug": "altintepe-cicekcilik-peyzaj-organizasyon",
    "name": "Altıntepe",
    "title": "Altıntepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Altıntepe ve Maltepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Maltepe",
    "neighborhood": "Altıntepe",
    "type": "neighborhood"
  },
  {
    "slug": "aydinevler-cicekcilik-peyzaj-organizasyon",
    "name": "Aydınevler",
    "title": "Aydınevler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Aydınevler ve Maltepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Maltepe",
    "neighborhood": "Aydınevler",
    "type": "neighborhood"
  },
  {
    "slug": "baglarbasi-maltepe-cicekcilik-peyzaj-organizasyon",
    "name": "Bağlarbaşı",
    "title": "Bağlarbaşı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bağlarbaşı ve Maltepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Maltepe",
    "neighborhood": "Bağlarbaşı",
    "type": "neighborhood"
  },
  {
    "slug": "basibuyuk-cicekcilik-peyzaj-organizasyon",
    "name": "Başıbüyük",
    "title": "Başıbüyük Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Başıbüyük ve Maltepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Maltepe",
    "neighborhood": "Başıbüyük",
    "type": "neighborhood"
  },
  {
    "slug": "buyukbakkalkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Büyükbakkalköy",
    "title": "Büyükbakkalköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Büyükbakkalköy ve Maltepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Maltepe",
    "neighborhood": "Büyükbakkalköy",
    "type": "neighborhood"
  },
  {
    "slug": "cevizli-maltepe-cicekcilik-peyzaj-organizasyon",
    "name": "Cevizli",
    "title": "Cevizli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cevizli ve Maltepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Maltepe",
    "neighborhood": "Cevizli",
    "type": "neighborhood"
  },
  {
    "slug": "cinar-maltepe-cicekcilik-peyzaj-organizasyon",
    "name": "Çınar",
    "title": "Çınar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çınar ve Maltepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Maltepe",
    "neighborhood": "Çınar",
    "type": "neighborhood"
  },
  {
    "slug": "esenkent-maltepe-cicekcilik-peyzaj-organizasyon",
    "name": "Esenkent",
    "title": "Esenkent Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Esenkent ve Maltepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Maltepe",
    "neighborhood": "Esenkent",
    "type": "neighborhood"
  },
  {
    "slug": "feyzullah-cicekcilik-peyzaj-organizasyon",
    "name": "Feyzullah",
    "title": "Feyzullah Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Feyzullah ve Maltepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Maltepe",
    "neighborhood": "Feyzullah",
    "type": "neighborhood"
  },
  {
    "slug": "findikli-cicekcilik-peyzaj-organizasyon",
    "name": "Fındıklı",
    "title": "Fındıklı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fındıklı ve Maltepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Maltepe",
    "neighborhood": "Fındıklı",
    "type": "neighborhood"
  },
  {
    "slug": "girne-cicekcilik-peyzaj-organizasyon",
    "name": "Girne",
    "title": "Girne Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Girne ve Maltepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Maltepe",
    "neighborhood": "Girne",
    "type": "neighborhood"
  },
  {
    "slug": "gulensu-cicekcilik-peyzaj-organizasyon",
    "name": "Gülensu",
    "title": "Gülensu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gülensu ve Maltepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Maltepe",
    "neighborhood": "Gülensu",
    "type": "neighborhood"
  },
  {
    "slug": "gulsuyu-cicekcilik-peyzaj-organizasyon",
    "name": "Gülsuyu",
    "title": "Gülsuyu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gülsuyu ve Maltepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Maltepe",
    "neighborhood": "Gülsuyu",
    "type": "neighborhood"
  },
  {
    "slug": "idealtepe-cicekcilik-peyzaj-organizasyon",
    "name": "İdealtepe",
    "title": "İdealtepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İdealtepe ve Maltepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Maltepe",
    "neighborhood": "İdealtepe",
    "type": "neighborhood"
  },
  {
    "slug": "kucukyali-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Küçükyalı Merkez",
    "title": "Küçükyalı Merkez Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Küçükyalı Merkez ve Maltepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Maltepe",
    "neighborhood": "Küçükyalı Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "yali-maltepe-cicekcilik-peyzaj-organizasyon",
    "name": "Yalı",
    "title": "Yalı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yalı ve Maltepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Maltepe",
    "neighborhood": "Yalı",
    "type": "neighborhood"
  },
  {
    "slug": "zumrutevler-cicekcilik-peyzaj-organizasyon",
    "name": "Zümrütevler",
    "title": "Zümrütevler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Zümrütevler ve Maltepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Maltepe",
    "neighborhood": "Zümrütevler",
    "type": "neighborhood"
  },
  {
    "slug": "abdurrahmangazi-cicekcilik-peyzaj-organizasyon",
    "name": "Abdurrahmangazi",
    "title": "Abdurrahmangazi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Abdurrahmangazi ve Sultanbeyli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultanbeyli",
    "neighborhood": "Abdurrahmangazi",
    "type": "neighborhood"
  },
  {
    "slug": "adil-cicekcilik-peyzaj-organizasyon",
    "name": "Adil",
    "title": "Adil Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Adil ve Sultanbeyli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultanbeyli",
    "neighborhood": "Adil",
    "type": "neighborhood"
  },
  {
    "slug": "ahmet-yesevi-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Ahmet Yesevi",
    "title": "Ahmet Yesevi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ahmet Yesevi ve Sultanbeyli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultanbeyli",
    "neighborhood": "Ahmet Yesevi",
    "type": "neighborhood"
  },
  {
    "slug": "aksemsettin-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Akşemsettin",
    "title": "Akşemsettin Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Akşemsettin ve Sultanbeyli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultanbeyli",
    "neighborhood": "Akşemsettin",
    "type": "neighborhood"
  },
  {
    "slug": "battalgazi-cicekcilik-peyzaj-organizasyon",
    "name": "Battalgazi",
    "title": "Battalgazi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Battalgazi ve Sultanbeyli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultanbeyli",
    "neighborhood": "Battalgazi",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fatih ve Sultanbeyli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultanbeyli",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "hamidiye-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Hamidiye",
    "title": "Hamidiye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hamidiye ve Sultanbeyli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultanbeyli",
    "neighborhood": "Hamidiye",
    "type": "neighborhood"
  },
  {
    "slug": "hasanpasa-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Hasanpaşa",
    "title": "Hasanpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hasanpaşa ve Sultanbeyli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultanbeyli",
    "neighborhood": "Hasanpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "mecidiye-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Mecidiye",
    "title": "Mecidiye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mecidiye ve Sultanbeyli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultanbeyli",
    "neighborhood": "Mecidiye",
    "type": "neighborhood"
  },
  {
    "slug": "mehmet-akif-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Mehmet Akif",
    "title": "Mehmet Akif Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mehmet Akif ve Sultanbeyli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultanbeyli",
    "neighborhood": "Mehmet Akif",
    "type": "neighborhood"
  },
  {
    "slug": "mimar-sinan-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Mimar Sinan",
    "title": "Mimar Sinan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mimar Sinan ve Sultanbeyli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultanbeyli",
    "neighborhood": "Mimar Sinan",
    "type": "neighborhood"
  },
  {
    "slug": "necip-fazil-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Necip Fazıl",
    "title": "Necip Fazıl Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Necip Fazıl ve Sultanbeyli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultanbeyli",
    "neighborhood": "Necip Fazıl",
    "type": "neighborhood"
  },
  {
    "slug": "orhangazi-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Orhangazi",
    "title": "Orhangazi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Orhangazi ve Sultanbeyli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultanbeyli",
    "neighborhood": "Orhangazi",
    "type": "neighborhood"
  },
  {
    "slug": "turgut-reis-cicekcilik-peyzaj-organizasyon",
    "name": "Turgut Reis",
    "title": "Turgut Reis Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Turgut Reis ve Sultanbeyli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultanbeyli",
    "neighborhood": "Turgut Reis",
    "type": "neighborhood"
  },
  {
    "slug": "yavuz-selim-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Yavuz Selim",
    "title": "Yavuz Selim Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yavuz Selim ve Sultanbeyli çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultanbeyli",
    "neighborhood": "Yavuz Selim",
    "type": "neighborhood"
  },
  {
    "slug": "akfirat-cicekcilik-peyzaj-organizasyon",
    "name": "Akfırat",
    "title": "Akfırat Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Akfırat ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "Akfırat",
    "type": "neighborhood"
  },
  {
    "slug": "anadolu-cicekcilik-peyzaj-organizasyon",
    "name": "Anadolu",
    "title": "Anadolu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Anadolu ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "Anadolu",
    "type": "neighborhood"
  },
  {
    "slug": "aydinli-birlik-osb-cicekcilik-peyzaj-organizasyon",
    "name": "Aydınlı - Birlik Osb",
    "title": "Aydınlı - Birlik Osb Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Aydınlı - Birlik Osb ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "Aydınlı - Birlik Osb",
    "type": "neighborhood"
  },
  {
    "slug": "aydinli-istanbul-ayosb-cicekcilik-peyzaj-organizasyon",
    "name": "Aydınlı - İstanbul Ayosb",
    "title": "Aydınlı - İstanbul Ayosb Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Aydınlı - İstanbul Ayosb ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "Aydınlı - İstanbul Ayosb",
    "type": "neighborhood"
  },
  {
    "slug": "aydinli-cicekcilik-peyzaj-organizasyon",
    "name": "Aydınlı",
    "title": "Aydınlı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Aydınlı ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "Aydınlı",
    "type": "neighborhood"
  },
  {
    "slug": "aydinli-sb-cicekcilik-peyzaj-organizasyon",
    "name": "Aydınlı Sb",
    "title": "Aydınlı Sb Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Aydınlı Sb ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "Aydınlı Sb",
    "type": "neighborhood"
  },
  {
    "slug": "aydinli-kosb-cicekcilik-peyzaj-organizasyon",
    "name": "Aydınlı-kosb",
    "title": "Aydınlı-kosb Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Aydınlı-kosb ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "Aydınlı-kosb",
    "type": "neighborhood"
  },
  {
    "slug": "aydintepe-cicekcilik-peyzaj-organizasyon",
    "name": "Aydıntepe",
    "title": "Aydıntepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Aydıntepe ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "Aydıntepe",
    "type": "neighborhood"
  },
  {
    "slug": "cami-cicekcilik-peyzaj-organizasyon",
    "name": "Cami",
    "title": "Cami Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cami ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "Cami",
    "type": "neighborhood"
  },
  {
    "slug": "deri-osb-cicekcilik-peyzaj-organizasyon",
    "name": "Deri Osb",
    "title": "Deri Osb Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Deri Osb ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "Deri Osb",
    "type": "neighborhood"
  },
  {
    "slug": "evliya-celebi-tuzla-cicekcilik-peyzaj-organizasyon",
    "name": "Evliya Çelebi",
    "title": "Evliya Çelebi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Evliya Çelebi ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "Evliya Çelebi",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-tuzla-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fatih ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "icmeler-cicekcilik-peyzaj-organizasyon",
    "name": "İçmeler",
    "title": "İçmeler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İçmeler ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "İçmeler",
    "type": "neighborhood"
  },
  {
    "slug": "istasyon-tuzla-cicekcilik-peyzaj-organizasyon",
    "name": "İstasyon",
    "title": "İstasyon Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İstasyon ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "İstasyon",
    "type": "neighborhood"
  },
  {
    "slug": "mescit-cicekcilik-peyzaj-organizasyon",
    "name": "Mescit",
    "title": "Mescit Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mescit ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "Mescit",
    "type": "neighborhood"
  },
  {
    "slug": "mimar-sinan-tuzla-cicekcilik-peyzaj-organizasyon",
    "name": "Mimar Sinan",
    "title": "Mimar Sinan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mimar Sinan ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "Mimar Sinan",
    "type": "neighborhood"
  },
  {
    "slug": "orhanli-cicekcilik-peyzaj-organizasyon",
    "name": "Orhanlı",
    "title": "Orhanlı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Orhanlı ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "Orhanlı",
    "type": "neighborhood"
  },
  {
    "slug": "orta-tuzla-cicekcilik-peyzaj-organizasyon",
    "name": "Orta",
    "title": "Orta Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Orta ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "Orta",
    "type": "neighborhood"
  },
  {
    "slug": "postane-cicekcilik-peyzaj-organizasyon",
    "name": "Postane",
    "title": "Postane Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Postane ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "Postane",
    "type": "neighborhood"
  },
  {
    "slug": "sifa-cicekcilik-peyzaj-organizasyon",
    "name": "Şifa",
    "title": "Şifa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Şifa ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "Şifa",
    "type": "neighborhood"
  },
  {
    "slug": "tepeoren-itosb-cicekcilik-peyzaj-organizasyon",
    "name": "Tepeoren İtosb",
    "title": "Tepeoren İtosb Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Tepeoren İtosb ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "Tepeoren İtosb",
    "type": "neighborhood"
  },
  {
    "slug": "tepeoren-cicekcilik-peyzaj-organizasyon",
    "name": "Tepeören",
    "title": "Tepeören Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Tepeören ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "Tepeören",
    "type": "neighborhood"
  },
  {
    "slug": "yayla-tuzla-cicekcilik-peyzaj-organizasyon",
    "name": "Yayla",
    "title": "Yayla Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yayla ve Tuzla çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Tuzla",
    "neighborhood": "Yayla",
    "type": "neighborhood"
  },
  {
    "slug": "15-temmuz-esenler-cicekcilik-peyzaj-organizasyon",
    "name": "15 Temmuz",
    "title": "15 Temmuz Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "15 Temmuz ve Esenler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenler",
    "neighborhood": "15 Temmuz",
    "type": "neighborhood"
  },
  {
    "slug": "birlik-cicekcilik-peyzaj-organizasyon",
    "name": "Birlik",
    "title": "Birlik Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Birlik ve Esenler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenler",
    "neighborhood": "Birlik",
    "type": "neighborhood"
  },
  {
    "slug": "cifte-havuzlar-cicekcilik-peyzaj-organizasyon",
    "name": "Çifte Havuzlar",
    "title": "Çifte Havuzlar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çifte Havuzlar ve Esenler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenler",
    "neighborhood": "Çifte Havuzlar",
    "type": "neighborhood"
  },
  {
    "slug": "davutpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Davutpaşa",
    "title": "Davutpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Davutpaşa ve Esenler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenler",
    "neighborhood": "Davutpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-esenler-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fatih ve Esenler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenler",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "fevzi-cakmak-esenler-cicekcilik-peyzaj-organizasyon",
    "name": "Fevzi Çakmak",
    "title": "Fevzi Çakmak Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fevzi Çakmak ve Esenler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenler",
    "neighborhood": "Fevzi Çakmak",
    "type": "neighborhood"
  },
  {
    "slug": "havaalani-cicekcilik-peyzaj-organizasyon",
    "name": "Havaalanı",
    "title": "Havaalanı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Havaalanı ve Esenler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenler",
    "neighborhood": "Havaalanı",
    "type": "neighborhood"
  },
  {
    "slug": "kazim-karabekir-esenler-cicekcilik-peyzaj-organizasyon",
    "name": "Kazım Karabekir",
    "title": "Kazım Karabekir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kazım Karabekir ve Esenler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenler",
    "neighborhood": "Kazım Karabekir",
    "type": "neighborhood"
  },
  {
    "slug": "kemer-cicekcilik-peyzaj-organizasyon",
    "name": "Kemer",
    "title": "Kemer Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kemer ve Esenler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenler",
    "neighborhood": "Kemer",
    "type": "neighborhood"
  },
  {
    "slug": "menderes-cicekcilik-peyzaj-organizasyon",
    "name": "Menderes",
    "title": "Menderes Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Menderes ve Esenler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenler",
    "neighborhood": "Menderes",
    "type": "neighborhood"
  },
  {
    "slug": "mimar-sinan-esenler-cicekcilik-peyzaj-organizasyon",
    "name": "Mimar Sinan",
    "title": "Mimar Sinan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mimar Sinan ve Esenler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenler",
    "neighborhood": "Mimar Sinan",
    "type": "neighborhood"
  },
  {
    "slug": "namik-kemal-esenler-cicekcilik-peyzaj-organizasyon",
    "name": "Namık Kemal",
    "title": "Namık Kemal Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Namık Kemal ve Esenler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenler",
    "neighborhood": "Namık Kemal",
    "type": "neighborhood"
  },
  {
    "slug": "nine-hatun-cicekcilik-peyzaj-organizasyon",
    "name": "Nine Hatun",
    "title": "Nine Hatun Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Nine Hatun ve Esenler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenler",
    "neighborhood": "Nine Hatun",
    "type": "neighborhood"
  },
  {
    "slug": "orucreis-cicekcilik-peyzaj-organizasyon",
    "name": "Oruçreis",
    "title": "Oruçreis Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Oruçreis ve Esenler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenler",
    "neighborhood": "Oruçreis",
    "type": "neighborhood"
  },
  {
    "slug": "tuna-cicekcilik-peyzaj-organizasyon",
    "name": "Tuna",
    "title": "Tuna Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Tuna ve Esenler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenler",
    "neighborhood": "Tuna",
    "type": "neighborhood"
  },
  {
    "slug": "turgut-reis-esenler-cicekcilik-peyzaj-organizasyon",
    "name": "Turgut Reis",
    "title": "Turgut Reis Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Turgut Reis ve Esenler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenler",
    "neighborhood": "Turgut Reis",
    "type": "neighborhood"
  },
  {
    "slug": "yavuz-selim-esenler-cicekcilik-peyzaj-organizasyon",
    "name": "Yavuz Selim",
    "title": "Yavuz Selim Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yavuz Selim ve Esenler çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenler",
    "neighborhood": "Yavuz Selim",
    "type": "neighborhood"
  },
  {
    "slug": "adnan-menderes-cicekcilik-peyzaj-organizasyon",
    "name": "Adnan Menderes",
    "title": "Adnan Menderes Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Adnan Menderes ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Adnan Menderes",
    "type": "neighborhood"
  },
  {
    "slug": "anadolu-arnavutkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Anadolu",
    "title": "Anadolu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Anadolu ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Anadolu",
    "type": "neighborhood"
  },
  {
    "slug": "arnavutkoy-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Arnavutköy Merkez",
    "title": "Arnavutköy Merkez Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Arnavutköy Merkez ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Arnavutköy Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "ataturk-arnavutkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Atatürk",
    "title": "Atatürk Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Atatürk ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Atatürk",
    "type": "neighborhood"
  },
  {
    "slug": "baklali-cicekcilik-peyzaj-organizasyon",
    "name": "Baklalı",
    "title": "Baklalı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Baklalı ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Baklalı",
    "type": "neighborhood"
  },
  {
    "slug": "balaban-arnavutkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Balaban",
    "title": "Balaban Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Balaban ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Balaban",
    "type": "neighborhood"
  },
  {
    "slug": "bogazkoy-istiklal-cicekcilik-peyzaj-organizasyon",
    "name": "Boğazköy İstiklal",
    "title": "Boğazköy İstiklal Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Boğazköy İstiklal ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Boğazköy İstiklal",
    "type": "neighborhood"
  },
  {
    "slug": "bolluca-cicekcilik-peyzaj-organizasyon",
    "name": "Bolluca",
    "title": "Bolluca Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bolluca ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Bolluca",
    "type": "neighborhood"
  },
  {
    "slug": "boyalik-cicekcilik-peyzaj-organizasyon",
    "name": "Boyalık",
    "title": "Boyalık Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Boyalık ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Boyalık",
    "type": "neighborhood"
  },
  {
    "slug": "cilingir-cicekcilik-peyzaj-organizasyon",
    "name": "Çilingir",
    "title": "Çilingir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çilingir ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Çilingir",
    "type": "neighborhood"
  },
  {
    "slug": "deliklikaya-cicekcilik-peyzaj-organizasyon",
    "name": "Deliklikaya",
    "title": "Deliklikaya Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Deliklikaya ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Deliklikaya",
    "type": "neighborhood"
  },
  {
    "slug": "dursunkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Dursunköy",
    "title": "Dursunköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Dursunköy ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Dursunköy",
    "type": "neighborhood"
  },
  {
    "slug": "durusu-cicekcilik-peyzaj-organizasyon",
    "name": "Durusu",
    "title": "Durusu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Durusu ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Durusu",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-arnavutkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fatih ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "hacimasli-cicekcilik-peyzaj-organizasyon",
    "name": "Hacımaşlı",
    "title": "Hacımaşlı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hacımaşlı ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Hacımaşlı",
    "type": "neighborhood"
  },
  {
    "slug": "hadimkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Hadımköy",
    "title": "Hadımköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hadımköy ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Hadımköy",
    "type": "neighborhood"
  },
  {
    "slug": "haracci-cicekcilik-peyzaj-organizasyon",
    "name": "Haraççı",
    "title": "Haraççı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Haraççı ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Haraççı",
    "type": "neighborhood"
  },
  {
    "slug": "hastane-cicekcilik-peyzaj-organizasyon",
    "name": "Hastane",
    "title": "Hastane Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hastane ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Hastane",
    "type": "neighborhood"
  },
  {
    "slug": "hicret-cicekcilik-peyzaj-organizasyon",
    "name": "Hicret",
    "title": "Hicret Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hicret ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Hicret",
    "type": "neighborhood"
  },
  {
    "slug": "imrahor-cicekcilik-peyzaj-organizasyon",
    "name": "İmrahor",
    "title": "İmrahor Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İmrahor ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "İmrahor",
    "type": "neighborhood"
  },
  {
    "slug": "islambey-arnavutkoy-cicekcilik-peyzaj-organizasyon",
    "name": "İslambey",
    "title": "İslambey Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İslambey ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "İslambey",
    "type": "neighborhood"
  },
  {
    "slug": "karaburun-cicekcilik-peyzaj-organizasyon",
    "name": "Karaburun",
    "title": "Karaburun Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Karaburun ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Karaburun",
    "type": "neighborhood"
  },
  {
    "slug": "karlibayir-cicekcilik-peyzaj-organizasyon",
    "name": "Karlıbayır",
    "title": "Karlıbayır Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Karlıbayır ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Karlıbayır",
    "type": "neighborhood"
  },
  {
    "slug": "maresal-fevzi-cakmak-cicekcilik-peyzaj-organizasyon",
    "name": "Mareşal Fevzi Çakmak",
    "title": "Mareşal Fevzi Çakmak Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mareşal Fevzi Çakmak ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Mareşal Fevzi Çakmak",
    "type": "neighborhood"
  },
  {
    "slug": "mavigol-cicekcilik-peyzaj-organizasyon",
    "name": "Mavigöl",
    "title": "Mavigöl Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mavigöl ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Mavigöl",
    "type": "neighborhood"
  },
  {
    "slug": "mehmet-akif-ersoy-arnavutkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Mehmet Akif Ersoy",
    "title": "Mehmet Akif Ersoy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mehmet Akif Ersoy ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Mehmet Akif Ersoy",
    "type": "neighborhood"
  },
  {
    "slug": "mustafa-kemal-pasa-cicekcilik-peyzaj-organizasyon",
    "name": "Mustafa Kemal Paşa",
    "title": "Mustafa Kemal Paşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mustafa Kemal Paşa ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Mustafa Kemal Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "nenehatun-cicekcilik-peyzaj-organizasyon",
    "name": "Nenehatun",
    "title": "Nenehatun Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Nenehatun ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Nenehatun",
    "type": "neighborhood"
  },
  {
    "slug": "omerli-cicekcilik-peyzaj-organizasyon",
    "name": "Ömerli",
    "title": "Ömerli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ömerli ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Ömerli",
    "type": "neighborhood"
  },
  {
    "slug": "sazlibosna-cicekcilik-peyzaj-organizasyon",
    "name": "Sazlıbosna",
    "title": "Sazlıbosna Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sazlıbosna ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Sazlıbosna",
    "type": "neighborhood"
  },
  {
    "slug": "tasoluk-cicekcilik-peyzaj-organizasyon",
    "name": "Taşoluk",
    "title": "Taşoluk Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Taşoluk ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Taşoluk",
    "type": "neighborhood"
  },
  {
    "slug": "tayakadin-cicekcilik-peyzaj-organizasyon",
    "name": "Tayakadın",
    "title": "Tayakadın Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Tayakadın ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Tayakadın",
    "type": "neighborhood"
  },
  {
    "slug": "terkos-cicekcilik-peyzaj-organizasyon",
    "name": "Terkos",
    "title": "Terkos Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Terkos ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Terkos",
    "type": "neighborhood"
  },
  {
    "slug": "yassioren-cicekcilik-peyzaj-organizasyon",
    "name": "Yassıören",
    "title": "Yassıören Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yassıören ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Yassıören",
    "type": "neighborhood"
  },
  {
    "slug": "yavuz-selim-arnavutkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Yavuz Selim",
    "title": "Yavuz Selim Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yavuz Selim ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Yavuz Selim",
    "type": "neighborhood"
  },
  {
    "slug": "yenikoy-arnavutkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Yeniköy",
    "title": "Yeniköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeniköy ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Yeniköy",
    "type": "neighborhood"
  },
  {
    "slug": "yesilbayir-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilbayır",
    "title": "Yeşilbayır Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeşilbayır ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Yeşilbayır",
    "type": "neighborhood"
  },
  {
    "slug": "yunus-emre-cicekcilik-peyzaj-organizasyon",
    "name": "Yunus Emre",
    "title": "Yunus Emre Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yunus Emre ve Arnavutköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Arnavutköy",
    "neighborhood": "Yunus Emre",
    "type": "neighborhood"
  },
  {
    "slug": "asikveysel-cicekcilik-peyzaj-organizasyon",
    "name": "Aşıkveysel",
    "title": "Aşıkveysel Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Aşıkveysel ve Ataşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ataşehir",
    "neighborhood": "Aşıkveysel",
    "type": "neighborhood"
  },
  {
    "slug": "ataturk-atasehir-cicekcilik-peyzaj-organizasyon",
    "name": "Atatürk",
    "title": "Atatürk Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Atatürk ve Ataşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ataşehir",
    "neighborhood": "Atatürk",
    "type": "neighborhood"
  },
  {
    "slug": "barbaros-atasehir-cicekcilik-peyzaj-organizasyon",
    "name": "Barbaros",
    "title": "Barbaros Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Barbaros ve Ataşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ataşehir",
    "neighborhood": "Barbaros",
    "type": "neighborhood"
  },
  {
    "slug": "esatpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Esatpaşa",
    "title": "Esatpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Esatpaşa ve Ataşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ataşehir",
    "neighborhood": "Esatpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "ferhatpasa-atasehir-cicekcilik-peyzaj-organizasyon",
    "name": "Ferhatpaşa",
    "title": "Ferhatpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ferhatpaşa ve Ataşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ataşehir",
    "neighborhood": "Ferhatpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "fetih-cicekcilik-peyzaj-organizasyon",
    "name": "Fetih",
    "title": "Fetih Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fetih ve Ataşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ataşehir",
    "neighborhood": "Fetih",
    "type": "neighborhood"
  },
  {
    "slug": "icerenkoy-cicekcilik-peyzaj-organizasyon",
    "name": "İçerenköy",
    "title": "İçerenköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İçerenköy ve Ataşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ataşehir",
    "neighborhood": "İçerenköy",
    "type": "neighborhood"
  },
  {
    "slug": "inonu-atasehir-cicekcilik-peyzaj-organizasyon",
    "name": "İnönü",
    "title": "İnönü Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İnönü ve Ataşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ataşehir",
    "neighborhood": "İnönü",
    "type": "neighborhood"
  },
  {
    "slug": "kayisdagi-cicekcilik-peyzaj-organizasyon",
    "name": "Kayışdağı",
    "title": "Kayışdağı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kayışdağı ve Ataşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ataşehir",
    "neighborhood": "Kayışdağı",
    "type": "neighborhood"
  },
  {
    "slug": "kucukbakkalkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Küçükbakkalköy",
    "title": "Küçükbakkalköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Küçükbakkalköy ve Ataşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ataşehir",
    "neighborhood": "Küçükbakkalköy",
    "type": "neighborhood"
  },
  {
    "slug": "mevlana-atasehir-cicekcilik-peyzaj-organizasyon",
    "name": "Mevlana",
    "title": "Mevlana Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mevlana ve Ataşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ataşehir",
    "neighborhood": "Mevlana",
    "type": "neighborhood"
  },
  {
    "slug": "mimar-sinan-atasehir-cicekcilik-peyzaj-organizasyon",
    "name": "Mimar Sinan",
    "title": "Mimar Sinan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mimar Sinan ve Ataşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ataşehir",
    "neighborhood": "Mimar Sinan",
    "type": "neighborhood"
  },
  {
    "slug": "mustafa-kemal-cicekcilik-peyzaj-organizasyon",
    "name": "Mustafa Kemal",
    "title": "Mustafa Kemal Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mustafa Kemal ve Ataşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ataşehir",
    "neighborhood": "Mustafa Kemal",
    "type": "neighborhood"
  },
  {
    "slug": "ornek-cicekcilik-peyzaj-organizasyon",
    "name": "Örnek",
    "title": "Örnek Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Örnek ve Ataşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ataşehir",
    "neighborhood": "Örnek",
    "type": "neighborhood"
  },
  {
    "slug": "yeni-camlica-cicekcilik-peyzaj-organizasyon",
    "name": "Yeni Çamlıca",
    "title": "Yeni Çamlıca Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeni Çamlıca ve Ataşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ataşehir",
    "neighborhood": "Yeni Çamlıca",
    "type": "neighborhood"
  },
  {
    "slug": "yenisahra-cicekcilik-peyzaj-organizasyon",
    "name": "Yenisahra",
    "title": "Yenisahra Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yenisahra ve Ataşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ataşehir",
    "neighborhood": "Yenisahra",
    "type": "neighborhood"
  },
  {
    "slug": "yenisehir-atasehir-cicekcilik-peyzaj-organizasyon",
    "name": "Yenişehir",
    "title": "Yenişehir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yenişehir ve Ataşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Ataşehir",
    "neighborhood": "Yenişehir",
    "type": "neighborhood"
  },
  {
    "slug": "altinsehir-basaksehir-cicekcilik-peyzaj-organizasyon",
    "name": "Altınşehir",
    "title": "Altınşehir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Altınşehir ve Başakşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Başakşehir",
    "neighborhood": "Altınşehir",
    "type": "neighborhood"
  },
  {
    "slug": "bahcesehir-1-kisim-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçeşehir 1. Kısım",
    "title": "Bahçeşehir 1. Kısım Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bahçeşehir 1. Kısım ve Başakşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Başakşehir",
    "neighborhood": "Bahçeşehir 1. Kısım",
    "type": "neighborhood"
  },
  {
    "slug": "bahcesehir-2-kisim-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçeşehir 2. Kısım",
    "title": "Bahçeşehir 2. Kısım Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bahçeşehir 2. Kısım ve Başakşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Başakşehir",
    "neighborhood": "Bahçeşehir 2. Kısım",
    "type": "neighborhood"
  },
  {
    "slug": "basak-basaksehir-cicekcilik-peyzaj-organizasyon",
    "name": "Başak",
    "title": "Başak Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Başak ve Başakşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Başakşehir",
    "neighborhood": "Başak",
    "type": "neighborhood"
  },
  {
    "slug": "basaksehir-basaksehir-cicekcilik-peyzaj-organizasyon",
    "name": "Başakşehir",
    "title": "Başakşehir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Başakşehir ve Başakşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Başakşehir",
    "neighborhood": "Başakşehir",
    "type": "neighborhood"
  },
  {
    "slug": "guvercintepe-cicekcilik-peyzaj-organizasyon",
    "name": "Güvercintepe",
    "title": "Güvercintepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Güvercintepe ve Başakşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Başakşehir",
    "neighborhood": "Güvercintepe",
    "type": "neighborhood"
  },
  {
    "slug": "ikitelli-osb-cicekcilik-peyzaj-organizasyon",
    "name": "İkitelli Osb",
    "title": "İkitelli Osb Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İkitelli Osb ve Başakşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Başakşehir",
    "neighborhood": "İkitelli Osb",
    "type": "neighborhood"
  },
  {
    "slug": "kayabasi-cicekcilik-peyzaj-organizasyon",
    "name": "Kayabaşı",
    "title": "Kayabaşı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kayabaşı ve Başakşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Başakşehir",
    "neighborhood": "Kayabaşı",
    "type": "neighborhood"
  },
  {
    "slug": "sahintepe-cicekcilik-peyzaj-organizasyon",
    "name": "Şahintepe",
    "title": "Şahintepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Şahintepe ve Başakşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Başakşehir",
    "neighborhood": "Şahintepe",
    "type": "neighborhood"
  },
  {
    "slug": "samlar-cicekcilik-peyzaj-organizasyon",
    "name": "Şamlar",
    "title": "Şamlar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Şamlar ve Başakşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Başakşehir",
    "neighborhood": "Şamlar",
    "type": "neighborhood"
  },
  {
    "slug": "ziya-gokalp-cicekcilik-peyzaj-organizasyon",
    "name": "Ziya Gökalp",
    "title": "Ziya Gökalp Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ziya Gökalp ve Başakşehir çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Başakşehir",
    "neighborhood": "Ziya Gökalp",
    "type": "neighborhood"
  },
  {
    "slug": "adnan-kahveci-cicekcilik-peyzaj-organizasyon",
    "name": "Adnan Kahveci",
    "title": "Adnan Kahveci Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Adnan Kahveci ve Beylikdüzü çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beylikdüzü",
    "neighborhood": "Adnan Kahveci",
    "type": "neighborhood"
  },
  {
    "slug": "baris-cicekcilik-peyzaj-organizasyon",
    "name": "Barış",
    "title": "Barış Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Barış ve Beylikdüzü çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beylikdüzü",
    "neighborhood": "Barış",
    "type": "neighborhood"
  },
  {
    "slug": "beylikduzuosb-cicekcilik-peyzaj-organizasyon",
    "name": "Beylikdüzüosb",
    "title": "Beylikdüzüosb Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Beylikdüzüosb ve Beylikdüzü çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beylikdüzü",
    "neighborhood": "Beylikdüzüosb",
    "type": "neighborhood"
  },
  {
    "slug": "buyuksehir-cicekcilik-peyzaj-organizasyon",
    "name": "Büyükşehir",
    "title": "Büyükşehir Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Büyükşehir ve Beylikdüzü çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beylikdüzü",
    "neighborhood": "Büyükşehir",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-beylikduzu-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet ve Beylikdüzü çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beylikdüzü",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "dereagzi-cicekcilik-peyzaj-organizasyon",
    "name": "Dereağzı",
    "title": "Dereağzı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Dereağzı ve Beylikdüzü çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beylikdüzü",
    "neighborhood": "Dereağzı",
    "type": "neighborhood"
  },
  {
    "slug": "gurpinar-cicekcilik-peyzaj-organizasyon",
    "name": "Gürpınar",
    "title": "Gürpınar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gürpınar ve Beylikdüzü çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beylikdüzü",
    "neighborhood": "Gürpınar",
    "type": "neighborhood"
  },
  {
    "slug": "kavakli-beylikduzu-cicekcilik-peyzaj-organizasyon",
    "name": "Kavaklı",
    "title": "Kavaklı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kavaklı ve Beylikdüzü çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beylikdüzü",
    "neighborhood": "Kavaklı",
    "type": "neighborhood"
  },
  {
    "slug": "marmara-cicekcilik-peyzaj-organizasyon",
    "name": "Marmara",
    "title": "Marmara Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Marmara ve Beylikdüzü çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beylikdüzü",
    "neighborhood": "Marmara",
    "type": "neighborhood"
  },
  {
    "slug": "sahil-cicekcilik-peyzaj-organizasyon",
    "name": "Sahil",
    "title": "Sahil Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sahil ve Beylikdüzü çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beylikdüzü",
    "neighborhood": "Sahil",
    "type": "neighborhood"
  },
  {
    "slug": "yakuplu-cicekcilik-peyzaj-organizasyon",
    "name": "Yakuplu",
    "title": "Yakuplu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yakuplu ve Beylikdüzü çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Beylikdüzü",
    "neighborhood": "Yakuplu",
    "type": "neighborhood"
  },
  {
    "slug": "alemdag-cicekcilik-peyzaj-organizasyon",
    "name": "Alemdağ",
    "title": "Alemdağ Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Alemdağ ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": "Alemdağ",
    "type": "neighborhood"
  },
  {
    "slug": "aydinlar-cekmekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Aydınlar",
    "title": "Aydınlar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Aydınlar ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": "Aydınlar",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-cekmekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "camlik-cekmekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Çamlık",
    "title": "Çamlık Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çamlık ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": "Çamlık",
    "type": "neighborhood"
  },
  {
    "slug": "catalmese-cicekcilik-peyzaj-organizasyon",
    "name": "Çatalmeşe",
    "title": "Çatalmeşe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çatalmeşe ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": "Çatalmeşe",
    "type": "neighborhood"
  },
  {
    "slug": "eksioglu-cicekcilik-peyzaj-organizasyon",
    "name": "Ekşioğlu",
    "title": "Ekşioğlu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ekşioğlu ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": "Ekşioğlu",
    "type": "neighborhood"
  },
  {
    "slug": "gungoren-cekmekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Güngören",
    "title": "Güngören Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Güngören ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": "Güngören",
    "type": "neighborhood"
  },
  {
    "slug": "hamidiye-cekmekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Hamidiye",
    "title": "Hamidiye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hamidiye ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": "Hamidiye",
    "type": "neighborhood"
  },
  {
    "slug": "huseyinli-cicekcilik-peyzaj-organizasyon",
    "name": "Hüseyinli",
    "title": "Hüseyinli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hüseyinli ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": "Hüseyinli",
    "type": "neighborhood"
  },
  {
    "slug": "kirazlidere-cicekcilik-peyzaj-organizasyon",
    "name": "Kirazlıdere",
    "title": "Kirazlıdere Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kirazlıdere ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": "Kirazlıdere",
    "type": "neighborhood"
  },
  {
    "slug": "kocullu-cicekcilik-peyzaj-organizasyon",
    "name": "Koçullu",
    "title": "Koçullu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Koçullu ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": "Koçullu",
    "type": "neighborhood"
  },
  {
    "slug": "mehmet-akif-cekmekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Mehmet Akif",
    "title": "Mehmet Akif Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mehmet Akif ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": "Mehmet Akif",
    "type": "neighborhood"
  },
  {
    "slug": "merkez-cekmekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Merkez",
    "title": "Merkez Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Merkez ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": "Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "mimar-sinan-cekmekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Mimar Sinan",
    "title": "Mimar Sinan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mimar Sinan ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": "Mimar Sinan",
    "type": "neighborhood"
  },
  {
    "slug": "nisantepe-cicekcilik-peyzaj-organizasyon",
    "name": "Nişantepe",
    "title": "Nişantepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Nişantepe ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": "Nişantepe",
    "type": "neighborhood"
  },
  {
    "slug": "omerli-cekmekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Ömerli",
    "title": "Ömerli Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ömerli ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": "Ömerli",
    "type": "neighborhood"
  },
  {
    "slug": "resadiye-cicekcilik-peyzaj-organizasyon",
    "name": "Reşadiye",
    "title": "Reşadiye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Reşadiye ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": "Reşadiye",
    "type": "neighborhood"
  },
  {
    "slug": "sirapinar-cicekcilik-peyzaj-organizasyon",
    "name": "Sırapınar",
    "title": "Sırapınar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sırapınar ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": "Sırapınar",
    "type": "neighborhood"
  },
  {
    "slug": "sogukpinar-cicekcilik-peyzaj-organizasyon",
    "name": "Soğukpınar",
    "title": "Soğukpınar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Soğukpınar ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": "Soğukpınar",
    "type": "neighborhood"
  },
  {
    "slug": "sultanciftligi-cicekcilik-peyzaj-organizasyon",
    "name": "Sultançiftliği",
    "title": "Sultançiftliği Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sultançiftliği ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": "Sultançiftliği",
    "type": "neighborhood"
  },
  {
    "slug": "tasdelen-cicekcilik-peyzaj-organizasyon",
    "name": "Taşdelen",
    "title": "Taşdelen Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Taşdelen ve Çekmeköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Çekmeköy",
    "neighborhood": "Taşdelen",
    "type": "neighborhood"
  },
  {
    "slug": "akcaburgaz-cicekcilik-peyzaj-organizasyon",
    "name": "Akçaburgaz",
    "title": "Akçaburgaz Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Akçaburgaz ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Akçaburgaz",
    "type": "neighborhood"
  },
  {
    "slug": "akevler-cicekcilik-peyzaj-organizasyon",
    "name": "Akevler",
    "title": "Akevler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Akevler ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Akevler",
    "type": "neighborhood"
  },
  {
    "slug": "aksemseddin-cicekcilik-peyzaj-organizasyon",
    "name": "Akşemseddin",
    "title": "Akşemseddin Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Akşemseddin ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Akşemseddin",
    "type": "neighborhood"
  },
  {
    "slug": "ardicli-cicekcilik-peyzaj-organizasyon",
    "name": "Ardıçlı",
    "title": "Ardıçlı Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Ardıçlı ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Ardıçlı",
    "type": "neighborhood"
  },
  {
    "slug": "asik-veysel-cicekcilik-peyzaj-organizasyon",
    "name": "Aşık Veysel",
    "title": "Aşık Veysel Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Aşık Veysel ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Aşık Veysel",
    "type": "neighborhood"
  },
  {
    "slug": "ataturk-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Atatürk",
    "title": "Atatürk Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Atatürk ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Atatürk",
    "type": "neighborhood"
  },
  {
    "slug": "baglarcesme-cicekcilik-peyzaj-organizasyon",
    "name": "Bağlarçeşme",
    "title": "Bağlarçeşme Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Bağlarçeşme ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Bağlarçeşme",
    "type": "neighborhood"
  },
  {
    "slug": "balikyolu-cicekcilik-peyzaj-organizasyon",
    "name": "Balıkyolu",
    "title": "Balıkyolu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Balıkyolu ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Balıkyolu",
    "type": "neighborhood"
  },
  {
    "slug": "barbaros-hayrettin-pasa-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Barbaros Hayrettin Paşa",
    "title": "Barbaros Hayrettin Paşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Barbaros Hayrettin Paşa ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Barbaros Hayrettin Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "battalgazi-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Battalgazi",
    "title": "Battalgazi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Battalgazi ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Battalgazi",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "cinar-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Çınar",
    "title": "Çınar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Çınar ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Çınar",
    "type": "neighborhood"
  },
  {
    "slug": "esenkent-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Esenkent",
    "title": "Esenkent Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Esenkent ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Esenkent",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fatih ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "gokevler-cicekcilik-peyzaj-organizasyon",
    "name": "Gökevler",
    "title": "Gökevler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gökevler ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Gökevler",
    "type": "neighborhood"
  },
  {
    "slug": "guzelyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Güzelyurt",
    "title": "Güzelyurt Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Güzelyurt ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Güzelyurt",
    "type": "neighborhood"
  },
  {
    "slug": "hurriyet-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Hürriyet",
    "title": "Hürriyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hürriyet ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Hürriyet",
    "type": "neighborhood"
  },
  {
    "slug": "incirtepe-cicekcilik-peyzaj-organizasyon",
    "name": "İncirtepe",
    "title": "İncirtepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İncirtepe ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "İncirtepe",
    "type": "neighborhood"
  },
  {
    "slug": "inonu-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "İnönü",
    "title": "İnönü Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İnönü ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "İnönü",
    "type": "neighborhood"
  },
  {
    "slug": "istiklal-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "İstiklal",
    "title": "İstiklal Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İstiklal ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "İstiklal",
    "type": "neighborhood"
  },
  {
    "slug": "koza-cicekcilik-peyzaj-organizasyon",
    "name": "Koza",
    "title": "Koza Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Koza ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Koza",
    "type": "neighborhood"
  },
  {
    "slug": "mehmet-akif-ersoy-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Mehmet Akif Ersoy",
    "title": "Mehmet Akif Ersoy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mehmet Akif Ersoy ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Mehmet Akif Ersoy",
    "type": "neighborhood"
  },
  {
    "slug": "mehtercesme-cicekcilik-peyzaj-organizasyon",
    "name": "Mehterçeşme",
    "title": "Mehterçeşme Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mehterçeşme ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Mehterçeşme",
    "type": "neighborhood"
  },
  {
    "slug": "mevlana-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Mevlana",
    "title": "Mevlana Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mevlana ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Mevlana",
    "type": "neighborhood"
  },
  {
    "slug": "namik-kemal-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Namık Kemal",
    "title": "Namık Kemal Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Namık Kemal ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Namık Kemal",
    "type": "neighborhood"
  },
  {
    "slug": "necip-fazil-kisakurek-cicekcilik-peyzaj-organizasyon",
    "name": "Necip Fazıl Kısakürek",
    "title": "Necip Fazıl Kısakürek Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Necip Fazıl Kısakürek ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Necip Fazıl Kısakürek",
    "type": "neighborhood"
  },
  {
    "slug": "orhan-gazi-cicekcilik-peyzaj-organizasyon",
    "name": "Orhan Gazi",
    "title": "Orhan Gazi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Orhan Gazi ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Orhan Gazi",
    "type": "neighborhood"
  },
  {
    "slug": "osmangazi-cicekcilik-peyzaj-organizasyon",
    "name": "Osmangazi",
    "title": "Osmangazi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Osmangazi ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Osmangazi",
    "type": "neighborhood"
  },
  {
    "slug": "ornek-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Örnek",
    "title": "Örnek Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Örnek ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Örnek",
    "type": "neighborhood"
  },
  {
    "slug": "pinar-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Pınar",
    "title": "Pınar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Pınar ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Pınar",
    "type": "neighborhood"
  },
  {
    "slug": "piri-reis-cicekcilik-peyzaj-organizasyon",
    "name": "Piri Reis",
    "title": "Piri Reis Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Piri Reis ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Piri Reis",
    "type": "neighborhood"
  },
  {
    "slug": "saadetdere-cicekcilik-peyzaj-organizasyon",
    "name": "Saadetdere",
    "title": "Saadetdere Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Saadetdere ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Saadetdere",
    "type": "neighborhood"
  },
  {
    "slug": "selahaddin-eyyubi-cicekcilik-peyzaj-organizasyon",
    "name": "Selahaddin Eyyubi",
    "title": "Selahaddin Eyyubi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Selahaddin Eyyubi ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Selahaddin Eyyubi",
    "type": "neighborhood"
  },
  {
    "slug": "sultaniye-cicekcilik-peyzaj-organizasyon",
    "name": "Sultaniye",
    "title": "Sultaniye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sultaniye ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Sultaniye",
    "type": "neighborhood"
  },
  {
    "slug": "suleymaniye-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Süleymaniye",
    "title": "Süleymaniye Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Süleymaniye ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Süleymaniye",
    "type": "neighborhood"
  },
  {
    "slug": "sehitler-cicekcilik-peyzaj-organizasyon",
    "name": "Şehitler",
    "title": "Şehitler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Şehitler ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Şehitler",
    "type": "neighborhood"
  },
  {
    "slug": "talatpasa-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Talatpaşa",
    "title": "Talatpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Talatpaşa ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Talatpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "turgut-ozal-cicekcilik-peyzaj-organizasyon",
    "name": "Turgut Özal",
    "title": "Turgut Özal Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Turgut Özal ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Turgut Özal",
    "type": "neighborhood"
  },
  {
    "slug": "ucevler-cicekcilik-peyzaj-organizasyon",
    "name": "Üçevler",
    "title": "Üçevler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Üçevler ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Üçevler",
    "type": "neighborhood"
  },
  {
    "slug": "yenikent-cicekcilik-peyzaj-organizasyon",
    "name": "Yenikent",
    "title": "Yenikent Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yenikent ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Yenikent",
    "type": "neighborhood"
  },
  {
    "slug": "yesilkent-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilkent",
    "title": "Yeşilkent Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yeşilkent ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Yeşilkent",
    "type": "neighborhood"
  },
  {
    "slug": "yunus-emre-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Yunus Emre",
    "title": "Yunus Emre Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yunus Emre ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Yunus Emre",
    "type": "neighborhood"
  },
  {
    "slug": "zafer-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Zafer",
    "title": "Zafer Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Zafer ve Esenyurt çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Esenyurt",
    "neighborhood": "Zafer",
    "type": "neighborhood"
  },
  {
    "slug": "abdurrahmangazi-sancaktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Abdurrahmangazi",
    "title": "Abdurrahmangazi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Abdurrahmangazi ve Sancaktepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sancaktepe",
    "neighborhood": "Abdurrahmangazi",
    "type": "neighborhood"
  },
  {
    "slug": "akpinar-sancaktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Akpınar",
    "title": "Akpınar Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Akpınar ve Sancaktepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sancaktepe",
    "neighborhood": "Akpınar",
    "type": "neighborhood"
  },
  {
    "slug": "ataturk-sancaktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Atatürk",
    "title": "Atatürk Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Atatürk ve Sancaktepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sancaktepe",
    "neighborhood": "Atatürk",
    "type": "neighborhood"
  },
  {
    "slug": "emek-cicekcilik-peyzaj-organizasyon",
    "name": "Emek",
    "title": "Emek Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Emek ve Sancaktepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sancaktepe",
    "neighborhood": "Emek",
    "type": "neighborhood"
  },
  {
    "slug": "eyup-sultan-cicekcilik-peyzaj-organizasyon",
    "name": "Eyüp Sultan",
    "title": "Eyüp Sultan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Eyüp Sultan ve Sancaktepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sancaktepe",
    "neighborhood": "Eyüp Sultan",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-sancaktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Fatih ve Sancaktepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sancaktepe",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "hilal-cicekcilik-peyzaj-organizasyon",
    "name": "Hilal",
    "title": "Hilal Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Hilal ve Sancaktepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sancaktepe",
    "neighborhood": "Hilal",
    "type": "neighborhood"
  },
  {
    "slug": "inonu-sancaktepe-cicekcilik-peyzaj-organizasyon",
    "name": "İnönü",
    "title": "İnönü Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İnönü ve Sancaktepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sancaktepe",
    "neighborhood": "İnönü",
    "type": "neighborhood"
  },
  {
    "slug": "kemal-turkler-cicekcilik-peyzaj-organizasyon",
    "name": "Kemal Türkler",
    "title": "Kemal Türkler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Kemal Türkler ve Sancaktepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sancaktepe",
    "neighborhood": "Kemal Türkler",
    "type": "neighborhood"
  },
  {
    "slug": "meclis-cicekcilik-peyzaj-organizasyon",
    "name": "Meclis",
    "title": "Meclis Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Meclis ve Sancaktepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sancaktepe",
    "neighborhood": "Meclis",
    "type": "neighborhood"
  },
  {
    "slug": "merve-cicekcilik-peyzaj-organizasyon",
    "name": "Merve",
    "title": "Merve Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Merve ve Sancaktepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sancaktepe",
    "neighborhood": "Merve",
    "type": "neighborhood"
  },
  {
    "slug": "mevlana-sancaktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Mevlana",
    "title": "Mevlana Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Mevlana ve Sancaktepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sancaktepe",
    "neighborhood": "Mevlana",
    "type": "neighborhood"
  },
  {
    "slug": "osmangazi-sancaktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Osmangazi",
    "title": "Osmangazi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Osmangazi ve Sancaktepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sancaktepe",
    "neighborhood": "Osmangazi",
    "type": "neighborhood"
  },
  {
    "slug": "pasakoy-cicekcilik-peyzaj-organizasyon",
    "name": "Paşaköy",
    "title": "Paşaköy Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Paşaköy ve Sancaktepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sancaktepe",
    "neighborhood": "Paşaköy",
    "type": "neighborhood"
  },
  {
    "slug": "safa-cicekcilik-peyzaj-organizasyon",
    "name": "Safa",
    "title": "Safa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Safa ve Sancaktepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sancaktepe",
    "neighborhood": "Safa",
    "type": "neighborhood"
  },
  {
    "slug": "sarigazi-cicekcilik-peyzaj-organizasyon",
    "name": "Sarıgazi",
    "title": "Sarıgazi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sarıgazi ve Sancaktepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sancaktepe",
    "neighborhood": "Sarıgazi",
    "type": "neighborhood"
  },
  {
    "slug": "veysel-karani-cicekcilik-peyzaj-organizasyon",
    "name": "Veysel Karani",
    "title": "Veysel Karani Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Veysel Karani ve Sancaktepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sancaktepe",
    "neighborhood": "Veysel Karani",
    "type": "neighborhood"
  },
  {
    "slug": "yenidogan-sancaktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Yenidoğan",
    "title": "Yenidoğan Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yenidoğan ve Sancaktepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sancaktepe",
    "neighborhood": "Yenidoğan",
    "type": "neighborhood"
  },
  {
    "slug": "yunus-emre-sancaktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Yunus Emre",
    "title": "Yunus Emre Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yunus Emre ve Sancaktepe çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sancaktepe",
    "neighborhood": "Yunus Emre",
    "type": "neighborhood"
  },
  {
    "slug": "50-yil-cicekcilik-peyzaj-organizasyon",
    "name": "50. Yıl",
    "title": "50. Yıl Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "50. Yıl ve Sultangazi çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultangazi",
    "neighborhood": "50. Yıl",
    "type": "neighborhood"
  },
  {
    "slug": "75-yil-cicekcilik-peyzaj-organizasyon",
    "name": "75. Yıl",
    "title": "75. Yıl Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "75. Yıl ve Sultangazi çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultangazi",
    "neighborhood": "75. Yıl",
    "type": "neighborhood"
  },
  {
    "slug": "cebeci-cicekcilik-peyzaj-organizasyon",
    "name": "Cebeci",
    "title": "Cebeci Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cebeci ve Sultangazi çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultangazi",
    "neighborhood": "Cebeci",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-sultangazi-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet ve Sultangazi çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultangazi",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "esentepe-sultangazi-cicekcilik-peyzaj-organizasyon",
    "name": "Esentepe",
    "title": "Esentepe Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Esentepe ve Sultangazi çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultangazi",
    "neighborhood": "Esentepe",
    "type": "neighborhood"
  },
  {
    "slug": "eski-habipler-cicekcilik-peyzaj-organizasyon",
    "name": "Eski Habipler",
    "title": "Eski Habipler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Eski Habipler ve Sultangazi çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultangazi",
    "neighborhood": "Eski Habipler",
    "type": "neighborhood"
  },
  {
    "slug": "gazi-cicekcilik-peyzaj-organizasyon",
    "name": "Gazi",
    "title": "Gazi Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Gazi ve Sultangazi çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultangazi",
    "neighborhood": "Gazi",
    "type": "neighborhood"
  },
  {
    "slug": "habibler-cicekcilik-peyzaj-organizasyon",
    "name": "Habibler",
    "title": "Habibler Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Habibler ve Sultangazi çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultangazi",
    "neighborhood": "Habibler",
    "type": "neighborhood"
  },
  {
    "slug": "ismetpasa-sultangazi-cicekcilik-peyzaj-organizasyon",
    "name": "İsmetpaşa",
    "title": "İsmetpaşa Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "İsmetpaşa ve Sultangazi çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultangazi",
    "neighborhood": "İsmetpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "malkocoglu-cicekcilik-peyzaj-organizasyon",
    "name": "Malkoçoğlu",
    "title": "Malkoçoğlu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Malkoçoğlu ve Sultangazi çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultangazi",
    "neighborhood": "Malkoçoğlu",
    "type": "neighborhood"
  },
  {
    "slug": "sultanciftligi-sultangazi-cicekcilik-peyzaj-organizasyon",
    "name": "Sultançiftliği",
    "title": "Sultançiftliği Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Sultançiftliği ve Sultangazi çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultangazi",
    "neighborhood": "Sultançiftliği",
    "type": "neighborhood"
  },
  {
    "slug": "ugur-mumcu-sultangazi-cicekcilik-peyzaj-organizasyon",
    "name": "Uğur Mumcu",
    "title": "Uğur Mumcu Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Uğur Mumcu ve Sultangazi çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultangazi",
    "neighborhood": "Uğur Mumcu",
    "type": "neighborhood"
  },
  {
    "slug": "yayla-sultangazi-cicekcilik-peyzaj-organizasyon",
    "name": "Yayla",
    "title": "Yayla Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yayla ve Sultangazi çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultangazi",
    "neighborhood": "Yayla",
    "type": "neighborhood"
  },
  {
    "slug": "yunus-emre-sultangazi-cicekcilik-peyzaj-organizasyon",
    "name": "Yunus Emre",
    "title": "Yunus Emre Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Yunus Emre ve Sultangazi çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultangazi",
    "neighborhood": "Yunus Emre",
    "type": "neighborhood"
  },
  {
    "slug": "zubeyde-hanim-cicekcilik-peyzaj-organizasyon",
    "name": "Zübeyde Hanım",
    "title": "Zübeyde Hanım Çiçekçilik - Peyzaj - Organizasyon | Sümbül Garden",
    "description": "Zübeyde Hanım ve Sultangazi çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Sultangazi",
    "neighborhood": "Zübeyde Hanım",
    "type": "neighborhood"
  }
] satisfies IstanbulAreaPage[];

export const featuredAreaSlugs = [
  "bahcesehir-cicekcilik-peyzaj-organizasyon",
  "basaksehir-cicekcilik-peyzaj-organizasyon",
  "esenyurt-cicekcilik-peyzaj-organizasyon",
  "kayabasi-cicekcilik-peyzaj-organizasyon",
  "bahcekent-cicekcilik-peyzaj-organizasyon",
  "kayasehir-cicekcilik-peyzaj-organizasyon",
  "ispartakule-cicekcilik-peyzaj-organizasyon"
];

export function getIstanbulAreaBySlug(slug: string): IstanbulAreaPage | null {
  return istanbulAreaPages.find((area) => area.slug === slug) ?? null;
}

function isIstanbulArea(area: IstanbulAreaPage | null): area is IstanbulAreaPage {
  return area !== null;
}

export function getFeaturedIstanbulAreas(): IstanbulAreaPage[] {
  return featuredAreaSlugs
    .map((slug) => getIstanbulAreaBySlug(slug))
    .filter(isIstanbulArea);
}

export function getIstanbulDistrictGroups() {
  return istanbulAreaPages.reduce<Record<string, IstanbulAreaPage[]>>((groups, area) => {
    if (area.type === "locality") {
      return groups;
    }

    const group = groups[area.district] ?? [];
    group.push(area);
    groups[area.district] = group;
    return groups;
  }, {});
}
