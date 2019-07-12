import * as React from 'react';

interface ITestProps {
  status: boolean;
}

const Public: React.SFC<ITestProps> = ({ status }) => {
  const [gender, setGender] = React.useState('Female');

  React.useEffect(() => {
    if (status) {
      setGender('Female');
    } else {
      setGender('Male');
    }
  }, [status]);

  return (
    <div>
      <h1>GENDER: {gender}</h1>
    </div>
  );
};

export default Public;
