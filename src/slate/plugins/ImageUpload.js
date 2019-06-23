import loadingImageIcon from '../../assets/icons/loading-icon.svg';

const ImageUpload = () => {
  return {
    commands: {
      insertImageFromFile(editor, file){
        editor.insertBlock({
          type: 'image',
          data: { src: loadingImageIcon },
        });
      },
    },
  };
};

export default ImageUpload;