const _onLoad = (accept, reader) => {
  let image = new Image();
  
  image.src = reader.result;
  accept(image);
}

const uploadImage = file => {
  let reader = new FileReader();

  return new Promise((accept, fail) => {
    reader.onload = () => _onLoad(accept, reader);
    reader.onerror = () => fail(reader.error);
    reader.readAsDataURL(file);
  });
};

export default uploadImage;
