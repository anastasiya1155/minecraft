import { dirtImg, glassImg, woodImg, logImg, grassImg } from './images';
import { TextureLoader } from "three";

export const dirtTexture = new TextureLoader().load(dirtImg);
export const glassTexture = new TextureLoader().load(glassImg);
export const woodTexture = new TextureLoader().load(woodImg);
export const logTexture = new TextureLoader().load(logImg);
export const grassTexture = new TextureLoader().load(grassImg);
export const groundTexture = new TextureLoader().load(grassImg);
