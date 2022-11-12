import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
  eng: {
    translation: {
      nameAndSurname: "Natig Khalili",
      personProfession:
        "Middle Full-Stack Web Developer (Node, React, Asp.net)",
      personPlace: "Ganja, Azerbaijan",
      personDescription: `Hi, I'm Natig Khalili. I am {{personAge}} years old and I was born in Ganja but now I live in Baku.
                                I started my education on information technologies and systems engineer and finished my education life until master degree.
                                I'm the frontend-based web-developer. But I also have experiences in backend. Writing new projects or developing applications using different languages.
                                I have high experience in the sector of Geographic Information System.`,
      frequently: "Frequently used",
      sometimes: "Sometimes used",
      edu: "Education",
      work: "Work experience",
      school_15: "Azerbaijan, Ganja, Secondary school number 15",
      school_44: "Azerbaijan, Ganja, Secondary school number 44",
      unec: "Azerbaijan State Economic University",
      adnsu: "Azerbaijan State Oil and Industry University",
      itmim: "Information technologies and Data Management Center",
      arin: "The Republic of Azerbaijan Ministry of Economy",
      army: "Military Service",
      contact: "Contact",
      mail: "Mail",
      phoneNumber: "Phone number",
      createdBy: "created by",
      socialMedias: "Social medias",
      now: "NOW",
      hasBaby: "Children: 1 daughter"
    },
  },
  aze: {
    translation: {
      nameAndSurname: "Natiq Xəlili",
      personProfession:
        "Proqram təminatı üzrə mühəndis-proqramlaşdırıcısı (Node, React, Asp.net)",
      personPlace: "Gəncə, Azərbaycan",
      personDescription: `Salam, Mən Natiq Xəlili. {{personAge}} yaşındayam və Gəncədə anadan olmuşam lakin hal hazırda Bakıda yaşayıram.
                                'İnformasiya texnologiyaları və sistemləri mühəndisliyi' ixtisası üzrə təhsis almışam və bu sahədə təhsilimi magistr olaraq bitirmişəm.
                                Ön plan ağırlıqlı veb proqramlaşdırıcısıyam. Ancaq ki, arxa planda da yetəri qədər təcrübəm var. Müxtəlif metodlardan və dillərdən istifadə edərək yeni layihələrin yazılması və ya istifadədə olan proqramların inkişaf etdirilməsi ilə məşğulam.
                                Coğrafi informasiya sistemləri sektorunda yüksək təcrübələrim var.`,
      frequently: "Tez-tez istifadə edilən",
      sometimes: "Ara-sıra istifadə edilən",
      edu: "Təhsil",
      work: "İş təcrübəsi",
      school_15: "Gəncə şəhəri, 15 nömrəli tam orta məktəb",
      school_44: "Gəncə şəhəri, 44 saylı Bağça məktəb lisey kompleksi",
      unec: "Azərbaycan Dövlət İqtisad Universiteti",
      adnsu: "Azərbaycan Dövlət Neft və Sənaye Universiteti",
      itmim: "İnformasiya texnologiyaları və məlumat idarəetmə mərkəzi",
      arin: "Azərbaycan Respublikasının İqtisadiyyat Nazirliyi",
      army: "Hərbi xidmət",
      contact: "Əlaqə",
      mail: "Elektron poçt",
      phoneNumber: "Telefon nömrəsi",
      createdBy: "hazırladı",
      socialMedias: "Sosial şəbəkələr",
      now: "İNDİ",
      hasBaby: "Övladlar: 1 qızı"
    },
  },
  rus: {
    translation: {
      nameAndSurname: "Натиг Халили",
      personProfession:
        "Средний веб-разработчик полного стека (Node, React, Asp.net)",
      personPlace: "Гянджа, Азербайджан",
      personDescription: `Привет, я Натиг Халили. Мне {{personAge}} лет, я родился в Гяндже, но сейчас живу в Баку. Я начал свое образование в области информационных технологий и системного инженера и закончил свою образовательную жизнь до степени магистра. Я фронтенд-разработчик. Но у меня также есть опыт работы с бэкэндом. Написание новых проектов или разработка приложений на разных языках. У меня большой опыт работы в секторе географических информационных систем.`,
      frequently: "Часто используемый",
      sometimes: "Иногда используется",
      edu: "Образование",
      work: "Рабочий стаж",
      school_15: "Азербайджан, Гянджа, Средняя школа №15",
      school_44: "Азербайджан, Гянджа, Средняя школа №44",
      unec: "Азербайджанский Государственный Экономический Университет",
      adnsu:
        "Азербайджанский Государственный Университет Нефти и Промышленности",
      itmim: "Информационные технологии и Центр управления данными",
      arin: "Министерство Экономики Азербайджанской Республики",
      army: "Военная служба",
      contact: "Контакт",
      mail: "Почта",
      phoneNumber: "Телефонный номер",
      createdBy: "создано",
      socialMedias: "Социальные медиа",
      now: "СЕЙЧАС",
      hasBaby: "Дети: 1 дочь"
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "eng", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
