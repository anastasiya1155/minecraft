import { dirtImg, glassImg, woodImg, logImg, grassImg } from './images';
import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

export const dirtTexture = new TextureLoader().load(dirtImg);
export const glassTexture = new TextureLoader().load(glassImg);
export const woodTexture = new TextureLoader().load(woodImg);
export const logTexture = new TextureLoader().load(logImg);
export const grassTexture = new TextureLoader().load(grassImg);
export const groundTexture = new TextureLoader().load(grassImg);

dirtTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;

groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
