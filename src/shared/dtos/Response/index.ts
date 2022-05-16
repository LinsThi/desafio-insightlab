export type ResponseGeneratorDTO = {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
};

export type LoginResponseDataProps = {
  user: {
    name: string;
  };
  token: string;
};
