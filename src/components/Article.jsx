// Child of ArticleList; formats and displays one post and its optional read time.
function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const readTime =
    minutes == null
      ? null
      : `${minutes < 30 ? "☕️".repeat(Math.ceil(minutes / 5)) : "🍱".repeat(Math.ceil(minutes / 10))} ${minutes} min read`;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      {readTime && <small>{readTime}</small>}
    </article>
  );
}

export default Article;