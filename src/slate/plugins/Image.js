const ImageUpload = () => {
  return {
    commands: {
      insertImageFromFile(editor, file){
        editor.insertBlock({
          type: 'image',
          data: { file },
        });
      },
    },
  };
};

export default ImageUpload;