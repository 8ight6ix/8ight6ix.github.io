const config: Config = {
  mode: 'production',
  title: '8ight6ix',
  subTitle: 'Artowrk Hub',

  artworkImprotDateTimezone: 'Asia/Seoul', // 작품 로우 데이터 터임존
  artworkImportDateFromat: 'YYYY.M.D', // 작품 로우 데이터 터임 포멧
  artworkViewDateFormat: 'YYYY. MM. DD', // 화면에 보여지는 작품 데이터 타임 포멧

  artworkDefaultType: '미정', // 작품 지폴트 타입
  artworkDefaultTitle: '무제', // 작품 디폴트 제목
  artworkDefaultDate: '0000.0.0', // 작품 디폰트 제작 시기
  artworkDefaultCreator: '작가 미상', // 작품 디폴트 작가
  artworkDefaultDescription: '설명 없음', // 작품 디폴트 설명
  artworkDefaultPath: '/src/artworks/404.html', // 작품 폴트 경로

  cardListGap: 20, // 카드 간격
  thumbnailRate: 1.6, // Thumbnail 가로 세로 비율

  windowLarge: 1440,
  windowMedium: 1240,
  windowRegular: 905,
  windowSmall: 600,

  girdCntLarge: 4,
  gridCntMedium: 3,
  gridCntRegular: 2,
  gridCntSmall: 2,
  gridCntDefault: 1,
};

export interface Config {
  mode: 'production' | 'development';
  title: string;
  subTitle: string;

  artworkImprotDateTimezone: string;
  artworkImportDateFromat: string;
  artworkViewDateFormat: string;

  artworkDefaultType: string;
  artworkDefaultTitle: string;
  artworkDefaultDate: string;
  artworkDefaultCreator: string;
  artworkDefaultDescription: string;
  artworkDefaultPath: string;

  cardListGap: number;
  thumbnailRate: number;

  windowLarge: number;
  windowMedium: number;
  windowRegular: number;
  windowSmall: number;

  girdCntLarge: number;
  gridCntMedium: number;
  gridCntRegular: number;
  gridCntSmall: number;
  gridCntDefault: number;
}

export default config;
