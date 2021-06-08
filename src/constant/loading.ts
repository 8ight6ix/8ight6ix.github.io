const customLoading: CustomLoading = {
  getWorkList: {
    id: 10,
    message: '작품 목록을 가져오고 있습니다.',
  },
};

export interface CustomLoadingData {
  id: number;
  message: string;
}

export interface CustomLoading {
  getWorkList: CustomLoadingData;
}

export default customLoading;
