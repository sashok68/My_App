import React from 'react';
import { View } from 'react-native';

interface SpacingProps {
  height?: number;
  width?: number;
}

export function Spacing({ height = 0, width = 0 }: SpacingProps) {
  return <View style={{ height, width }} />;
}
