// Since I am using ES6, need to provide file extension '.js' to import a file
// Nodejs experimental solutions to omit the file extension '.js' are,
// run the file using the flag --es-module-specifier-resolution=node
// or the flag --experimental-specifier-resolution=node
// i.e. command: node --es-module-specifier-resolution=node startMusicPlayerConsumer
import MusicPlayerConsumer from "./musicPlayerConsumer.js";

const consumer = new MusicPlayerConsumer();
consumer.startPlayList();