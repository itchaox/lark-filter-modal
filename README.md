# lark-filter-modal

飞书多维表格-视图筛选公共组件

## 基本用法

- 安装  
  `npm install lark-filter-modal`

## 使用参考

### React 版本

- 在配置组件中使用

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
