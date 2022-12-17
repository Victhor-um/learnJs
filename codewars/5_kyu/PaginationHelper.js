// https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.result = [];
    for (let i = 0; i < Math.ceil(collection.length / itemsPerPage); i++) {
      this.result.push([
        ...collection.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage),
      ]);
    }
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.collection.length;
  }
  pageCount() {
    return this.result.length;
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    if (pageIndex >= 0 && pageIndex < this.result.length)
      return this.result[pageIndex].length;
    return -1;
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    if (
      itemIndex < 0 ||
      itemIndex >= this.collection.length ||
      this.collection.length === 0
    )
      return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}
