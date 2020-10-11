import React, { FC } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Skeleton from './src/components/Skeleton';

const App: FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Skeleton borderRadius={4} height={30} width={200} />
      </SafeAreaView>
    </>
  );
};

export default App;
