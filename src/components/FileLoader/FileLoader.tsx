import React, { useEffect, useState } from 'react';
import Loading from '@components/Loading/Loading';

interface Props {
  fileUrl: string;
}

interface State {
  isLoading: boolean;
}

// const Loading: React.FC = () => {
//   return <div>Loading...</div>;
// };

const FileLoader: React.FC<Props> = ({ fileUrl }) => {
  const [state, setState] = useState<State>({ isLoading: true });

  useEffect(() => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        setState({ isLoading: false });
      }
    };

    xhr.open('GET', fileUrl);
    xhr.send();
  }, [fileUrl]);

  return state.isLoading ? <Loading /> : <div />;
};

export default FileLoader;
