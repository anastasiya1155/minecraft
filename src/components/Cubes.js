import { useStore } from "../hooks/useStore";
import { Cube } from "./Cube";

export const Cubes = () => {
  const [cubes] = useStore(state => ([state.cubes]));

  return cubes.map(c => (
    <Cube key={c.key} position={c.pos} texture={c.texture} />
  ));
}
