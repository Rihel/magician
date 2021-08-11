# useFloatLayer

浮层逻辑复用 hook

## 术语解释

- 浮层：指的是 web 页面的弹窗、抽屉

中后台界面会有大量的弹窗、抽屉填写表单等交互，这个 hooks 对其做了层抽象

```ts
const { visible, confirmLoading, okHandle, open, close } =
  useFloatLayer(options);
```

## 弹窗模式

```tsx
import React from 'react';
import { message, Form, Modal, Input, Button } from 'antd';
import { useFloatLayer } from '@r-magician/hooks';

const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(time);
      resolve();
    }, time);
  });
};

export default () => {
  const [form] = Form.useForm();
  const { visible, confirmLoading, okHandle, open, close } = useFloatLayer({
    onConfirm: async () => {
      try {
        await form.validateFields();
        const data = form.getFieldsValue();
        await sleep(3000);
        message.success(`账号密码为：${data.username}、${data.password}`);
        return true;
      } catch (e) {
        return false;
      }
    },
  });
  return (
    <div>
      <Button onClick={open}>打开</Button>
      <Modal
        visible={visible}
        confirmLoading={confirmLoading}
        okText="立即登录"
        cancelText="取消"
        onOk={okHandle}
        onCancel={close}
        title="登录"
        width="70%"
        destroyOnClose={true}
      >
        <Form form={form}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: '账号不能为空' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '密码不能为空' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
```

## 抽屉模式

```tsx
import React from 'react';
import { message, Form, Row, Drawer, Input, Button } from 'antd';
import { useFloatLayer } from '@r-magician/hooks';

const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(time);
      resolve();
    }, time);
  });
};

export default () => {
  const [form] = Form.useForm();
  const { visible, confirmLoading, okHandle, open, close } = useFloatLayer({
    onConfirm: async () => {
      try {
        await form.validateFields();
        const data = form.getFieldsValue();
        await sleep(3000);
        message.success(`账号密码为：${data.username}、${data.password}`);
        return true;
      } catch (e) {
        return false;
      }
    },
  });
  return (
    <div>
      <Button onClick={open}>打开</Button>
      <Drawer
        visible={visible}
        title="登录"
        onClose={close}
        width="40%"
        destroyOnClose={true}
        footer={
          <Row justify="end">
            <Button onClick={close}>取消</Button>
            <Button type="primary" loading={confirmLoading} onClick={okHandle}>
              确定
            </Button>
          </Row>
        }
      >
        <Form form={form}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: '账号不能为空' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '密码不能为空' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};
```

## API

### Options

<table>
  <thead>
    <tr>
      <th width="100">名称</th>
      <th width="600">描述</th>
      <th >类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>value</td>
      <td>onConfirm的入参</td>
      <td><code>(() => T) | T;</code></td>
      <td>可选</td>
    </tr>
    <tr>
      <td>onConfirm</td>
      <td>确定回调，参数为传入的value值，必须返回Promise</td>
      <td><code>(data?: T) => Promise&lt;boolean&gt;</code></td>
      <td>可选</td>
    </tr>
    <tr>
      <td>onClose</td>
      <td>关闭浮层回调</td>
      <td><code>() => void;</code></td>
      <td>可选</td>
    </tr>
  </tbody>
</table>

### 返回值

<table>
  <thead>
    <tr>
      <th width="100">名称</th>
      <th width="600">描述</th>
      <th >类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>visible</td>
      <td>浮层可见性</td>
      <td><code>boolean</code></td>
      <td>false</td>
    </tr>
    <tr>
      <td>open</td>
      <td>打开浮层方法</td>
      <td><code>() => void</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td>close</td>
      <td>关闭浮层方法</td>
      <td><code>() => void</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td>okHandle</td>
      <td>提交动作的方法，如：提交表单，查询</td>
      <td><code>() => void;</code></td>
      <td>-</td>
    </tr>
     <tr>
      <td>confirmLoading</td>
      <td>提交动作的执行中状态</td>
      <td><code>boolean</code></td>
      <td>false</td>
    </tr>
  </tbody>
</table>
