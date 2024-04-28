const TruncatedParagraph = ({ text, maxLength }) => {
  const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

  return <p>{truncatedText}</p>;
};

export default TruncatedParagraph;
