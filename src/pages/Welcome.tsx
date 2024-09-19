import React, {useState} from 'react';
import {changeName} from "@/services/ant-design-pro/api";
import {PageContainer} from '@ant-design/pro-components';
import {Avatar, Button, Card, message, Space, Spin, Typography, Upload} from 'antd';
import styles from './Welcome.less';
import {UploadOutlined, UserOutlined} from '@ant-design/icons';
import {useModel} from "@@/plugin-model/useModel";
import { formatInTimeZone } from 'date-fns-tz';
import { parseISO } from 'date-fns';


// const loading = (
//   <span className={`${styles.action} ${styles.account}`}>
//       <Spin
//         size="large"
//         style={{
//           marginLeft: 8,
//           marginRight: 8,
//         }}
//       />
//     </span>
// );


const Welcome: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false); // 新增状态
  const [nickname, setNickname] = useState(''); // 新增状态
  const {initialState, setInitialState } = useModel('@@initialState');
  const [userChangeNameParams, setUserChangeNameParams] = useState<API.ChangeNameParams>({});
  const { currentUser } = initialState;
  if(!currentUser){
    return(
      <div></div>
    );
  }
  const parsedDate = parseISO(currentUser.createTime);
  const BeijingTime = formatInTimeZone(parsedDate, 'Asia/Shanghai', 'yyyy-MM-dd HH:mm:ss');

  //接收的参数


  const handleSubmitName = async (values: API.ChangeNameParams) => {
    try {
      const result = await changeName({
        ...values,
      });
      if (result) {
        // 更新全局状态中的 currentUser
        const updatedUser = {
          ...currentUser,
          username: result,
        };
        setInitialState({ ...initialState, currentUser: updatedUser });
        message.success('已更新');
      } else {
        message.error( '更新失败');
      }
    } catch (error) {
      const defaultLoginFailureMessage = '改名失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setNickname(currentUser.username); // 设置初始值为当前昵称
  };

  const handleSave = () => {
    userChangeNameParams.changeName = nickname;
    userChangeNameParams.userAccount = currentUser.userAccount;
    setUserChangeNameParams(userChangeNameParams);
    handleSubmitName(userChangeNameParams);
    // 这里可以添加保存逻辑，例如更新用户信息
    setIsEditing(false);
  };
  const handleCancle = () => {
    setIsEditing(false);
  };

  // if (!currentUser || !currentUser.username) {
  //   return loading;
  // }


  //更新头像
  const handleAvartarFileUpload = async (file: any) => {
    // 文件大小检查
    if (file.size / 1024 / 1024 > 1) {
      message.error('文件大小不能超过1MB！');
      return;
    }

    // 文件类型检查
    const isJpgOrPngOrJpeg = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
    if (!isJpgOrPngOrJpeg) {
      message.error('您只能上传jpg/png/jpeg格式的图片!');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('userAccount', currentUser.userAccount)
      // 发起文件上传请求到图床
      const response = await fetch('/api/user/changeAvatar', {
        method: 'POST',
        body: formData,
      });

      if (response) {
        const res = await response.json();

        const updatedUser = {
          ...currentUser,
          avatarUrl: res.data,
        };
        setInitialState({ ...initialState, currentUser: updatedUser });
      } else {
        message.error('上传失败');
      }
    } catch (error) {
      console.error(error);
      message.error('上传过程中发生错误');
    }
  };

  return (
    <PageContainer style={{width: '206vh'}}>
      <div className={styles.avatarStyle}>
        <Avatar size={96} icon={<UserOutlined/>} src={currentUser.avatarUrl}/>
        <h2 style={{marginTop: '1vh'}}>
          {currentUser.username}
        </h2>
        {(
          <Upload
            beforeUpload={async (file) => {
              await handleAvartarFileUpload(file);
              return false; // 阻止默认上传行为
            }}
            listType="picture"
            maxCount={1}
          >
            <Button icon={<UploadOutlined/>} style={{borderRadius: '20px', margin: '0 0 2vh 0'}}>更换头像</Button>
          </Upload>
        )}

      </div>
      <Card>
        <Typography.Text strong>
          <a
            href="https://procomponents.ant.design/components/table"
            rel="noopener noreferrer"
            target="__blank"
          >
            欢迎使用
          </a>
          <br/>
        </Typography.Text>

        <p style={{marginTop: '2vh'}}>
          昵称：{isEditing ? (
          <input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            autoFocus
          />
        ) : (<span>{currentUser.username}</span>)
        }
          {!isEditing && (
            <a onClick={handleEditClick} id={styles.change}>修改</a>
          )}
          {isEditing && (
            <Space>
              <Button type="primary" onClick={handleSave} style={{marginLeft: '2vh'}}>保存</Button>
              <Button type="primary" onClick={handleCancle}>取消</Button>
            </Space>
          )}
        </p>


        <p>用户名：{currentUser.userAccount}</p>
        <p>创建时间：{BeijingTime}</p>

        {/*<CodePreview>yarn add @ant-design/pro-components</CodePreview>*/}
      </Card>
    </PageContainer>
  );
};

export default Welcome;
