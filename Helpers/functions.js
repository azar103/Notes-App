export const getNumberOfNotesByCategory = (category, arr) => {
  return arr.filter(item => item.category === category).length;
};
