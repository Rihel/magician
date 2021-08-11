# FloatLayerSelector

## 浮层表单选择器

快速实现复杂列表的新增弹框操作

## 基础使用

填写表单时，某个表单项是复杂的列表，但是列表项很复杂。如实现一个简历系统，用户可以管理自己的简历，简历上的工作经验就是一个复杂的 list，简历的数据结构大概如下

```ts
export interface ResumeData {
  // 姓名
  name: string
  // 年龄
  age: number
  // 性别
  gender: 'man' | 'woman'
  // 头像
  avatar: string,
  // 工作经验
  workExperiences: Array({
    // 公司名称
    companyName: string
    // 岗位名称
    positionName: string
    // 任职起止时间
    timeRange: [Date, Date]
    // 工作内容描述
    workContentDesc: string
    // 业绩描述
    kpiDesc: string
    // 薪水
    salary: string
    // 离职原因
    leaveReason: string
  })
}
```

通过数据结构，可以使用`ant design`提供的`form`组件来简单实现，添加数组可以参考：[多表单联动](https://ant.design/components/form-cn/#components-form-demo-form-context)

```tsx
import React, { useCallback } from 'react';
import {
  Form,
  InputNumber,
  Input,
  Select,
  DatePicker,
  Upload,
  Button,
  Modal,
  Descriptions,
} from 'antd';
import { Grid } from '@r-magician/ui';
import { useFloatLayer } from '@r-magician/hooks';

const genderOptions = [
  { label: 'man', value: 'man' },
  { label: 'woman', value: 'woman' },
];
const formCommonProps = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
  validateMessages: {
    required: '${label}不能为空',
  },
};

const WorkExperienceForm = ({ form }) => {
  return (
    <Form name="workExperienceForm" form={form} {...formCommonProps}>
      <Form.Item
        label="公司名称"
        name="companyName"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="岗位名称"
        name="positionName"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="薪水" name="salary">
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="任职起止时间"
        name="timeRange"
        rules={[{ required: true }]}
      >
        <DatePicker.RangePicker picker="date" />
      </Form.Item>
      <Form.Item
        label="工作内容描述"
        name="workContentDesc"
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="业绩描述" name="kpiDesc" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        label="离职原因"
        name="leaveReason"
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>
    </Form>
  );
};

const WorkExperience = (props) => (
  <Descriptions
    style={{
      backgroundColor: '#eee',
      padding: 30,
      marginBottom: 10,
      borderRadius: 5,
    }}
  >
    <Descriptions.Item label="公司名称">{props.companyName}</Descriptions.Item>
    <Descriptions.Item label="岗位名称">{props.positionName}</Descriptions.Item>
    <Descriptions.Item label="薪水">{props.salary}</Descriptions.Item>
    <Descriptions.Item label="离职原因">{props.leaveReason}</Descriptions.Item>
    <Descriptions.Item label="工作内容描述">
      {props.workContentDesc}
    </Descriptions.Item>
  </Descriptions>
);

export default () => {
  const [modalForm] = Form.useForm();
  const { visible, open, close, okHandle } = useFloatLayer({
    onConfirm() {
      return modalForm.validateFields().then(() => {
        modalForm.submit();
        return true;
      });
    },
  });
  const providerFinishHandle = useCallback(
    (name, { values, forms }) => {
      if (name === 'workExperienceForm') {
        const { resumeForm } = forms;
        const workExperiences =
          resumeForm.getFieldValue('workExperiences') || [];
        resumeForm.setFieldsValue({
          workExperiences: [...workExperiences, values],
        });
        close();
        modalForm.resetFields();
      }
    },
    [close],
  );
  return (
    <div>
      <Form.Provider onFormFinish={providerFinishHandle}>
        <Form {...formCommonProps} name="resumeForm">
          <Form.Item label="姓名" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="年龄" name="age" rules={[{ required: true }]}>
            <InputNumber />
          </Form.Item>
          <Form.Item label="性别" name="gender" rules={[{ required: true }]}>
            <Select options={genderOptions} />
          </Form.Item>
          <Form.Item
            label="工作经历"
            rules={[{ required: true }]}
            shouldUpdate={(prevValues, curValues) => true}
          >
            {({ getFieldValue }) => {
              const workExperiences = getFieldValue('workExperiences') || [];
              return (
                <>
                  {workExperiences.map((item) => {
                    return <WorkExperience {...item} />;
                  })}
                  <Button onClick={open}>添加工作经验</Button>
                </>
              );
            }}
          </Form.Item>
        </Form>
        <Modal
          width="70%"
          visible={visible}
          okText="确定"
          cancelText="取消"
          onCancel={close}
          destroyOnClose
          title="添加工作经验"
          onOk={okHandle}
        >
          <WorkExperienceForm form={modalForm} />
        </Modal>
      </Form.Provider>
    </div>
  );
};
```

可以看到代码组织比较多，目前只是做了新增的操作，如果还要添加“编辑”、“删除”等操作的话，代码量将会更多，现在用该组件优化下，它是维护数组的增删改和弹窗的逻辑处理

```tsx
import React, { useCallback } from 'react';
import {
  Form,
  InputNumber,
  Input,
  Select,
  DatePicker,
  Upload,
  Button,
  Modal,
  Descriptions,
} from 'antd';
import { Grid, FloatLayerSelector } from '@r-magician/ui';

const genderOptions = [
  { label: 'man', value: 'man' },
  { label: 'woman', value: 'woman' },
];
const formCommonProps = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
  validateMessages: {
    required: '${label}不能为空',
  },
};

const WorkExperienceForm = ({ form }) => {
  return (
    <Form name="workExperienceForm" form={form} {...formCommonProps}>
      <Form.Item
        label="公司名称"
        name="companyName"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="岗位名称"
        name="positionName"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="薪水" name="salary">
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="任职起止时间"
        name="timeRange"
        rules={[{ required: true }]}
      >
        <DatePicker.RangePicker picker="date" />
      </Form.Item>
      <Form.Item
        label="工作内容描述"
        name="workContentDesc"
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="业绩描述" name="kpiDesc" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        label="离职原因"
        name="leaveReason"
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>
    </Form>
  );
};

const WorkExperience = (props) => (
  <Descriptions
    style={{
      backgroundColor: '#eee',
      padding: 30,
      marginBottom: 10,
      borderRadius: 5,
    }}
  >
    <Descriptions.Item label="公司名称">{props.companyName}</Descriptions.Item>
    <Descriptions.Item label="岗位名称">{props.positionName}</Descriptions.Item>
    <Descriptions.Item label="薪水">{props.salary}</Descriptions.Item>
    <Descriptions.Item label="离职原因">{props.leaveReason}</Descriptions.Item>
    <Descriptions.Item label="工作内容描述">
      {props.workContentDesc}
    </Descriptions.Item>
  </Descriptions>
);

export default () => {
  const [modalForm] = Form.useForm();
  const [form] = Form.useForm();
  return (
    <div>
      <Form
        {...formCommonProps}
        initialValues={{
          workExperiences: [],
        }}
        form={form}
      >
        <Form.Item label="姓名" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="年龄" name="age" rules={[{ required: true }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item label="性别" name="gender" rules={[{ required: true }]}>
          <Select options={genderOptions} />
        </Form.Item>
        <Form.Item
          label="工作经历"
          rules={[{ required: true }]}
          name="workExperiences"
        >
          <FloatLayerSelector
            col={2}
            title="添加工作经验"
            form={modalForm}
            formNode={<WorkExperienceForm form={modalForm} />}
            renderLayout={({ addNode, dataNodes }) => (
              <div>
                <Grid col={1}>{dataNodes}</Grid>
                {addNode}
              </div>
            )}
            renderItem={(data, actions) => {
              return (
                <div key={Date.now()}>
                  <WorkExperience {...data} />
                  <Button onClick={actions.edit}>编辑</Button>
                  <Button onClick={actions.remove}>删除</Button>
                </div>
              );
            }}
          />
        </Form.Item>
      </Form>
    </div>
  );
};
```

## API

展示数组项默认采用`Grid`组件渲染，`col`属性用于分列，如果需要自定义，可通过`renderLayout`覆盖

### Props

```ts
export interface FloatLayerSelectorProps<T = any> extends CommonProps {
  /**
   * Grid的列数
   **/
  col?: number;

  /**
   * Grid的间距
   **/
  gutter?: number;

  /**
   * 渲染列表布局
   **/
  renderLayout: (nodes: {
    addNode: ReactElement;
    dataNodes: (ReactElement | null)[];
  }) => ReactElement;

  /**
   * 弹窗标题
   **/
  title?: string;

  /**
   * 添加数组触发弹窗的组件
   **/
  addNode?: ReactNode;

  /**
   * 默认添加组件的样式
   **/
  addNodeStyle?: CSSProperties;

  /**
   * 值
   **/
  value?: T[];

  /**
   * change事件
   **/
  onChange?: (data: T[]) => void;

  /**
   * 渲染列表项
   **/
  renderItem?: (
    data: T, // 列表项
    actions: {
      remove: () => void; // 删除列表项
      edit: () => void; // 打开弹窗编辑列表项
    },
  ) => ReactElement;

  /**
   * 关闭弹窗事件
   **/
  onClose?: () => void;

  /**
   * 打开弹窗事件
   **/
  onOpen?: () => void;

  /**
   * 表单组件
   **/
  formNode?: ReactElement;

  /**
   * 表单实例
   **/
  form: FormInstance;
}
```
