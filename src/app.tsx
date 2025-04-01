import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Router from './routers';
import { ThemeProvider } from './contexts/ThemeContext';

export function App() {

  return (
    <ThemeProvider >
      <Theme accentColor="blue" appearance="dark" radius="small">
        <Router />
      </Theme>
    </ThemeProvider>
  )
}
