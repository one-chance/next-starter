import { FlexView, Text } from '@components/Common';
import { useTranslation } from 'next-i18next';

export default () => {
  const { t } = useTranslation(`common`);

  return (
    <footer>
      <FlexView
        content="between"
        css={{ width: `100%`, height: `3rem`, margin: `0 3rem` }}
        items="center"
        row
      >
        <Text>{t(`footer`)}</Text>
      </FlexView>
    </footer>
  );
};
