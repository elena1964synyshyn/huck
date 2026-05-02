import { useEffect } from 'react';

const UnmountComponent = () => {
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount useEffect');
    };
  }, []);
  return <div>UnmountComponent</div>;
};

export default UnmountComponent;
