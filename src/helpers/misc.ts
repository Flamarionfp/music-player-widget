export const truncate = (text: string, offset: number) => {
  if (offset > text.length) {
    return text;
  }

  return `${text.slice(0, offset)}...`;
};
