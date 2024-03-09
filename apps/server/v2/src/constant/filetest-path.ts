const base: string = "./public/test/";

/* This block of code is exporting an object with multiple key-value pairs. Each key represents a
specific image format or file type, and the corresponding value is the path to the file within the
`base` directory. */
export default {
  "80mb": base + "80mb.png",
  "20mb": base + "20mb.png",
  "40mb": base + "40mb",
  avif: base + "test.avif",
  jpeg: base + "test.jpg",
  sgi: base + "test.sgi",
  json: base + "test.json",
  broken: base + "test.png",
};
