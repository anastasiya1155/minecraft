import create from "zustand";
import { nanoid } from "nanoid";

const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
const setLocalStorage = (key, val) => localStorage.setItem(key, JSON.stringify(val));

export const useStore = create((set) => ({
  texture: 'dirt',
  cubes: getLocalStorage('cubes') || [],
  addCube: (x,y,z) => {
    set((prev) => ({
      cubes: [...prev.cubes, {
        key: nanoid(),
        pos: [x,y,z],
        texture: prev.texture,
      }],
    }));
  },
  removeCube: (x,y,z) => {
    set(prev => ({
      cubes: prev.cubes.filter(({pos}) => pos[0] !== x || pos[1] !== y || pos[2] !== z),
    }));
  },
  setTexture: (text) => {
    set(() => ({
      texture: text,
    }))
  },
  saveWorld: () => {
    set(prev => {
      setLocalStorage('cubes', prev.cubes);
      return prev;
    })
  },
  resetWorld: () => {
    set(() => ({cubes: []}))
  },
}))
