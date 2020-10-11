import React, { FC } from 'react';
import { animated, useSpring } from 'react-spring';
import { StyleSheet, View } from 'react-native';

interface ButtonProps {
  height: number;
  width: number;
  borderRadius: number;
}

const AnimatedView = animated(View);

const Skeleton: FC<ButtonProps> = ({ width, height, borderRadius }) => {
  const props = useSpring({
    to: {
      left: width,
    },
    from: {
      left: width * -1,
    },
    config: {
      duration: 1200,
    },
    loop: true,
  });

  const motionProps = {
    ...props,
    ...style.block,
    backgroundColor: 'blue',
  };

  return (
    <View
      style={{
        width,
        height,
        backgroundColor: '#f0eef0',
        borderRadius,
        overflow: 'hidden',
      }}
    >
      {/* <AnimatedView style={[props, style.block, { backgroundColor: 'blue' }]}> */}
      <AnimatedView style={motionProps}>
        <View style={{ width, height }} />
      </AnimatedView>
    </View>
  );
};

const style = StyleSheet.create({
  block: {
    backgroundColor: 'red',
  },
});

export default Skeleton;
