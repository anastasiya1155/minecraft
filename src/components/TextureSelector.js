import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";
import { useKeyboard } from "../hooks/useKeyboard";
import { dirtImg, glassImg, grassImg, logImg, woodImg } from "../images/images";

const images = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: woodImg,
  log: logImg,
}

export  const TextureSelector = () => {
  const [visible, setVisible] = useState(false);
  const [activeTexture, setTexture] = useStore(state => [state.texture, state.setTexture]);
  const {dirt, grass, glass, wood, log} = useKeyboard();

  useEffect(() => {
    const pressedTexture = Object.entries({dirt, grass, glass, wood, log}).find(([_, val]) => val);
    if (pressedTexture) {
      setTexture(pressedTexture[0]);
    }
  }, [dirt, grass, glass, wood, log])

  useEffect(() => {
    setVisible(true);
    const timerId = setTimeout(() => setVisible(false), 2000)

    return () => {
      clearTimeout(timerId);
    }
  }, [activeTexture]);

  return visible && (
    <div className="absolute centered texture-selector">
      {Object.entries(images).map(([key, img]) => (
        <img src={img} key={key} className={`${key === activeTexture ? 'active' : ''}`} alt={key} />
      ))}
    </div>
  )
}
