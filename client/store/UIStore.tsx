import { create } from 'zustand';

type UIStoreState = {
  action: 'customers'|'test';
};

type UIStoreActions = {
  setAction: (action: 'customers') => void;
};

const useUIStore = create<UIStoreState & UIStoreActions>((set) => ({
  action: 'customers',

  setAction: (action:UIStoreState['action']) => set({ action }),
}));

export default useUIStore;
