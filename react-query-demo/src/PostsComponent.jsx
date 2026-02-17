import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network error");
  return res.json();
};

export default function PostsComponent() {
  const { data, isLoading, error, refetch } = useQuery(
    "posts",
    fetchPosts,
    {
      staleTime: 1000 * 60, // cache 1 minute
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts</p>;

  return (
    <div>
      <h2>Posts</h2>

      <button onClick={refetch}>
        Refetch Posts
      </button>

      {data.slice(0, 10).map(post => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}