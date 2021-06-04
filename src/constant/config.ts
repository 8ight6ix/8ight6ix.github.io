const config: Config = {
  mode: 'development',

  artworkImprotDateTimezone: 'Asia/Seoul', // 작품 로우 데이터 터임존
  artworkImportDateFromat: 'YYYY.M.D', // 작품 로우 데이터 터임 포멧
  artworkViewDateFormat: 'YYYY. MM. DD', // 화면에 보여지는 작품 데이터 타임 포멧

  artworkDefaultTitle: '무제', // 작품 디폴트 제목
  artworkDefaultCreator: '작가 미상', // 작품 디폴트 작가
  artworkDefaultDate: '0000.0.0', // 작품 디폰트 제작 시기
  artworkDefaultType: '미정', // 작품 지폴트 타입
  artworkDefaultDescription: '설명 없음', // 작품 디폴트 설명
  artworkDefaultPath: '/src/artworks/404.html', // 작품 디폵트 경로
};

export interface Config {
  mode: 'production' | 'development';
  artworkImprotDateTimezone: string;
  artworkImportDateFromat: string;
  artworkViewDateFormat: string;
  artworkDefaultTitle: string;
  artworkDefaultCreator: string;
  artworkDefaultDate: string;
  artworkDefaultType: string;
  artworkDefaultDescription: string;
  artworkDefaultPath: string;
}

export default config;
