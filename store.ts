import { create } from 'zustand';

export enum TreeState {
  SCATTERED = 'SCATTERED',
  TREE_SHAPE = 'TREE_SHAPE',
  PHOTO_ZOOM = 'PHOTO_ZOOM',
}

interface AppState {
  currentState: TreeState;
  photos: string[]; // URLs of uploaded photos
  selectedPhotoIndex: number | null;
  isRotating: boolean; // Triggered by hand rotation
  
  // Actions
  setState: (state: TreeState) => void;
  toggleState: () => void;
  addPhoto: (url: string) => void;
  selectPhoto: (index: number | null) => void;
  setRotating: (rotating: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  currentState: TreeState.TREE_SHAPE,
  photos: [], 
  selectedPhotoIndex: null,
  isRotating: false,

  setState: (s) => set({ currentState: s }),
  
  toggleState: () =>
    set((state) => {
      // Cycle logic for button click fallback
      if (state.currentState === TreeState.TREE_SHAPE) return { currentState: TreeState.SCATTERED };
      if (state.currentState === TreeState.SCATTERED) return { currentState: TreeState.TREE_SHAPE };
      return { currentState: TreeState.TREE_SHAPE };
    }),

  addPhoto: (url) => set((state) => ({ photos: [...state.photos, url] })),
  
  selectPhoto: (index) => set({ selectedPhotoIndex: index }),
  
  setRotating: (isRotating) => set({ isRotating }),
}));