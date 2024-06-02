# lark-filter-modal

- 作用：提供一个飞书多维表格的筛选弹窗公共组件，可以快速实现筛选功能，支持 React 和 Vue 版本
- 效果示意图：

  ![示意图](/src/assets/demo.gif)

## 基本用法

- 安装  
  `npm install lark-filter-modal`

## 使用参考

### React 版本

导入库  
`import { useFilterModal } from 'lark-filter-modal/react'`

具体使用参考：

```javascript
import { FC, useState } from 'react';

// 导入库
import { useFilterModal } from 'lark-filter-modal/react';

export const ConfigPanel: FC<{ myTableId: string }> = ({ myTableId }) => {
  const [myFilterInfo, setMyFilterInfo] = useState<any>();

  const { openFilterModal } = useFilterModal({
    saveCallback: (filterInfo) => {
      // 保存后回调
      setMyFilterInfo(filterInfo);
    },

    cancelCallback: () => {
      // 取消后回调
      // console.log('取消回调');
    },
  });

  return (
    <div>
      <div onClick={() => openFilterModal({ tableId: myTableId, filterInfo: myFilterInfo })}>筛选数据</div>
      {myFilterInfo?.conditions?.length > 0 && <div>已选：{myFilterInfo?.conditions?.length} 个条件</div>}
    </div>
  );
};

```

### Vue 版本（待支持）

## API

### useFilterModal

一个 hook，在调用时，传入 savaCallback 和 cancelCallback 两个回调函数，分别在保存和取消时执行。

```javascript
interface IModalPropsType {
  // 点击保存按钮的回调函数
  saveCallback: (filterInfo: IFilterInfo) => void;

  // 点击取消按钮的回调函数
  cancelCallback?: () => void;
}

useFilterModal: (modalProps: modalPropsType) => {
  openFilterModal;
};
```

### openFilterModal

打开弹窗事件

```javascript
interface IExternalParams {
  // 表格 id
  tableId: string;

  // 过滤条件数据
  filterInfo: IFilterInfo;
}

openFilterModal: (params: IExternalParams) => void;
```
