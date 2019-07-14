import React from 'react';
import Empty from 'antd/lib/empty';

interface IEmptySlate {
  description: string;
}

const EmptySlate: React.FC<IEmptySlate> = ({ description }) => (
  <section>
    <Empty description={description} />
  </section>
);

export default EmptySlate;
