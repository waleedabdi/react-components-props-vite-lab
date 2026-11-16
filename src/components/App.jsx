import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";

// Root component: passes blog data to the header, about panel, and article list.
function App({ blog = blogData }) {
  return (
    <div className="App">
      <Header name={blog.name} />
      <About image={blog.image} about={blog.about} />
      <ArticleList posts={blog.posts} />
    </div>
  );
}

export default App;
