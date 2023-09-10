import { FC } from 'react';
import Routes from './router/routes';
import { ThemeProvider } from '@mui/material';
import { defaultTheme } from './theme/defaultTheme';
import BaseLayout from './layouts/BaseLayout';
import MainBar from './layouts/BaseLayout/MainBar';

const App: FC = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BaseLayout>
          <MainBar>
            <Routes />
          </MainBar>
        </BaseLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
