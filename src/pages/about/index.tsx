import React from 'react';
import styles from './index.less'
import {Image} from "antd";

const Register: React.FC = () => {

  window.scrollTo(0, 0);


  return (
    <div className={styles.back}>
      <Image src={"/image/sleep-everywhere.jpg"}></Image>
    </div>

  );
};
export default Register;
