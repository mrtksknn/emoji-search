import emojiList from "./EmojiList.json";

const filterEmoji = (searchText, maxResults) => {
  return emojiList
    .filter(emoji => {
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (emoji.keywords.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}

export default filterEmoji;