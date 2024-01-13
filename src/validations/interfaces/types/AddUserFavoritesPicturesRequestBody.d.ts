type AddUserFavoritesPicturesRequestBody = {
  data: PicturesUniquekeys;
};

type PicturesUniquekeys = {
  pictures_uniquekey: Array<string>;
};

export default AddUserFavoritesPicturesRequestBody;
