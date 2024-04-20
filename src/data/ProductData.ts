import celularSamsung from "../assets/img/celular-samsung.jpg";
import computadorCompletoDigital from "../assets/img/computador-completo-digital.jpg";
import fifineDynamicRGBGamingHeadset from "../assets/img/fifine-dynamic-RGB-gaming-headset.jpg";
import headsetLG from "../assets/img/headset-lg.jpg";
import hyperxFuryUltra1Straight from "../assets/img/hyperx_fury_ultra_1_straight.jpg";
import iphone14 from "../assets/img/iphone-14.jpg";
import kitGamerCompletoFone from "../assets/img/kit-gamer-completo-fone-.png";
import kitGamerMotospeedPretoTecladoMecanico from "../assets/img/kit-gamer-motospeed-preto-teclado-mecanico.jpg";
import kitTecladoMouseFone from "../assets/img/kit-teclado-mouse-fone.jpg";
import laptop from "../assets/img/laptop.jpg";

import mouseMousepad from "../assets/img/mouse-mousepad.png";
import mousepadOzzix from "../assets/img/mousepad-ozzix.jpg";
import mousepadWarrior from "../assets/img/mousepad-warrior.jpg";
import mousepad from "../assets/img/mousepad.jpg";
import pcCompleto from "../assets/img/pc-completo.jpg";
import pcCompleto2 from "../assets/img/pc-completo-2.jpg";
import pcCompleto3 from "../assets/img/pc-completo-3.jpg";
import pcCompleto4 from "../assets/img/pc-completo-4.jpg";
import pcCompleto5 from "../assets/img/pc-completo-5.jpg";
import pcDeMesa from "../assets/img/pc-de-mesa.jpg";

import pcGamer1 from "../assets/img/pc-gamer-1.jpg";
import pcGamer2 from "../assets/img/pc-gamer-2.jpg";
import playstationPulse from "../assets/img/playstation-pulse.jpeg";
import pocoX6 from "../assets/img/poco-x6.jpg";
import smartphoneSamsungGalaxyA15 from "../assets/img/smartphone_samsung_galaxy_a15.jpg";
import infinixPositivo from "../assets/img/infinix-positivo-5g.jpg";
import smartphoneSamsung from "../assets/img/smartphone-samsung.jpg";
import tecladoLG from "../assets/img/teclado-lg.jpg";
import tecladoPadraoErgonomico from "../assets/img/teclado-padrao-ergonomico.png";
import kitGamerDazzCombo4em1Arsenal from "../assets/img/kit_gamer_dazz_combo_4_em_1_arsenal.jpg";

export interface ProductDetails {
  id: number;
  title: string;
  description: string;
  price: number;
  photo: string;
}

