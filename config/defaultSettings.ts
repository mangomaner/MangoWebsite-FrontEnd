import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  headerHeight: 66,
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: false,
  colorWeak: false,
  title: 'Mango Website',
  pwa: false,
  logo: '/pic/Logo.png',
  iconfontUrl: '/icons/iconfont.eot',
};

export default Settings;
