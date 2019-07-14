import React from 'react';
import Spin from 'antd/lib/spin';

interface ILoading {
  tip?: string;
}

const Loading: React.FC<ILoading> = ({ tip }) => (
  <section className="loading-container">
    <Spin tip={tip} />
  </section>
);

export default Loading;