const productsData: ProductDetails[] = [
  {
    id: 1,
    title: "smartphone Samsung",
    description:
      "Smartphone Samsung Galaxy - Desfrute de desempenho excepcional e tela vibrante com o mais recente smartphone da Samsung.",
    price: 1254,
    photo: celularSamsung,
  },
  {
    id: 2,
    title: "computador completo digital",
    description:
      "Computador Completo Digital - Potente e versátil, este computador oferece poder de processamento para todas as suas necessidades digitais.",
    price: 1854,
    photo: computadorCompletoDigital,
  },
  {
    id: 3,
    title: "headset Fifine RGB",
    description:
      "Headset Fifine RGB Gaming - Entre no mundo dos jogos com estilo e imersão de áudio, graças a este headset com iluminação RGB.",
    price: 200,
    photo: fifineDynamicRGBGamingHeadset,
  },
  {
    id: 4,
    title: "headset Logitech",
    description:
      "Headset Logitech - Confortável e de alta qualidade, este headset proporciona uma experiência de áudio envolvente para suas atividades de entretenimento.",

    price: 350,
    photo: headsetLG,
  },
  {
    id: 5,
    title: "mousepad Hyperx",
    description:
      "Mousepad HyperX Fury Ultra - Melhore sua precisão nos jogos com este mousepad de alta performance, projetado para velocidade e controle.",

    price: 98,
    photo: hyperxFuryUltra1Straight,
  },
  {
    id: 6,
    title: "iphone 14",
    description:
      "iPhone 14 - O mais recente smartphone da Apple, apresentando inovações em design, desempenho e fotografia.",

    price: 3600,
    photo: iphone14,
  },
  {
    id: 7,
    title: "kit gamer Dazz 4 em 1",
    description:
      "Kit Gamer Dazz 4 em 1 Arsenal - Equipamento essencial para jogadores ávidos, incluindo teclado, mouse, fone de ouvido e mousepad.",

    price: 280,
    photo: kitGamerCompletoFone,
  },
  {
    id: 8,
    title: "teclado, mouse e fone",
    description:
      "Kit Gamer MotoSpeed Preto - Este kit gamer oferece um teclado mecânico de alto desempenho, mouse preciso e fone de ouvido imersivo, tudo em um pacote elegante e ergonômico.",

    price: 158,
    photo: kitGamerMotospeedPretoTecladoMecanico,
  },
  {
    id: 9,
    title: "teclado, mouse e fone",
    description:
      "Kit Teclado, Mouse e Fone - Conjunto completo para suas necessidades de computação, incluindo teclado, mouse e fone de ouvido, projetados para conforto e desempenho.",

    price: 97,
    photo: kitTecladoMouseFone,
  },
  {
    id: 10,
    title: "laptop vaio",
    description:
      "Laptop Vaio - Potência e portabilidade se encontram neste laptop Vaio, ideal para trabalho e entretenimento em movimento.",

    price: 2100,
    photo: laptop,
  },
  {
    id: 11,
    title: "mouse e mousepad",
    description:
      "Mouse e Mousepad - O combo perfeito para jogadores, oferecendo precisão e conforto durante longas sessões de jogos.",

    price: 100,
    photo: mouseMousepad,
  },
  {
    id: 12,
    title: "mousepad Ozzix",
    description:
      "Mousepad Ozzix - Superfície otimizada para movimentos suaves e precisos do mouse, garantindo uma experiência de jogo sem falhas.",

    price: 125,
    photo: mousepadOzzix,
  },
  {
    id: 13,
    title: "mousepad Warrior",
    description:
      "Mousepad Warrior - Design resistente e textura premium tornam este mousepad a escolha ideal para jogadores que buscam desempenho superior.",

    price: 82,
    photo: mousepadWarrior,
  },
  {
    id: 14,
    title: "mousepad",
    description:
      "Mousepad - Mousepad de qualidade que oferece superfície suave e aderente para movimentos precisos do mouse em qualquer situação.",

    price: 74,
    photo: mousepad,
  },
  {
    id: 15,
    title: "pc completo",
    description:
      "PC Completo - Este PC completo oferece desempenho confiável para uma variedade de tarefas, desde trabalho até jogos.",

    price: 1735,
    photo: pcCompleto,
  },
  {
    id: 16,
    title: "pc completo",
    description:
      "PC Completo - Equipado com hardware poderoso, este PC oferece uma experiência de computação rápida e fluida.",

    price: 1854,
    photo: pcCompleto2,
  },
  {
    id: 17,
    title: "pc completo",
    description:
      "PC Completo - Este PC completo é uma solução conveniente para suas necessidades de computação diárias.",

    price: 2000,
    photo: pcCompleto3,
  },
  {
    id: 18,
    title: "pc completo",
    description:
      "PC Completo - Combinando desempenho sólido e design elegante, este PC completo é ideal para uso doméstico ou profissional.",

    price: 1600,
    photo: pcCompleto4,
  },
  {
    id: 19,
    title: "pc completo",
    description:
      "PC Completo - Potente e eficiente, este PC completo oferece tudo o que você precisa para produtividade e entretenimento.",

    price: 1900,
    photo: pcCompleto5,
  },
  {
    id: 20,
    title: "pc de mesa",
    description:
      "PC de Mesa - Esta torre de PC oferece potência e capacidade de expansão para atender às suas necessidades de computação.",

    price: 1500,
    photo: pcDeMesa,
  },
  {
    id: 21,
    title: "pc gamer",
    description:
      "PC Gamer - Equipado com hardware de alto desempenho, este PC gamer oferece uma experiência imersiva em jogos.",

    price: 3000,
    photo: pcGamer1,
  },
  {
    id: 22,
    title: "pc gamer",
    description:
      "PC Gamer - Desempenho excepcional e design arrojado tornam este PC gamer uma escolha excelente para entusiastas de jogos.",

    price: 5000,
    photo: pcGamer2,
  },
  {
    id: 23,
    title: "fone Playstation Pulse",
    description:
      "Fone Playstation Pulse - Desfrute de áudio de alta qualidade e conforto excepcional com este fone de ouvido oficial da Playstation.",

    price: 200,
    photo: playstationPulse,
  },
  {
    id: 24,
    title: "smartphone Poco x6",
    description:
      "Smartphone Poco X6 - Este smartphone oferece desempenho sólido e recursos avançados a um preço acessível.",

    price: 2250,
    photo: pocoX6,
  },
  {
    id: 25,
    title: "smartphone Samsung a15",
    description:
      "Smartphone Samsung Galaxy A15 - Com uma tela grande e desempenho confiável, este smartphone é perfeito para multitarefa e entretenimento móvel.",

    price: 1100,
    photo: smartphoneSamsungGalaxyA15,
  },
  {
    id: 26,
    title: "infinix Positivo",
    description:
      "Smartphone Infinix Positivo - Design elegante e recursos avançados tornam este smartphone uma escolha sólida para usuários exigentes.",

    price: 1690,
    photo: infinixPositivo,
  },
  {
    id: 27,
    title: "smartphone Samsung",
    description:
      "Smartphone Samsung - Confiabilidade e desempenho se unem neste smartphone Samsung, projetado para atender às suas necessidades diárias.",

    price: 1320,
    photo: smartphoneSamsung,
  },
  {
    id: 28,
    title: "teclado Logitech",
    description:
      "Teclado Logitech - Projetado para conforto e durabilidade, este teclado oferece uma experiência de digitação suave e responsiva.",

    price: 221,
    photo: tecladoLG,
  },
  {
    id: 29,
    title: "teclado ergonômico",
    description:
      "Teclado Padrão Ergonômico - Este teclado ergonômico ajuda a reduzir a fadiga durante longas sessões de digitação, mantendo a produtividade.",

    price: 54,
    photo: tecladoPadraoErgonomico,
  },
  {
    id: 30,
    title: "kit gamer dazz 4 em 1",
    description:
      "Kit Gamer Dazz Combo 4 em 1 Arsenal - Este conjunto oferece tudo o que você precisa para mergulhar em jogos intensos: teclado, mouse, headset e mousepad.",

    price: 180,
    photo: kitGamerDazzCombo4em1Arsenal,
  },
];

function isProduct(object: ProductDetails): object is ProductDetails {
  return (
    "id" in object &&
    "title" in object &&
    "description" in object &&
    "photo" in object
  );
}

export { productsData, isProduct };
