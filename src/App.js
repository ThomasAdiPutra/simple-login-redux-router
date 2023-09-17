import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
