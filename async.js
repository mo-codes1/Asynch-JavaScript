const CANDIES_DB = ['Mars', 'Maltesers', 'Skittles', 'Fraise Tagada'];


const fetchCandiesFromDatabase = (handleResult) => {
  setTimeout(() => {
    handleResult(CANDIES_DB);
  }, 2000);
}
