const customError: CustomError = {
  getWorkList: {
    id: 10,
    title: '네트워트 오류',
    message: '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
  },
};

export interface CustomErrorData {
  id: number;
  title: string;
  message: string;
}

export interface CustomError {
  getWorkList: CustomErrorData;
}

export default customError;
