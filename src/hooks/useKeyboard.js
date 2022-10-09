import { useCallback, useEffect, useState } from "react";

function actionByKey(key) {
  const keyActionMap = {
    KeyW: 'moveForward',
    ArrowUp: 'moveForward',
    KeyS: 'moveBackward',
    ArrowDown: 'moveBackward',
    KeyA: 'moveLeft',
    ArrowLeft: 'moveLeft',
    KeyD: 'moveRight',
    ArrowRight: 'moveRight',
    Space: 'jump',
    Digit1: 'dirt',
    Digit2: 'grass',
    Digit3: 'glass',
    Digit4: 'wood',
    Digit5: 'log',
  }

  return keyActionMap[key];
}

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    texture1: false,
    texture2: false,
    texture3: false,
    texture4: false,
    texture5: false,
  });

  const handleKeyDown = useCallback((e) => {
    const a = actionByKey(e.code)
    if (a) {
      setActions((prev) => ({
        ...prev,
        [a]: true,
      }));
    }
  }, []);

  const handleKeyUp = useCallback((e) => {
    const a = actionByKey(e.code)
    if (a) {
      setActions((prev) => ({
        ...prev,
        [a]: false,
      }));
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, [handleKeyUp, handleKeyDown]);

  return actions;
}
