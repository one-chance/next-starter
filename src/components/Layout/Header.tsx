import { FlexView, Text } from '@components/Common';
import { useTranslation } from 'next-i18next';

export default () => {
  const { t } = useTranslation(`common`);

  return (
    <header>
      <FlexView
        content="between"
        css={{ margin: `0 3rem`, height: `3rem` }}
        items="center"
        row
      >
        <Text>{t(`logo`)}</Text>
        <Text>언어</Text>
      </FlexView>
    </header>
  );
};
