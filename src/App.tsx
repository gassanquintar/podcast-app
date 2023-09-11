import { FC } from 'react';
import Routes from './router/routes';
import { ThemeProvider } from '@mui/material';
import { defaultTheme } from './theme/defaultTheme';
import BaseLayout from './layouts/BaseLayout';
import MainContainer from './layouts/BaseLayout/MainContainer';

const App: FC = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BaseLayout>
          <MainContainer>
            <Routes />
          </MainContainer>
        </BaseLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
