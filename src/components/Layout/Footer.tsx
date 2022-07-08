import { FlexView, Text } from '@components/Common';

export default () => (
  <footer>
    <FlexView
      content="between"
      css={{ height: `3rem`, margin: `0 3rem` }}
      items="center"
      row
    >
      <Text>Footer</Text>
    </FlexView>
  </footer>
);
