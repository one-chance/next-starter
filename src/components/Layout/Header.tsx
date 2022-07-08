import { FlexView, Text } from '@components/Common';

export default () => (
  <header>
    <FlexView
      content="between"
      css={{ margin: `0 3rem`, height: `3rem` }}
      items="center"
      row
    >
      <Text>로고</Text>
      <Text>언어</Text>
    </FlexView>
  </header>
);
