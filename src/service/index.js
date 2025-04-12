import Taro from '@tarojs/taro';
import { getStorage } from '@/utils/storage';

const request = async (url, method, data, header = {}) => {
  const token = await getStorage('token');

  const option = {
    url: `${process.env.TARO_APP_API_PREFIX}${url}`,
    method,
    data,
    header: { token, ...header }
  };

  const res = await Taro.request(option);
  console.log('🚀 ~ request ~ res:', res);

  const { code } = res.data;

  return res.data;
};

export default request;
