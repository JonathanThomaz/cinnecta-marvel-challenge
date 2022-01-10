import { AppProvider } from 'hooks';
import { MyRoutes } from 'routes';

function App() {
  return (
    <AppProvider>
      <MyRoutes />
    </AppProvider>
  );
}

export default App;
