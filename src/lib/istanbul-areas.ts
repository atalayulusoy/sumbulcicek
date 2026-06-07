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
    "title": "Ispartakule Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ispartakule çiçekçi arayanlar için Avcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Avcılar",
    "neighborhood": "Tahtakale",
    "type": "locality"
  },
  {
    "slug": "bahcekent-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçekent",
    "title": "Bahçekent Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bahçekent çiçekçi arayanlar için Başakşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Başakşehir",
    "neighborhood": "Bahçeşehir 2. Kısım",
    "type": "locality"
  },
  {
    "slug": "bahcesehir-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçeşehir",
    "title": "Bahçeşehir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bahçeşehir çiçekçi arayanlar için Başakşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Başakşehir",
    "neighborhood": "Bahçeşehir 1. Kısım",
    "type": "locality"
  },
  {
    "slug": "kayasehir-cicekcilik-peyzaj-organizasyon",
    "name": "Kayaşehir",
    "title": "Kayaşehir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kayaşehir çiçekçi arayanlar için Başakşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Başakşehir",
    "neighborhood": "Kayabaşı",
    "type": "locality"
  },
  {
    "slug": "park-mavera-cicekcilik-peyzaj-organizasyon",
    "name": "Park Mavera",
    "title": "Park Mavera Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Park Mavera çiçekçi arayanlar için Başakşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Başakşehir",
    "neighborhood": "Kayabaşı",
    "type": "locality"
  },
  {
    "slug": "adalar-cicekcilik-peyzaj-organizasyon",
    "name": "Adalar",
    "title": "Adalar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Adalar çiçekçi arayanlar için Adalar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Adalar",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "arnavutkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Arnavutköy",
    "title": "Arnavutköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Arnavutköy çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "atasehir-cicekcilik-peyzaj-organizasyon",
    "name": "Ataşehir",
    "title": "Ataşehir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ataşehir çiçekçi arayanlar için Ataşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ataşehir",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "avcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Avcılar",
    "title": "Avcılar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Avcılar çiçekçi arayanlar için Avcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Avcılar",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Bağcılar",
    "title": "Bağcılar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bağcılar çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "bahcelievler-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçelievler",
    "title": "Bahçelievler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bahçelievler çiçekçi arayanlar için Bahçelievler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bahçelievler",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "bakirkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Bakırköy",
    "title": "Bakırköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bakırköy çiçekçi arayanlar için Bakırköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bakırköy",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "basaksehir-cicekcilik-peyzaj-organizasyon",
    "name": "Başakşehir",
    "title": "Başakşehir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Başakşehir çiçekçi arayanlar için Başakşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Başakşehir",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "bayrampasa-cicekcilik-peyzaj-organizasyon",
    "name": "Bayrampaşa",
    "title": "Bayrampaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bayrampaşa çiçekçi arayanlar için Bayrampaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bayrampaşa",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "besiktas-cicekcilik-peyzaj-organizasyon",
    "name": "Beşiktaş",
    "title": "Beşiktaş Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Beşiktaş çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "beykoz-cicekcilik-peyzaj-organizasyon",
    "name": "Beykoz",
    "title": "Beykoz Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Beykoz çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "beylikduzu-cicekcilik-peyzaj-organizasyon",
    "name": "Beylikdüzü",
    "title": "Beylikdüzü Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Beylikdüzü çiçekçi arayanlar için Beylikdüzü ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beylikdüzü",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "beyoglu-cicekcilik-peyzaj-organizasyon",
    "name": "Beyoğlu",
    "title": "Beyoğlu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Beyoğlu çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "buyukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Büyükçekmece",
    "title": "Büyükçekmece Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Büyükçekmece çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "catalca-cicekcilik-peyzaj-organizasyon",
    "name": "Çatalca",
    "title": "Çatalca Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çatalca çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "cekmekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Çekmeköy",
    "title": "Çekmeköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çekmeköy çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "esenler-cicekcilik-peyzaj-organizasyon",
    "name": "Esenler",
    "title": "Esenler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Esenler çiçekçi arayanlar için Esenler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenler",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Esenyurt",
    "title": "Esenyurt Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Esenyurt çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "eyupsultan-cicekcilik-peyzaj-organizasyon",
    "name": "Eyüpsultan",
    "title": "Eyüpsultan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Eyüpsultan çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "fatih-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fatih çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "gaziosmanpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Gaziosmanpaşa",
    "title": "Gaziosmanpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gaziosmanpaşa çiçekçi arayanlar için Gaziosmanpaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Gaziosmanpaşa",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "gungoren-cicekcilik-peyzaj-organizasyon",
    "name": "Güngören",
    "title": "Güngören Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Güngören çiçekçi arayanlar için Güngören ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Güngören",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "kadikoy-cicekcilik-peyzaj-organizasyon",
    "name": "Kadıköy",
    "title": "Kadıköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kadıköy çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "kagithane-cicekcilik-peyzaj-organizasyon",
    "name": "Kağıthane",
    "title": "Kağıthane Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kağıthane çiçekçi arayanlar için Kağıthane ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kağıthane",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "kartal-cicekcilik-peyzaj-organizasyon",
    "name": "Kartal",
    "title": "Kartal Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kartal çiçekçi arayanlar için Kartal ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kartal",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "kucukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Küçükçekmece",
    "title": "Küçükçekmece Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Küçükçekmece çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "maltepe-cicekcilik-peyzaj-organizasyon",
    "name": "Maltepe",
    "title": "Maltepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Maltepe çiçekçi arayanlar için Maltepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Maltepe",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Pendik",
    "title": "Pendik Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Pendik çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "sancaktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Sancaktepe",
    "title": "Sancaktepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sancaktepe çiçekçi arayanlar için Sancaktepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sancaktepe",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "sariyer-cicekcilik-peyzaj-organizasyon",
    "name": "Sarıyer",
    "title": "Sarıyer Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sarıyer çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "silivri-cicekcilik-peyzaj-organizasyon",
    "name": "Silivri",
    "title": "Silivri Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Silivri çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Sultanbeyli",
    "title": "Sultanbeyli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sultanbeyli çiçekçi arayanlar için Sultanbeyli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultanbeyli",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "sultangazi-cicekcilik-peyzaj-organizasyon",
    "name": "Sultangazi",
    "title": "Sultangazi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sultangazi çiçekçi arayanlar için Sultangazi ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultangazi",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "sile-cicekcilik-peyzaj-organizasyon",
    "name": "Şile",
    "title": "Şile Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Şile çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "sisli-cicekcilik-peyzaj-organizasyon",
    "name": "Şişli",
    "title": "Şişli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Şişli çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "tuzla-cicekcilik-peyzaj-organizasyon",
    "name": "Tuzla",
    "title": "Tuzla Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Tuzla çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "Ümraniye",
    "title": "Ümraniye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ümraniye çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "uskudar-cicekcilik-peyzaj-organizasyon",
    "name": "Üsküdar",
    "title": "Üsküdar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Üsküdar çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "zeytinburnu-cicekcilik-peyzaj-organizasyon",
    "name": "Zeytinburnu",
    "title": "Zeytinburnu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Zeytinburnu çiçekçi arayanlar için Zeytinburnu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Zeytinburnu",
    "neighborhood": null,
    "type": "district"
  },
  {
    "slug": "burgazada-cicekcilik-peyzaj-organizasyon",
    "name": "Burgazada",
    "title": "Burgazada Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Burgazada çiçekçi arayanlar için Adalar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Adalar",
    "neighborhood": "Burgazada",
    "type": "neighborhood"
  },
  {
    "slug": "heybeliada-cicekcilik-peyzaj-organizasyon",
    "name": "Heybeliada",
    "title": "Heybeliada Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Heybeliada çiçekçi arayanlar için Adalar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Adalar",
    "neighborhood": "Heybeliada",
    "type": "neighborhood"
  },
  {
    "slug": "kinaliada-cicekcilik-peyzaj-organizasyon",
    "name": "Kınalıada",
    "title": "Kınalıada Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kınalıada çiçekçi arayanlar için Adalar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Adalar",
    "neighborhood": "Kınalıada",
    "type": "neighborhood"
  },
  {
    "slug": "maden-cicekcilik-peyzaj-organizasyon",
    "name": "Maden",
    "title": "Maden Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Maden çiçekçi arayanlar için Adalar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Adalar",
    "neighborhood": "Maden",
    "type": "neighborhood"
  },
  {
    "slug": "nizam-cicekcilik-peyzaj-organizasyon",
    "name": "Nizam",
    "title": "Nizam Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Nizam çiçekçi arayanlar için Adalar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Adalar",
    "neighborhood": "Nizam",
    "type": "neighborhood"
  },
  {
    "slug": "atakoy-1-kisim-cicekcilik-peyzaj-organizasyon",
    "name": "Ataköy 1. Kısım",
    "title": "Ataköy 1. Kısım Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ataköy 1. Kısım çiçekçi arayanlar için Bakırköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bakırköy",
    "neighborhood": "Ataköy 1. Kısım",
    "type": "neighborhood"
  },
  {
    "slug": "atakoy-2-5-6-kisim-cicekcilik-peyzaj-organizasyon",
    "name": "Ataköy 2-5-6. Kısım",
    "title": "Ataköy 2-5-6. Kısım Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ataköy 2-5-6. Kısım çiçekçi arayanlar için Bakırköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bakırköy",
    "neighborhood": "Ataköy 2-5-6. Kısım",
    "type": "neighborhood"
  },
  {
    "slug": "atakoy-3-4-11-kisim-cicekcilik-peyzaj-organizasyon",
    "name": "Ataköy 3-4-11. Kısım",
    "title": "Ataköy 3-4-11. Kısım Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ataköy 3-4-11. Kısım çiçekçi arayanlar için Bakırköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bakırköy",
    "neighborhood": "Ataköy 3-4-11. Kısım",
    "type": "neighborhood"
  },
  {
    "slug": "atakoy-7-8-9-10-kisim-cicekcilik-peyzaj-organizasyon",
    "name": "Ataköy 7-8-9-10. Kısım",
    "title": "Ataköy 7-8-9-10. Kısım Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ataköy 7-8-9-10. Kısım çiçekçi arayanlar için Bakırköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bakırköy",
    "neighborhood": "Ataköy 7-8-9-10. Kısım",
    "type": "neighborhood"
  },
  {
    "slug": "basinkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Basınköy",
    "title": "Basınköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Basınköy çiçekçi arayanlar için Bakırköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bakırköy",
    "neighborhood": "Basınköy",
    "type": "neighborhood"
  },
  {
    "slug": "cevizlik-cicekcilik-peyzaj-organizasyon",
    "name": "Cevizlik",
    "title": "Cevizlik Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cevizlik çiçekçi arayanlar için Bakırköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bakırköy",
    "neighborhood": "Cevizlik",
    "type": "neighborhood"
  },
  {
    "slug": "kartaltepe-cicekcilik-peyzaj-organizasyon",
    "name": "Kartaltepe",
    "title": "Kartaltepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kartaltepe çiçekçi arayanlar için Bakırköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bakırköy",
    "neighborhood": "Kartaltepe",
    "type": "neighborhood"
  },
  {
    "slug": "osmaniye-cicekcilik-peyzaj-organizasyon",
    "name": "Osmaniye",
    "title": "Osmaniye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Osmaniye çiçekçi arayanlar için Bakırköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bakırköy",
    "neighborhood": "Osmaniye",
    "type": "neighborhood"
  },
  {
    "slug": "sakizagaci-cicekcilik-peyzaj-organizasyon",
    "name": "Sakızağacı",
    "title": "Sakızağacı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sakızağacı çiçekçi arayanlar için Bakırköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bakırköy",
    "neighborhood": "Sakızağacı",
    "type": "neighborhood"
  },
  {
    "slug": "senlikkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Şenlikköy",
    "title": "Şenlikköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Şenlikköy çiçekçi arayanlar için Bakırköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bakırköy",
    "neighborhood": "Şenlikköy",
    "type": "neighborhood"
  },
  {
    "slug": "yenimahalle-cicekcilik-peyzaj-organizasyon",
    "name": "Yenimahalle",
    "title": "Yenimahalle Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yenimahalle çiçekçi arayanlar için Bakırköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bakırköy",
    "neighborhood": "Yenimahalle",
    "type": "neighborhood"
  },
  {
    "slug": "yesilkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilköy",
    "title": "Yeşilköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeşilköy çiçekçi arayanlar için Bakırköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bakırköy",
    "neighborhood": "Yeşilköy",
    "type": "neighborhood"
  },
  {
    "slug": "yesilkoy-sb-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilköy Sb",
    "title": "Yeşilköy Sb Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeşilköy Sb çiçekçi arayanlar için Bakırköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bakırköy",
    "neighborhood": "Yeşilköy Sb",
    "type": "neighborhood"
  },
  {
    "slug": "yesilyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilyurt",
    "title": "Yeşilyurt Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeşilyurt çiçekçi arayanlar için Bakırköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bakırköy",
    "neighborhood": "Yeşilyurt",
    "type": "neighborhood"
  },
  {
    "slug": "zeytinlik-cicekcilik-peyzaj-organizasyon",
    "name": "Zeytinlik",
    "title": "Zeytinlik Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Zeytinlik çiçekçi arayanlar için Bakırköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bakırköy",
    "neighborhood": "Zeytinlik",
    "type": "neighborhood"
  },
  {
    "slug": "zuhuratbaba-cicekcilik-peyzaj-organizasyon",
    "name": "Zuhuratbaba",
    "title": "Zuhuratbaba Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Zuhuratbaba çiçekçi arayanlar için Bakırköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bakırköy",
    "neighborhood": "Zuhuratbaba",
    "type": "neighborhood"
  },
  {
    "slug": "abbasaga-cicekcilik-peyzaj-organizasyon",
    "name": "Abbasağa",
    "title": "Abbasağa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Abbasağa çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Abbasağa",
    "type": "neighborhood"
  },
  {
    "slug": "akat-cicekcilik-peyzaj-organizasyon",
    "name": "Akat",
    "title": "Akat Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Akat çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Akat",
    "type": "neighborhood"
  },
  {
    "slug": "arnavutkoy-besiktas-cicekcilik-peyzaj-organizasyon",
    "name": "Arnavutköy",
    "title": "Arnavutköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Arnavutköy çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Arnavutköy",
    "type": "neighborhood"
  },
  {
    "slug": "balmumcu-cicekcilik-peyzaj-organizasyon",
    "name": "Balmumcu",
    "title": "Balmumcu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Balmumcu çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Balmumcu",
    "type": "neighborhood"
  },
  {
    "slug": "bebek-cicekcilik-peyzaj-organizasyon",
    "name": "Bebek",
    "title": "Bebek Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bebek çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Bebek",
    "type": "neighborhood"
  },
  {
    "slug": "cihannuma-cicekcilik-peyzaj-organizasyon",
    "name": "Cihannüma",
    "title": "Cihannüma Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cihannüma çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Cihannüma",
    "type": "neighborhood"
  },
  {
    "slug": "dikilitas-cicekcilik-peyzaj-organizasyon",
    "name": "Dikilitaş",
    "title": "Dikilitaş Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Dikilitaş çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Dikilitaş",
    "type": "neighborhood"
  },
  {
    "slug": "etiler-cicekcilik-peyzaj-organizasyon",
    "name": "Etiler",
    "title": "Etiler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Etiler çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Etiler",
    "type": "neighborhood"
  },
  {
    "slug": "gayrettepe-cicekcilik-peyzaj-organizasyon",
    "name": "Gayrettepe",
    "title": "Gayrettepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gayrettepe çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Gayrettepe",
    "type": "neighborhood"
  },
  {
    "slug": "konaklar-cicekcilik-peyzaj-organizasyon",
    "name": "Konaklar",
    "title": "Konaklar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Konaklar çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Konaklar",
    "type": "neighborhood"
  },
  {
    "slug": "kurucesme-cicekcilik-peyzaj-organizasyon",
    "name": "Kuruçeşme",
    "title": "Kuruçeşme Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kuruçeşme çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Kuruçeşme",
    "type": "neighborhood"
  },
  {
    "slug": "kultur-cicekcilik-peyzaj-organizasyon",
    "name": "Kültür",
    "title": "Kültür Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kültür çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Kültür",
    "type": "neighborhood"
  },
  {
    "slug": "levazim-cicekcilik-peyzaj-organizasyon",
    "name": "Levazım",
    "title": "Levazım Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Levazım çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Levazım",
    "type": "neighborhood"
  },
  {
    "slug": "levent-cicekcilik-peyzaj-organizasyon",
    "name": "Levent",
    "title": "Levent Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Levent çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Levent",
    "type": "neighborhood"
  },
  {
    "slug": "mecidiye-cicekcilik-peyzaj-organizasyon",
    "name": "Mecidiye",
    "title": "Mecidiye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mecidiye çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Mecidiye",
    "type": "neighborhood"
  },
  {
    "slug": "muradiye-cicekcilik-peyzaj-organizasyon",
    "name": "Muradiye",
    "title": "Muradiye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Muradiye çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Muradiye",
    "type": "neighborhood"
  },
  {
    "slug": "nisbetiye-cicekcilik-peyzaj-organizasyon",
    "name": "Nisbetiye",
    "title": "Nisbetiye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Nisbetiye çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Nisbetiye",
    "type": "neighborhood"
  },
  {
    "slug": "ortakoy-cicekcilik-peyzaj-organizasyon",
    "name": "Ortaköy",
    "title": "Ortaköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ortaköy çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Ortaköy",
    "type": "neighborhood"
  },
  {
    "slug": "sinanpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Sinanpaşa",
    "title": "Sinanpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sinanpaşa çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Sinanpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "turkali-cicekcilik-peyzaj-organizasyon",
    "name": "Türkali",
    "title": "Türkali Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Türkali çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Türkali",
    "type": "neighborhood"
  },
  {
    "slug": "ulus-cicekcilik-peyzaj-organizasyon",
    "name": "Ulus",
    "title": "Ulus Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ulus çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Ulus",
    "type": "neighborhood"
  },
  {
    "slug": "visnezade-cicekcilik-peyzaj-organizasyon",
    "name": "Vişnezade",
    "title": "Vişnezade Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Vişnezade çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Vişnezade",
    "type": "neighborhood"
  },
  {
    "slug": "yildiz-cicekcilik-peyzaj-organizasyon",
    "name": "Yıldız",
    "title": "Yıldız Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yıldız çiçekçi arayanlar için Beşiktaş ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beşiktaş",
    "neighborhood": "Yıldız",
    "type": "neighborhood"
  },
  {
    "slug": "acarlar-cicekcilik-peyzaj-organizasyon",
    "name": "Acarlar",
    "title": "Acarlar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Acarlar çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Acarlar",
    "type": "neighborhood"
  },
  {
    "slug": "akbaba-cicekcilik-peyzaj-organizasyon",
    "name": "Akbaba",
    "title": "Akbaba Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Akbaba çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Akbaba",
    "type": "neighborhood"
  },
  {
    "slug": "alibahadir-cicekcilik-peyzaj-organizasyon",
    "name": "Alibahadır",
    "title": "Alibahadır Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Alibahadır çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Alibahadır",
    "type": "neighborhood"
  },
  {
    "slug": "anadolu-hisari-cicekcilik-peyzaj-organizasyon",
    "name": "Anadolu Hisarı",
    "title": "Anadolu Hisarı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Anadolu Hisarı çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Anadolu Hisarı",
    "type": "neighborhood"
  },
  {
    "slug": "anadolu-kavagi-cicekcilik-peyzaj-organizasyon",
    "name": "Anadolu Kavağı",
    "title": "Anadolu Kavağı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Anadolu Kavağı çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Anadolu Kavağı",
    "type": "neighborhood"
  },
  {
    "slug": "anadolufeneri-cicekcilik-peyzaj-organizasyon",
    "name": "Anadolufeneri",
    "title": "Anadolufeneri Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Anadolufeneri çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Anadolufeneri",
    "type": "neighborhood"
  },
  {
    "slug": "baklaci-cicekcilik-peyzaj-organizasyon",
    "name": "Baklacı",
    "title": "Baklacı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Baklacı çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Baklacı",
    "type": "neighborhood"
  },
  {
    "slug": "bozhane-cicekcilik-peyzaj-organizasyon",
    "name": "Bozhane",
    "title": "Bozhane Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bozhane çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Bozhane",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "camlibahce-cicekcilik-peyzaj-organizasyon",
    "name": "Çamlıbahçe",
    "title": "Çamlıbahçe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çamlıbahçe çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Çamlıbahçe",
    "type": "neighborhood"
  },
  {
    "slug": "cengeldere-cicekcilik-peyzaj-organizasyon",
    "name": "Çengeldere",
    "title": "Çengeldere Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çengeldere çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Çengeldere",
    "type": "neighborhood"
  },
  {
    "slug": "ciftlik-cicekcilik-peyzaj-organizasyon",
    "name": "Çiftlik",
    "title": "Çiftlik Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çiftlik çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Çiftlik",
    "type": "neighborhood"
  },
  {
    "slug": "cigdem-cicekcilik-peyzaj-organizasyon",
    "name": "Çiğdem",
    "title": "Çiğdem Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çiğdem çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Çiğdem",
    "type": "neighborhood"
  },
  {
    "slug": "cubuklu-cicekcilik-peyzaj-organizasyon",
    "name": "Çubuklu",
    "title": "Çubuklu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çubuklu çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Çubuklu",
    "type": "neighborhood"
  },
  {
    "slug": "dereseki-cicekcilik-peyzaj-organizasyon",
    "name": "Dereseki",
    "title": "Dereseki Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Dereseki çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Dereseki",
    "type": "neighborhood"
  },
  {
    "slug": "elmali-cicekcilik-peyzaj-organizasyon",
    "name": "Elmalı",
    "title": "Elmalı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Elmalı çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Elmalı",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-beykoz-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fatih çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "goksu-cicekcilik-peyzaj-organizasyon",
    "name": "Göksu",
    "title": "Göksu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Göksu çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Göksu",
    "type": "neighborhood"
  },
  {
    "slug": "gollu-cicekcilik-peyzaj-organizasyon",
    "name": "Göllü",
    "title": "Göllü Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Göllü çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Göllü",
    "type": "neighborhood"
  },
  {
    "slug": "gorele-cicekcilik-peyzaj-organizasyon",
    "name": "Görele",
    "title": "Görele Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Görele çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Görele",
    "type": "neighborhood"
  },
  {
    "slug": "goztepe-cicekcilik-peyzaj-organizasyon",
    "name": "Göztepe",
    "title": "Göztepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Göztepe çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Göztepe",
    "type": "neighborhood"
  },
  {
    "slug": "gumussuyu-cicekcilik-peyzaj-organizasyon",
    "name": "Gümüşsuyu",
    "title": "Gümüşsuyu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gümüşsuyu çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Gümüşsuyu",
    "type": "neighborhood"
  },
  {
    "slug": "incirkoy-cicekcilik-peyzaj-organizasyon",
    "name": "İncirköy",
    "title": "İncirköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İncirköy çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "İncirköy",
    "type": "neighborhood"
  },
  {
    "slug": "ishakli-cicekcilik-peyzaj-organizasyon",
    "name": "İshaklı",
    "title": "İshaklı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İshaklı çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "İshaklı",
    "type": "neighborhood"
  },
  {
    "slug": "kanlica-cicekcilik-peyzaj-organizasyon",
    "name": "Kanlıca",
    "title": "Kanlıca Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kanlıca çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Kanlıca",
    "type": "neighborhood"
  },
  {
    "slug": "kavacik-cicekcilik-peyzaj-organizasyon",
    "name": "Kavacık",
    "title": "Kavacık Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kavacık çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Kavacık",
    "type": "neighborhood"
  },
  {
    "slug": "kaynarca-cicekcilik-peyzaj-organizasyon",
    "name": "Kaynarca",
    "title": "Kaynarca Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kaynarca çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Kaynarca",
    "type": "neighborhood"
  },
  {
    "slug": "kilicli-cicekcilik-peyzaj-organizasyon",
    "name": "Kılıçlı",
    "title": "Kılıçlı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kılıçlı çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Kılıçlı",
    "type": "neighborhood"
  },
  {
    "slug": "mahmutsevketpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Mahmutşevketpaşa",
    "title": "Mahmutşevketpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mahmutşevketpaşa çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Mahmutşevketpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Merkez",
    "title": "Merkez Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Merkez çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "ortacesme-cicekcilik-peyzaj-organizasyon",
    "name": "Ortaçeşme",
    "title": "Ortaçeşme Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ortaçeşme çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Ortaçeşme",
    "type": "neighborhood"
  },
  {
    "slug": "ogumce-cicekcilik-peyzaj-organizasyon",
    "name": "Öğümce",
    "title": "Öğümce Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Öğümce çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Öğümce",
    "type": "neighborhood"
  },
  {
    "slug": "ornekkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Örnekköy",
    "title": "Örnekköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Örnekköy çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Örnekköy",
    "type": "neighborhood"
  },
  {
    "slug": "pasabahce-cicekcilik-peyzaj-organizasyon",
    "name": "Paşabahçe",
    "title": "Paşabahçe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Paşabahçe çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Paşabahçe",
    "type": "neighborhood"
  },
  {
    "slug": "pasamandira-cicekcilik-peyzaj-organizasyon",
    "name": "Paşamandıra",
    "title": "Paşamandıra Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Paşamandıra çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Paşamandıra",
    "type": "neighborhood"
  },
  {
    "slug": "polonezkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Polonezköy",
    "title": "Polonezköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Polonezköy çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Polonezköy",
    "type": "neighborhood"
  },
  {
    "slug": "poyrazkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Poyrazköy",
    "title": "Poyrazköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Poyrazköy çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Poyrazköy",
    "type": "neighborhood"
  },
  {
    "slug": "riva-cicekcilik-peyzaj-organizasyon",
    "name": "Riva",
    "title": "Riva Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Riva çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Riva",
    "type": "neighborhood"
  },
  {
    "slug": "ruzgarlibahce-cicekcilik-peyzaj-organizasyon",
    "name": "Rüzgarlıbahçe",
    "title": "Rüzgarlıbahçe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Rüzgarlıbahçe çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Rüzgarlıbahçe",
    "type": "neighborhood"
  },
  {
    "slug": "soguksu-cicekcilik-peyzaj-organizasyon",
    "name": "Soğuksu",
    "title": "Soğuksu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Soğuksu çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Soğuksu",
    "type": "neighborhood"
  },
  {
    "slug": "tokatkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Tokatköy",
    "title": "Tokatköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Tokatköy çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Tokatköy",
    "type": "neighborhood"
  },
  {
    "slug": "yalikoy-cicekcilik-peyzaj-organizasyon",
    "name": "Yalıköy",
    "title": "Yalıköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yalıköy çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Yalıköy",
    "type": "neighborhood"
  },
  {
    "slug": "yavuz-selim-cicekcilik-peyzaj-organizasyon",
    "name": "Yavuz Selim",
    "title": "Yavuz Selim Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yavuz Selim çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Yavuz Selim",
    "type": "neighborhood"
  },
  {
    "slug": "yeni-mahalle-cicekcilik-peyzaj-organizasyon",
    "name": "Yeni Mahalle",
    "title": "Yeni Mahalle Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeni Mahalle çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Yeni Mahalle",
    "type": "neighborhood"
  },
  {
    "slug": "zerzavatci-cicekcilik-peyzaj-organizasyon",
    "name": "Zerzavatçı",
    "title": "Zerzavatçı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Zerzavatçı çiçekçi arayanlar için Beykoz ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beykoz",
    "neighborhood": "Zerzavatçı",
    "type": "neighborhood"
  },
  {
    "slug": "arap-cami-cicekcilik-peyzaj-organizasyon",
    "name": "Arap Cami",
    "title": "Arap Cami Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Arap Cami çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Arap Cami",
    "type": "neighborhood"
  },
  {
    "slug": "asmali-mescit-cicekcilik-peyzaj-organizasyon",
    "name": "Asmalı Mescit",
    "title": "Asmalı Mescit Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Asmalı Mescit çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Asmalı Mescit",
    "type": "neighborhood"
  },
  {
    "slug": "bedrettin-cicekcilik-peyzaj-organizasyon",
    "name": "Bedrettin",
    "title": "Bedrettin Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bedrettin çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Bedrettin",
    "type": "neighborhood"
  },
  {
    "slug": "bereketzade-cicekcilik-peyzaj-organizasyon",
    "name": "Bereketzade",
    "title": "Bereketzade Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bereketzade çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Bereketzade",
    "type": "neighborhood"
  },
  {
    "slug": "bostan-cicekcilik-peyzaj-organizasyon",
    "name": "Bostan",
    "title": "Bostan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bostan çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Bostan",
    "type": "neighborhood"
  },
  {
    "slug": "bulbul-cicekcilik-peyzaj-organizasyon",
    "name": "Bülbül",
    "title": "Bülbül Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bülbül çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Bülbül",
    "type": "neighborhood"
  },
  {
    "slug": "camiikebir-cicekcilik-peyzaj-organizasyon",
    "name": "Camiikebir",
    "title": "Camiikebir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Camiikebir çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Camiikebir",
    "type": "neighborhood"
  },
  {
    "slug": "cihangir-cicekcilik-peyzaj-organizasyon",
    "name": "Cihangir",
    "title": "Cihangir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cihangir çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Cihangir",
    "type": "neighborhood"
  },
  {
    "slug": "catma-mescit-cicekcilik-peyzaj-organizasyon",
    "name": "Çatma Mescit",
    "title": "Çatma Mescit Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çatma Mescit çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Çatma Mescit",
    "type": "neighborhood"
  },
  {
    "slug": "cukur-cicekcilik-peyzaj-organizasyon",
    "name": "Çukur",
    "title": "Çukur Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çukur çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Çukur",
    "type": "neighborhood"
  },
  {
    "slug": "emekyemez-cicekcilik-peyzaj-organizasyon",
    "name": "Emekyemez",
    "title": "Emekyemez Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Emekyemez çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Emekyemez",
    "type": "neighborhood"
  },
  {
    "slug": "evliya-celebi-cicekcilik-peyzaj-organizasyon",
    "name": "Evliya Çelebi",
    "title": "Evliya Çelebi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Evliya Çelebi çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Evliya Çelebi",
    "type": "neighborhood"
  },
  {
    "slug": "fetihtepe-cicekcilik-peyzaj-organizasyon",
    "name": "Fetihtepe",
    "title": "Fetihtepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fetihtepe çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Fetihtepe",
    "type": "neighborhood"
  },
  {
    "slug": "firuzaga-cicekcilik-peyzaj-organizasyon",
    "name": "Firuzağa",
    "title": "Firuzağa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Firuzağa çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Firuzağa",
    "type": "neighborhood"
  },
  {
    "slug": "gumussuyu-beyoglu-cicekcilik-peyzaj-organizasyon",
    "name": "Gümüşsuyu",
    "title": "Gümüşsuyu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gümüşsuyu çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Gümüşsuyu",
    "type": "neighborhood"
  },
  {
    "slug": "haciahmet-cicekcilik-peyzaj-organizasyon",
    "name": "Hacıahmet",
    "title": "Hacıahmet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hacıahmet çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Hacıahmet",
    "type": "neighborhood"
  },
  {
    "slug": "hacimimi-cicekcilik-peyzaj-organizasyon",
    "name": "Hacımimi",
    "title": "Hacımimi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hacımimi çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Hacımimi",
    "type": "neighborhood"
  },
  {
    "slug": "halicioglu-cicekcilik-peyzaj-organizasyon",
    "name": "Halıcıoğlu",
    "title": "Halıcıoğlu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Halıcıoğlu çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Halıcıoğlu",
    "type": "neighborhood"
  },
  {
    "slug": "huseyinaga-cicekcilik-peyzaj-organizasyon",
    "name": "Hüseyinağa",
    "title": "Hüseyinağa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hüseyinağa çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Hüseyinağa",
    "type": "neighborhood"
  },
  {
    "slug": "istiklal-cicekcilik-peyzaj-organizasyon",
    "name": "İstiklal",
    "title": "İstiklal Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İstiklal çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "İstiklal",
    "type": "neighborhood"
  },
  {
    "slug": "kadimehmet-efendi-cicekcilik-peyzaj-organizasyon",
    "name": "Kadımehmet Efendi",
    "title": "Kadımehmet Efendi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kadımehmet Efendi çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Kadımehmet Efendi",
    "type": "neighborhood"
  },
  {
    "slug": "kalyoncu-kullugu-cicekcilik-peyzaj-organizasyon",
    "name": "Kalyoncu Kulluğu",
    "title": "Kalyoncu Kulluğu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kalyoncu Kulluğu çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Kalyoncu Kulluğu",
    "type": "neighborhood"
  },
  {
    "slug": "kamer-hatun-cicekcilik-peyzaj-organizasyon",
    "name": "Kamer Hatun",
    "title": "Kamer Hatun Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kamer Hatun çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Kamer Hatun",
    "type": "neighborhood"
  },
  {
    "slug": "kaptanpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Kaptanpaşa",
    "title": "Kaptanpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kaptanpaşa çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Kaptanpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "katipmustafa-celebi-cicekcilik-peyzaj-organizasyon",
    "name": "Katipmustafa Çelebi",
    "title": "Katipmustafa Çelebi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Katipmustafa Çelebi çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Katipmustafa Çelebi",
    "type": "neighborhood"
  },
  {
    "slug": "kececi-piri-cicekcilik-peyzaj-organizasyon",
    "name": "Keçeci Piri",
    "title": "Keçeci Piri Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Keçeci Piri çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Keçeci Piri",
    "type": "neighborhood"
  },
  {
    "slug": "kemankes-karamustafapasa-cicekcilik-peyzaj-organizasyon",
    "name": "Kemankeş Karamustafapaşa",
    "title": "Kemankeş Karamustafapaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kemankeş Karamustafapaşa çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Kemankeş Karamustafapaşa",
    "type": "neighborhood"
  },
  {
    "slug": "kilicali-pasa-cicekcilik-peyzaj-organizasyon",
    "name": "Kılıçali Paşa",
    "title": "Kılıçali Paşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kılıçali Paşa çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Kılıçali Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "kocatepe-cicekcilik-peyzaj-organizasyon",
    "name": "Kocatepe",
    "title": "Kocatepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kocatepe çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Kocatepe",
    "type": "neighborhood"
  },
  {
    "slug": "kulaksiz-cicekcilik-peyzaj-organizasyon",
    "name": "Kulaksız",
    "title": "Kulaksız Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kulaksız çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Kulaksız",
    "type": "neighborhood"
  },
  {
    "slug": "kuloglu-cicekcilik-peyzaj-organizasyon",
    "name": "Kuloğlu",
    "title": "Kuloğlu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kuloğlu çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Kuloğlu",
    "type": "neighborhood"
  },
  {
    "slug": "kucuk-piyale-cicekcilik-peyzaj-organizasyon",
    "name": "Küçük Piyale",
    "title": "Küçük Piyale Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Küçük Piyale çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Küçük Piyale",
    "type": "neighborhood"
  },
  {
    "slug": "mueyyetzade-cicekcilik-peyzaj-organizasyon",
    "name": "Müeyyetzade",
    "title": "Müeyyetzade Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Müeyyetzade çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Müeyyetzade",
    "type": "neighborhood"
  },
  {
    "slug": "omer-avni-cicekcilik-peyzaj-organizasyon",
    "name": "Ömer Avni",
    "title": "Ömer Avni Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ömer Avni çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Ömer Avni",
    "type": "neighborhood"
  },
  {
    "slug": "ornektepe-cicekcilik-peyzaj-organizasyon",
    "name": "Örnektepe",
    "title": "Örnektepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Örnektepe çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Örnektepe",
    "type": "neighborhood"
  },
  {
    "slug": "piripasa-cicekcilik-peyzaj-organizasyon",
    "name": "Piripaşa",
    "title": "Piripaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Piripaşa çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Piripaşa",
    "type": "neighborhood"
  },
  {
    "slug": "piyalepasa-cicekcilik-peyzaj-organizasyon",
    "name": "Piyalepaşa",
    "title": "Piyalepaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Piyalepaşa çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Piyalepaşa",
    "type": "neighborhood"
  },
  {
    "slug": "purtelas-hasan-efendi-cicekcilik-peyzaj-organizasyon",
    "name": "Pürtelaş Hasan Efendi",
    "title": "Pürtelaş Hasan Efendi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Pürtelaş Hasan Efendi çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Pürtelaş Hasan Efendi",
    "type": "neighborhood"
  },
  {
    "slug": "sururi-mehmet-efendi-cicekcilik-peyzaj-organizasyon",
    "name": "Sururi Mehmet Efendi",
    "title": "Sururi Mehmet Efendi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sururi Mehmet Efendi çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Sururi Mehmet Efendi",
    "type": "neighborhood"
  },
  {
    "slug": "sutluce-cicekcilik-peyzaj-organizasyon",
    "name": "Sütlüce",
    "title": "Sütlüce Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sütlüce çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Sütlüce",
    "type": "neighborhood"
  },
  {
    "slug": "sahkulu-cicekcilik-peyzaj-organizasyon",
    "name": "Şahkulu",
    "title": "Şahkulu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Şahkulu çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Şahkulu",
    "type": "neighborhood"
  },
  {
    "slug": "sehit-muhtar-cicekcilik-peyzaj-organizasyon",
    "name": "Şehit Muhtar",
    "title": "Şehit Muhtar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Şehit Muhtar çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Şehit Muhtar",
    "type": "neighborhood"
  },
  {
    "slug": "tomtom-cicekcilik-peyzaj-organizasyon",
    "name": "Tomtom",
    "title": "Tomtom Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Tomtom çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Tomtom",
    "type": "neighborhood"
  },
  {
    "slug": "yahya-kahya-cicekcilik-peyzaj-organizasyon",
    "name": "Yahya Kahya",
    "title": "Yahya Kahya Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yahya Kahya çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Yahya Kahya",
    "type": "neighborhood"
  },
  {
    "slug": "yenisehir-cicekcilik-peyzaj-organizasyon",
    "name": "Yenişehir",
    "title": "Yenişehir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yenişehir çiçekçi arayanlar için Beyoğlu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beyoğlu",
    "neighborhood": "Yenişehir",
    "type": "neighborhood"
  },
  {
    "slug": "akalan-cicekcilik-peyzaj-organizasyon",
    "name": "Akalan",
    "title": "Akalan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Akalan çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Akalan",
    "type": "neighborhood"
  },
  {
    "slug": "ataturk-cicekcilik-peyzaj-organizasyon",
    "name": "Atatürk",
    "title": "Atatürk Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Atatürk çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Atatürk",
    "type": "neighborhood"
  },
  {
    "slug": "aydinlar-cicekcilik-peyzaj-organizasyon",
    "name": "Aydınlar",
    "title": "Aydınlar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Aydınlar çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Aydınlar",
    "type": "neighborhood"
  },
  {
    "slug": "bahsayis-cicekcilik-peyzaj-organizasyon",
    "name": "Bahşayiş",
    "title": "Bahşayiş Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bahşayiş çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Bahşayiş",
    "type": "neighborhood"
  },
  {
    "slug": "basak-cicekcilik-peyzaj-organizasyon",
    "name": "Başak",
    "title": "Başak Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Başak çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Başak",
    "type": "neighborhood"
  },
  {
    "slug": "belgrat-cicekcilik-peyzaj-organizasyon",
    "name": "Belgrat",
    "title": "Belgrat Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Belgrat çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Belgrat",
    "type": "neighborhood"
  },
  {
    "slug": "celepkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Celepköy",
    "title": "Celepköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Celepköy çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Celepköy",
    "type": "neighborhood"
  },
  {
    "slug": "cakil-cicekcilik-peyzaj-organizasyon",
    "name": "Çakıl",
    "title": "Çakıl Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çakıl çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Çakıl",
    "type": "neighborhood"
  },
  {
    "slug": "canakca-cicekcilik-peyzaj-organizasyon",
    "name": "Çanakça",
    "title": "Çanakça Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çanakça çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Çanakça",
    "type": "neighborhood"
  },
  {
    "slug": "ciftlikkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Çiftlikköy",
    "title": "Çiftlikköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çiftlikköy çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Çiftlikköy",
    "type": "neighborhood"
  },
  {
    "slug": "dagyenice-cicekcilik-peyzaj-organizasyon",
    "name": "Dağyenice",
    "title": "Dağyenice Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Dağyenice çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Dağyenice",
    "type": "neighborhood"
  },
  {
    "slug": "elbasan-cicekcilik-peyzaj-organizasyon",
    "name": "Elbasan",
    "title": "Elbasan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Elbasan çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Elbasan",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-catalca-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fatih çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "ferhatpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Ferhatpaşa",
    "title": "Ferhatpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ferhatpaşa çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Ferhatpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "ferhatpasa-sb-cicekcilik-peyzaj-organizasyon",
    "name": "Ferhatpaşa Sb",
    "title": "Ferhatpaşa Sb Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ferhatpaşa Sb çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Ferhatpaşa Sb",
    "type": "neighborhood"
  },
  {
    "slug": "gokceali-cicekcilik-peyzaj-organizasyon",
    "name": "Gökçeali",
    "title": "Gökçeali Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gökçeali çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Gökçeali",
    "type": "neighborhood"
  },
  {
    "slug": "gumuspinar-cicekcilik-peyzaj-organizasyon",
    "name": "Gümüşpınar",
    "title": "Gümüşpınar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gümüşpınar çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Gümüşpınar",
    "type": "neighborhood"
  },
  {
    "slug": "hallacli-cicekcilik-peyzaj-organizasyon",
    "name": "Hallaçlı",
    "title": "Hallaçlı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hallaçlı çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Hallaçlı",
    "type": "neighborhood"
  },
  {
    "slug": "hisarbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Hisarbeyli",
    "title": "Hisarbeyli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hisarbeyli çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Hisarbeyli",
    "type": "neighborhood"
  },
  {
    "slug": "ihsaniye-cicekcilik-peyzaj-organizasyon",
    "name": "İhsaniye",
    "title": "İhsaniye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İhsaniye çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "İhsaniye",
    "type": "neighborhood"
  },
  {
    "slug": "incegiz-cicekcilik-peyzaj-organizasyon",
    "name": "İnceğiz",
    "title": "İnceğiz Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İnceğiz çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "İnceğiz",
    "type": "neighborhood"
  },
  {
    "slug": "izzettin-cicekcilik-peyzaj-organizasyon",
    "name": "İzzettin",
    "title": "İzzettin Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İzzettin çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "İzzettin",
    "type": "neighborhood"
  },
  {
    "slug": "kabakca-cicekcilik-peyzaj-organizasyon",
    "name": "Kabakça",
    "title": "Kabakça Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kabakça çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Kabakça",
    "type": "neighborhood"
  },
  {
    "slug": "kaleici-cicekcilik-peyzaj-organizasyon",
    "name": "Kaleiçi",
    "title": "Kaleiçi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kaleiçi çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Kaleiçi",
    "type": "neighborhood"
  },
  {
    "slug": "kalfa-cicekcilik-peyzaj-organizasyon",
    "name": "Kalfa",
    "title": "Kalfa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kalfa çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Kalfa",
    "type": "neighborhood"
  },
  {
    "slug": "karacakoy-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Karacaköy Merkez",
    "title": "Karacaköy Merkez Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Karacaköy Merkez çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Karacaköy Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "karamandere-cicekcilik-peyzaj-organizasyon",
    "name": "Karamandere",
    "title": "Karamandere Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Karamandere çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Karamandere",
    "type": "neighborhood"
  },
  {
    "slug": "kestanelik-cicekcilik-peyzaj-organizasyon",
    "name": "Kestanelik",
    "title": "Kestanelik Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kestanelik çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Kestanelik",
    "type": "neighborhood"
  },
  {
    "slug": "kizilcaali-cicekcilik-peyzaj-organizasyon",
    "name": "Kızılcaali",
    "title": "Kızılcaali Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kızılcaali çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Kızılcaali",
    "type": "neighborhood"
  },
  {
    "slug": "muratbey-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Muratbey Merkez",
    "title": "Muratbey Merkez Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Muratbey Merkez çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Muratbey Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "nakkas-cicekcilik-peyzaj-organizasyon",
    "name": "Nakkaş",
    "title": "Nakkaş Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Nakkaş çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Nakkaş",
    "type": "neighborhood"
  },
  {
    "slug": "oklali-cicekcilik-peyzaj-organizasyon",
    "name": "Oklalı",
    "title": "Oklalı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Oklalı çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Oklalı",
    "type": "neighborhood"
  },
  {
    "slug": "ormanli-cicekcilik-peyzaj-organizasyon",
    "name": "Ormanlı",
    "title": "Ormanlı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ormanlı çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Ormanlı",
    "type": "neighborhood"
  },
  {
    "slug": "ovayenice-cicekcilik-peyzaj-organizasyon",
    "name": "Ovayenice",
    "title": "Ovayenice Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ovayenice çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Ovayenice",
    "type": "neighborhood"
  },
  {
    "slug": "orcunlu-cicekcilik-peyzaj-organizasyon",
    "name": "Örcünlü",
    "title": "Örcünlü Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Örcünlü çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Örcünlü",
    "type": "neighborhood"
  },
  {
    "slug": "orencik-cicekcilik-peyzaj-organizasyon",
    "name": "Örencik",
    "title": "Örencik Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Örencik çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Örencik",
    "type": "neighborhood"
  },
  {
    "slug": "subasi-cicekcilik-peyzaj-organizasyon",
    "name": "Subaşı",
    "title": "Subaşı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Subaşı çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Subaşı",
    "type": "neighborhood"
  },
  {
    "slug": "yalikoy-catalca-cicekcilik-peyzaj-organizasyon",
    "name": "Yalıköy",
    "title": "Yalıköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yalıköy çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Yalıköy",
    "type": "neighborhood"
  },
  {
    "slug": "yaylacik-cicekcilik-peyzaj-organizasyon",
    "name": "Yaylacık",
    "title": "Yaylacık Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yaylacık çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Yaylacık",
    "type": "neighborhood"
  },
  {
    "slug": "yazlik-cicekcilik-peyzaj-organizasyon",
    "name": "Yazlık",
    "title": "Yazlık Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yazlık çiçekçi arayanlar için Çatalca ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çatalca",
    "neighborhood": "Yazlık",
    "type": "neighborhood"
  },
  {
    "slug": "agacli-cicekcilik-peyzaj-organizasyon",
    "name": "Ağaçlı",
    "title": "Ağaçlı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ağaçlı çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Ağaçlı",
    "type": "neighborhood"
  },
  {
    "slug": "akpinar-cicekcilik-peyzaj-organizasyon",
    "name": "Akpınar",
    "title": "Akpınar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Akpınar çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Akpınar",
    "type": "neighborhood"
  },
  {
    "slug": "aksemsettin-cicekcilik-peyzaj-organizasyon",
    "name": "Akşemsettin",
    "title": "Akşemsettin Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Akşemsettin çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Akşemsettin",
    "type": "neighborhood"
  },
  {
    "slug": "alibeykoy-cicekcilik-peyzaj-organizasyon",
    "name": "Alibeyköy",
    "title": "Alibeyköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Alibeyköy çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Alibeyköy",
    "type": "neighborhood"
  },
  {
    "slug": "circir-cicekcilik-peyzaj-organizasyon",
    "name": "Çırçır",
    "title": "Çırçır Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çırçır çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Çırçır",
    "type": "neighborhood"
  },
  {
    "slug": "ciftalan-cicekcilik-peyzaj-organizasyon",
    "name": "Çiftalan",
    "title": "Çiftalan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çiftalan çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Çiftalan",
    "type": "neighborhood"
  },
  {
    "slug": "defterdar-cicekcilik-peyzaj-organizasyon",
    "name": "Defterdar",
    "title": "Defterdar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Defterdar çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Defterdar",
    "type": "neighborhood"
  },
  {
    "slug": "dugmeciler-cicekcilik-peyzaj-organizasyon",
    "name": "Düğmeciler",
    "title": "Düğmeciler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Düğmeciler çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Düğmeciler",
    "type": "neighborhood"
  },
  {
    "slug": "emniyettepe-cicekcilik-peyzaj-organizasyon",
    "name": "Emniyettepe",
    "title": "Emniyettepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Emniyettepe çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Emniyettepe",
    "type": "neighborhood"
  },
  {
    "slug": "esentepe-cicekcilik-peyzaj-organizasyon",
    "name": "Esentepe",
    "title": "Esentepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Esentepe çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Esentepe",
    "type": "neighborhood"
  },
  {
    "slug": "gokturk-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Göktürk Merkez",
    "title": "Göktürk Merkez Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Göktürk Merkez çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Göktürk Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "guzeltepe-cicekcilik-peyzaj-organizasyon",
    "name": "Güzeltepe",
    "title": "Güzeltepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Güzeltepe çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Güzeltepe",
    "type": "neighborhood"
  },
  {
    "slug": "isiklar-cicekcilik-peyzaj-organizasyon",
    "name": "Işıklar",
    "title": "Işıklar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Işıklar çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Işıklar",
    "type": "neighborhood"
  },
  {
    "slug": "ihsaniye-eyupsultan-cicekcilik-peyzaj-organizasyon",
    "name": "İhsaniye",
    "title": "İhsaniye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İhsaniye çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "İhsaniye",
    "type": "neighborhood"
  },
  {
    "slug": "islambey-cicekcilik-peyzaj-organizasyon",
    "name": "İslambey",
    "title": "İslambey Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İslambey çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "İslambey",
    "type": "neighborhood"
  },
  {
    "slug": "karadolap-cicekcilik-peyzaj-organizasyon",
    "name": "Karadolap",
    "title": "Karadolap Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Karadolap çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Karadolap",
    "type": "neighborhood"
  },
  {
    "slug": "merkez-eyupsultan-cicekcilik-peyzaj-organizasyon",
    "name": "Merkez",
    "title": "Merkez Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Merkez çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "mimar-sinan-cicekcilik-peyzaj-organizasyon",
    "name": "Mimar Sinan",
    "title": "Mimar Sinan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mimar Sinan çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Mimar Sinan",
    "type": "neighborhood"
  },
  {
    "slug": "mithatpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Mithatpaşa",
    "title": "Mithatpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mithatpaşa çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Mithatpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "nisanci-cicekcilik-peyzaj-organizasyon",
    "name": "Nişancı",
    "title": "Nişancı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Nişancı çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Nişancı",
    "type": "neighborhood"
  },
  {
    "slug": "odayeri-cicekcilik-peyzaj-organizasyon",
    "name": "Odayeri",
    "title": "Odayeri Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Odayeri çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Odayeri",
    "type": "neighborhood"
  },
  {
    "slug": "pirincci-cicekcilik-peyzaj-organizasyon",
    "name": "Pirinççi",
    "title": "Pirinççi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Pirinççi çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Pirinççi",
    "type": "neighborhood"
  },
  {
    "slug": "rami-cuma-cicekcilik-peyzaj-organizasyon",
    "name": "Rami Cuma",
    "title": "Rami Cuma Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Rami Cuma çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Rami Cuma",
    "type": "neighborhood"
  },
  {
    "slug": "rami-yeni-cicekcilik-peyzaj-organizasyon",
    "name": "Rami Yeni",
    "title": "Rami Yeni Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Rami Yeni çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Rami Yeni",
    "type": "neighborhood"
  },
  {
    "slug": "sakarya-cicekcilik-peyzaj-organizasyon",
    "name": "Sakarya",
    "title": "Sakarya Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sakarya çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Sakarya",
    "type": "neighborhood"
  },
  {
    "slug": "silahtaraga-cicekcilik-peyzaj-organizasyon",
    "name": "Silahtarağa",
    "title": "Silahtarağa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Silahtarağa çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Silahtarağa",
    "type": "neighborhood"
  },
  {
    "slug": "topcular-cicekcilik-peyzaj-organizasyon",
    "name": "Topçular",
    "title": "Topçular Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Topçular çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Topçular",
    "type": "neighborhood"
  },
  {
    "slug": "yesilpinar-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilpınar",
    "title": "Yeşilpınar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeşilpınar çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "Yeşilpınar",
    "type": "neighborhood"
  },
  {
    "slug": "5levent-cicekcilik-peyzaj-organizasyon",
    "name": "5.levent",
    "title": "5.levent Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "5.levent çiçekçi arayanlar için Eyüpsultan ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Eyüpsultan",
    "neighborhood": "5.levent",
    "type": "neighborhood"
  },
  {
    "slug": "aksaray-cicekcilik-peyzaj-organizasyon",
    "name": "Aksaray",
    "title": "Aksaray Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Aksaray çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Aksaray",
    "type": "neighborhood"
  },
  {
    "slug": "aksemsettin-fatih-cicekcilik-peyzaj-organizasyon",
    "name": "Akşemsettin",
    "title": "Akşemsettin Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Akşemsettin çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Akşemsettin",
    "type": "neighborhood"
  },
  {
    "slug": "alemdar-cicekcilik-peyzaj-organizasyon",
    "name": "Alemdar",
    "title": "Alemdar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Alemdar çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Alemdar",
    "type": "neighborhood"
  },
  {
    "slug": "ali-kuscu-cicekcilik-peyzaj-organizasyon",
    "name": "Ali Kuşçu",
    "title": "Ali Kuşçu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ali Kuşçu çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Ali Kuşçu",
    "type": "neighborhood"
  },
  {
    "slug": "atikali-cicekcilik-peyzaj-organizasyon",
    "name": "Atikali",
    "title": "Atikali Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Atikali çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Atikali",
    "type": "neighborhood"
  },
  {
    "slug": "ayvansaray-cicekcilik-peyzaj-organizasyon",
    "name": "Ayvansaray",
    "title": "Ayvansaray Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ayvansaray çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Ayvansaray",
    "type": "neighborhood"
  },
  {
    "slug": "balabanaga-cicekcilik-peyzaj-organizasyon",
    "name": "Balabanağa",
    "title": "Balabanağa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Balabanağa çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Balabanağa",
    "type": "neighborhood"
  },
  {
    "slug": "balat-cicekcilik-peyzaj-organizasyon",
    "name": "Balat",
    "title": "Balat Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Balat çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Balat",
    "type": "neighborhood"
  },
  {
    "slug": "beyazit-cicekcilik-peyzaj-organizasyon",
    "name": "Beyazıt",
    "title": "Beyazıt Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Beyazıt çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Beyazıt",
    "type": "neighborhood"
  },
  {
    "slug": "binbirdirek-cicekcilik-peyzaj-organizasyon",
    "name": "Binbirdirek",
    "title": "Binbirdirek Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Binbirdirek çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Binbirdirek",
    "type": "neighborhood"
  },
  {
    "slug": "cankurtaran-cicekcilik-peyzaj-organizasyon",
    "name": "Cankurtaran",
    "title": "Cankurtaran Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cankurtaran çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Cankurtaran",
    "type": "neighborhood"
  },
  {
    "slug": "cerrahpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Cerrahpaşa",
    "title": "Cerrahpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cerrahpaşa çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Cerrahpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "cibali-cicekcilik-peyzaj-organizasyon",
    "name": "Cibali",
    "title": "Cibali Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cibali çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Cibali",
    "type": "neighborhood"
  },
  {
    "slug": "demirtas-cicekcilik-peyzaj-organizasyon",
    "name": "Demirtaş",
    "title": "Demirtaş Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Demirtaş çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Demirtaş",
    "type": "neighborhood"
  },
  {
    "slug": "dervis-ali-cicekcilik-peyzaj-organizasyon",
    "name": "Derviş Ali",
    "title": "Derviş Ali Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Derviş Ali çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Derviş Ali",
    "type": "neighborhood"
  },
  {
    "slug": "emin-sinan-cicekcilik-peyzaj-organizasyon",
    "name": "Emin Sinan",
    "title": "Emin Sinan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Emin Sinan çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Emin Sinan",
    "type": "neighborhood"
  },
  {
    "slug": "haci-kadin-cicekcilik-peyzaj-organizasyon",
    "name": "Hacı Kadın",
    "title": "Hacı Kadın Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hacı Kadın çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Hacı Kadın",
    "type": "neighborhood"
  },
  {
    "slug": "haseki-sultan-cicekcilik-peyzaj-organizasyon",
    "name": "Haseki Sultan",
    "title": "Haseki Sultan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Haseki Sultan çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Haseki Sultan",
    "type": "neighborhood"
  },
  {
    "slug": "hirka-i-serif-cicekcilik-peyzaj-organizasyon",
    "name": "Hırka-i Şerif",
    "title": "Hırka-i Şerif Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hırka-i Şerif çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Hırka-i Şerif",
    "type": "neighborhood"
  },
  {
    "slug": "hobyar-cicekcilik-peyzaj-organizasyon",
    "name": "Hobyar",
    "title": "Hobyar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hobyar çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Hobyar",
    "type": "neighborhood"
  },
  {
    "slug": "hoca-giyasettin-cicekcilik-peyzaj-organizasyon",
    "name": "Hoca Gıyasettin",
    "title": "Hoca Gıyasettin Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hoca Gıyasettin çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Hoca Gıyasettin",
    "type": "neighborhood"
  },
  {
    "slug": "hocapasa-cicekcilik-peyzaj-organizasyon",
    "name": "Hocapaşa",
    "title": "Hocapaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hocapaşa çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Hocapaşa",
    "type": "neighborhood"
  },
  {
    "slug": "iskenderpasa-cicekcilik-peyzaj-organizasyon",
    "name": "İskenderpaşa",
    "title": "İskenderpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İskenderpaşa çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "İskenderpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "kalenderhane-cicekcilik-peyzaj-organizasyon",
    "name": "Kalenderhane",
    "title": "Kalenderhane Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kalenderhane çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Kalenderhane",
    "type": "neighborhood"
  },
  {
    "slug": "karagumruk-cicekcilik-peyzaj-organizasyon",
    "name": "Karagümrük",
    "title": "Karagümrük Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Karagümrük çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Karagümrük",
    "type": "neighborhood"
  },
  {
    "slug": "katip-kasim-cicekcilik-peyzaj-organizasyon",
    "name": "Katip Kasım",
    "title": "Katip Kasım Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Katip Kasım çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Katip Kasım",
    "type": "neighborhood"
  },
  {
    "slug": "kemalpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Kemalpaşa",
    "title": "Kemalpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kemalpaşa çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Kemalpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "koca-mustafapasa-cicekcilik-peyzaj-organizasyon",
    "name": "Koca Mustafapaşa",
    "title": "Koca Mustafapaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Koca Mustafapaşa çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Koca Mustafapaşa",
    "type": "neighborhood"
  },
  {
    "slug": "kucuk-ayasofya-cicekcilik-peyzaj-organizasyon",
    "name": "Küçük Ayasofya",
    "title": "Küçük Ayasofya Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Küçük Ayasofya çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Küçük Ayasofya",
    "type": "neighborhood"
  },
  {
    "slug": "mercan-cicekcilik-peyzaj-organizasyon",
    "name": "Mercan",
    "title": "Mercan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mercan çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Mercan",
    "type": "neighborhood"
  },
  {
    "slug": "mesihpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Mesihpaşa",
    "title": "Mesihpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mesihpaşa çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Mesihpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "mevlanakapi-cicekcilik-peyzaj-organizasyon",
    "name": "Mevlanakapı",
    "title": "Mevlanakapı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mevlanakapı çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Mevlanakapı",
    "type": "neighborhood"
  },
  {
    "slug": "mimar-hayrettin-cicekcilik-peyzaj-organizasyon",
    "name": "Mimar Hayrettin",
    "title": "Mimar Hayrettin Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mimar Hayrettin çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Mimar Hayrettin",
    "type": "neighborhood"
  },
  {
    "slug": "mimar-kemalettin-cicekcilik-peyzaj-organizasyon",
    "name": "Mimar Kemalettin",
    "title": "Mimar Kemalettin Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mimar Kemalettin çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Mimar Kemalettin",
    "type": "neighborhood"
  },
  {
    "slug": "molla-fenari-cicekcilik-peyzaj-organizasyon",
    "name": "Molla Fenari",
    "title": "Molla Fenari Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Molla Fenari çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Molla Fenari",
    "type": "neighborhood"
  },
  {
    "slug": "molla-gurani-cicekcilik-peyzaj-organizasyon",
    "name": "Molla Gürani",
    "title": "Molla Gürani Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Molla Gürani çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Molla Gürani",
    "type": "neighborhood"
  },
  {
    "slug": "molla-husrev-cicekcilik-peyzaj-organizasyon",
    "name": "Molla Hüsrev",
    "title": "Molla Hüsrev Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Molla Hüsrev çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Molla Hüsrev",
    "type": "neighborhood"
  },
  {
    "slug": "muhsine-hatun-cicekcilik-peyzaj-organizasyon",
    "name": "Muhsine Hatun",
    "title": "Muhsine Hatun Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Muhsine Hatun çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Muhsine Hatun",
    "type": "neighborhood"
  },
  {
    "slug": "nisanca-cicekcilik-peyzaj-organizasyon",
    "name": "Nişanca",
    "title": "Nişanca Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Nişanca çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Nişanca",
    "type": "neighborhood"
  },
  {
    "slug": "rustempasa-cicekcilik-peyzaj-organizasyon",
    "name": "Rüstempaşa",
    "title": "Rüstempaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Rüstempaşa çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Rüstempaşa",
    "type": "neighborhood"
  },
  {
    "slug": "sarac-ishak-cicekcilik-peyzaj-organizasyon",
    "name": "Saraç İshak",
    "title": "Saraç İshak Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Saraç İshak çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Saraç İshak",
    "type": "neighborhood"
  },
  {
    "slug": "saridemir-cicekcilik-peyzaj-organizasyon",
    "name": "Sarıdemir",
    "title": "Sarıdemir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sarıdemir çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Sarıdemir",
    "type": "neighborhood"
  },
  {
    "slug": "seyyid-omer-cicekcilik-peyzaj-organizasyon",
    "name": "Seyyid Ömer",
    "title": "Seyyid Ömer Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Seyyid Ömer çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Seyyid Ömer",
    "type": "neighborhood"
  },
  {
    "slug": "silivrikapi-cicekcilik-peyzaj-organizasyon",
    "name": "Silivrikapı",
    "title": "Silivrikapı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Silivrikapı çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Silivrikapı",
    "type": "neighborhood"
  },
  {
    "slug": "sultan-ahmet-cicekcilik-peyzaj-organizasyon",
    "name": "Sultan Ahmet",
    "title": "Sultan Ahmet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sultan Ahmet çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Sultan Ahmet",
    "type": "neighborhood"
  },
  {
    "slug": "sururi-cicekcilik-peyzaj-organizasyon",
    "name": "Sururi",
    "title": "Sururi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sururi çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Sururi",
    "type": "neighborhood"
  },
  {
    "slug": "suleymaniye-cicekcilik-peyzaj-organizasyon",
    "name": "Süleymaniye",
    "title": "Süleymaniye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Süleymaniye çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Süleymaniye",
    "type": "neighborhood"
  },
  {
    "slug": "sumbul-efendi-cicekcilik-peyzaj-organizasyon",
    "name": "Sümbül Efendi",
    "title": "Sümbül Efendi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sümbül Efendi çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Sümbül Efendi",
    "type": "neighborhood"
  },
  {
    "slug": "sehremini-cicekcilik-peyzaj-organizasyon",
    "name": "Şehremini",
    "title": "Şehremini Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Şehremini çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Şehremini",
    "type": "neighborhood"
  },
  {
    "slug": "sehsuvar-bey-cicekcilik-peyzaj-organizasyon",
    "name": "Şehsuvar Bey",
    "title": "Şehsuvar Bey Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Şehsuvar Bey çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Şehsuvar Bey",
    "type": "neighborhood"
  },
  {
    "slug": "tahtakale-cicekcilik-peyzaj-organizasyon",
    "name": "Tahtakale",
    "title": "Tahtakale Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Tahtakale çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Tahtakale",
    "type": "neighborhood"
  },
  {
    "slug": "taya-hatun-cicekcilik-peyzaj-organizasyon",
    "name": "Taya Hatun",
    "title": "Taya Hatun Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Taya Hatun çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Taya Hatun",
    "type": "neighborhood"
  },
  {
    "slug": "topkapi-cicekcilik-peyzaj-organizasyon",
    "name": "Topkapı",
    "title": "Topkapı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Topkapı çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Topkapı",
    "type": "neighborhood"
  },
  {
    "slug": "yavuz-sinan-cicekcilik-peyzaj-organizasyon",
    "name": "Yavuz Sinan",
    "title": "Yavuz Sinan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yavuz Sinan çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Yavuz Sinan",
    "type": "neighborhood"
  },
  {
    "slug": "yavuz-sultan-selim-cicekcilik-peyzaj-organizasyon",
    "name": "Yavuz Sultan Selim",
    "title": "Yavuz Sultan Selim Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yavuz Sultan Selim çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Yavuz Sultan Selim",
    "type": "neighborhood"
  },
  {
    "slug": "yedikule-cicekcilik-peyzaj-organizasyon",
    "name": "Yedikule",
    "title": "Yedikule Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yedikule çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Yedikule",
    "type": "neighborhood"
  },
  {
    "slug": "zeyrek-cicekcilik-peyzaj-organizasyon",
    "name": "Zeyrek",
    "title": "Zeyrek Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Zeyrek çiçekçi arayanlar için Fatih ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Fatih",
    "neighborhood": "Zeyrek",
    "type": "neighborhood"
  },
  {
    "slug": "baglarbasi-cicekcilik-peyzaj-organizasyon",
    "name": "Bağlarbaşı",
    "title": "Bağlarbaşı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bağlarbaşı çiçekçi arayanlar için Gaziosmanpaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Bağlarbaşı",
    "type": "neighborhood"
  },
  {
    "slug": "barbaros-hayrettin-pasa-cicekcilik-peyzaj-organizasyon",
    "name": "Barbaros Hayrettin Paşa",
    "title": "Barbaros Hayrettin Paşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Barbaros Hayrettin Paşa çiçekçi arayanlar için Gaziosmanpaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Barbaros Hayrettin Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "fevzi-cakmak-cicekcilik-peyzaj-organizasyon",
    "name": "Fevzi Çakmak",
    "title": "Fevzi Çakmak Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fevzi Çakmak çiçekçi arayanlar için Gaziosmanpaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Fevzi Çakmak",
    "type": "neighborhood"
  },
  {
    "slug": "hurriyet-cicekcilik-peyzaj-organizasyon",
    "name": "Hürriyet",
    "title": "Hürriyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hürriyet çiçekçi arayanlar için Gaziosmanpaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Hürriyet",
    "type": "neighborhood"
  },
  {
    "slug": "karadeniz-cicekcilik-peyzaj-organizasyon",
    "name": "Karadeniz",
    "title": "Karadeniz Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Karadeniz çiçekçi arayanlar için Gaziosmanpaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Karadeniz",
    "type": "neighborhood"
  },
  {
    "slug": "karayollari-cicekcilik-peyzaj-organizasyon",
    "name": "Karayolları",
    "title": "Karayolları Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Karayolları çiçekçi arayanlar için Gaziosmanpaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Karayolları",
    "type": "neighborhood"
  },
  {
    "slug": "karlitepe-cicekcilik-peyzaj-organizasyon",
    "name": "Karlıtepe",
    "title": "Karlıtepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Karlıtepe çiçekçi arayanlar için Gaziosmanpaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Karlıtepe",
    "type": "neighborhood"
  },
  {
    "slug": "kazim-karabekir-cicekcilik-peyzaj-organizasyon",
    "name": "Kazım Karabekir",
    "title": "Kazım Karabekir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kazım Karabekir çiçekçi arayanlar için Gaziosmanpaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Kazım Karabekir",
    "type": "neighborhood"
  },
  {
    "slug": "merkez-gaziosmanpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Merkez",
    "title": "Merkez Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Merkez çiçekçi arayanlar için Gaziosmanpaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "mevlana-cicekcilik-peyzaj-organizasyon",
    "name": "Mevlana",
    "title": "Mevlana Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mevlana çiçekçi arayanlar için Gaziosmanpaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Mevlana",
    "type": "neighborhood"
  },
  {
    "slug": "pazarici-cicekcilik-peyzaj-organizasyon",
    "name": "Pazariçi",
    "title": "Pazariçi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Pazariçi çiçekçi arayanlar için Gaziosmanpaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Pazariçi",
    "type": "neighborhood"
  },
  {
    "slug": "sarigol-cicekcilik-peyzaj-organizasyon",
    "name": "Sarıgöl",
    "title": "Sarıgöl Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sarıgöl çiçekçi arayanlar için Gaziosmanpaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Sarıgöl",
    "type": "neighborhood"
  },
  {
    "slug": "semsipasa-cicekcilik-peyzaj-organizasyon",
    "name": "Şemsipaşa",
    "title": "Şemsipaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Şemsipaşa çiçekçi arayanlar için Gaziosmanpaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Şemsipaşa",
    "type": "neighborhood"
  },
  {
    "slug": "yeni-mahalle-gaziosmanpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Yeni Mahalle",
    "title": "Yeni Mahalle Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeni Mahalle çiçekçi arayanlar için Gaziosmanpaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Yeni Mahalle",
    "type": "neighborhood"
  },
  {
    "slug": "yenidogan-cicekcilik-peyzaj-organizasyon",
    "name": "Yenidoğan",
    "title": "Yenidoğan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yenidoğan çiçekçi arayanlar için Gaziosmanpaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Yenidoğan",
    "type": "neighborhood"
  },
  {
    "slug": "yildiztabya-cicekcilik-peyzaj-organizasyon",
    "name": "Yıldıztabya",
    "title": "Yıldıztabya Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yıldıztabya çiçekçi arayanlar için Gaziosmanpaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Gaziosmanpaşa",
    "neighborhood": "Yıldıztabya",
    "type": "neighborhood"
  },
  {
    "slug": "19-mayis-cicekcilik-peyzaj-organizasyon",
    "name": "19 Mayıs",
    "title": "19 Mayıs Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "19 Mayıs çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": "19 Mayıs",
    "type": "neighborhood"
  },
  {
    "slug": "acibadem-cicekcilik-peyzaj-organizasyon",
    "name": "Acıbadem",
    "title": "Acıbadem Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Acıbadem çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": "Acıbadem",
    "type": "neighborhood"
  },
  {
    "slug": "bostanci-cicekcilik-peyzaj-organizasyon",
    "name": "Bostancı",
    "title": "Bostancı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bostancı çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": "Bostancı",
    "type": "neighborhood"
  },
  {
    "slug": "caddebostan-cicekcilik-peyzaj-organizasyon",
    "name": "Caddebostan",
    "title": "Caddebostan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Caddebostan çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": "Caddebostan",
    "type": "neighborhood"
  },
  {
    "slug": "caferaga-cicekcilik-peyzaj-organizasyon",
    "name": "Caferağa",
    "title": "Caferağa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Caferağa çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": "Caferağa",
    "type": "neighborhood"
  },
  {
    "slug": "dumlupinar-cicekcilik-peyzaj-organizasyon",
    "name": "Dumlupınar",
    "title": "Dumlupınar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Dumlupınar çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": "Dumlupınar",
    "type": "neighborhood"
  },
  {
    "slug": "egitim-cicekcilik-peyzaj-organizasyon",
    "name": "Eğitim",
    "title": "Eğitim Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Eğitim çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": "Eğitim",
    "type": "neighborhood"
  },
  {
    "slug": "erenkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Erenköy",
    "title": "Erenköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Erenköy çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": "Erenköy",
    "type": "neighborhood"
  },
  {
    "slug": "fenerbahce-cicekcilik-peyzaj-organizasyon",
    "name": "Fenerbahçe",
    "title": "Fenerbahçe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fenerbahçe çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": "Fenerbahçe",
    "type": "neighborhood"
  },
  {
    "slug": "feneryolu-cicekcilik-peyzaj-organizasyon",
    "name": "Feneryolu",
    "title": "Feneryolu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Feneryolu çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": "Feneryolu",
    "type": "neighborhood"
  },
  {
    "slug": "fikirtepe-cicekcilik-peyzaj-organizasyon",
    "name": "Fikirtepe",
    "title": "Fikirtepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fikirtepe çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": "Fikirtepe",
    "type": "neighborhood"
  },
  {
    "slug": "goztepe-kadikoy-cicekcilik-peyzaj-organizasyon",
    "name": "Göztepe",
    "title": "Göztepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Göztepe çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": "Göztepe",
    "type": "neighborhood"
  },
  {
    "slug": "hasanpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Hasanpaşa",
    "title": "Hasanpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hasanpaşa çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": "Hasanpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "kosuyolu-cicekcilik-peyzaj-organizasyon",
    "name": "Koşuyolu",
    "title": "Koşuyolu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Koşuyolu çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": "Koşuyolu",
    "type": "neighborhood"
  },
  {
    "slug": "kozyatagi-cicekcilik-peyzaj-organizasyon",
    "name": "Kozyatağı",
    "title": "Kozyatağı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kozyatağı çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": "Kozyatağı",
    "type": "neighborhood"
  },
  {
    "slug": "merdivenkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Merdivenköy",
    "title": "Merdivenköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Merdivenköy çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": "Merdivenköy",
    "type": "neighborhood"
  },
  {
    "slug": "osmanaga-cicekcilik-peyzaj-organizasyon",
    "name": "Osmanağa",
    "title": "Osmanağa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Osmanağa çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": "Osmanağa",
    "type": "neighborhood"
  },
  {
    "slug": "rasimpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Rasimpaşa",
    "title": "Rasimpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Rasimpaşa çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": "Rasimpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "sahrayicedit-cicekcilik-peyzaj-organizasyon",
    "name": "Sahrayıcedit",
    "title": "Sahrayıcedit Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sahrayıcedit çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": "Sahrayıcedit",
    "type": "neighborhood"
  },
  {
    "slug": "suadiye-cicekcilik-peyzaj-organizasyon",
    "name": "Suadiye",
    "title": "Suadiye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Suadiye çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": "Suadiye",
    "type": "neighborhood"
  },
  {
    "slug": "zuhtupasa-cicekcilik-peyzaj-organizasyon",
    "name": "Zühtüpaşa",
    "title": "Zühtüpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Zühtüpaşa çiçekçi arayanlar için Kadıköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kadıköy",
    "neighborhood": "Zühtüpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "cicekcilik-peyzaj-organizasyon",
    "name": "",
    "title": " Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": " ve Kadıköy çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme için Sümbül Garden ile hızlı iletişim.",
    "district": "Kadıköy",
    "neighborhood": null,
    "type": "neighborhood"
  },
  {
    "slug": "atalar-cicekcilik-peyzaj-organizasyon",
    "name": "Atalar",
    "title": "Atalar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Atalar çiçekçi arayanlar için Kartal ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kartal",
    "neighborhood": "Atalar",
    "type": "neighborhood"
  },
  {
    "slug": "cevizli-cicekcilik-peyzaj-organizasyon",
    "name": "Cevizli",
    "title": "Cevizli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cevizli çiçekçi arayanlar için Kartal ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kartal",
    "neighborhood": "Cevizli",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-kartal-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet çiçekçi arayanlar için Kartal ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kartal",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "cavusoglu-cicekcilik-peyzaj-organizasyon",
    "name": "Çavuşoğlu",
    "title": "Çavuşoğlu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çavuşoğlu çiçekçi arayanlar için Kartal ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kartal",
    "neighborhood": "Çavuşoğlu",
    "type": "neighborhood"
  },
  {
    "slug": "esentepe-kartal-cicekcilik-peyzaj-organizasyon",
    "name": "Esentepe",
    "title": "Esentepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Esentepe çiçekçi arayanlar için Kartal ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kartal",
    "neighborhood": "Esentepe",
    "type": "neighborhood"
  },
  {
    "slug": "gumuspinar-kartal-cicekcilik-peyzaj-organizasyon",
    "name": "Gümüşpınar",
    "title": "Gümüşpınar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gümüşpınar çiçekçi arayanlar için Kartal ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kartal",
    "neighborhood": "Gümüşpınar",
    "type": "neighborhood"
  },
  {
    "slug": "hurriyet-kartal-cicekcilik-peyzaj-organizasyon",
    "name": "Hürriyet",
    "title": "Hürriyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hürriyet çiçekçi arayanlar için Kartal ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kartal",
    "neighborhood": "Hürriyet",
    "type": "neighborhood"
  },
  {
    "slug": "karliktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Karlıktepe",
    "title": "Karlıktepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Karlıktepe çiçekçi arayanlar için Kartal ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kartal",
    "neighborhood": "Karlıktepe",
    "type": "neighborhood"
  },
  {
    "slug": "kordonboyu-cicekcilik-peyzaj-organizasyon",
    "name": "Kordonboyu",
    "title": "Kordonboyu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kordonboyu çiçekçi arayanlar için Kartal ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kartal",
    "neighborhood": "Kordonboyu",
    "type": "neighborhood"
  },
  {
    "slug": "orhantepe-cicekcilik-peyzaj-organizasyon",
    "name": "Orhantepe",
    "title": "Orhantepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Orhantepe çiçekçi arayanlar için Kartal ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kartal",
    "neighborhood": "Orhantepe",
    "type": "neighborhood"
  },
  {
    "slug": "orta-cicekcilik-peyzaj-organizasyon",
    "name": "Orta",
    "title": "Orta Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Orta çiçekçi arayanlar için Kartal ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kartal",
    "neighborhood": "Orta",
    "type": "neighborhood"
  },
  {
    "slug": "petrol-is-cicekcilik-peyzaj-organizasyon",
    "name": "Petrol İş",
    "title": "Petrol İş Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Petrol İş çiçekçi arayanlar için Kartal ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kartal",
    "neighborhood": "Petrol İş",
    "type": "neighborhood"
  },
  {
    "slug": "soganlik-yeni-cicekcilik-peyzaj-organizasyon",
    "name": "Soğanlık Yeni",
    "title": "Soğanlık Yeni Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Soğanlık Yeni çiçekçi arayanlar için Kartal ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kartal",
    "neighborhood": "Soğanlık Yeni",
    "type": "neighborhood"
  },
  {
    "slug": "topselvi-cicekcilik-peyzaj-organizasyon",
    "name": "Topselvi",
    "title": "Topselvi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Topselvi çiçekçi arayanlar için Kartal ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kartal",
    "neighborhood": "Topselvi",
    "type": "neighborhood"
  },
  {
    "slug": "ugur-mumcu-cicekcilik-peyzaj-organizasyon",
    "name": "Uğur Mumcu",
    "title": "Uğur Mumcu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Uğur Mumcu çiçekçi arayanlar için Kartal ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kartal",
    "neighborhood": "Uğur Mumcu",
    "type": "neighborhood"
  },
  {
    "slug": "yakacik-carsi-cicekcilik-peyzaj-organizasyon",
    "name": "Yakacık Çarşı",
    "title": "Yakacık Çarşı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yakacık Çarşı çiçekçi arayanlar için Kartal ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kartal",
    "neighborhood": "Yakacık Çarşı",
    "type": "neighborhood"
  },
  {
    "slug": "yakacik-yeni-cicekcilik-peyzaj-organizasyon",
    "name": "Yakacık Yeni",
    "title": "Yakacık Yeni Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yakacık Yeni çiçekçi arayanlar için Kartal ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kartal",
    "neighborhood": "Yakacık Yeni",
    "type": "neighborhood"
  },
  {
    "slug": "yali-cicekcilik-peyzaj-organizasyon",
    "name": "Yalı",
    "title": "Yalı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yalı çiçekçi arayanlar için Kartal ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kartal",
    "neighborhood": "Yalı",
    "type": "neighborhood"
  },
  {
    "slug": "yukari-cicekcilik-peyzaj-organizasyon",
    "name": "Yukarı",
    "title": "Yukarı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yukarı çiçekçi arayanlar için Kartal ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kartal",
    "neighborhood": "Yukarı",
    "type": "neighborhood"
  },
  {
    "slug": "yunus-cicekcilik-peyzaj-organizasyon",
    "name": "Yunus",
    "title": "Yunus Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yunus çiçekçi arayanlar için Kartal ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kartal",
    "neighborhood": "Yunus",
    "type": "neighborhood"
  },
  {
    "slug": "ayazaga-cicekcilik-peyzaj-organizasyon",
    "name": "Ayazağa",
    "title": "Ayazağa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ayazağa çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Ayazağa",
    "type": "neighborhood"
  },
  {
    "slug": "bahcekoy-kemer-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçeköy Kemer",
    "title": "Bahçeköy Kemer Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bahçeköy Kemer çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Bahçeköy Kemer",
    "type": "neighborhood"
  },
  {
    "slug": "bahcekoy-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçeköy Merkez",
    "title": "Bahçeköy Merkez Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bahçeköy Merkez çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Bahçeköy Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "bahcekoy-yeni-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçeköy Yeni",
    "title": "Bahçeköy Yeni Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bahçeköy Yeni çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Bahçeköy Yeni",
    "type": "neighborhood"
  },
  {
    "slug": "baltalimani-cicekcilik-peyzaj-organizasyon",
    "name": "Baltalimanı",
    "title": "Baltalimanı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Baltalimanı çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Baltalimanı",
    "type": "neighborhood"
  },
  {
    "slug": "buyukdere-cicekcilik-peyzaj-organizasyon",
    "name": "Büyükdere",
    "title": "Büyükdere Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Büyükdere çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Büyükdere",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-sariyer-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "camlitepe-cicekcilik-peyzaj-organizasyon",
    "name": "Çamlıtepe",
    "title": "Çamlıtepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çamlıtepe çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Çamlıtepe",
    "type": "neighborhood"
  },
  {
    "slug": "cayirbasi-cicekcilik-peyzaj-organizasyon",
    "name": "Çayırbaşı",
    "title": "Çayırbaşı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çayırbaşı çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Çayırbaşı",
    "type": "neighborhood"
  },
  {
    "slug": "darussafaka-cicekcilik-peyzaj-organizasyon",
    "name": "Darüşşafaka",
    "title": "Darüşşafaka Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Darüşşafaka çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Darüşşafaka",
    "type": "neighborhood"
  },
  {
    "slug": "demircikoy-cicekcilik-peyzaj-organizasyon",
    "name": "Demirciköy",
    "title": "Demirciköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Demirciköy çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Demirciköy",
    "type": "neighborhood"
  },
  {
    "slug": "emirgan-cicekcilik-peyzaj-organizasyon",
    "name": "Emirgan",
    "title": "Emirgan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Emirgan çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Emirgan",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-sultan-mehmet-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih Sultan Mehmet",
    "title": "Fatih Sultan Mehmet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fatih Sultan Mehmet çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Fatih Sultan Mehmet",
    "type": "neighborhood"
  },
  {
    "slug": "ferahevler-cicekcilik-peyzaj-organizasyon",
    "name": "Ferahevler",
    "title": "Ferahevler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ferahevler çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Ferahevler",
    "type": "neighborhood"
  },
  {
    "slug": "garipce-cicekcilik-peyzaj-organizasyon",
    "name": "Garipçe",
    "title": "Garipçe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Garipçe çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Garipçe",
    "type": "neighborhood"
  },
  {
    "slug": "gumusdere-cicekcilik-peyzaj-organizasyon",
    "name": "Gümüşdere",
    "title": "Gümüşdere Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gümüşdere çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Gümüşdere",
    "type": "neighborhood"
  },
  {
    "slug": "huzur-cicekcilik-peyzaj-organizasyon",
    "name": "Huzur",
    "title": "Huzur Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Huzur çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Huzur",
    "type": "neighborhood"
  },
  {
    "slug": "istinye-cicekcilik-peyzaj-organizasyon",
    "name": "İstinye",
    "title": "İstinye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İstinye çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "İstinye",
    "type": "neighborhood"
  },
  {
    "slug": "kazim-karabekir-pasa-cicekcilik-peyzaj-organizasyon",
    "name": "Kazım Karabekir Paşa",
    "title": "Kazım Karabekir Paşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kazım Karabekir Paşa çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Kazım Karabekir Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "kisirkaya-cicekcilik-peyzaj-organizasyon",
    "name": "Kısırkaya",
    "title": "Kısırkaya Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kısırkaya çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Kısırkaya",
    "type": "neighborhood"
  },
  {
    "slug": "kirecburnu-cicekcilik-peyzaj-organizasyon",
    "name": "Kireçburnu",
    "title": "Kireçburnu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kireçburnu çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Kireçburnu",
    "type": "neighborhood"
  },
  {
    "slug": "kocatas-cicekcilik-peyzaj-organizasyon",
    "name": "Kocataş",
    "title": "Kocataş Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kocataş çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Kocataş",
    "type": "neighborhood"
  },
  {
    "slug": "kumkoy-kilyos-cicekcilik-peyzaj-organizasyon",
    "name": "Kumköy (kilyos)",
    "title": "Kumköy (kilyos) Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kumköy (kilyos) çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Kumköy (kilyos)",
    "type": "neighborhood"
  },
  {
    "slug": "maden-sariyer-cicekcilik-peyzaj-organizasyon",
    "name": "Maden",
    "title": "Maden Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Maden çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Maden",
    "type": "neighborhood"
  },
  {
    "slug": "maslak-cicekcilik-peyzaj-organizasyon",
    "name": "Maslak",
    "title": "Maslak Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Maslak çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Maslak",
    "type": "neighborhood"
  },
  {
    "slug": "pinar-cicekcilik-peyzaj-organizasyon",
    "name": "Pınar",
    "title": "Pınar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Pınar çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Pınar",
    "type": "neighborhood"
  },
  {
    "slug": "poligon-cicekcilik-peyzaj-organizasyon",
    "name": "Poligon",
    "title": "Poligon Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Poligon çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Poligon",
    "type": "neighborhood"
  },
  {
    "slug": "ptt-evleri-cicekcilik-peyzaj-organizasyon",
    "name": "Ptt Evleri",
    "title": "Ptt Evleri Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ptt Evleri çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Ptt Evleri",
    "type": "neighborhood"
  },
  {
    "slug": "resitpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Reşitpaşa",
    "title": "Reşitpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Reşitpaşa çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Reşitpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "rumelifeneri-cicekcilik-peyzaj-organizasyon",
    "name": "Rumelifeneri",
    "title": "Rumelifeneri Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Rumelifeneri çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Rumelifeneri",
    "type": "neighborhood"
  },
  {
    "slug": "rumelihisari-cicekcilik-peyzaj-organizasyon",
    "name": "Rumelihisarı",
    "title": "Rumelihisarı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Rumelihisarı çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Rumelihisarı",
    "type": "neighborhood"
  },
  {
    "slug": "rumelikavagi-cicekcilik-peyzaj-organizasyon",
    "name": "Rumelikavağı",
    "title": "Rumelikavağı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Rumelikavağı çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Rumelikavağı",
    "type": "neighborhood"
  },
  {
    "slug": "sariyer-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Sarıyer Merkez",
    "title": "Sarıyer Merkez Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sarıyer Merkez çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Sarıyer Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "tarabya-cicekcilik-peyzaj-organizasyon",
    "name": "Tarabya",
    "title": "Tarabya Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Tarabya çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Tarabya",
    "type": "neighborhood"
  },
  {
    "slug": "uskumrukoy-cicekcilik-peyzaj-organizasyon",
    "name": "Uskumruköy",
    "title": "Uskumruköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Uskumruköy çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Uskumruköy",
    "type": "neighborhood"
  },
  {
    "slug": "yeni-cicekcilik-peyzaj-organizasyon",
    "name": "Yeni",
    "title": "Yeni Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeni çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Yeni",
    "type": "neighborhood"
  },
  {
    "slug": "yenikoy-cicekcilik-peyzaj-organizasyon",
    "name": "Yeniköy",
    "title": "Yeniköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeniköy çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Yeniköy",
    "type": "neighborhood"
  },
  {
    "slug": "zekeriyakoy-cicekcilik-peyzaj-organizasyon",
    "name": "Zekeriyaköy",
    "title": "Zekeriyaköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Zekeriyaköy çiçekçi arayanlar için Sarıyer ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sarıyer",
    "neighborhood": "Zekeriyaköy",
    "type": "neighborhood"
  },
  {
    "slug": "akoren-cicekcilik-peyzaj-organizasyon",
    "name": "Akören",
    "title": "Akören Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Akören çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Akören",
    "type": "neighborhood"
  },
  {
    "slug": "alibey-cicekcilik-peyzaj-organizasyon",
    "name": "Alibey",
    "title": "Alibey Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Alibey çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Alibey",
    "type": "neighborhood"
  },
  {
    "slug": "alipasa-cicekcilik-peyzaj-organizasyon",
    "name": "Alipaşa",
    "title": "Alipaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Alipaşa çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Alipaşa",
    "type": "neighborhood"
  },
  {
    "slug": "balaban-cicekcilik-peyzaj-organizasyon",
    "name": "Balaban",
    "title": "Balaban Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Balaban çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Balaban",
    "type": "neighborhood"
  },
  {
    "slug": "bekirli-cicekcilik-peyzaj-organizasyon",
    "name": "Bekirli",
    "title": "Bekirli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bekirli çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Bekirli",
    "type": "neighborhood"
  },
  {
    "slug": "beyciler-cicekcilik-peyzaj-organizasyon",
    "name": "Beyciler",
    "title": "Beyciler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Beyciler çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Beyciler",
    "type": "neighborhood"
  },
  {
    "slug": "buyuk-cavuslu-cicekcilik-peyzaj-organizasyon",
    "name": "Büyük Çavuşlu",
    "title": "Büyük Çavuşlu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Büyük Çavuşlu çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Büyük Çavuşlu",
    "type": "neighborhood"
  },
  {
    "slug": "buyuk-kilicli-cicekcilik-peyzaj-organizasyon",
    "name": "Büyük Kılıçlı",
    "title": "Büyük Kılıçlı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Büyük Kılıçlı çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Büyük Kılıçlı",
    "type": "neighborhood"
  },
  {
    "slug": "buyuk-sinekli-cicekcilik-peyzaj-organizasyon",
    "name": "Büyük Sinekli",
    "title": "Büyük Sinekli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Büyük Sinekli çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Büyük Sinekli",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-silivri-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "cayirdere-cicekcilik-peyzaj-organizasyon",
    "name": "Çayırdere",
    "title": "Çayırdere Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çayırdere çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Çayırdere",
    "type": "neighborhood"
  },
  {
    "slug": "celtik-cicekcilik-peyzaj-organizasyon",
    "name": "Çeltik",
    "title": "Çeltik Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çeltik çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Çeltik",
    "type": "neighborhood"
  },
  {
    "slug": "danamandira-cicekcilik-peyzaj-organizasyon",
    "name": "Danamandıra",
    "title": "Danamandıra Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Danamandıra çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Danamandıra",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-silivri-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fatih çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "fener-cicekcilik-peyzaj-organizasyon",
    "name": "Fener",
    "title": "Fener Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fener çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Fener",
    "type": "neighborhood"
  },
  {
    "slug": "fevzipasa-cicekcilik-peyzaj-organizasyon",
    "name": "Fevzipaşa",
    "title": "Fevzipaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fevzipaşa çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Fevzipaşa",
    "type": "neighborhood"
  },
  {
    "slug": "gazitepe-cicekcilik-peyzaj-organizasyon",
    "name": "Gazitepe",
    "title": "Gazitepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gazitepe çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Gazitepe",
    "type": "neighborhood"
  },
  {
    "slug": "gumusyaka-cicekcilik-peyzaj-organizasyon",
    "name": "Gümüşyaka",
    "title": "Gümüşyaka Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gümüşyaka çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Gümüşyaka",
    "type": "neighborhood"
  },
  {
    "slug": "hurriyet-silivri-cicekcilik-peyzaj-organizasyon",
    "name": "Hürriyet",
    "title": "Hürriyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hürriyet çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Hürriyet",
    "type": "neighborhood"
  },
  {
    "slug": "ismetpasa-cicekcilik-peyzaj-organizasyon",
    "name": "İsmetpaşa",
    "title": "İsmetpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İsmetpaşa çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "İsmetpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "kadikoy-silivri-cicekcilik-peyzaj-organizasyon",
    "name": "Kadıköy",
    "title": "Kadıköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kadıköy çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Kadıköy",
    "type": "neighborhood"
  },
  {
    "slug": "kavakli-cicekcilik-peyzaj-organizasyon",
    "name": "Kavaklı",
    "title": "Kavaklı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kavaklı çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Kavaklı",
    "type": "neighborhood"
  },
  {
    "slug": "kurfalli-cicekcilik-peyzaj-organizasyon",
    "name": "Kurfallı",
    "title": "Kurfallı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kurfallı çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Kurfallı",
    "type": "neighborhood"
  },
  {
    "slug": "kucuk-kilicli-cicekcilik-peyzaj-organizasyon",
    "name": "Küçük Kılıçlı",
    "title": "Küçük Kılıçlı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Küçük Kılıçlı çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Küçük Kılıçlı",
    "type": "neighborhood"
  },
  {
    "slug": "kucuk-sinekli-cicekcilik-peyzaj-organizasyon",
    "name": "Küçük Sinekli",
    "title": "Küçük Sinekli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Küçük Sinekli çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Küçük Sinekli",
    "type": "neighborhood"
  },
  {
    "slug": "mimar-sinan-silivri-cicekcilik-peyzaj-organizasyon",
    "name": "Mimar Sinan",
    "title": "Mimar Sinan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mimar Sinan çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Mimar Sinan",
    "type": "neighborhood"
  },
  {
    "slug": "ortakoy-silivri-cicekcilik-peyzaj-organizasyon",
    "name": "Ortaköy",
    "title": "Ortaköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ortaköy çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Ortaköy",
    "type": "neighborhood"
  },
  {
    "slug": "piri-mehmet-pasa-cicekcilik-peyzaj-organizasyon",
    "name": "Piri Mehmet Paşa",
    "title": "Piri Mehmet Paşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Piri Mehmet Paşa çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Piri Mehmet Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "sancaktepe-silivri-cicekcilik-peyzaj-organizasyon",
    "name": "Sancaktepe",
    "title": "Sancaktepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sancaktepe çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Sancaktepe",
    "type": "neighborhood"
  },
  {
    "slug": "sayalar-cicekcilik-peyzaj-organizasyon",
    "name": "Sayalar",
    "title": "Sayalar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sayalar çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Sayalar",
    "type": "neighborhood"
  },
  {
    "slug": "selimpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Selimpaşa",
    "title": "Selimpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Selimpaşa çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Selimpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "semizkumlar-cicekcilik-peyzaj-organizasyon",
    "name": "Semizkumlar",
    "title": "Semizkumlar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Semizkumlar çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Semizkumlar",
    "type": "neighborhood"
  },
  {
    "slug": "seymen-cicekcilik-peyzaj-organizasyon",
    "name": "Seymen",
    "title": "Seymen Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Seymen çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Seymen",
    "type": "neighborhood"
  },
  {
    "slug": "yeni-silivri-cicekcilik-peyzaj-organizasyon",
    "name": "Yeni",
    "title": "Yeni Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeni çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Yeni",
    "type": "neighborhood"
  },
  {
    "slug": "yolcati-cicekcilik-peyzaj-organizasyon",
    "name": "Yolçatı",
    "title": "Yolçatı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yolçatı çiçekçi arayanlar için Silivri ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Silivri",
    "neighborhood": "Yolçatı",
    "type": "neighborhood"
  },
  {
    "slug": "agacdere-cicekcilik-peyzaj-organizasyon",
    "name": "Ağaçdere",
    "title": "Ağaçdere Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ağaçdere çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Ağaçdere",
    "type": "neighborhood"
  },
  {
    "slug": "agva-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Ağva Merkez",
    "title": "Ağva Merkez Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ağva Merkez çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Ağva Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "ahmetli-cicekcilik-peyzaj-organizasyon",
    "name": "Ahmetli",
    "title": "Ahmetli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ahmetli çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Ahmetli",
    "type": "neighborhood"
  },
  {
    "slug": "akcakese-cicekcilik-peyzaj-organizasyon",
    "name": "Akçakese",
    "title": "Akçakese Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Akçakese çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Akçakese",
    "type": "neighborhood"
  },
  {
    "slug": "alacali-cicekcilik-peyzaj-organizasyon",
    "name": "Alacalı",
    "title": "Alacalı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Alacalı çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Alacalı",
    "type": "neighborhood"
  },
  {
    "slug": "avcikoru-cicekcilik-peyzaj-organizasyon",
    "name": "Avcıkoru",
    "title": "Avcıkoru Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Avcıkoru çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Avcıkoru",
    "type": "neighborhood"
  },
  {
    "slug": "balibey-cicekcilik-peyzaj-organizasyon",
    "name": "Balibey",
    "title": "Balibey Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Balibey çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Balibey",
    "type": "neighborhood"
  },
  {
    "slug": "bickidere-cicekcilik-peyzaj-organizasyon",
    "name": "Bıçkıdere",
    "title": "Bıçkıdere Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bıçkıdere çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Bıçkıdere",
    "type": "neighborhood"
  },
  {
    "slug": "bozgoca-cicekcilik-peyzaj-organizasyon",
    "name": "Bozgoca",
    "title": "Bozgoca Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bozgoca çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Bozgoca",
    "type": "neighborhood"
  },
  {
    "slug": "bucakli-cicekcilik-peyzaj-organizasyon",
    "name": "Bucaklı",
    "title": "Bucaklı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bucaklı çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Bucaklı",
    "type": "neighborhood"
  },
  {
    "slug": "catakli-cicekcilik-peyzaj-organizasyon",
    "name": "Çataklı",
    "title": "Çataklı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çataklı çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Çataklı",
    "type": "neighborhood"
  },
  {
    "slug": "cavus-cicekcilik-peyzaj-organizasyon",
    "name": "Çavuş",
    "title": "Çavuş Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çavuş çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Çavuş",
    "type": "neighborhood"
  },
  {
    "slug": "cayirbasi-sile-cicekcilik-peyzaj-organizasyon",
    "name": "Çayırbaşı",
    "title": "Çayırbaşı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çayırbaşı çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Çayırbaşı",
    "type": "neighborhood"
  },
  {
    "slug": "celebi-cicekcilik-peyzaj-organizasyon",
    "name": "Çelebi",
    "title": "Çelebi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çelebi çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Çelebi",
    "type": "neighborhood"
  },
  {
    "slug": "cengilli-cicekcilik-peyzaj-organizasyon",
    "name": "Çengilli",
    "title": "Çengilli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çengilli çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Çengilli",
    "type": "neighborhood"
  },
  {
    "slug": "darlik-cicekcilik-peyzaj-organizasyon",
    "name": "Darlık",
    "title": "Darlık Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Darlık çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Darlık",
    "type": "neighborhood"
  },
  {
    "slug": "degirmencayiri-cicekcilik-peyzaj-organizasyon",
    "name": "Değirmençayırı",
    "title": "Değirmençayırı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Değirmençayırı çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Değirmençayırı",
    "type": "neighborhood"
  },
  {
    "slug": "dogancili-cicekcilik-peyzaj-organizasyon",
    "name": "Doğancılı",
    "title": "Doğancılı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Doğancılı çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Doğancılı",
    "type": "neighborhood"
  },
  {
    "slug": "erenler-cicekcilik-peyzaj-organizasyon",
    "name": "Erenler",
    "title": "Erenler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Erenler çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Erenler",
    "type": "neighborhood"
  },
  {
    "slug": "esenceli-cicekcilik-peyzaj-organizasyon",
    "name": "Esenceli",
    "title": "Esenceli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Esenceli çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Esenceli",
    "type": "neighborhood"
  },
  {
    "slug": "geredeli-cicekcilik-peyzaj-organizasyon",
    "name": "Geredeli",
    "title": "Geredeli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Geredeli çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Geredeli",
    "type": "neighborhood"
  },
  {
    "slug": "goce-cicekcilik-peyzaj-organizasyon",
    "name": "Göçe",
    "title": "Göçe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Göçe çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Göçe",
    "type": "neighborhood"
  },
  {
    "slug": "gokmasli-cicekcilik-peyzaj-organizasyon",
    "name": "Gökmaşlı",
    "title": "Gökmaşlı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gökmaşlı çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Gökmaşlı",
    "type": "neighborhood"
  },
  {
    "slug": "goksu-sile-cicekcilik-peyzaj-organizasyon",
    "name": "Göksu",
    "title": "Göksu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Göksu çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Göksu",
    "type": "neighborhood"
  },
  {
    "slug": "haci-kasim-cicekcilik-peyzaj-organizasyon",
    "name": "Hacı Kasım",
    "title": "Hacı Kasım Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hacı Kasım çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Hacı Kasım",
    "type": "neighborhood"
  },
  {
    "slug": "hacilli-cicekcilik-peyzaj-organizasyon",
    "name": "Hacıllı",
    "title": "Hacıllı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hacıllı çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Hacıllı",
    "type": "neighborhood"
  },
  {
    "slug": "hasanli-cicekcilik-peyzaj-organizasyon",
    "name": "Hasanlı",
    "title": "Hasanlı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hasanlı çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Hasanlı",
    "type": "neighborhood"
  },
  {
    "slug": "imrendere-cicekcilik-peyzaj-organizasyon",
    "name": "İmrendere",
    "title": "İmrendere Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İmrendere çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "İmrendere",
    "type": "neighborhood"
  },
  {
    "slug": "imrenli-cicekcilik-peyzaj-organizasyon",
    "name": "İmrenli",
    "title": "İmrenli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İmrenli çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "İmrenli",
    "type": "neighborhood"
  },
  {
    "slug": "isakoy-cicekcilik-peyzaj-organizasyon",
    "name": "İsaköy",
    "title": "İsaköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İsaköy çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "İsaköy",
    "type": "neighborhood"
  },
  {
    "slug": "kabakoz-cicekcilik-peyzaj-organizasyon",
    "name": "Kabakoz",
    "title": "Kabakoz Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kabakoz çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Kabakoz",
    "type": "neighborhood"
  },
  {
    "slug": "kadikoy-sile-cicekcilik-peyzaj-organizasyon",
    "name": "Kadıköy",
    "title": "Kadıköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kadıköy çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Kadıköy",
    "type": "neighborhood"
  },
  {
    "slug": "kalem-cicekcilik-peyzaj-organizasyon",
    "name": "Kalem",
    "title": "Kalem Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kalem çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Kalem",
    "type": "neighborhood"
  },
  {
    "slug": "karabeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Karabeyli",
    "title": "Karabeyli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Karabeyli çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Karabeyli",
    "type": "neighborhood"
  },
  {
    "slug": "karacakoy-cicekcilik-peyzaj-organizasyon",
    "name": "Karacaköy",
    "title": "Karacaköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Karacaköy çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Karacaköy",
    "type": "neighborhood"
  },
  {
    "slug": "karakiraz-cicekcilik-peyzaj-organizasyon",
    "name": "Karakiraz",
    "title": "Karakiraz Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Karakiraz çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Karakiraz",
    "type": "neighborhood"
  },
  {
    "slug": "karamandere-sile-cicekcilik-peyzaj-organizasyon",
    "name": "Karamandere",
    "title": "Karamandere Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Karamandere çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Karamandere",
    "type": "neighborhood"
  },
  {
    "slug": "kervansaray-cicekcilik-peyzaj-organizasyon",
    "name": "Kervansaray",
    "title": "Kervansaray Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kervansaray çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Kervansaray",
    "type": "neighborhood"
  },
  {
    "slug": "kizilca-cicekcilik-peyzaj-organizasyon",
    "name": "Kızılca",
    "title": "Kızılca Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kızılca çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Kızılca",
    "type": "neighborhood"
  },
  {
    "slug": "korucu-cicekcilik-peyzaj-organizasyon",
    "name": "Korucu",
    "title": "Korucu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Korucu çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Korucu",
    "type": "neighborhood"
  },
  {
    "slug": "komurluk-cicekcilik-peyzaj-organizasyon",
    "name": "Kömürlük",
    "title": "Kömürlük Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kömürlük çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Kömürlük",
    "type": "neighborhood"
  },
  {
    "slug": "kumbaba-cicekcilik-peyzaj-organizasyon",
    "name": "Kumbaba",
    "title": "Kumbaba Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kumbaba çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Kumbaba",
    "type": "neighborhood"
  },
  {
    "slug": "kurfalli-sile-cicekcilik-peyzaj-organizasyon",
    "name": "Kurfallı",
    "title": "Kurfallı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kurfallı çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Kurfallı",
    "type": "neighborhood"
  },
  {
    "slug": "kurna-cicekcilik-peyzaj-organizasyon",
    "name": "Kurna",
    "title": "Kurna Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kurna çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Kurna",
    "type": "neighborhood"
  },
  {
    "slug": "mesrutiyet-cicekcilik-peyzaj-organizasyon",
    "name": "Meşrutiyet",
    "title": "Meşrutiyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Meşrutiyet çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Meşrutiyet",
    "type": "neighborhood"
  },
  {
    "slug": "orucoglu-cicekcilik-peyzaj-organizasyon",
    "name": "Oruçoğlu",
    "title": "Oruçoğlu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Oruçoğlu çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Oruçoğlu",
    "type": "neighborhood"
  },
  {
    "slug": "osmankoy-cicekcilik-peyzaj-organizasyon",
    "name": "Osmanköy",
    "title": "Osmanköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Osmanköy çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Osmanköy",
    "type": "neighborhood"
  },
  {
    "slug": "ovacik-cicekcilik-peyzaj-organizasyon",
    "name": "Ovacık",
    "title": "Ovacık Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ovacık çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Ovacık",
    "type": "neighborhood"
  },
  {
    "slug": "sahilkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Sahilköy",
    "title": "Sahilköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sahilköy çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Sahilköy",
    "type": "neighborhood"
  },
  {
    "slug": "satmazli-cicekcilik-peyzaj-organizasyon",
    "name": "Satmazlı",
    "title": "Satmazlı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Satmazlı çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Satmazlı",
    "type": "neighborhood"
  },
  {
    "slug": "sofular-cicekcilik-peyzaj-organizasyon",
    "name": "Sofular",
    "title": "Sofular Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sofular çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Sofular",
    "type": "neighborhood"
  },
  {
    "slug": "sogullu-cicekcilik-peyzaj-organizasyon",
    "name": "Soğullu",
    "title": "Soğullu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Soğullu çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Soğullu",
    "type": "neighborhood"
  },
  {
    "slug": "sortullu-cicekcilik-peyzaj-organizasyon",
    "name": "Sortullu",
    "title": "Sortullu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sortullu çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Sortullu",
    "type": "neighborhood"
  },
  {
    "slug": "suayipli-cicekcilik-peyzaj-organizasyon",
    "name": "Şuayipli",
    "title": "Şuayipli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Şuayipli çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Şuayipli",
    "type": "neighborhood"
  },
  {
    "slug": "teke-cicekcilik-peyzaj-organizasyon",
    "name": "Teke",
    "title": "Teke Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Teke çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Teke",
    "type": "neighborhood"
  },
  {
    "slug": "ulupelit-cicekcilik-peyzaj-organizasyon",
    "name": "Ulupelit",
    "title": "Ulupelit Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ulupelit çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Ulupelit",
    "type": "neighborhood"
  },
  {
    "slug": "uvezli-cicekcilik-peyzaj-organizasyon",
    "name": "Üvezli",
    "title": "Üvezli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Üvezli çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Üvezli",
    "type": "neighborhood"
  },
  {
    "slug": "yaka-cicekcilik-peyzaj-organizasyon",
    "name": "Yaka",
    "title": "Yaka Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yaka çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Yaka",
    "type": "neighborhood"
  },
  {
    "slug": "yaylali-cicekcilik-peyzaj-organizasyon",
    "name": "Yaylalı",
    "title": "Yaylalı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yaylalı çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Yaylalı",
    "type": "neighborhood"
  },
  {
    "slug": "yazimanayir-cicekcilik-peyzaj-organizasyon",
    "name": "Yazımanayır",
    "title": "Yazımanayır Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yazımanayır çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Yazımanayır",
    "type": "neighborhood"
  },
  {
    "slug": "yenikoy-sile-cicekcilik-peyzaj-organizasyon",
    "name": "Yeniköy",
    "title": "Yeniköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeniköy çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Yeniköy",
    "type": "neighborhood"
  },
  {
    "slug": "yesilvadi-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilvadi",
    "title": "Yeşilvadi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeşilvadi çiçekçi arayanlar için Şile ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şile",
    "neighborhood": "Yeşilvadi",
    "type": "neighborhood"
  },
  {
    "slug": "19-mayis-sisli-cicekcilik-peyzaj-organizasyon",
    "name": "19 Mayıs",
    "title": "19 Mayıs Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "19 Mayıs çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "19 Mayıs",
    "type": "neighborhood"
  },
  {
    "slug": "bozkurt-cicekcilik-peyzaj-organizasyon",
    "name": "Bozkurt",
    "title": "Bozkurt Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bozkurt çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Bozkurt",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-sisli-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "duatepe-cicekcilik-peyzaj-organizasyon",
    "name": "Duatepe",
    "title": "Duatepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Duatepe çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Duatepe",
    "type": "neighborhood"
  },
  {
    "slug": "ergenekon-cicekcilik-peyzaj-organizasyon",
    "name": "Ergenekon",
    "title": "Ergenekon Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ergenekon çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Ergenekon",
    "type": "neighborhood"
  },
  {
    "slug": "esentepe-sisli-cicekcilik-peyzaj-organizasyon",
    "name": "Esentepe",
    "title": "Esentepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Esentepe çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Esentepe",
    "type": "neighborhood"
  },
  {
    "slug": "eskisehir-cicekcilik-peyzaj-organizasyon",
    "name": "Eskişehir",
    "title": "Eskişehir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Eskişehir çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Eskişehir",
    "type": "neighborhood"
  },
  {
    "slug": "ferikoy-cicekcilik-peyzaj-organizasyon",
    "name": "Feriköy",
    "title": "Feriköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Feriköy çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Feriköy",
    "type": "neighborhood"
  },
  {
    "slug": "fulya-cicekcilik-peyzaj-organizasyon",
    "name": "Fulya",
    "title": "Fulya Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fulya çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Fulya",
    "type": "neighborhood"
  },
  {
    "slug": "gulbahar-cicekcilik-peyzaj-organizasyon",
    "name": "Gülbahar",
    "title": "Gülbahar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gülbahar çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Gülbahar",
    "type": "neighborhood"
  },
  {
    "slug": "halaskargazi-cicekcilik-peyzaj-organizasyon",
    "name": "Halaskargazi",
    "title": "Halaskargazi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Halaskargazi çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Halaskargazi",
    "type": "neighborhood"
  },
  {
    "slug": "halide-edip-adivar-cicekcilik-peyzaj-organizasyon",
    "name": "Halide Edip Adıvar",
    "title": "Halide Edip Adıvar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Halide Edip Adıvar çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Halide Edip Adıvar",
    "type": "neighborhood"
  },
  {
    "slug": "halil-rifat-pasa-cicekcilik-peyzaj-organizasyon",
    "name": "Halil Rıfat Paşa",
    "title": "Halil Rıfat Paşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Halil Rıfat Paşa çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Halil Rıfat Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "harbiye-cicekcilik-peyzaj-organizasyon",
    "name": "Harbiye",
    "title": "Harbiye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Harbiye çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Harbiye",
    "type": "neighborhood"
  },
  {
    "slug": "inonu-cicekcilik-peyzaj-organizasyon",
    "name": "İnönü",
    "title": "İnönü Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İnönü çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "İnönü",
    "type": "neighborhood"
  },
  {
    "slug": "izzet-pasa-cicekcilik-peyzaj-organizasyon",
    "name": "İzzet Paşa",
    "title": "İzzet Paşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İzzet Paşa çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "İzzet Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "kaptanpasa-sisli-cicekcilik-peyzaj-organizasyon",
    "name": "Kaptanpaşa",
    "title": "Kaptanpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kaptanpaşa çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Kaptanpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "kustepe-cicekcilik-peyzaj-organizasyon",
    "name": "Kuştepe",
    "title": "Kuştepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kuştepe çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Kuştepe",
    "type": "neighborhood"
  },
  {
    "slug": "mahmut-sevket-pasa-cicekcilik-peyzaj-organizasyon",
    "name": "Mahmut Şevket Paşa",
    "title": "Mahmut Şevket Paşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mahmut Şevket Paşa çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Mahmut Şevket Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "mecidiyekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Mecidiyeköy",
    "title": "Mecidiyeköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mecidiyeköy çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Mecidiyeköy",
    "type": "neighborhood"
  },
  {
    "slug": "merkez-sisli-cicekcilik-peyzaj-organizasyon",
    "name": "Merkez",
    "title": "Merkez Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Merkez çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "mesrutiyet-sisli-cicekcilik-peyzaj-organizasyon",
    "name": "Meşrutiyet",
    "title": "Meşrutiyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Meşrutiyet çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Meşrutiyet",
    "type": "neighborhood"
  },
  {
    "slug": "pasa-cicekcilik-peyzaj-organizasyon",
    "name": "Paşa",
    "title": "Paşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Paşa çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "tesvikiye-cicekcilik-peyzaj-organizasyon",
    "name": "Teşvikiye",
    "title": "Teşvikiye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Teşvikiye çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Teşvikiye",
    "type": "neighborhood"
  },
  {
    "slug": "yayla-cicekcilik-peyzaj-organizasyon",
    "name": "Yayla",
    "title": "Yayla Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yayla çiçekçi arayanlar için Şişli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Şişli",
    "neighborhood": "Yayla",
    "type": "neighborhood"
  },
  {
    "slug": "acibadem-uskudar-cicekcilik-peyzaj-organizasyon",
    "name": "Acıbadem",
    "title": "Acıbadem Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Acıbadem çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Acıbadem",
    "type": "neighborhood"
  },
  {
    "slug": "ahmediye-cicekcilik-peyzaj-organizasyon",
    "name": "Ahmediye",
    "title": "Ahmediye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ahmediye çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Ahmediye",
    "type": "neighborhood"
  },
  {
    "slug": "altunizade-cicekcilik-peyzaj-organizasyon",
    "name": "Altunizade",
    "title": "Altunizade Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Altunizade çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Altunizade",
    "type": "neighborhood"
  },
  {
    "slug": "aziz-mahmut-hudayi-cicekcilik-peyzaj-organizasyon",
    "name": "Aziz Mahmut Hüdayi",
    "title": "Aziz Mahmut Hüdayi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Aziz Mahmut Hüdayi çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Aziz Mahmut Hüdayi",
    "type": "neighborhood"
  },
  {
    "slug": "bahcelievler-uskudar-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçelievler",
    "title": "Bahçelievler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bahçelievler çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Bahçelievler",
    "type": "neighborhood"
  },
  {
    "slug": "barbaros-cicekcilik-peyzaj-organizasyon",
    "name": "Barbaros",
    "title": "Barbaros Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Barbaros çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Barbaros",
    "type": "neighborhood"
  },
  {
    "slug": "beylerbeyi-cicekcilik-peyzaj-organizasyon",
    "name": "Beylerbeyi",
    "title": "Beylerbeyi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Beylerbeyi çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Beylerbeyi",
    "type": "neighborhood"
  },
  {
    "slug": "bulgurlu-cicekcilik-peyzaj-organizasyon",
    "name": "Bulgurlu",
    "title": "Bulgurlu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bulgurlu çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Bulgurlu",
    "type": "neighborhood"
  },
  {
    "slug": "burhaniye-cicekcilik-peyzaj-organizasyon",
    "name": "Burhaniye",
    "title": "Burhaniye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Burhaniye çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Burhaniye",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-uskudar-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "cengelkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Çengelköy",
    "title": "Çengelköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çengelköy çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Çengelköy",
    "type": "neighborhood"
  },
  {
    "slug": "ferah-cicekcilik-peyzaj-organizasyon",
    "name": "Ferah",
    "title": "Ferah Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ferah çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Ferah",
    "type": "neighborhood"
  },
  {
    "slug": "guzeltepe-uskudar-cicekcilik-peyzaj-organizasyon",
    "name": "Güzeltepe",
    "title": "Güzeltepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Güzeltepe çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Güzeltepe",
    "type": "neighborhood"
  },
  {
    "slug": "icadiye-cicekcilik-peyzaj-organizasyon",
    "name": "İcadiye",
    "title": "İcadiye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İcadiye çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "İcadiye",
    "type": "neighborhood"
  },
  {
    "slug": "kandilli-cicekcilik-peyzaj-organizasyon",
    "name": "Kandilli",
    "title": "Kandilli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kandilli çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Kandilli",
    "type": "neighborhood"
  },
  {
    "slug": "kisikli-cicekcilik-peyzaj-organizasyon",
    "name": "Kısıklı",
    "title": "Kısıklı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kısıklı çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Kısıklı",
    "type": "neighborhood"
  },
  {
    "slug": "kirazlitepe-cicekcilik-peyzaj-organizasyon",
    "name": "Kirazlıtepe",
    "title": "Kirazlıtepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kirazlıtepe çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Kirazlıtepe",
    "type": "neighborhood"
  },
  {
    "slug": "kuleli-cicekcilik-peyzaj-organizasyon",
    "name": "Kuleli",
    "title": "Kuleli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kuleli çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Kuleli",
    "type": "neighborhood"
  },
  {
    "slug": "kuzguncuk-cicekcilik-peyzaj-organizasyon",
    "name": "Kuzguncuk",
    "title": "Kuzguncuk Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kuzguncuk çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Kuzguncuk",
    "type": "neighborhood"
  },
  {
    "slug": "kucuk-camlica-cicekcilik-peyzaj-organizasyon",
    "name": "Küçük Çamlıca",
    "title": "Küçük Çamlıca Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Küçük Çamlıca çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Küçük Çamlıca",
    "type": "neighborhood"
  },
  {
    "slug": "kucuksu-cicekcilik-peyzaj-organizasyon",
    "name": "Küçüksu",
    "title": "Küçüksu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Küçüksu çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Küçüksu",
    "type": "neighborhood"
  },
  {
    "slug": "kupluce-cicekcilik-peyzaj-organizasyon",
    "name": "Küplüce",
    "title": "Küplüce Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Küplüce çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Küplüce",
    "type": "neighborhood"
  },
  {
    "slug": "mehmet-akif-ersoy-cicekcilik-peyzaj-organizasyon",
    "name": "Mehmet Akif Ersoy",
    "title": "Mehmet Akif Ersoy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mehmet Akif Ersoy çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Mehmet Akif Ersoy",
    "type": "neighborhood"
  },
  {
    "slug": "mimar-sinan-uskudar-cicekcilik-peyzaj-organizasyon",
    "name": "Mimar Sinan",
    "title": "Mimar Sinan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mimar Sinan çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Mimar Sinan",
    "type": "neighborhood"
  },
  {
    "slug": "muratreis-cicekcilik-peyzaj-organizasyon",
    "name": "Muratreis",
    "title": "Muratreis Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Muratreis çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Muratreis",
    "type": "neighborhood"
  },
  {
    "slug": "salacak-cicekcilik-peyzaj-organizasyon",
    "name": "Salacak",
    "title": "Salacak Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Salacak çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Salacak",
    "type": "neighborhood"
  },
  {
    "slug": "selami-ali-cicekcilik-peyzaj-organizasyon",
    "name": "Selami Ali",
    "title": "Selami Ali Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Selami Ali çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Selami Ali",
    "type": "neighborhood"
  },
  {
    "slug": "selimiye-cicekcilik-peyzaj-organizasyon",
    "name": "Selimiye",
    "title": "Selimiye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Selimiye çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Selimiye",
    "type": "neighborhood"
  },
  {
    "slug": "sultantepe-cicekcilik-peyzaj-organizasyon",
    "name": "Sultantepe",
    "title": "Sultantepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sultantepe çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Sultantepe",
    "type": "neighborhood"
  },
  {
    "slug": "unalan-cicekcilik-peyzaj-organizasyon",
    "name": "Ünalan",
    "title": "Ünalan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ünalan çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Ünalan",
    "type": "neighborhood"
  },
  {
    "slug": "valide-i-atik-cicekcilik-peyzaj-organizasyon",
    "name": "Valide-i Atik",
    "title": "Valide-i Atik Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Valide-i Atik çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Valide-i Atik",
    "type": "neighborhood"
  },
  {
    "slug": "yavuzturk-cicekcilik-peyzaj-organizasyon",
    "name": "Yavuztürk",
    "title": "Yavuztürk Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yavuztürk çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Yavuztürk",
    "type": "neighborhood"
  },
  {
    "slug": "zeynep-kamil-cicekcilik-peyzaj-organizasyon",
    "name": "Zeynep Kamil",
    "title": "Zeynep Kamil Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Zeynep Kamil çiçekçi arayanlar için Üsküdar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Üsküdar",
    "neighborhood": "Zeynep Kamil",
    "type": "neighborhood"
  },
  {
    "slug": "bestelsiz-cicekcilik-peyzaj-organizasyon",
    "name": "Beştelsiz",
    "title": "Beştelsiz Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Beştelsiz çiçekçi arayanlar için Zeytinburnu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Zeytinburnu",
    "neighborhood": "Beştelsiz",
    "type": "neighborhood"
  },
  {
    "slug": "cirpici-cicekcilik-peyzaj-organizasyon",
    "name": "Çırpıcı",
    "title": "Çırpıcı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çırpıcı çiçekçi arayanlar için Zeytinburnu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Zeytinburnu",
    "neighborhood": "Çırpıcı",
    "type": "neighborhood"
  },
  {
    "slug": "gokalp-cicekcilik-peyzaj-organizasyon",
    "name": "Gökalp",
    "title": "Gökalp Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gökalp çiçekçi arayanlar için Zeytinburnu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Zeytinburnu",
    "neighborhood": "Gökalp",
    "type": "neighborhood"
  },
  {
    "slug": "kazlicesme-cicekcilik-peyzaj-organizasyon",
    "name": "Kazlıçeşme",
    "title": "Kazlıçeşme Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kazlıçeşme çiçekçi arayanlar için Zeytinburnu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Zeytinburnu",
    "neighborhood": "Kazlıçeşme",
    "type": "neighborhood"
  },
  {
    "slug": "maltepe-zeytinburnu-cicekcilik-peyzaj-organizasyon",
    "name": "Maltepe",
    "title": "Maltepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Maltepe çiçekçi arayanlar için Zeytinburnu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Zeytinburnu",
    "neighborhood": "Maltepe",
    "type": "neighborhood"
  },
  {
    "slug": "merkezefendi-cicekcilik-peyzaj-organizasyon",
    "name": "Merkezefendi",
    "title": "Merkezefendi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Merkezefendi çiçekçi arayanlar için Zeytinburnu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Zeytinburnu",
    "neighborhood": "Merkezefendi",
    "type": "neighborhood"
  },
  {
    "slug": "nuripasa-cicekcilik-peyzaj-organizasyon",
    "name": "Nuripaşa",
    "title": "Nuripaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Nuripaşa çiçekçi arayanlar için Zeytinburnu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Zeytinburnu",
    "neighborhood": "Nuripaşa",
    "type": "neighborhood"
  },
  {
    "slug": "seyitnizam-cicekcilik-peyzaj-organizasyon",
    "name": "Seyitnizam",
    "title": "Seyitnizam Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Seyitnizam çiçekçi arayanlar için Zeytinburnu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Zeytinburnu",
    "neighborhood": "Seyitnizam",
    "type": "neighborhood"
  },
  {
    "slug": "sumer-cicekcilik-peyzaj-organizasyon",
    "name": "Sümer",
    "title": "Sümer Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sümer çiçekçi arayanlar için Zeytinburnu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Zeytinburnu",
    "neighborhood": "Sümer",
    "type": "neighborhood"
  },
  {
    "slug": "telsiz-cicekcilik-peyzaj-organizasyon",
    "name": "Telsiz",
    "title": "Telsiz Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Telsiz çiçekçi arayanlar için Zeytinburnu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Zeytinburnu",
    "neighborhood": "Telsiz",
    "type": "neighborhood"
  },
  {
    "slug": "veliefendi-cicekcilik-peyzaj-organizasyon",
    "name": "Veliefendi",
    "title": "Veliefendi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Veliefendi çiçekçi arayanlar için Zeytinburnu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Zeytinburnu",
    "neighborhood": "Veliefendi",
    "type": "neighborhood"
  },
  {
    "slug": "yenidogan-zeytinburnu-cicekcilik-peyzaj-organizasyon",
    "name": "Yenidoğan",
    "title": "Yenidoğan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yenidoğan çiçekçi arayanlar için Zeytinburnu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Zeytinburnu",
    "neighborhood": "Yenidoğan",
    "type": "neighborhood"
  },
  {
    "slug": "yesiltepe-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşiltepe",
    "title": "Yeşiltepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeşiltepe çiçekçi arayanlar için Zeytinburnu ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Zeytinburnu",
    "neighborhood": "Yeşiltepe",
    "type": "neighborhood"
  },
  {
    "slug": "19-mayis-buyukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "19 Mayıs",
    "title": "19 Mayıs Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "19 Mayıs çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "19 Mayıs",
    "type": "neighborhood"
  },
  {
    "slug": "ahmediye-buyukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Ahmediye",
    "title": "Ahmediye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ahmediye çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Ahmediye",
    "type": "neighborhood"
  },
  {
    "slug": "alkent-2000-cicekcilik-peyzaj-organizasyon",
    "name": "Alkent 2000",
    "title": "Alkent 2000 Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Alkent 2000 çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Alkent 2000",
    "type": "neighborhood"
  },
  {
    "slug": "ataturk-buyukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Atatürk",
    "title": "Atatürk Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Atatürk çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Atatürk",
    "type": "neighborhood"
  },
  {
    "slug": "bahcelievler-buyukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçelievler",
    "title": "Bahçelievler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bahçelievler çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Bahçelievler",
    "type": "neighborhood"
  },
  {
    "slug": "celaliye-cicekcilik-peyzaj-organizasyon",
    "name": "Celaliye",
    "title": "Celaliye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Celaliye çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Celaliye",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-buyukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "cakmakli-cicekcilik-peyzaj-organizasyon",
    "name": "Çakmaklı",
    "title": "Çakmaklı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çakmaklı çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Çakmaklı",
    "type": "neighborhood"
  },
  {
    "slug": "dizdariye-cicekcilik-peyzaj-organizasyon",
    "name": "Dizdariye",
    "title": "Dizdariye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Dizdariye çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Dizdariye",
    "type": "neighborhood"
  },
  {
    "slug": "ekinoba-cicekcilik-peyzaj-organizasyon",
    "name": "Ekinoba",
    "title": "Ekinoba Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ekinoba çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Ekinoba",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-buyukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fatih çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "guzelce-cicekcilik-peyzaj-organizasyon",
    "name": "Güzelce",
    "title": "Güzelce Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Güzelce çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Güzelce",
    "type": "neighborhood"
  },
  {
    "slug": "hurriyet-buyukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Hürriyet",
    "title": "Hürriyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hürriyet çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Hürriyet",
    "type": "neighborhood"
  },
  {
    "slug": "kamiloba-cicekcilik-peyzaj-organizasyon",
    "name": "Kamiloba",
    "title": "Kamiloba Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kamiloba çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Kamiloba",
    "type": "neighborhood"
  },
  {
    "slug": "karaagac-cicekcilik-peyzaj-organizasyon",
    "name": "Karaağaç",
    "title": "Karaağaç Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Karaağaç çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Karaağaç",
    "type": "neighborhood"
  },
  {
    "slug": "kumburgaz-cicekcilik-peyzaj-organizasyon",
    "name": "Kumburgaz",
    "title": "Kumburgaz Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kumburgaz çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Kumburgaz",
    "type": "neighborhood"
  },
  {
    "slug": "mimaroba-cicekcilik-peyzaj-organizasyon",
    "name": "Mimaroba",
    "title": "Mimaroba Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mimaroba çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Mimaroba",
    "type": "neighborhood"
  },
  {
    "slug": "mimarsinan-cicekcilik-peyzaj-organizasyon",
    "name": "Mimarsinan",
    "title": "Mimarsinan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mimarsinan çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Mimarsinan",
    "type": "neighborhood"
  },
  {
    "slug": "murat-cesme-cicekcilik-peyzaj-organizasyon",
    "name": "Murat Çesme",
    "title": "Murat Çesme Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Murat Çesme çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Murat Çesme",
    "type": "neighborhood"
  },
  {
    "slug": "pinartepe-cicekcilik-peyzaj-organizasyon",
    "name": "Pınartepe",
    "title": "Pınartepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Pınartepe çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Pınartepe",
    "type": "neighborhood"
  },
  {
    "slug": "sinanoba-cicekcilik-peyzaj-organizasyon",
    "name": "Sinanoba",
    "title": "Sinanoba Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sinanoba çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Sinanoba",
    "type": "neighborhood"
  },
  {
    "slug": "turkoba-cicekcilik-peyzaj-organizasyon",
    "name": "Türkoba",
    "title": "Türkoba Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Türkoba çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Türkoba",
    "type": "neighborhood"
  },
  {
    "slug": "ulus-buyukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Ulus",
    "title": "Ulus Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ulus çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Ulus",
    "type": "neighborhood"
  },
  {
    "slug": "yenimahalle-buyukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Yenimahalle",
    "title": "Yenimahalle Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yenimahalle çiçekçi arayanlar için Büyükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Büyükçekmece",
    "neighborhood": "Yenimahalle",
    "type": "neighborhood"
  },
  {
    "slug": "caglayan-cicekcilik-peyzaj-organizasyon",
    "name": "Çağlayan",
    "title": "Çağlayan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çağlayan çiçekçi arayanlar için Kağıthane ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kağıthane",
    "neighborhood": "Çağlayan",
    "type": "neighborhood"
  },
  {
    "slug": "celiktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Çeliktepe",
    "title": "Çeliktepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çeliktepe çiçekçi arayanlar için Kağıthane ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kağıthane",
    "neighborhood": "Çeliktepe",
    "type": "neighborhood"
  },
  {
    "slug": "emniyet-evleri-cicekcilik-peyzaj-organizasyon",
    "name": "Emniyet Evleri",
    "title": "Emniyet Evleri Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Emniyet Evleri çiçekçi arayanlar için Kağıthane ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kağıthane",
    "neighborhood": "Emniyet Evleri",
    "type": "neighborhood"
  },
  {
    "slug": "gultepe-cicekcilik-peyzaj-organizasyon",
    "name": "Gültepe",
    "title": "Gültepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gültepe çiçekçi arayanlar için Kağıthane ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kağıthane",
    "neighborhood": "Gültepe",
    "type": "neighborhood"
  },
  {
    "slug": "gursel-cicekcilik-peyzaj-organizasyon",
    "name": "Gürsel",
    "title": "Gürsel Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gürsel çiçekçi arayanlar için Kağıthane ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kağıthane",
    "neighborhood": "Gürsel",
    "type": "neighborhood"
  },
  {
    "slug": "hamidiye-cicekcilik-peyzaj-organizasyon",
    "name": "Hamidiye",
    "title": "Hamidiye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hamidiye çiçekçi arayanlar için Kağıthane ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kağıthane",
    "neighborhood": "Hamidiye",
    "type": "neighborhood"
  },
  {
    "slug": "harmantepe-cicekcilik-peyzaj-organizasyon",
    "name": "Harmantepe",
    "title": "Harmantepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Harmantepe çiçekçi arayanlar için Kağıthane ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kağıthane",
    "neighborhood": "Harmantepe",
    "type": "neighborhood"
  },
  {
    "slug": "hurriyet-kagithane-cicekcilik-peyzaj-organizasyon",
    "name": "Hürriyet",
    "title": "Hürriyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hürriyet çiçekçi arayanlar için Kağıthane ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kağıthane",
    "neighborhood": "Hürriyet",
    "type": "neighborhood"
  },
  {
    "slug": "mehmet-akif-ersoy-kagithane-cicekcilik-peyzaj-organizasyon",
    "name": "Mehmet Akif Ersoy",
    "title": "Mehmet Akif Ersoy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mehmet Akif Ersoy çiçekçi arayanlar için Kağıthane ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kağıthane",
    "neighborhood": "Mehmet Akif Ersoy",
    "type": "neighborhood"
  },
  {
    "slug": "merkez-kagithane-cicekcilik-peyzaj-organizasyon",
    "name": "Merkez",
    "title": "Merkez Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Merkez çiçekçi arayanlar için Kağıthane ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kağıthane",
    "neighborhood": "Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "nurtepe-cicekcilik-peyzaj-organizasyon",
    "name": "Nurtepe",
    "title": "Nurtepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Nurtepe çiçekçi arayanlar için Kağıthane ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kağıthane",
    "neighborhood": "Nurtepe",
    "type": "neighborhood"
  },
  {
    "slug": "ortabayir-cicekcilik-peyzaj-organizasyon",
    "name": "Ortabayır",
    "title": "Ortabayır Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ortabayır çiçekçi arayanlar için Kağıthane ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kağıthane",
    "neighborhood": "Ortabayır",
    "type": "neighborhood"
  },
  {
    "slug": "seyrantepe-cicekcilik-peyzaj-organizasyon",
    "name": "Seyrantepe",
    "title": "Seyrantepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Seyrantepe çiçekçi arayanlar için Kağıthane ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kağıthane",
    "neighborhood": "Seyrantepe",
    "type": "neighborhood"
  },
  {
    "slug": "sultan-selim-cicekcilik-peyzaj-organizasyon",
    "name": "Sultan Selim",
    "title": "Sultan Selim Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sultan Selim çiçekçi arayanlar için Kağıthane ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kağıthane",
    "neighborhood": "Sultan Selim",
    "type": "neighborhood"
  },
  {
    "slug": "sirintepe-cicekcilik-peyzaj-organizasyon",
    "name": "Şirintepe",
    "title": "Şirintepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Şirintepe çiçekçi arayanlar için Kağıthane ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kağıthane",
    "neighborhood": "Şirintepe",
    "type": "neighborhood"
  },
  {
    "slug": "talatpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Talatpaşa",
    "title": "Talatpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Talatpaşa çiçekçi arayanlar için Kağıthane ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kağıthane",
    "neighborhood": "Talatpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "telsizler-cicekcilik-peyzaj-organizasyon",
    "name": "Telsizler",
    "title": "Telsizler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Telsizler çiçekçi arayanlar için Kağıthane ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kağıthane",
    "neighborhood": "Telsizler",
    "type": "neighborhood"
  },
  {
    "slug": "yahya-kemal-cicekcilik-peyzaj-organizasyon",
    "name": "Yahya Kemal",
    "title": "Yahya Kemal Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yahya Kemal çiçekçi arayanlar için Kağıthane ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kağıthane",
    "neighborhood": "Yahya Kemal",
    "type": "neighborhood"
  },
  {
    "slug": "yesilce-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilce",
    "title": "Yeşilce Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeşilce çiçekçi arayanlar için Kağıthane ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Kağıthane",
    "neighborhood": "Yeşilce",
    "type": "neighborhood"
  },
  {
    "slug": "atakent-cicekcilik-peyzaj-organizasyon",
    "name": "Atakent",
    "title": "Atakent Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Atakent çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "Atakent",
    "type": "neighborhood"
  },
  {
    "slug": "ataturk-kucukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Atatürk",
    "title": "Atatürk Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Atatürk çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "Atatürk",
    "type": "neighborhood"
  },
  {
    "slug": "besyol-cicekcilik-peyzaj-organizasyon",
    "name": "Beşyol",
    "title": "Beşyol Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Beşyol çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "Beşyol",
    "type": "neighborhood"
  },
  {
    "slug": "cennet-cicekcilik-peyzaj-organizasyon",
    "name": "Cennet",
    "title": "Cennet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cennet çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "Cennet",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-kucukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-kucukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fatih çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "fevzi-cakmak-kucukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Fevzi Çakmak",
    "title": "Fevzi Çakmak Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fevzi Çakmak çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "Fevzi Çakmak",
    "type": "neighborhood"
  },
  {
    "slug": "gultepe-kucukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Gültepe",
    "title": "Gültepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gültepe çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "Gültepe",
    "type": "neighborhood"
  },
  {
    "slug": "halkali-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Halkalı Merkez",
    "title": "Halkalı Merkez Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Halkalı Merkez çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "Halkalı Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "inonu-kucukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "İnönü",
    "title": "İnönü Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İnönü çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "İnönü",
    "type": "neighborhood"
  },
  {
    "slug": "istasyon-cicekcilik-peyzaj-organizasyon",
    "name": "İstasyon",
    "title": "İstasyon Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İstasyon çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "İstasyon",
    "type": "neighborhood"
  },
  {
    "slug": "kanarya-cicekcilik-peyzaj-organizasyon",
    "name": "Kanarya",
    "title": "Kanarya Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kanarya çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "Kanarya",
    "type": "neighborhood"
  },
  {
    "slug": "kartaltepe-kucukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Kartaltepe",
    "title": "Kartaltepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kartaltepe çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "Kartaltepe",
    "type": "neighborhood"
  },
  {
    "slug": "kemalpasa-kucukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Kemalpaşa",
    "title": "Kemalpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kemalpaşa çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "Kemalpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "kucukcekmece-ikitelliosb-cicekcilik-peyzaj-organizasyon",
    "name": "Küçükçekmece İkitelliosb",
    "title": "Küçükçekmece İkitelliosb Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Küçükçekmece İkitelliosb çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "Küçükçekmece İkitelliosb",
    "type": "neighborhood"
  },
  {
    "slug": "mehmet-akif-cicekcilik-peyzaj-organizasyon",
    "name": "Mehmet Akif",
    "title": "Mehmet Akif Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mehmet Akif çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "Mehmet Akif",
    "type": "neighborhood"
  },
  {
    "slug": "sogutlu-cesme-cicekcilik-peyzaj-organizasyon",
    "name": "Söğütlü Çeşme",
    "title": "Söğütlü Çeşme Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Söğütlü Çeşme çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "Söğütlü Çeşme",
    "type": "neighborhood"
  },
  {
    "slug": "sultan-murat-cicekcilik-peyzaj-organizasyon",
    "name": "Sultan Murat",
    "title": "Sultan Murat Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sultan Murat çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "Sultan Murat",
    "type": "neighborhood"
  },
  {
    "slug": "tevfikbey-cicekcilik-peyzaj-organizasyon",
    "name": "Tevfikbey",
    "title": "Tevfikbey Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Tevfikbey çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "Tevfikbey",
    "type": "neighborhood"
  },
  {
    "slug": "yarimburgaz-cicekcilik-peyzaj-organizasyon",
    "name": "Yarımburgaz",
    "title": "Yarımburgaz Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yarımburgaz çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "Yarımburgaz",
    "type": "neighborhood"
  },
  {
    "slug": "yeni-mahalle-kucukcekmece-cicekcilik-peyzaj-organizasyon",
    "name": "Yeni Mahalle",
    "title": "Yeni Mahalle Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeni Mahalle çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "Yeni Mahalle",
    "type": "neighborhood"
  },
  {
    "slug": "yesilova-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilova",
    "title": "Yeşilova Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeşilova çiçekçi arayanlar için Küçükçekmece ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Küçükçekmece",
    "neighborhood": "Yeşilova",
    "type": "neighborhood"
  },
  {
    "slug": "ahmet-yesevi-cicekcilik-peyzaj-organizasyon",
    "name": "Ahmet Yesevi",
    "title": "Ahmet Yesevi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ahmet Yesevi çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Ahmet Yesevi",
    "type": "neighborhood"
  },
  {
    "slug": "bahcelievler-pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçelievler",
    "title": "Bahçelievler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bahçelievler çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Bahçelievler",
    "type": "neighborhood"
  },
  {
    "slug": "ballica-cicekcilik-peyzaj-organizasyon",
    "name": "Ballıca",
    "title": "Ballıca Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ballıca çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Ballıca",
    "type": "neighborhood"
  },
  {
    "slug": "bati-cicekcilik-peyzaj-organizasyon",
    "name": "Batı",
    "title": "Batı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Batı çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Batı",
    "type": "neighborhood"
  },
  {
    "slug": "camcesme-cicekcilik-peyzaj-organizasyon",
    "name": "Çamçeşme",
    "title": "Çamçeşme Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çamçeşme çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Çamçeşme",
    "type": "neighborhood"
  },
  {
    "slug": "camlik-cicekcilik-peyzaj-organizasyon",
    "name": "Çamlık",
    "title": "Çamlık Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çamlık çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Çamlık",
    "type": "neighborhood"
  },
  {
    "slug": "cinardere-cicekcilik-peyzaj-organizasyon",
    "name": "Çınardere",
    "title": "Çınardere Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çınardere çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Çınardere",
    "type": "neighborhood"
  },
  {
    "slug": "dogu-cicekcilik-peyzaj-organizasyon",
    "name": "Doğu",
    "title": "Doğu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Doğu çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Doğu",
    "type": "neighborhood"
  },
  {
    "slug": "dumlupinar-pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Dumlupınar",
    "title": "Dumlupınar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Dumlupınar çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Dumlupınar",
    "type": "neighborhood"
  },
  {
    "slug": "emirli-cicekcilik-peyzaj-organizasyon",
    "name": "Emirli",
    "title": "Emirli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Emirli çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Emirli",
    "type": "neighborhood"
  },
  {
    "slug": "ertugrul-gazi-cicekcilik-peyzaj-organizasyon",
    "name": "Ertuğrul Gazi",
    "title": "Ertuğrul Gazi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ertuğrul Gazi çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Ertuğrul Gazi",
    "type": "neighborhood"
  },
  {
    "slug": "esenler-pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Esenler",
    "title": "Esenler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Esenler çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Esenler",
    "type": "neighborhood"
  },
  {
    "slug": "esenyali-cicekcilik-peyzaj-organizasyon",
    "name": "Esenyalı",
    "title": "Esenyalı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Esenyalı çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Esenyalı",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fatih çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "fevzi-cakmak-pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Fevzi Çakmak",
    "title": "Fevzi Çakmak Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fevzi Çakmak çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Fevzi Çakmak",
    "type": "neighborhood"
  },
  {
    "slug": "gocbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Göçbeyli",
    "title": "Göçbeyli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Göçbeyli çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Göçbeyli",
    "type": "neighborhood"
  },
  {
    "slug": "gullu-baglar-cicekcilik-peyzaj-organizasyon",
    "name": "Güllü Bağlar",
    "title": "Güllü Bağlar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Güllü Bağlar çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Güllü Bağlar",
    "type": "neighborhood"
  },
  {
    "slug": "guzelyali-cicekcilik-peyzaj-organizasyon",
    "name": "Güzelyalı",
    "title": "Güzelyalı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Güzelyalı çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Güzelyalı",
    "type": "neighborhood"
  },
  {
    "slug": "harmandere-cicekcilik-peyzaj-organizasyon",
    "name": "Harmandere",
    "title": "Harmandere Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Harmandere çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Harmandere",
    "type": "neighborhood"
  },
  {
    "slug": "kavakpinar-cicekcilik-peyzaj-organizasyon",
    "name": "Kavakpınar",
    "title": "Kavakpınar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kavakpınar çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Kavakpınar",
    "type": "neighborhood"
  },
  {
    "slug": "kaynarca-pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Kaynarca",
    "title": "Kaynarca Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kaynarca çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Kaynarca",
    "type": "neighborhood"
  },
  {
    "slug": "kurna-pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Kurna",
    "title": "Kurna Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kurna çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Kurna",
    "type": "neighborhood"
  },
  {
    "slug": "kurtdogmus-cicekcilik-peyzaj-organizasyon",
    "name": "Kurtdoğmuş",
    "title": "Kurtdoğmuş Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kurtdoğmuş çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Kurtdoğmuş",
    "type": "neighborhood"
  },
  {
    "slug": "kurtkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Kurtköy",
    "title": "Kurtköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kurtköy çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Kurtköy",
    "type": "neighborhood"
  },
  {
    "slug": "orhangazi-cicekcilik-peyzaj-organizasyon",
    "name": "Orhangazi",
    "title": "Orhangazi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Orhangazi çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Orhangazi",
    "type": "neighborhood"
  },
  {
    "slug": "orta-pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Orta",
    "title": "Orta Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Orta çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Orta",
    "type": "neighborhood"
  },
  {
    "slug": "ramazanoglu-cicekcilik-peyzaj-organizasyon",
    "name": "Ramazanoğlu",
    "title": "Ramazanoğlu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ramazanoğlu çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Ramazanoğlu",
    "type": "neighborhood"
  },
  {
    "slug": "sanayi-cicekcilik-peyzaj-organizasyon",
    "name": "Sanayi",
    "title": "Sanayi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sanayi çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Sanayi",
    "type": "neighborhood"
  },
  {
    "slug": "sapan-baglari-cicekcilik-peyzaj-organizasyon",
    "name": "Sapan Bağları",
    "title": "Sapan Bağları Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sapan Bağları çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Sapan Bağları",
    "type": "neighborhood"
  },
  {
    "slug": "suluntepe-cicekcilik-peyzaj-organizasyon",
    "name": "Sülüntepe",
    "title": "Sülüntepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sülüntepe çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Sülüntepe",
    "type": "neighborhood"
  },
  {
    "slug": "seyhli-cicekcilik-peyzaj-organizasyon",
    "name": "Şeyhli",
    "title": "Şeyhli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Şeyhli çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Şeyhli",
    "type": "neighborhood"
  },
  {
    "slug": "velibaba-cicekcilik-peyzaj-organizasyon",
    "name": "Velibaba",
    "title": "Velibaba Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Velibaba çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Velibaba",
    "type": "neighborhood"
  },
  {
    "slug": "yayalar-cicekcilik-peyzaj-organizasyon",
    "name": "Yayalar",
    "title": "Yayalar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yayalar çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Yayalar",
    "type": "neighborhood"
  },
  {
    "slug": "yeni-pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Yeni",
    "title": "Yeni Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeni çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Yeni",
    "type": "neighborhood"
  },
  {
    "slug": "yenisehir-pendik-cicekcilik-peyzaj-organizasyon",
    "name": "Yenişehir",
    "title": "Yenişehir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yenişehir çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Yenişehir",
    "type": "neighborhood"
  },
  {
    "slug": "yesilbaglar-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilbağlar",
    "title": "Yeşilbağlar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeşilbağlar çiçekçi arayanlar için Pendik ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Pendik",
    "neighborhood": "Yeşilbağlar",
    "type": "neighborhood"
  },
  {
    "slug": "adem-yavuz-cicekcilik-peyzaj-organizasyon",
    "name": "Adem Yavuz",
    "title": "Adem Yavuz Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Adem Yavuz çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Adem Yavuz",
    "type": "neighborhood"
  },
  {
    "slug": "altinsehir-cicekcilik-peyzaj-organizasyon",
    "name": "Altınşehir",
    "title": "Altınşehir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Altınşehir çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Altınşehir",
    "type": "neighborhood"
  },
  {
    "slug": "armaganevler-cicekcilik-peyzaj-organizasyon",
    "name": "Armağanevler",
    "title": "Armağanevler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Armağanevler çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Armağanevler",
    "type": "neighborhood"
  },
  {
    "slug": "asagi-dudullu-cicekcilik-peyzaj-organizasyon",
    "name": "Aşağı Dudullu",
    "title": "Aşağı Dudullu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Aşağı Dudullu çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Aşağı Dudullu",
    "type": "neighborhood"
  },
  {
    "slug": "atakent-umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "Atakent",
    "title": "Atakent Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Atakent çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Atakent",
    "type": "neighborhood"
  },
  {
    "slug": "ataturk-umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "Atatürk",
    "title": "Atatürk Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Atatürk çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Atatürk",
    "type": "neighborhood"
  },
  {
    "slug": "cemil-meric-cicekcilik-peyzaj-organizasyon",
    "name": "Cemil Meriç",
    "title": "Cemil Meriç Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cemil Meriç çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Cemil Meriç",
    "type": "neighborhood"
  },
  {
    "slug": "cakmak-cicekcilik-peyzaj-organizasyon",
    "name": "Çakmak",
    "title": "Çakmak Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çakmak çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Çakmak",
    "type": "neighborhood"
  },
  {
    "slug": "camlik-umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "Çamlık",
    "title": "Çamlık Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çamlık çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Çamlık",
    "type": "neighborhood"
  },
  {
    "slug": "dudullu-osb-cicekcilik-peyzaj-organizasyon",
    "name": "Dudullu Osb",
    "title": "Dudullu Osb Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Dudullu Osb çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Dudullu Osb",
    "type": "neighborhood"
  },
  {
    "slug": "dumlupinar-umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "Dumlupınar",
    "title": "Dumlupınar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Dumlupınar çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Dumlupınar",
    "type": "neighborhood"
  },
  {
    "slug": "elmalikent-cicekcilik-peyzaj-organizasyon",
    "name": "Elmalıkent",
    "title": "Elmalıkent Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Elmalıkent çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Elmalıkent",
    "type": "neighborhood"
  },
  {
    "slug": "esenevler-cicekcilik-peyzaj-organizasyon",
    "name": "Esenevler",
    "title": "Esenevler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Esenevler çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Esenevler",
    "type": "neighborhood"
  },
  {
    "slug": "esenkent-cicekcilik-peyzaj-organizasyon",
    "name": "Esenkent",
    "title": "Esenkent Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Esenkent çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Esenkent",
    "type": "neighborhood"
  },
  {
    "slug": "esensehir-cicekcilik-peyzaj-organizasyon",
    "name": "Esenşehir",
    "title": "Esenşehir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Esenşehir çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Esenşehir",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-sultan-mehmet-umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih Sultan Mehmet",
    "title": "Fatih Sultan Mehmet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fatih Sultan Mehmet çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Fatih Sultan Mehmet",
    "type": "neighborhood"
  },
  {
    "slug": "finanskent-cicekcilik-peyzaj-organizasyon",
    "name": "Finanskent",
    "title": "Finanskent Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Finanskent çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Finanskent",
    "type": "neighborhood"
  },
  {
    "slug": "hekimbasi-cicekcilik-peyzaj-organizasyon",
    "name": "Hekimbaşı",
    "title": "Hekimbaşı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hekimbaşı çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Hekimbaşı",
    "type": "neighborhood"
  },
  {
    "slug": "huzur-umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "Huzur",
    "title": "Huzur Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Huzur çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Huzur",
    "type": "neighborhood"
  },
  {
    "slug": "ihlamurkuyu-cicekcilik-peyzaj-organizasyon",
    "name": "Ihlamurkuyu",
    "title": "Ihlamurkuyu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ihlamurkuyu çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Ihlamurkuyu",
    "type": "neighborhood"
  },
  {
    "slug": "inkilap-cicekcilik-peyzaj-organizasyon",
    "name": "İnkılap",
    "title": "İnkılap Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İnkılap çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "İnkılap",
    "type": "neighborhood"
  },
  {
    "slug": "istiklal-umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "İstiklal",
    "title": "İstiklal Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İstiklal çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "İstiklal",
    "type": "neighborhood"
  },
  {
    "slug": "kazim-karabekir-umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "Kazım Karabekir",
    "title": "Kazım Karabekir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kazım Karabekir çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Kazım Karabekir",
    "type": "neighborhood"
  },
  {
    "slug": "madenler-cicekcilik-peyzaj-organizasyon",
    "name": "Madenler",
    "title": "Madenler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Madenler çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Madenler",
    "type": "neighborhood"
  },
  {
    "slug": "mehmet-akif-umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "Mehmet Akif",
    "title": "Mehmet Akif Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mehmet Akif çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Mehmet Akif",
    "type": "neighborhood"
  },
  {
    "slug": "namik-kemal-cicekcilik-peyzaj-organizasyon",
    "name": "Namık Kemal",
    "title": "Namık Kemal Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Namık Kemal çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Namık Kemal",
    "type": "neighborhood"
  },
  {
    "slug": "necip-fazil-cicekcilik-peyzaj-organizasyon",
    "name": "Necip Fazıl",
    "title": "Necip Fazıl Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Necip Fazıl çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Necip Fazıl",
    "type": "neighborhood"
  },
  {
    "slug": "parseller-cicekcilik-peyzaj-organizasyon",
    "name": "Parseller",
    "title": "Parseller Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Parseller çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Parseller",
    "type": "neighborhood"
  },
  {
    "slug": "saray-cicekcilik-peyzaj-organizasyon",
    "name": "Saray",
    "title": "Saray Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Saray çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Saray",
    "type": "neighborhood"
  },
  {
    "slug": "site-cicekcilik-peyzaj-organizasyon",
    "name": "Site",
    "title": "Site Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Site çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Site",
    "type": "neighborhood"
  },
  {
    "slug": "serifali-cicekcilik-peyzaj-organizasyon",
    "name": "Şerifali",
    "title": "Şerifali Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Şerifali çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Şerifali",
    "type": "neighborhood"
  },
  {
    "slug": "tantavi-cicekcilik-peyzaj-organizasyon",
    "name": "Tantavi",
    "title": "Tantavi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Tantavi çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Tantavi",
    "type": "neighborhood"
  },
  {
    "slug": "tatlisu-cicekcilik-peyzaj-organizasyon",
    "name": "Tatlısu",
    "title": "Tatlısu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Tatlısu çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Tatlısu",
    "type": "neighborhood"
  },
  {
    "slug": "tepeustu-cicekcilik-peyzaj-organizasyon",
    "name": "Tepeüstü",
    "title": "Tepeüstü Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Tepeüstü çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Tepeüstü",
    "type": "neighborhood"
  },
  {
    "slug": "topagaci-cicekcilik-peyzaj-organizasyon",
    "name": "Topağacı",
    "title": "Topağacı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Topağacı çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Topağacı",
    "type": "neighborhood"
  },
  {
    "slug": "yamanevler-cicekcilik-peyzaj-organizasyon",
    "name": "Yamanevler",
    "title": "Yamanevler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yamanevler çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Yamanevler",
    "type": "neighborhood"
  },
  {
    "slug": "yenisehir-umraniye-cicekcilik-peyzaj-organizasyon",
    "name": "Yenişehir",
    "title": "Yenişehir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yenişehir çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Yenişehir",
    "type": "neighborhood"
  },
  {
    "slug": "yukari-dudullu-cicekcilik-peyzaj-organizasyon",
    "name": "Yukarı Dudullu",
    "title": "Yukarı Dudullu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yukarı Dudullu çiçekçi arayanlar için Ümraniye ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ümraniye",
    "neighborhood": "Yukarı Dudullu",
    "type": "neighborhood"
  },
  {
    "slug": "altintepsi-cicekcilik-peyzaj-organizasyon",
    "name": "Altıntepsi",
    "title": "Altıntepsi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Altıntepsi çiçekçi arayanlar için Bayrampaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bayrampaşa",
    "neighborhood": "Altıntepsi",
    "type": "neighborhood"
  },
  {
    "slug": "cevatpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Cevatpaşa",
    "title": "Cevatpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cevatpaşa çiçekçi arayanlar için Bayrampaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bayrampaşa",
    "neighborhood": "Cevatpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "ismet-pasa-cicekcilik-peyzaj-organizasyon",
    "name": "İsmet Paşa",
    "title": "İsmet Paşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İsmet Paşa çiçekçi arayanlar için Bayrampaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bayrampaşa",
    "neighborhood": "İsmet Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "kartaltepe-bayrampasa-cicekcilik-peyzaj-organizasyon",
    "name": "Kartaltepe",
    "title": "Kartaltepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kartaltepe çiçekçi arayanlar için Bayrampaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bayrampaşa",
    "neighborhood": "Kartaltepe",
    "type": "neighborhood"
  },
  {
    "slug": "kocatepe-bayrampasa-cicekcilik-peyzaj-organizasyon",
    "name": "Kocatepe",
    "title": "Kocatepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kocatepe çiçekçi arayanlar için Bayrampaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bayrampaşa",
    "neighborhood": "Kocatepe",
    "type": "neighborhood"
  },
  {
    "slug": "muratpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Muratpaşa",
    "title": "Muratpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Muratpaşa çiçekçi arayanlar için Bayrampaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bayrampaşa",
    "neighborhood": "Muratpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "orta-bayrampasa-cicekcilik-peyzaj-organizasyon",
    "name": "Orta",
    "title": "Orta Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Orta çiçekçi arayanlar için Bayrampaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bayrampaşa",
    "neighborhood": "Orta",
    "type": "neighborhood"
  },
  {
    "slug": "terazidere-cicekcilik-peyzaj-organizasyon",
    "name": "Terazidere",
    "title": "Terazidere Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Terazidere çiçekçi arayanlar için Bayrampaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bayrampaşa",
    "neighborhood": "Terazidere",
    "type": "neighborhood"
  },
  {
    "slug": "vatan-cicekcilik-peyzaj-organizasyon",
    "name": "Vatan",
    "title": "Vatan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Vatan çiçekçi arayanlar için Bayrampaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bayrampaşa",
    "neighborhood": "Vatan",
    "type": "neighborhood"
  },
  {
    "slug": "yenidogan-bayrampasa-cicekcilik-peyzaj-organizasyon",
    "name": "Yenidoğan",
    "title": "Yenidoğan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yenidoğan çiçekçi arayanlar için Bayrampaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bayrampaşa",
    "neighborhood": "Yenidoğan",
    "type": "neighborhood"
  },
  {
    "slug": "yildirim-cicekcilik-peyzaj-organizasyon",
    "name": "Yıldırım",
    "title": "Yıldırım Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yıldırım çiçekçi arayanlar için Bayrampaşa ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bayrampaşa",
    "neighborhood": "Yıldırım",
    "type": "neighborhood"
  },
  {
    "slug": "ambarli-cicekcilik-peyzaj-organizasyon",
    "name": "Ambarlı",
    "title": "Ambarlı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ambarlı çiçekçi arayanlar için Avcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Avcılar",
    "neighborhood": "Ambarlı",
    "type": "neighborhood"
  },
  {
    "slug": "cihangir-avcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Cihangir",
    "title": "Cihangir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cihangir çiçekçi arayanlar için Avcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Avcılar",
    "neighborhood": "Cihangir",
    "type": "neighborhood"
  },
  {
    "slug": "denizkoskler-cicekcilik-peyzaj-organizasyon",
    "name": "Denizköşkler",
    "title": "Denizköşkler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Denizköşkler çiçekçi arayanlar için Avcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Avcılar",
    "neighborhood": "Denizköşkler",
    "type": "neighborhood"
  },
  {
    "slug": "firuzkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Firuzköy",
    "title": "Firuzköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Firuzköy çiçekçi arayanlar için Avcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Avcılar",
    "neighborhood": "Firuzköy",
    "type": "neighborhood"
  },
  {
    "slug": "gumuspala-cicekcilik-peyzaj-organizasyon",
    "name": "Gümüşpala",
    "title": "Gümüşpala Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gümüşpala çiçekçi arayanlar için Avcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Avcılar",
    "neighborhood": "Gümüşpala",
    "type": "neighborhood"
  },
  {
    "slug": "merkez-avcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Merkez",
    "title": "Merkez Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Merkez çiçekçi arayanlar için Avcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Avcılar",
    "neighborhood": "Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "mustafa-kemalpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Mustafa Kemalpaşa",
    "title": "Mustafa Kemalpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mustafa Kemalpaşa çiçekçi arayanlar için Avcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Avcılar",
    "neighborhood": "Mustafa Kemalpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "tahtakale-avcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Tahtakale",
    "title": "Tahtakale Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Tahtakale çiçekçi arayanlar için Avcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Avcılar",
    "neighborhood": "Tahtakale",
    "type": "neighborhood"
  },
  {
    "slug": "universite-cicekcilik-peyzaj-organizasyon",
    "name": "Üniversite",
    "title": "Üniversite Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Üniversite çiçekçi arayanlar için Avcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Avcılar",
    "neighborhood": "Üniversite",
    "type": "neighborhood"
  },
  {
    "slug": "yesilkent-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilkent",
    "title": "Yeşilkent Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeşilkent çiçekçi arayanlar için Avcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Avcılar",
    "neighborhood": "Yeşilkent",
    "type": "neighborhood"
  },
  {
    "slug": "100-yil-cicekcilik-peyzaj-organizasyon",
    "name": "100. Yıl",
    "title": "100. Yıl Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "100. Yıl çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "100. Yıl",
    "type": "neighborhood"
  },
  {
    "slug": "15-temmuz-cicekcilik-peyzaj-organizasyon",
    "name": "15 Temmuz",
    "title": "15 Temmuz Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "15 Temmuz çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "15 Temmuz",
    "type": "neighborhood"
  },
  {
    "slug": "baglar-cicekcilik-peyzaj-organizasyon",
    "name": "Bağlar",
    "title": "Bağlar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bağlar çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "Bağlar",
    "type": "neighborhood"
  },
  {
    "slug": "barbaros-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Barbaros",
    "title": "Barbaros Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Barbaros çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "Barbaros",
    "type": "neighborhood"
  },
  {
    "slug": "cinar-cicekcilik-peyzaj-organizasyon",
    "name": "Çınar",
    "title": "Çınar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çınar çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "Çınar",
    "type": "neighborhood"
  },
  {
    "slug": "demirkapi-cicekcilik-peyzaj-organizasyon",
    "name": "Demirkapı",
    "title": "Demirkapı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Demirkapı çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "Demirkapı",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fatih çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "fevzi-cakmak-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Fevzi Çakmak",
    "title": "Fevzi Çakmak Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fevzi Çakmak çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "Fevzi Çakmak",
    "type": "neighborhood"
  },
  {
    "slug": "goztepe-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Göztepe",
    "title": "Göztepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Göztepe çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "Göztepe",
    "type": "neighborhood"
  },
  {
    "slug": "gunesli-cicekcilik-peyzaj-organizasyon",
    "name": "Güneşli",
    "title": "Güneşli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Güneşli çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "Güneşli",
    "type": "neighborhood"
  },
  {
    "slug": "hurriyet-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Hürriyet",
    "title": "Hürriyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hürriyet çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "Hürriyet",
    "type": "neighborhood"
  },
  {
    "slug": "inonu-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "İnönü",
    "title": "İnönü Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İnönü çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "İnönü",
    "type": "neighborhood"
  },
  {
    "slug": "kazim-karabekir-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Kazım Karabekir",
    "title": "Kazım Karabekir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kazım Karabekir çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "Kazım Karabekir",
    "type": "neighborhood"
  },
  {
    "slug": "kemalpasa-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Kemalpaşa",
    "title": "Kemalpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kemalpaşa çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "Kemalpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "kirazli-cicekcilik-peyzaj-organizasyon",
    "name": "Kirazlı",
    "title": "Kirazlı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kirazlı çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "Kirazlı",
    "type": "neighborhood"
  },
  {
    "slug": "mahmutbey-cicekcilik-peyzaj-organizasyon",
    "name": "Mahmutbey",
    "title": "Mahmutbey Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mahmutbey çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "Mahmutbey",
    "type": "neighborhood"
  },
  {
    "slug": "merkez-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Merkez",
    "title": "Merkez Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Merkez çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "sancaktepe-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Sancaktepe",
    "title": "Sancaktepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sancaktepe çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "Sancaktepe",
    "type": "neighborhood"
  },
  {
    "slug": "yavuz-selim-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Yavuz Selim",
    "title": "Yavuz Selim Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yavuz Selim çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "Yavuz Selim",
    "type": "neighborhood"
  },
  {
    "slug": "yenigun-cicekcilik-peyzaj-organizasyon",
    "name": "Yenigün",
    "title": "Yenigün Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yenigün çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "Yenigün",
    "type": "neighborhood"
  },
  {
    "slug": "yenimahalle-bagcilar-cicekcilik-peyzaj-organizasyon",
    "name": "Yenimahalle",
    "title": "Yenimahalle Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yenimahalle çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "Yenimahalle",
    "type": "neighborhood"
  },
  {
    "slug": "yildiztepe-cicekcilik-peyzaj-organizasyon",
    "name": "Yıldıztepe",
    "title": "Yıldıztepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yıldıztepe çiçekçi arayanlar için Bağcılar ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bağcılar",
    "neighborhood": "Yıldıztepe",
    "type": "neighborhood"
  },
  {
    "slug": "bahcelievler-bahcelievler-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçelievler",
    "title": "Bahçelievler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bahçelievler çiçekçi arayanlar için Bahçelievler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bahçelievler",
    "neighborhood": "Bahçelievler",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-bahcelievler-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet çiçekçi arayanlar için Bahçelievler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bahçelievler",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "cobancesme-cicekcilik-peyzaj-organizasyon",
    "name": "Çobançeşme",
    "title": "Çobançeşme Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çobançeşme çiçekçi arayanlar için Bahçelievler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bahçelievler",
    "neighborhood": "Çobançeşme",
    "type": "neighborhood"
  },
  {
    "slug": "fevzi-cakmak-bahcelievler-cicekcilik-peyzaj-organizasyon",
    "name": "Fevzi Çakmak",
    "title": "Fevzi Çakmak Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fevzi Çakmak çiçekçi arayanlar için Bahçelievler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bahçelievler",
    "neighborhood": "Fevzi Çakmak",
    "type": "neighborhood"
  },
  {
    "slug": "hurriyet-bahcelievler-cicekcilik-peyzaj-organizasyon",
    "name": "Hürriyet",
    "title": "Hürriyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hürriyet çiçekçi arayanlar için Bahçelievler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bahçelievler",
    "neighborhood": "Hürriyet",
    "type": "neighborhood"
  },
  {
    "slug": "kocasinan-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Kocasinan Merkez",
    "title": "Kocasinan Merkez Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kocasinan Merkez çiçekçi arayanlar için Bahçelievler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bahçelievler",
    "neighborhood": "Kocasinan Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "siyavuspasa-cicekcilik-peyzaj-organizasyon",
    "name": "Siyavuşpaşa",
    "title": "Siyavuşpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Siyavuşpaşa çiçekçi arayanlar için Bahçelievler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bahçelievler",
    "neighborhood": "Siyavuşpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "soganli-cicekcilik-peyzaj-organizasyon",
    "name": "Soğanlı",
    "title": "Soğanlı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Soğanlı çiçekçi arayanlar için Bahçelievler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bahçelievler",
    "neighborhood": "Soğanlı",
    "type": "neighborhood"
  },
  {
    "slug": "sirinevler-cicekcilik-peyzaj-organizasyon",
    "name": "Şirinevler",
    "title": "Şirinevler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Şirinevler çiçekçi arayanlar için Bahçelievler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bahçelievler",
    "neighborhood": "Şirinevler",
    "type": "neighborhood"
  },
  {
    "slug": "yenibosna-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Yenibosna Merkez",
    "title": "Yenibosna Merkez Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yenibosna Merkez çiçekçi arayanlar için Bahçelievler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bahçelievler",
    "neighborhood": "Yenibosna Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "zafer-cicekcilik-peyzaj-organizasyon",
    "name": "Zafer",
    "title": "Zafer Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Zafer çiçekçi arayanlar için Bahçelievler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Bahçelievler",
    "neighborhood": "Zafer",
    "type": "neighborhood"
  },
  {
    "slug": "abdurrahman-nafiz-gurman-cicekcilik-peyzaj-organizasyon",
    "name": "Abdurrahman Nafiz Gürman",
    "title": "Abdurrahman Nafiz Gürman Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Abdurrahman Nafiz Gürman çiçekçi arayanlar için Güngören ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Güngören",
    "neighborhood": "Abdurrahman Nafiz Gürman",
    "type": "neighborhood"
  },
  {
    "slug": "akincilar-cicekcilik-peyzaj-organizasyon",
    "name": "Akıncılar",
    "title": "Akıncılar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Akıncılar çiçekçi arayanlar için Güngören ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Güngören",
    "neighborhood": "Akıncılar",
    "type": "neighborhood"
  },
  {
    "slug": "gencosman-cicekcilik-peyzaj-organizasyon",
    "name": "Gençosman",
    "title": "Gençosman Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gençosman çiçekçi arayanlar için Güngören ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Güngören",
    "neighborhood": "Gençosman",
    "type": "neighborhood"
  },
  {
    "slug": "gunestepe-cicekcilik-peyzaj-organizasyon",
    "name": "Güneştepe",
    "title": "Güneştepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Güneştepe çiçekçi arayanlar için Güngören ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Güngören",
    "neighborhood": "Güneştepe",
    "type": "neighborhood"
  },
  {
    "slug": "guven-cicekcilik-peyzaj-organizasyon",
    "name": "Güven",
    "title": "Güven Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Güven çiçekçi arayanlar için Güngören ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Güngören",
    "neighborhood": "Güven",
    "type": "neighborhood"
  },
  {
    "slug": "haznedar-cicekcilik-peyzaj-organizasyon",
    "name": "Haznedar",
    "title": "Haznedar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Haznedar çiçekçi arayanlar için Güngören ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Güngören",
    "neighborhood": "Haznedar",
    "type": "neighborhood"
  },
  {
    "slug": "maresal-cakmak-cicekcilik-peyzaj-organizasyon",
    "name": "Mareşal Çakmak",
    "title": "Mareşal Çakmak Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mareşal Çakmak çiçekçi arayanlar için Güngören ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Güngören",
    "neighborhood": "Mareşal Çakmak",
    "type": "neighborhood"
  },
  {
    "slug": "mehmet-nesih-ozmen-cicekcilik-peyzaj-organizasyon",
    "name": "Mehmet Nesih Özmen",
    "title": "Mehmet Nesih Özmen Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mehmet Nesih Özmen çiçekçi arayanlar için Güngören ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Güngören",
    "neighborhood": "Mehmet Nesih Özmen",
    "type": "neighborhood"
  },
  {
    "slug": "merkez-gungoren-cicekcilik-peyzaj-organizasyon",
    "name": "Merkez",
    "title": "Merkez Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Merkez çiçekçi arayanlar için Güngören ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Güngören",
    "neighborhood": "Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "sanayi-gungoren-cicekcilik-peyzaj-organizasyon",
    "name": "Sanayi",
    "title": "Sanayi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sanayi çiçekçi arayanlar için Güngören ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Güngören",
    "neighborhood": "Sanayi",
    "type": "neighborhood"
  },
  {
    "slug": "tozkoparan-cicekcilik-peyzaj-organizasyon",
    "name": "Tozkoparan",
    "title": "Tozkoparan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Tozkoparan çiçekçi arayanlar için Güngören ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Güngören",
    "neighborhood": "Tozkoparan",
    "type": "neighborhood"
  },
  {
    "slug": "altaycesme-cicekcilik-peyzaj-organizasyon",
    "name": "Altayçeşme",
    "title": "Altayçeşme Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Altayçeşme çiçekçi arayanlar için Maltepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Maltepe",
    "neighborhood": "Altayçeşme",
    "type": "neighborhood"
  },
  {
    "slug": "altintepe-cicekcilik-peyzaj-organizasyon",
    "name": "Altıntepe",
    "title": "Altıntepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Altıntepe çiçekçi arayanlar için Maltepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Maltepe",
    "neighborhood": "Altıntepe",
    "type": "neighborhood"
  },
  {
    "slug": "aydinevler-cicekcilik-peyzaj-organizasyon",
    "name": "Aydınevler",
    "title": "Aydınevler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Aydınevler çiçekçi arayanlar için Maltepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Maltepe",
    "neighborhood": "Aydınevler",
    "type": "neighborhood"
  },
  {
    "slug": "baglarbasi-maltepe-cicekcilik-peyzaj-organizasyon",
    "name": "Bağlarbaşı",
    "title": "Bağlarbaşı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bağlarbaşı çiçekçi arayanlar için Maltepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Maltepe",
    "neighborhood": "Bağlarbaşı",
    "type": "neighborhood"
  },
  {
    "slug": "basibuyuk-cicekcilik-peyzaj-organizasyon",
    "name": "Başıbüyük",
    "title": "Başıbüyük Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Başıbüyük çiçekçi arayanlar için Maltepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Maltepe",
    "neighborhood": "Başıbüyük",
    "type": "neighborhood"
  },
  {
    "slug": "buyukbakkalkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Büyükbakkalköy",
    "title": "Büyükbakkalköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Büyükbakkalköy çiçekçi arayanlar için Maltepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Maltepe",
    "neighborhood": "Büyükbakkalköy",
    "type": "neighborhood"
  },
  {
    "slug": "cevizli-maltepe-cicekcilik-peyzaj-organizasyon",
    "name": "Cevizli",
    "title": "Cevizli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cevizli çiçekçi arayanlar için Maltepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Maltepe",
    "neighborhood": "Cevizli",
    "type": "neighborhood"
  },
  {
    "slug": "cinar-maltepe-cicekcilik-peyzaj-organizasyon",
    "name": "Çınar",
    "title": "Çınar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çınar çiçekçi arayanlar için Maltepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Maltepe",
    "neighborhood": "Çınar",
    "type": "neighborhood"
  },
  {
    "slug": "esenkent-maltepe-cicekcilik-peyzaj-organizasyon",
    "name": "Esenkent",
    "title": "Esenkent Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Esenkent çiçekçi arayanlar için Maltepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Maltepe",
    "neighborhood": "Esenkent",
    "type": "neighborhood"
  },
  {
    "slug": "feyzullah-cicekcilik-peyzaj-organizasyon",
    "name": "Feyzullah",
    "title": "Feyzullah Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Feyzullah çiçekçi arayanlar için Maltepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Maltepe",
    "neighborhood": "Feyzullah",
    "type": "neighborhood"
  },
  {
    "slug": "findikli-cicekcilik-peyzaj-organizasyon",
    "name": "Fındıklı",
    "title": "Fındıklı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fındıklı çiçekçi arayanlar için Maltepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Maltepe",
    "neighborhood": "Fındıklı",
    "type": "neighborhood"
  },
  {
    "slug": "girne-cicekcilik-peyzaj-organizasyon",
    "name": "Girne",
    "title": "Girne Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Girne çiçekçi arayanlar için Maltepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Maltepe",
    "neighborhood": "Girne",
    "type": "neighborhood"
  },
  {
    "slug": "gulensu-cicekcilik-peyzaj-organizasyon",
    "name": "Gülensu",
    "title": "Gülensu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gülensu çiçekçi arayanlar için Maltepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Maltepe",
    "neighborhood": "Gülensu",
    "type": "neighborhood"
  },
  {
    "slug": "gulsuyu-cicekcilik-peyzaj-organizasyon",
    "name": "Gülsuyu",
    "title": "Gülsuyu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gülsuyu çiçekçi arayanlar için Maltepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Maltepe",
    "neighborhood": "Gülsuyu",
    "type": "neighborhood"
  },
  {
    "slug": "idealtepe-cicekcilik-peyzaj-organizasyon",
    "name": "İdealtepe",
    "title": "İdealtepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İdealtepe çiçekçi arayanlar için Maltepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Maltepe",
    "neighborhood": "İdealtepe",
    "type": "neighborhood"
  },
  {
    "slug": "kucukyali-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Küçükyalı Merkez",
    "title": "Küçükyalı Merkez Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Küçükyalı Merkez çiçekçi arayanlar için Maltepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Maltepe",
    "neighborhood": "Küçükyalı Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "yali-maltepe-cicekcilik-peyzaj-organizasyon",
    "name": "Yalı",
    "title": "Yalı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yalı çiçekçi arayanlar için Maltepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Maltepe",
    "neighborhood": "Yalı",
    "type": "neighborhood"
  },
  {
    "slug": "zumrutevler-cicekcilik-peyzaj-organizasyon",
    "name": "Zümrütevler",
    "title": "Zümrütevler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Zümrütevler çiçekçi arayanlar için Maltepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Maltepe",
    "neighborhood": "Zümrütevler",
    "type": "neighborhood"
  },
  {
    "slug": "abdurrahmangazi-cicekcilik-peyzaj-organizasyon",
    "name": "Abdurrahmangazi",
    "title": "Abdurrahmangazi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Abdurrahmangazi çiçekçi arayanlar için Sultanbeyli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultanbeyli",
    "neighborhood": "Abdurrahmangazi",
    "type": "neighborhood"
  },
  {
    "slug": "adil-cicekcilik-peyzaj-organizasyon",
    "name": "Adil",
    "title": "Adil Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Adil çiçekçi arayanlar için Sultanbeyli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultanbeyli",
    "neighborhood": "Adil",
    "type": "neighborhood"
  },
  {
    "slug": "ahmet-yesevi-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Ahmet Yesevi",
    "title": "Ahmet Yesevi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ahmet Yesevi çiçekçi arayanlar için Sultanbeyli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultanbeyli",
    "neighborhood": "Ahmet Yesevi",
    "type": "neighborhood"
  },
  {
    "slug": "aksemsettin-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Akşemsettin",
    "title": "Akşemsettin Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Akşemsettin çiçekçi arayanlar için Sultanbeyli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultanbeyli",
    "neighborhood": "Akşemsettin",
    "type": "neighborhood"
  },
  {
    "slug": "battalgazi-cicekcilik-peyzaj-organizasyon",
    "name": "Battalgazi",
    "title": "Battalgazi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Battalgazi çiçekçi arayanlar için Sultanbeyli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultanbeyli",
    "neighborhood": "Battalgazi",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fatih çiçekçi arayanlar için Sultanbeyli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultanbeyli",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "hamidiye-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Hamidiye",
    "title": "Hamidiye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hamidiye çiçekçi arayanlar için Sultanbeyli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultanbeyli",
    "neighborhood": "Hamidiye",
    "type": "neighborhood"
  },
  {
    "slug": "hasanpasa-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Hasanpaşa",
    "title": "Hasanpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hasanpaşa çiçekçi arayanlar için Sultanbeyli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultanbeyli",
    "neighborhood": "Hasanpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "mecidiye-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Mecidiye",
    "title": "Mecidiye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mecidiye çiçekçi arayanlar için Sultanbeyli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultanbeyli",
    "neighborhood": "Mecidiye",
    "type": "neighborhood"
  },
  {
    "slug": "mehmet-akif-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Mehmet Akif",
    "title": "Mehmet Akif Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mehmet Akif çiçekçi arayanlar için Sultanbeyli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultanbeyli",
    "neighborhood": "Mehmet Akif",
    "type": "neighborhood"
  },
  {
    "slug": "mimar-sinan-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Mimar Sinan",
    "title": "Mimar Sinan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mimar Sinan çiçekçi arayanlar için Sultanbeyli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultanbeyli",
    "neighborhood": "Mimar Sinan",
    "type": "neighborhood"
  },
  {
    "slug": "necip-fazil-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Necip Fazıl",
    "title": "Necip Fazıl Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Necip Fazıl çiçekçi arayanlar için Sultanbeyli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultanbeyli",
    "neighborhood": "Necip Fazıl",
    "type": "neighborhood"
  },
  {
    "slug": "orhangazi-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Orhangazi",
    "title": "Orhangazi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Orhangazi çiçekçi arayanlar için Sultanbeyli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultanbeyli",
    "neighborhood": "Orhangazi",
    "type": "neighborhood"
  },
  {
    "slug": "turgut-reis-cicekcilik-peyzaj-organizasyon",
    "name": "Turgut Reis",
    "title": "Turgut Reis Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Turgut Reis çiçekçi arayanlar için Sultanbeyli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultanbeyli",
    "neighborhood": "Turgut Reis",
    "type": "neighborhood"
  },
  {
    "slug": "yavuz-selim-sultanbeyli-cicekcilik-peyzaj-organizasyon",
    "name": "Yavuz Selim",
    "title": "Yavuz Selim Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yavuz Selim çiçekçi arayanlar için Sultanbeyli ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultanbeyli",
    "neighborhood": "Yavuz Selim",
    "type": "neighborhood"
  },
  {
    "slug": "akfirat-cicekcilik-peyzaj-organizasyon",
    "name": "Akfırat",
    "title": "Akfırat Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Akfırat çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "Akfırat",
    "type": "neighborhood"
  },
  {
    "slug": "anadolu-cicekcilik-peyzaj-organizasyon",
    "name": "Anadolu",
    "title": "Anadolu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Anadolu çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "Anadolu",
    "type": "neighborhood"
  },
  {
    "slug": "aydinli-birlik-osb-cicekcilik-peyzaj-organizasyon",
    "name": "Aydınlı - Birlik Osb",
    "title": "Aydınlı - Birlik Osb Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Aydınlı - Birlik Osb çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "Aydınlı - Birlik Osb",
    "type": "neighborhood"
  },
  {
    "slug": "aydinli-istanbul-ayosb-cicekcilik-peyzaj-organizasyon",
    "name": "Aydınlı - İstanbul Ayosb",
    "title": "Aydınlı - İstanbul Ayosb Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Aydınlı - İstanbul Ayosb çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "Aydınlı - İstanbul Ayosb",
    "type": "neighborhood"
  },
  {
    "slug": "aydinli-cicekcilik-peyzaj-organizasyon",
    "name": "Aydınlı",
    "title": "Aydınlı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Aydınlı çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "Aydınlı",
    "type": "neighborhood"
  },
  {
    "slug": "aydinli-sb-cicekcilik-peyzaj-organizasyon",
    "name": "Aydınlı Sb",
    "title": "Aydınlı Sb Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Aydınlı Sb çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "Aydınlı Sb",
    "type": "neighborhood"
  },
  {
    "slug": "aydinli-kosb-cicekcilik-peyzaj-organizasyon",
    "name": "Aydınlı-kosb",
    "title": "Aydınlı-kosb Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Aydınlı-kosb çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "Aydınlı-kosb",
    "type": "neighborhood"
  },
  {
    "slug": "aydintepe-cicekcilik-peyzaj-organizasyon",
    "name": "Aydıntepe",
    "title": "Aydıntepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Aydıntepe çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "Aydıntepe",
    "type": "neighborhood"
  },
  {
    "slug": "cami-cicekcilik-peyzaj-organizasyon",
    "name": "Cami",
    "title": "Cami Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cami çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "Cami",
    "type": "neighborhood"
  },
  {
    "slug": "deri-osb-cicekcilik-peyzaj-organizasyon",
    "name": "Deri Osb",
    "title": "Deri Osb Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Deri Osb çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "Deri Osb",
    "type": "neighborhood"
  },
  {
    "slug": "evliya-celebi-tuzla-cicekcilik-peyzaj-organizasyon",
    "name": "Evliya Çelebi",
    "title": "Evliya Çelebi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Evliya Çelebi çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "Evliya Çelebi",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-tuzla-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fatih çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "icmeler-cicekcilik-peyzaj-organizasyon",
    "name": "İçmeler",
    "title": "İçmeler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İçmeler çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "İçmeler",
    "type": "neighborhood"
  },
  {
    "slug": "istasyon-tuzla-cicekcilik-peyzaj-organizasyon",
    "name": "İstasyon",
    "title": "İstasyon Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İstasyon çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "İstasyon",
    "type": "neighborhood"
  },
  {
    "slug": "mescit-cicekcilik-peyzaj-organizasyon",
    "name": "Mescit",
    "title": "Mescit Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mescit çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "Mescit",
    "type": "neighborhood"
  },
  {
    "slug": "mimar-sinan-tuzla-cicekcilik-peyzaj-organizasyon",
    "name": "Mimar Sinan",
    "title": "Mimar Sinan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mimar Sinan çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "Mimar Sinan",
    "type": "neighborhood"
  },
  {
    "slug": "orhanli-cicekcilik-peyzaj-organizasyon",
    "name": "Orhanlı",
    "title": "Orhanlı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Orhanlı çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "Orhanlı",
    "type": "neighborhood"
  },
  {
    "slug": "orta-tuzla-cicekcilik-peyzaj-organizasyon",
    "name": "Orta",
    "title": "Orta Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Orta çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "Orta",
    "type": "neighborhood"
  },
  {
    "slug": "postane-cicekcilik-peyzaj-organizasyon",
    "name": "Postane",
    "title": "Postane Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Postane çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "Postane",
    "type": "neighborhood"
  },
  {
    "slug": "sifa-cicekcilik-peyzaj-organizasyon",
    "name": "Şifa",
    "title": "Şifa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Şifa çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "Şifa",
    "type": "neighborhood"
  },
  {
    "slug": "tepeoren-itosb-cicekcilik-peyzaj-organizasyon",
    "name": "Tepeoren İtosb",
    "title": "Tepeoren İtosb Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Tepeoren İtosb çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "Tepeoren İtosb",
    "type": "neighborhood"
  },
  {
    "slug": "tepeoren-cicekcilik-peyzaj-organizasyon",
    "name": "Tepeören",
    "title": "Tepeören Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Tepeören çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "Tepeören",
    "type": "neighborhood"
  },
  {
    "slug": "yayla-tuzla-cicekcilik-peyzaj-organizasyon",
    "name": "Yayla",
    "title": "Yayla Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yayla çiçekçi arayanlar için Tuzla ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Tuzla",
    "neighborhood": "Yayla",
    "type": "neighborhood"
  },
  {
    "slug": "15-temmuz-esenler-cicekcilik-peyzaj-organizasyon",
    "name": "15 Temmuz",
    "title": "15 Temmuz Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "15 Temmuz çiçekçi arayanlar için Esenler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenler",
    "neighborhood": "15 Temmuz",
    "type": "neighborhood"
  },
  {
    "slug": "birlik-cicekcilik-peyzaj-organizasyon",
    "name": "Birlik",
    "title": "Birlik Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Birlik çiçekçi arayanlar için Esenler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenler",
    "neighborhood": "Birlik",
    "type": "neighborhood"
  },
  {
    "slug": "cifte-havuzlar-cicekcilik-peyzaj-organizasyon",
    "name": "Çifte Havuzlar",
    "title": "Çifte Havuzlar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çifte Havuzlar çiçekçi arayanlar için Esenler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenler",
    "neighborhood": "Çifte Havuzlar",
    "type": "neighborhood"
  },
  {
    "slug": "davutpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Davutpaşa",
    "title": "Davutpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Davutpaşa çiçekçi arayanlar için Esenler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenler",
    "neighborhood": "Davutpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-esenler-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fatih çiçekçi arayanlar için Esenler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenler",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "fevzi-cakmak-esenler-cicekcilik-peyzaj-organizasyon",
    "name": "Fevzi Çakmak",
    "title": "Fevzi Çakmak Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fevzi Çakmak çiçekçi arayanlar için Esenler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenler",
    "neighborhood": "Fevzi Çakmak",
    "type": "neighborhood"
  },
  {
    "slug": "havaalani-cicekcilik-peyzaj-organizasyon",
    "name": "Havaalanı",
    "title": "Havaalanı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Havaalanı çiçekçi arayanlar için Esenler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenler",
    "neighborhood": "Havaalanı",
    "type": "neighborhood"
  },
  {
    "slug": "kazim-karabekir-esenler-cicekcilik-peyzaj-organizasyon",
    "name": "Kazım Karabekir",
    "title": "Kazım Karabekir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kazım Karabekir çiçekçi arayanlar için Esenler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenler",
    "neighborhood": "Kazım Karabekir",
    "type": "neighborhood"
  },
  {
    "slug": "kemer-cicekcilik-peyzaj-organizasyon",
    "name": "Kemer",
    "title": "Kemer Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kemer çiçekçi arayanlar için Esenler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenler",
    "neighborhood": "Kemer",
    "type": "neighborhood"
  },
  {
    "slug": "menderes-cicekcilik-peyzaj-organizasyon",
    "name": "Menderes",
    "title": "Menderes Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Menderes çiçekçi arayanlar için Esenler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenler",
    "neighborhood": "Menderes",
    "type": "neighborhood"
  },
  {
    "slug": "mimar-sinan-esenler-cicekcilik-peyzaj-organizasyon",
    "name": "Mimar Sinan",
    "title": "Mimar Sinan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mimar Sinan çiçekçi arayanlar için Esenler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenler",
    "neighborhood": "Mimar Sinan",
    "type": "neighborhood"
  },
  {
    "slug": "namik-kemal-esenler-cicekcilik-peyzaj-organizasyon",
    "name": "Namık Kemal",
    "title": "Namık Kemal Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Namık Kemal çiçekçi arayanlar için Esenler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenler",
    "neighborhood": "Namık Kemal",
    "type": "neighborhood"
  },
  {
    "slug": "nine-hatun-cicekcilik-peyzaj-organizasyon",
    "name": "Nine Hatun",
    "title": "Nine Hatun Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Nine Hatun çiçekçi arayanlar için Esenler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenler",
    "neighborhood": "Nine Hatun",
    "type": "neighborhood"
  },
  {
    "slug": "orucreis-cicekcilik-peyzaj-organizasyon",
    "name": "Oruçreis",
    "title": "Oruçreis Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Oruçreis çiçekçi arayanlar için Esenler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenler",
    "neighborhood": "Oruçreis",
    "type": "neighborhood"
  },
  {
    "slug": "tuna-cicekcilik-peyzaj-organizasyon",
    "name": "Tuna",
    "title": "Tuna Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Tuna çiçekçi arayanlar için Esenler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenler",
    "neighborhood": "Tuna",
    "type": "neighborhood"
  },
  {
    "slug": "turgut-reis-esenler-cicekcilik-peyzaj-organizasyon",
    "name": "Turgut Reis",
    "title": "Turgut Reis Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Turgut Reis çiçekçi arayanlar için Esenler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenler",
    "neighborhood": "Turgut Reis",
    "type": "neighborhood"
  },
  {
    "slug": "yavuz-selim-esenler-cicekcilik-peyzaj-organizasyon",
    "name": "Yavuz Selim",
    "title": "Yavuz Selim Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yavuz Selim çiçekçi arayanlar için Esenler ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenler",
    "neighborhood": "Yavuz Selim",
    "type": "neighborhood"
  },
  {
    "slug": "adnan-menderes-cicekcilik-peyzaj-organizasyon",
    "name": "Adnan Menderes",
    "title": "Adnan Menderes Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Adnan Menderes çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Adnan Menderes",
    "type": "neighborhood"
  },
  {
    "slug": "anadolu-arnavutkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Anadolu",
    "title": "Anadolu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Anadolu çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Anadolu",
    "type": "neighborhood"
  },
  {
    "slug": "arnavutkoy-merkez-cicekcilik-peyzaj-organizasyon",
    "name": "Arnavutköy Merkez",
    "title": "Arnavutköy Merkez Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Arnavutköy Merkez çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Arnavutköy Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "ataturk-arnavutkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Atatürk",
    "title": "Atatürk Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Atatürk çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Atatürk",
    "type": "neighborhood"
  },
  {
    "slug": "baklali-cicekcilik-peyzaj-organizasyon",
    "name": "Baklalı",
    "title": "Baklalı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Baklalı çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Baklalı",
    "type": "neighborhood"
  },
  {
    "slug": "balaban-arnavutkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Balaban",
    "title": "Balaban Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Balaban çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Balaban",
    "type": "neighborhood"
  },
  {
    "slug": "bogazkoy-istiklal-cicekcilik-peyzaj-organizasyon",
    "name": "Boğazköy İstiklal",
    "title": "Boğazköy İstiklal Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Boğazköy İstiklal çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Boğazköy İstiklal",
    "type": "neighborhood"
  },
  {
    "slug": "bolluca-cicekcilik-peyzaj-organizasyon",
    "name": "Bolluca",
    "title": "Bolluca Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bolluca çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Bolluca",
    "type": "neighborhood"
  },
  {
    "slug": "boyalik-cicekcilik-peyzaj-organizasyon",
    "name": "Boyalık",
    "title": "Boyalık Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Boyalık çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Boyalık",
    "type": "neighborhood"
  },
  {
    "slug": "cilingir-cicekcilik-peyzaj-organizasyon",
    "name": "Çilingir",
    "title": "Çilingir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çilingir çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Çilingir",
    "type": "neighborhood"
  },
  {
    "slug": "deliklikaya-cicekcilik-peyzaj-organizasyon",
    "name": "Deliklikaya",
    "title": "Deliklikaya Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Deliklikaya çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Deliklikaya",
    "type": "neighborhood"
  },
  {
    "slug": "dursunkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Dursunköy",
    "title": "Dursunköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Dursunköy çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Dursunköy",
    "type": "neighborhood"
  },
  {
    "slug": "durusu-cicekcilik-peyzaj-organizasyon",
    "name": "Durusu",
    "title": "Durusu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Durusu çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Durusu",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-arnavutkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fatih çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "hacimasli-cicekcilik-peyzaj-organizasyon",
    "name": "Hacımaşlı",
    "title": "Hacımaşlı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hacımaşlı çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Hacımaşlı",
    "type": "neighborhood"
  },
  {
    "slug": "hadimkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Hadımköy",
    "title": "Hadımköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hadımköy çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Hadımköy",
    "type": "neighborhood"
  },
  {
    "slug": "haracci-cicekcilik-peyzaj-organizasyon",
    "name": "Haraççı",
    "title": "Haraççı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Haraççı çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Haraççı",
    "type": "neighborhood"
  },
  {
    "slug": "hastane-cicekcilik-peyzaj-organizasyon",
    "name": "Hastane",
    "title": "Hastane Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hastane çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Hastane",
    "type": "neighborhood"
  },
  {
    "slug": "hicret-cicekcilik-peyzaj-organizasyon",
    "name": "Hicret",
    "title": "Hicret Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hicret çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Hicret",
    "type": "neighborhood"
  },
  {
    "slug": "imrahor-cicekcilik-peyzaj-organizasyon",
    "name": "İmrahor",
    "title": "İmrahor Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İmrahor çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "İmrahor",
    "type": "neighborhood"
  },
  {
    "slug": "islambey-arnavutkoy-cicekcilik-peyzaj-organizasyon",
    "name": "İslambey",
    "title": "İslambey Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İslambey çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "İslambey",
    "type": "neighborhood"
  },
  {
    "slug": "karaburun-cicekcilik-peyzaj-organizasyon",
    "name": "Karaburun",
    "title": "Karaburun Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Karaburun çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Karaburun",
    "type": "neighborhood"
  },
  {
    "slug": "karlibayir-cicekcilik-peyzaj-organizasyon",
    "name": "Karlıbayır",
    "title": "Karlıbayır Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Karlıbayır çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Karlıbayır",
    "type": "neighborhood"
  },
  {
    "slug": "maresal-fevzi-cakmak-cicekcilik-peyzaj-organizasyon",
    "name": "Mareşal Fevzi Çakmak",
    "title": "Mareşal Fevzi Çakmak Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mareşal Fevzi Çakmak çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Mareşal Fevzi Çakmak",
    "type": "neighborhood"
  },
  {
    "slug": "mavigol-cicekcilik-peyzaj-organizasyon",
    "name": "Mavigöl",
    "title": "Mavigöl Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mavigöl çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Mavigöl",
    "type": "neighborhood"
  },
  {
    "slug": "mehmet-akif-ersoy-arnavutkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Mehmet Akif Ersoy",
    "title": "Mehmet Akif Ersoy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mehmet Akif Ersoy çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Mehmet Akif Ersoy",
    "type": "neighborhood"
  },
  {
    "slug": "mustafa-kemal-pasa-cicekcilik-peyzaj-organizasyon",
    "name": "Mustafa Kemal Paşa",
    "title": "Mustafa Kemal Paşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mustafa Kemal Paşa çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Mustafa Kemal Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "nenehatun-cicekcilik-peyzaj-organizasyon",
    "name": "Nenehatun",
    "title": "Nenehatun Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Nenehatun çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Nenehatun",
    "type": "neighborhood"
  },
  {
    "slug": "omerli-cicekcilik-peyzaj-organizasyon",
    "name": "Ömerli",
    "title": "Ömerli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ömerli çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Ömerli",
    "type": "neighborhood"
  },
  {
    "slug": "sazlibosna-cicekcilik-peyzaj-organizasyon",
    "name": "Sazlıbosna",
    "title": "Sazlıbosna Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sazlıbosna çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Sazlıbosna",
    "type": "neighborhood"
  },
  {
    "slug": "tasoluk-cicekcilik-peyzaj-organizasyon",
    "name": "Taşoluk",
    "title": "Taşoluk Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Taşoluk çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Taşoluk",
    "type": "neighborhood"
  },
  {
    "slug": "tayakadin-cicekcilik-peyzaj-organizasyon",
    "name": "Tayakadın",
    "title": "Tayakadın Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Tayakadın çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Tayakadın",
    "type": "neighborhood"
  },
  {
    "slug": "terkos-cicekcilik-peyzaj-organizasyon",
    "name": "Terkos",
    "title": "Terkos Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Terkos çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Terkos",
    "type": "neighborhood"
  },
  {
    "slug": "yassioren-cicekcilik-peyzaj-organizasyon",
    "name": "Yassıören",
    "title": "Yassıören Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yassıören çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Yassıören",
    "type": "neighborhood"
  },
  {
    "slug": "yavuz-selim-arnavutkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Yavuz Selim",
    "title": "Yavuz Selim Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yavuz Selim çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Yavuz Selim",
    "type": "neighborhood"
  },
  {
    "slug": "yenikoy-arnavutkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Yeniköy",
    "title": "Yeniköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeniköy çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Yeniköy",
    "type": "neighborhood"
  },
  {
    "slug": "yesilbayir-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilbayır",
    "title": "Yeşilbayır Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeşilbayır çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Yeşilbayır",
    "type": "neighborhood"
  },
  {
    "slug": "yunus-emre-cicekcilik-peyzaj-organizasyon",
    "name": "Yunus Emre",
    "title": "Yunus Emre Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yunus Emre çiçekçi arayanlar için Arnavutköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Arnavutköy",
    "neighborhood": "Yunus Emre",
    "type": "neighborhood"
  },
  {
    "slug": "asikveysel-cicekcilik-peyzaj-organizasyon",
    "name": "Aşıkveysel",
    "title": "Aşıkveysel Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Aşıkveysel çiçekçi arayanlar için Ataşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ataşehir",
    "neighborhood": "Aşıkveysel",
    "type": "neighborhood"
  },
  {
    "slug": "ataturk-atasehir-cicekcilik-peyzaj-organizasyon",
    "name": "Atatürk",
    "title": "Atatürk Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Atatürk çiçekçi arayanlar için Ataşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ataşehir",
    "neighborhood": "Atatürk",
    "type": "neighborhood"
  },
  {
    "slug": "barbaros-atasehir-cicekcilik-peyzaj-organizasyon",
    "name": "Barbaros",
    "title": "Barbaros Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Barbaros çiçekçi arayanlar için Ataşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ataşehir",
    "neighborhood": "Barbaros",
    "type": "neighborhood"
  },
  {
    "slug": "esatpasa-cicekcilik-peyzaj-organizasyon",
    "name": "Esatpaşa",
    "title": "Esatpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Esatpaşa çiçekçi arayanlar için Ataşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ataşehir",
    "neighborhood": "Esatpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "ferhatpasa-atasehir-cicekcilik-peyzaj-organizasyon",
    "name": "Ferhatpaşa",
    "title": "Ferhatpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ferhatpaşa çiçekçi arayanlar için Ataşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ataşehir",
    "neighborhood": "Ferhatpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "fetih-cicekcilik-peyzaj-organizasyon",
    "name": "Fetih",
    "title": "Fetih Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fetih çiçekçi arayanlar için Ataşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ataşehir",
    "neighborhood": "Fetih",
    "type": "neighborhood"
  },
  {
    "slug": "icerenkoy-cicekcilik-peyzaj-organizasyon",
    "name": "İçerenköy",
    "title": "İçerenköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İçerenköy çiçekçi arayanlar için Ataşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ataşehir",
    "neighborhood": "İçerenköy",
    "type": "neighborhood"
  },
  {
    "slug": "inonu-atasehir-cicekcilik-peyzaj-organizasyon",
    "name": "İnönü",
    "title": "İnönü Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İnönü çiçekçi arayanlar için Ataşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ataşehir",
    "neighborhood": "İnönü",
    "type": "neighborhood"
  },
  {
    "slug": "kayisdagi-cicekcilik-peyzaj-organizasyon",
    "name": "Kayışdağı",
    "title": "Kayışdağı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kayışdağı çiçekçi arayanlar için Ataşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ataşehir",
    "neighborhood": "Kayışdağı",
    "type": "neighborhood"
  },
  {
    "slug": "kucukbakkalkoy-cicekcilik-peyzaj-organizasyon",
    "name": "Küçükbakkalköy",
    "title": "Küçükbakkalköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Küçükbakkalköy çiçekçi arayanlar için Ataşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ataşehir",
    "neighborhood": "Küçükbakkalköy",
    "type": "neighborhood"
  },
  {
    "slug": "mevlana-atasehir-cicekcilik-peyzaj-organizasyon",
    "name": "Mevlana",
    "title": "Mevlana Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mevlana çiçekçi arayanlar için Ataşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ataşehir",
    "neighborhood": "Mevlana",
    "type": "neighborhood"
  },
  {
    "slug": "mimar-sinan-atasehir-cicekcilik-peyzaj-organizasyon",
    "name": "Mimar Sinan",
    "title": "Mimar Sinan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mimar Sinan çiçekçi arayanlar için Ataşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ataşehir",
    "neighborhood": "Mimar Sinan",
    "type": "neighborhood"
  },
  {
    "slug": "mustafa-kemal-cicekcilik-peyzaj-organizasyon",
    "name": "Mustafa Kemal",
    "title": "Mustafa Kemal Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mustafa Kemal çiçekçi arayanlar için Ataşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ataşehir",
    "neighborhood": "Mustafa Kemal",
    "type": "neighborhood"
  },
  {
    "slug": "ornek-cicekcilik-peyzaj-organizasyon",
    "name": "Örnek",
    "title": "Örnek Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Örnek çiçekçi arayanlar için Ataşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ataşehir",
    "neighborhood": "Örnek",
    "type": "neighborhood"
  },
  {
    "slug": "yeni-camlica-cicekcilik-peyzaj-organizasyon",
    "name": "Yeni Çamlıca",
    "title": "Yeni Çamlıca Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeni Çamlıca çiçekçi arayanlar için Ataşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ataşehir",
    "neighborhood": "Yeni Çamlıca",
    "type": "neighborhood"
  },
  {
    "slug": "yenisahra-cicekcilik-peyzaj-organizasyon",
    "name": "Yenisahra",
    "title": "Yenisahra Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yenisahra çiçekçi arayanlar için Ataşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ataşehir",
    "neighborhood": "Yenisahra",
    "type": "neighborhood"
  },
  {
    "slug": "yenisehir-atasehir-cicekcilik-peyzaj-organizasyon",
    "name": "Yenişehir",
    "title": "Yenişehir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yenişehir çiçekçi arayanlar için Ataşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Ataşehir",
    "neighborhood": "Yenişehir",
    "type": "neighborhood"
  },
  {
    "slug": "altinsehir-basaksehir-cicekcilik-peyzaj-organizasyon",
    "name": "Altınşehir",
    "title": "Altınşehir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Altınşehir çiçekçi arayanlar için Başakşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Başakşehir",
    "neighborhood": "Altınşehir",
    "type": "neighborhood"
  },
  {
    "slug": "bahcesehir-1-kisim-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçeşehir 1. Kısım",
    "title": "Bahçeşehir 1. Kısım Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bahçeşehir 1. Kısım çiçekçi arayanlar için Başakşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Başakşehir",
    "neighborhood": "Bahçeşehir 1. Kısım",
    "type": "neighborhood"
  },
  {
    "slug": "bahcesehir-2-kisim-cicekcilik-peyzaj-organizasyon",
    "name": "Bahçeşehir 2. Kısım",
    "title": "Bahçeşehir 2. Kısım Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bahçeşehir 2. Kısım çiçekçi arayanlar için Başakşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Başakşehir",
    "neighborhood": "Bahçeşehir 2. Kısım",
    "type": "neighborhood"
  },
  {
    "slug": "basak-basaksehir-cicekcilik-peyzaj-organizasyon",
    "name": "Başak",
    "title": "Başak Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Başak çiçekçi arayanlar için Başakşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Başakşehir",
    "neighborhood": "Başak",
    "type": "neighborhood"
  },
  {
    "slug": "basaksehir-basaksehir-cicekcilik-peyzaj-organizasyon",
    "name": "Başakşehir",
    "title": "Başakşehir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Başakşehir çiçekçi arayanlar için Başakşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Başakşehir",
    "neighborhood": "Başakşehir",
    "type": "neighborhood"
  },
  {
    "slug": "guvercintepe-cicekcilik-peyzaj-organizasyon",
    "name": "Güvercintepe",
    "title": "Güvercintepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Güvercintepe çiçekçi arayanlar için Başakşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Başakşehir",
    "neighborhood": "Güvercintepe",
    "type": "neighborhood"
  },
  {
    "slug": "ikitelli-osb-cicekcilik-peyzaj-organizasyon",
    "name": "İkitelli Osb",
    "title": "İkitelli Osb Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İkitelli Osb çiçekçi arayanlar için Başakşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Başakşehir",
    "neighborhood": "İkitelli Osb",
    "type": "neighborhood"
  },
  {
    "slug": "kayabasi-cicekcilik-peyzaj-organizasyon",
    "name": "Kayabaşı",
    "title": "Kayabaşı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kayabaşı çiçekçi arayanlar için Başakşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Başakşehir",
    "neighborhood": "Kayabaşı",
    "type": "neighborhood"
  },
  {
    "slug": "sahintepe-cicekcilik-peyzaj-organizasyon",
    "name": "Şahintepe",
    "title": "Şahintepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Şahintepe çiçekçi arayanlar için Başakşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Başakşehir",
    "neighborhood": "Şahintepe",
    "type": "neighborhood"
  },
  {
    "slug": "samlar-cicekcilik-peyzaj-organizasyon",
    "name": "Şamlar",
    "title": "Şamlar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Şamlar çiçekçi arayanlar için Başakşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Başakşehir",
    "neighborhood": "Şamlar",
    "type": "neighborhood"
  },
  {
    "slug": "ziya-gokalp-cicekcilik-peyzaj-organizasyon",
    "name": "Ziya Gökalp",
    "title": "Ziya Gökalp Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ziya Gökalp çiçekçi arayanlar için Başakşehir ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Başakşehir",
    "neighborhood": "Ziya Gökalp",
    "type": "neighborhood"
  },
  {
    "slug": "adnan-kahveci-cicekcilik-peyzaj-organizasyon",
    "name": "Adnan Kahveci",
    "title": "Adnan Kahveci Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Adnan Kahveci çiçekçi arayanlar için Beylikdüzü ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beylikdüzü",
    "neighborhood": "Adnan Kahveci",
    "type": "neighborhood"
  },
  {
    "slug": "baris-cicekcilik-peyzaj-organizasyon",
    "name": "Barış",
    "title": "Barış Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Barış çiçekçi arayanlar için Beylikdüzü ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beylikdüzü",
    "neighborhood": "Barış",
    "type": "neighborhood"
  },
  {
    "slug": "beylikduzuosb-cicekcilik-peyzaj-organizasyon",
    "name": "Beylikdüzüosb",
    "title": "Beylikdüzüosb Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Beylikdüzüosb çiçekçi arayanlar için Beylikdüzü ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beylikdüzü",
    "neighborhood": "Beylikdüzüosb",
    "type": "neighborhood"
  },
  {
    "slug": "buyuksehir-cicekcilik-peyzaj-organizasyon",
    "name": "Büyükşehir",
    "title": "Büyükşehir Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Büyükşehir çiçekçi arayanlar için Beylikdüzü ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beylikdüzü",
    "neighborhood": "Büyükşehir",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-beylikduzu-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet çiçekçi arayanlar için Beylikdüzü ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beylikdüzü",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "dereagzi-cicekcilik-peyzaj-organizasyon",
    "name": "Dereağzı",
    "title": "Dereağzı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Dereağzı çiçekçi arayanlar için Beylikdüzü ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beylikdüzü",
    "neighborhood": "Dereağzı",
    "type": "neighborhood"
  },
  {
    "slug": "gurpinar-cicekcilik-peyzaj-organizasyon",
    "name": "Gürpınar",
    "title": "Gürpınar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gürpınar çiçekçi arayanlar için Beylikdüzü ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beylikdüzü",
    "neighborhood": "Gürpınar",
    "type": "neighborhood"
  },
  {
    "slug": "kavakli-beylikduzu-cicekcilik-peyzaj-organizasyon",
    "name": "Kavaklı",
    "title": "Kavaklı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kavaklı çiçekçi arayanlar için Beylikdüzü ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beylikdüzü",
    "neighborhood": "Kavaklı",
    "type": "neighborhood"
  },
  {
    "slug": "marmara-cicekcilik-peyzaj-organizasyon",
    "name": "Marmara",
    "title": "Marmara Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Marmara çiçekçi arayanlar için Beylikdüzü ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beylikdüzü",
    "neighborhood": "Marmara",
    "type": "neighborhood"
  },
  {
    "slug": "sahil-cicekcilik-peyzaj-organizasyon",
    "name": "Sahil",
    "title": "Sahil Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sahil çiçekçi arayanlar için Beylikdüzü ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beylikdüzü",
    "neighborhood": "Sahil",
    "type": "neighborhood"
  },
  {
    "slug": "yakuplu-cicekcilik-peyzaj-organizasyon",
    "name": "Yakuplu",
    "title": "Yakuplu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yakuplu çiçekçi arayanlar için Beylikdüzü ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Beylikdüzü",
    "neighborhood": "Yakuplu",
    "type": "neighborhood"
  },
  {
    "slug": "alemdag-cicekcilik-peyzaj-organizasyon",
    "name": "Alemdağ",
    "title": "Alemdağ Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Alemdağ çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": "Alemdağ",
    "type": "neighborhood"
  },
  {
    "slug": "aydinlar-cekmekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Aydınlar",
    "title": "Aydınlar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Aydınlar çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": "Aydınlar",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-cekmekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "camlik-cekmekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Çamlık",
    "title": "Çamlık Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çamlık çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": "Çamlık",
    "type": "neighborhood"
  },
  {
    "slug": "catalmese-cicekcilik-peyzaj-organizasyon",
    "name": "Çatalmeşe",
    "title": "Çatalmeşe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çatalmeşe çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": "Çatalmeşe",
    "type": "neighborhood"
  },
  {
    "slug": "eksioglu-cicekcilik-peyzaj-organizasyon",
    "name": "Ekşioğlu",
    "title": "Ekşioğlu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ekşioğlu çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": "Ekşioğlu",
    "type": "neighborhood"
  },
  {
    "slug": "gungoren-cekmekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Güngören",
    "title": "Güngören Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Güngören çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": "Güngören",
    "type": "neighborhood"
  },
  {
    "slug": "hamidiye-cekmekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Hamidiye",
    "title": "Hamidiye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hamidiye çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": "Hamidiye",
    "type": "neighborhood"
  },
  {
    "slug": "huseyinli-cicekcilik-peyzaj-organizasyon",
    "name": "Hüseyinli",
    "title": "Hüseyinli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hüseyinli çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": "Hüseyinli",
    "type": "neighborhood"
  },
  {
    "slug": "kirazlidere-cicekcilik-peyzaj-organizasyon",
    "name": "Kirazlıdere",
    "title": "Kirazlıdere Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kirazlıdere çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": "Kirazlıdere",
    "type": "neighborhood"
  },
  {
    "slug": "kocullu-cicekcilik-peyzaj-organizasyon",
    "name": "Koçullu",
    "title": "Koçullu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Koçullu çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": "Koçullu",
    "type": "neighborhood"
  },
  {
    "slug": "mehmet-akif-cekmekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Mehmet Akif",
    "title": "Mehmet Akif Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mehmet Akif çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": "Mehmet Akif",
    "type": "neighborhood"
  },
  {
    "slug": "merkez-cekmekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Merkez",
    "title": "Merkez Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Merkez çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": "Merkez",
    "type": "neighborhood"
  },
  {
    "slug": "mimar-sinan-cekmekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Mimar Sinan",
    "title": "Mimar Sinan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mimar Sinan çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": "Mimar Sinan",
    "type": "neighborhood"
  },
  {
    "slug": "nisantepe-cicekcilik-peyzaj-organizasyon",
    "name": "Nişantepe",
    "title": "Nişantepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Nişantepe çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": "Nişantepe",
    "type": "neighborhood"
  },
  {
    "slug": "omerli-cekmekoy-cicekcilik-peyzaj-organizasyon",
    "name": "Ömerli",
    "title": "Ömerli Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ömerli çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": "Ömerli",
    "type": "neighborhood"
  },
  {
    "slug": "resadiye-cicekcilik-peyzaj-organizasyon",
    "name": "Reşadiye",
    "title": "Reşadiye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Reşadiye çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": "Reşadiye",
    "type": "neighborhood"
  },
  {
    "slug": "sirapinar-cicekcilik-peyzaj-organizasyon",
    "name": "Sırapınar",
    "title": "Sırapınar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sırapınar çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": "Sırapınar",
    "type": "neighborhood"
  },
  {
    "slug": "sogukpinar-cicekcilik-peyzaj-organizasyon",
    "name": "Soğukpınar",
    "title": "Soğukpınar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Soğukpınar çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": "Soğukpınar",
    "type": "neighborhood"
  },
  {
    "slug": "sultanciftligi-cicekcilik-peyzaj-organizasyon",
    "name": "Sultançiftliği",
    "title": "Sultançiftliği Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sultançiftliği çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": "Sultançiftliği",
    "type": "neighborhood"
  },
  {
    "slug": "tasdelen-cicekcilik-peyzaj-organizasyon",
    "name": "Taşdelen",
    "title": "Taşdelen Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Taşdelen çiçekçi arayanlar için Çekmeköy ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Çekmeköy",
    "neighborhood": "Taşdelen",
    "type": "neighborhood"
  },
  {
    "slug": "akcaburgaz-cicekcilik-peyzaj-organizasyon",
    "name": "Akçaburgaz",
    "title": "Akçaburgaz Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Akçaburgaz çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Akçaburgaz",
    "type": "neighborhood"
  },
  {
    "slug": "akevler-cicekcilik-peyzaj-organizasyon",
    "name": "Akevler",
    "title": "Akevler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Akevler çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Akevler",
    "type": "neighborhood"
  },
  {
    "slug": "aksemseddin-cicekcilik-peyzaj-organizasyon",
    "name": "Akşemseddin",
    "title": "Akşemseddin Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Akşemseddin çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Akşemseddin",
    "type": "neighborhood"
  },
  {
    "slug": "ardicli-cicekcilik-peyzaj-organizasyon",
    "name": "Ardıçlı",
    "title": "Ardıçlı Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Ardıçlı çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Ardıçlı",
    "type": "neighborhood"
  },
  {
    "slug": "asik-veysel-cicekcilik-peyzaj-organizasyon",
    "name": "Aşık Veysel",
    "title": "Aşık Veysel Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Aşık Veysel çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Aşık Veysel",
    "type": "neighborhood"
  },
  {
    "slug": "ataturk-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Atatürk",
    "title": "Atatürk Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Atatürk çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Atatürk",
    "type": "neighborhood"
  },
  {
    "slug": "baglarcesme-cicekcilik-peyzaj-organizasyon",
    "name": "Bağlarçeşme",
    "title": "Bağlarçeşme Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Bağlarçeşme çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Bağlarçeşme",
    "type": "neighborhood"
  },
  {
    "slug": "balikyolu-cicekcilik-peyzaj-organizasyon",
    "name": "Balıkyolu",
    "title": "Balıkyolu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Balıkyolu çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Balıkyolu",
    "type": "neighborhood"
  },
  {
    "slug": "barbaros-hayrettin-pasa-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Barbaros Hayrettin Paşa",
    "title": "Barbaros Hayrettin Paşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Barbaros Hayrettin Paşa çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Barbaros Hayrettin Paşa",
    "type": "neighborhood"
  },
  {
    "slug": "battalgazi-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Battalgazi",
    "title": "Battalgazi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Battalgazi çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Battalgazi",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "cinar-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Çınar",
    "title": "Çınar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Çınar çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Çınar",
    "type": "neighborhood"
  },
  {
    "slug": "esenkent-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Esenkent",
    "title": "Esenkent Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Esenkent çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Esenkent",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fatih çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "gokevler-cicekcilik-peyzaj-organizasyon",
    "name": "Gökevler",
    "title": "Gökevler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gökevler çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Gökevler",
    "type": "neighborhood"
  },
  {
    "slug": "guzelyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Güzelyurt",
    "title": "Güzelyurt Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Güzelyurt çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Güzelyurt",
    "type": "neighborhood"
  },
  {
    "slug": "hurriyet-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Hürriyet",
    "title": "Hürriyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hürriyet çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Hürriyet",
    "type": "neighborhood"
  },
  {
    "slug": "incirtepe-cicekcilik-peyzaj-organizasyon",
    "name": "İncirtepe",
    "title": "İncirtepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İncirtepe çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "İncirtepe",
    "type": "neighborhood"
  },
  {
    "slug": "inonu-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "İnönü",
    "title": "İnönü Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İnönü çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "İnönü",
    "type": "neighborhood"
  },
  {
    "slug": "istiklal-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "İstiklal",
    "title": "İstiklal Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İstiklal çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "İstiklal",
    "type": "neighborhood"
  },
  {
    "slug": "koza-cicekcilik-peyzaj-organizasyon",
    "name": "Koza",
    "title": "Koza Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Koza çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Koza",
    "type": "neighborhood"
  },
  {
    "slug": "mehmet-akif-ersoy-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Mehmet Akif Ersoy",
    "title": "Mehmet Akif Ersoy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mehmet Akif Ersoy çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Mehmet Akif Ersoy",
    "type": "neighborhood"
  },
  {
    "slug": "mehtercesme-cicekcilik-peyzaj-organizasyon",
    "name": "Mehterçeşme",
    "title": "Mehterçeşme Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mehterçeşme çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Mehterçeşme",
    "type": "neighborhood"
  },
  {
    "slug": "mevlana-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Mevlana",
    "title": "Mevlana Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mevlana çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Mevlana",
    "type": "neighborhood"
  },
  {
    "slug": "namik-kemal-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Namık Kemal",
    "title": "Namık Kemal Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Namık Kemal çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Namık Kemal",
    "type": "neighborhood"
  },
  {
    "slug": "necip-fazil-kisakurek-cicekcilik-peyzaj-organizasyon",
    "name": "Necip Fazıl Kısakürek",
    "title": "Necip Fazıl Kısakürek Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Necip Fazıl Kısakürek çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Necip Fazıl Kısakürek",
    "type": "neighborhood"
  },
  {
    "slug": "orhan-gazi-cicekcilik-peyzaj-organizasyon",
    "name": "Orhan Gazi",
    "title": "Orhan Gazi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Orhan Gazi çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Orhan Gazi",
    "type": "neighborhood"
  },
  {
    "slug": "osmangazi-cicekcilik-peyzaj-organizasyon",
    "name": "Osmangazi",
    "title": "Osmangazi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Osmangazi çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Osmangazi",
    "type": "neighborhood"
  },
  {
    "slug": "ornek-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Örnek",
    "title": "Örnek Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Örnek çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Örnek",
    "type": "neighborhood"
  },
  {
    "slug": "pinar-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Pınar",
    "title": "Pınar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Pınar çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Pınar",
    "type": "neighborhood"
  },
  {
    "slug": "piri-reis-cicekcilik-peyzaj-organizasyon",
    "name": "Piri Reis",
    "title": "Piri Reis Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Piri Reis çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Piri Reis",
    "type": "neighborhood"
  },
  {
    "slug": "saadetdere-cicekcilik-peyzaj-organizasyon",
    "name": "Saadetdere",
    "title": "Saadetdere Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Saadetdere çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Saadetdere",
    "type": "neighborhood"
  },
  {
    "slug": "selahaddin-eyyubi-cicekcilik-peyzaj-organizasyon",
    "name": "Selahaddin Eyyubi",
    "title": "Selahaddin Eyyubi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Selahaddin Eyyubi çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Selahaddin Eyyubi",
    "type": "neighborhood"
  },
  {
    "slug": "sultaniye-cicekcilik-peyzaj-organizasyon",
    "name": "Sultaniye",
    "title": "Sultaniye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sultaniye çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Sultaniye",
    "type": "neighborhood"
  },
  {
    "slug": "suleymaniye-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Süleymaniye",
    "title": "Süleymaniye Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Süleymaniye çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Süleymaniye",
    "type": "neighborhood"
  },
  {
    "slug": "sehitler-cicekcilik-peyzaj-organizasyon",
    "name": "Şehitler",
    "title": "Şehitler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Şehitler çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Şehitler",
    "type": "neighborhood"
  },
  {
    "slug": "talatpasa-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Talatpaşa",
    "title": "Talatpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Talatpaşa çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Talatpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "turgut-ozal-cicekcilik-peyzaj-organizasyon",
    "name": "Turgut Özal",
    "title": "Turgut Özal Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Turgut Özal çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Turgut Özal",
    "type": "neighborhood"
  },
  {
    "slug": "ucevler-cicekcilik-peyzaj-organizasyon",
    "name": "Üçevler",
    "title": "Üçevler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Üçevler çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Üçevler",
    "type": "neighborhood"
  },
  {
    "slug": "yenikent-cicekcilik-peyzaj-organizasyon",
    "name": "Yenikent",
    "title": "Yenikent Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yenikent çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Yenikent",
    "type": "neighborhood"
  },
  {
    "slug": "yesilkent-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Yeşilkent",
    "title": "Yeşilkent Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yeşilkent çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Yeşilkent",
    "type": "neighborhood"
  },
  {
    "slug": "yunus-emre-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Yunus Emre",
    "title": "Yunus Emre Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yunus Emre çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Yunus Emre",
    "type": "neighborhood"
  },
  {
    "slug": "zafer-esenyurt-cicekcilik-peyzaj-organizasyon",
    "name": "Zafer",
    "title": "Zafer Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Zafer çiçekçi arayanlar için Esenyurt ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Esenyurt",
    "neighborhood": "Zafer",
    "type": "neighborhood"
  },
  {
    "slug": "abdurrahmangazi-sancaktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Abdurrahmangazi",
    "title": "Abdurrahmangazi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Abdurrahmangazi çiçekçi arayanlar için Sancaktepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sancaktepe",
    "neighborhood": "Abdurrahmangazi",
    "type": "neighborhood"
  },
  {
    "slug": "akpinar-sancaktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Akpınar",
    "title": "Akpınar Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Akpınar çiçekçi arayanlar için Sancaktepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sancaktepe",
    "neighborhood": "Akpınar",
    "type": "neighborhood"
  },
  {
    "slug": "ataturk-sancaktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Atatürk",
    "title": "Atatürk Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Atatürk çiçekçi arayanlar için Sancaktepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sancaktepe",
    "neighborhood": "Atatürk",
    "type": "neighborhood"
  },
  {
    "slug": "emek-cicekcilik-peyzaj-organizasyon",
    "name": "Emek",
    "title": "Emek Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Emek çiçekçi arayanlar için Sancaktepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sancaktepe",
    "neighborhood": "Emek",
    "type": "neighborhood"
  },
  {
    "slug": "eyup-sultan-cicekcilik-peyzaj-organizasyon",
    "name": "Eyüp Sultan",
    "title": "Eyüp Sultan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Eyüp Sultan çiçekçi arayanlar için Sancaktepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sancaktepe",
    "neighborhood": "Eyüp Sultan",
    "type": "neighborhood"
  },
  {
    "slug": "fatih-sancaktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Fatih",
    "title": "Fatih Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Fatih çiçekçi arayanlar için Sancaktepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sancaktepe",
    "neighborhood": "Fatih",
    "type": "neighborhood"
  },
  {
    "slug": "hilal-cicekcilik-peyzaj-organizasyon",
    "name": "Hilal",
    "title": "Hilal Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Hilal çiçekçi arayanlar için Sancaktepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sancaktepe",
    "neighborhood": "Hilal",
    "type": "neighborhood"
  },
  {
    "slug": "inonu-sancaktepe-cicekcilik-peyzaj-organizasyon",
    "name": "İnönü",
    "title": "İnönü Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İnönü çiçekçi arayanlar için Sancaktepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sancaktepe",
    "neighborhood": "İnönü",
    "type": "neighborhood"
  },
  {
    "slug": "kemal-turkler-cicekcilik-peyzaj-organizasyon",
    "name": "Kemal Türkler",
    "title": "Kemal Türkler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Kemal Türkler çiçekçi arayanlar için Sancaktepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sancaktepe",
    "neighborhood": "Kemal Türkler",
    "type": "neighborhood"
  },
  {
    "slug": "meclis-cicekcilik-peyzaj-organizasyon",
    "name": "Meclis",
    "title": "Meclis Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Meclis çiçekçi arayanlar için Sancaktepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sancaktepe",
    "neighborhood": "Meclis",
    "type": "neighborhood"
  },
  {
    "slug": "merve-cicekcilik-peyzaj-organizasyon",
    "name": "Merve",
    "title": "Merve Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Merve çiçekçi arayanlar için Sancaktepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sancaktepe",
    "neighborhood": "Merve",
    "type": "neighborhood"
  },
  {
    "slug": "mevlana-sancaktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Mevlana",
    "title": "Mevlana Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Mevlana çiçekçi arayanlar için Sancaktepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sancaktepe",
    "neighborhood": "Mevlana",
    "type": "neighborhood"
  },
  {
    "slug": "osmangazi-sancaktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Osmangazi",
    "title": "Osmangazi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Osmangazi çiçekçi arayanlar için Sancaktepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sancaktepe",
    "neighborhood": "Osmangazi",
    "type": "neighborhood"
  },
  {
    "slug": "pasakoy-cicekcilik-peyzaj-organizasyon",
    "name": "Paşaköy",
    "title": "Paşaköy Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Paşaköy çiçekçi arayanlar için Sancaktepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sancaktepe",
    "neighborhood": "Paşaköy",
    "type": "neighborhood"
  },
  {
    "slug": "safa-cicekcilik-peyzaj-organizasyon",
    "name": "Safa",
    "title": "Safa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Safa çiçekçi arayanlar için Sancaktepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sancaktepe",
    "neighborhood": "Safa",
    "type": "neighborhood"
  },
  {
    "slug": "sarigazi-cicekcilik-peyzaj-organizasyon",
    "name": "Sarıgazi",
    "title": "Sarıgazi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sarıgazi çiçekçi arayanlar için Sancaktepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sancaktepe",
    "neighborhood": "Sarıgazi",
    "type": "neighborhood"
  },
  {
    "slug": "veysel-karani-cicekcilik-peyzaj-organizasyon",
    "name": "Veysel Karani",
    "title": "Veysel Karani Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Veysel Karani çiçekçi arayanlar için Sancaktepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sancaktepe",
    "neighborhood": "Veysel Karani",
    "type": "neighborhood"
  },
  {
    "slug": "yenidogan-sancaktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Yenidoğan",
    "title": "Yenidoğan Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yenidoğan çiçekçi arayanlar için Sancaktepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sancaktepe",
    "neighborhood": "Yenidoğan",
    "type": "neighborhood"
  },
  {
    "slug": "yunus-emre-sancaktepe-cicekcilik-peyzaj-organizasyon",
    "name": "Yunus Emre",
    "title": "Yunus Emre Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yunus Emre çiçekçi arayanlar için Sancaktepe ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sancaktepe",
    "neighborhood": "Yunus Emre",
    "type": "neighborhood"
  },
  {
    "slug": "50-yil-cicekcilik-peyzaj-organizasyon",
    "name": "50. Yıl",
    "title": "50. Yıl Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "50. Yıl çiçekçi arayanlar için Sultangazi ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultangazi",
    "neighborhood": "50. Yıl",
    "type": "neighborhood"
  },
  {
    "slug": "75-yil-cicekcilik-peyzaj-organizasyon",
    "name": "75. Yıl",
    "title": "75. Yıl Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "75. Yıl çiçekçi arayanlar için Sultangazi ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultangazi",
    "neighborhood": "75. Yıl",
    "type": "neighborhood"
  },
  {
    "slug": "cebeci-cicekcilik-peyzaj-organizasyon",
    "name": "Cebeci",
    "title": "Cebeci Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cebeci çiçekçi arayanlar için Sultangazi ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultangazi",
    "neighborhood": "Cebeci",
    "type": "neighborhood"
  },
  {
    "slug": "cumhuriyet-sultangazi-cicekcilik-peyzaj-organizasyon",
    "name": "Cumhuriyet",
    "title": "Cumhuriyet Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Cumhuriyet çiçekçi arayanlar için Sultangazi ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultangazi",
    "neighborhood": "Cumhuriyet",
    "type": "neighborhood"
  },
  {
    "slug": "esentepe-sultangazi-cicekcilik-peyzaj-organizasyon",
    "name": "Esentepe",
    "title": "Esentepe Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Esentepe çiçekçi arayanlar için Sultangazi ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultangazi",
    "neighborhood": "Esentepe",
    "type": "neighborhood"
  },
  {
    "slug": "eski-habipler-cicekcilik-peyzaj-organizasyon",
    "name": "Eski Habipler",
    "title": "Eski Habipler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Eski Habipler çiçekçi arayanlar için Sultangazi ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultangazi",
    "neighborhood": "Eski Habipler",
    "type": "neighborhood"
  },
  {
    "slug": "gazi-cicekcilik-peyzaj-organizasyon",
    "name": "Gazi",
    "title": "Gazi Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Gazi çiçekçi arayanlar için Sultangazi ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultangazi",
    "neighborhood": "Gazi",
    "type": "neighborhood"
  },
  {
    "slug": "habibler-cicekcilik-peyzaj-organizasyon",
    "name": "Habibler",
    "title": "Habibler Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Habibler çiçekçi arayanlar için Sultangazi ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultangazi",
    "neighborhood": "Habibler",
    "type": "neighborhood"
  },
  {
    "slug": "ismetpasa-sultangazi-cicekcilik-peyzaj-organizasyon",
    "name": "İsmetpaşa",
    "title": "İsmetpaşa Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "İsmetpaşa çiçekçi arayanlar için Sultangazi ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultangazi",
    "neighborhood": "İsmetpaşa",
    "type": "neighborhood"
  },
  {
    "slug": "malkocoglu-cicekcilik-peyzaj-organizasyon",
    "name": "Malkoçoğlu",
    "title": "Malkoçoğlu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Malkoçoğlu çiçekçi arayanlar için Sultangazi ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultangazi",
    "neighborhood": "Malkoçoğlu",
    "type": "neighborhood"
  },
  {
    "slug": "sultanciftligi-sultangazi-cicekcilik-peyzaj-organizasyon",
    "name": "Sultançiftliği",
    "title": "Sultançiftliği Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Sultançiftliği çiçekçi arayanlar için Sultangazi ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultangazi",
    "neighborhood": "Sultançiftliği",
    "type": "neighborhood"
  },
  {
    "slug": "ugur-mumcu-sultangazi-cicekcilik-peyzaj-organizasyon",
    "name": "Uğur Mumcu",
    "title": "Uğur Mumcu Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Uğur Mumcu çiçekçi arayanlar için Sultangazi ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultangazi",
    "neighborhood": "Uğur Mumcu",
    "type": "neighborhood"
  },
  {
    "slug": "yayla-sultangazi-cicekcilik-peyzaj-organizasyon",
    "name": "Yayla",
    "title": "Yayla Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yayla çiçekçi arayanlar için Sultangazi ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultangazi",
    "neighborhood": "Yayla",
    "type": "neighborhood"
  },
  {
    "slug": "yunus-emre-sultangazi-cicekcilik-peyzaj-organizasyon",
    "name": "Yunus Emre",
    "title": "Yunus Emre Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Yunus Emre çiçekçi arayanlar için Sultangazi ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
    "district": "Sultangazi",
    "neighborhood": "Yunus Emre",
    "type": "neighborhood"
  },
  {
    "slug": "zubeyde-hanim-cicekcilik-peyzaj-organizasyon",
    "name": "Zübeyde Hanım",
    "title": "Zübeyde Hanım Çiçekçi - Peyzaj ve Organizasyon | Sümbül Garden",
    "description": "Zübeyde Hanım çiçekçi arayanlar için Sultangazi ve İstanbul çevresinde çiçek siparişi, peyzaj keşfi, organizasyon ve balon süsleme hizmetleri.",
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
