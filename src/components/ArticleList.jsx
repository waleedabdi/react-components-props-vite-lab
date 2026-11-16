import Article from "./Article";

// Child of App; maps each post to an Article child using its unique id.
function ArticleList({ posts = [] }) {
  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} {...post} />
      ))}
    </main>
  );
}

export default ArticleList;