import './App.css';
import Contextual from './component/contextual';
import { Layout, Page, Text } from '@shopify/polaris';
import WidgetPosition from './component/widgetPosition';
import WidgetAppearance from './component/widgetAppearance';
import WidgetText from './component/widgetText';
import { useSelector } from 'react-redux';

function App() {
  const display = useSelector((state) => state.displaySave);

  return (
    <div className="App">
      {
        display ? <Contextual /> : <></>
      }
      <Page>
        <Text variant='heading2xl' as='h2'>Widget Setting</Text>
        <Layout.Section>
          <WidgetPosition />
        </Layout.Section>
        <Layout.Section>
          <WidgetAppearance />
        </Layout.Section>
        <Layout.Section>
          <WidgetText />
        </Layout.Section>
      </Page>
    </div>
  );
}

export default App;
