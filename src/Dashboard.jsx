function RecipeCard({ title, author }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="h-40 bg-gray-200 rounded-lg mb-3"></div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">By {author}</p>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <h2 className="text-3xl font-bold mb-6">Recipe Dashboard</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <RecipeCard title="Grilled Chicken" author="James" />
        <RecipeCard title="Fruit Smoothie" author="Anna" />
        <RecipeCard title="Veggie Rice" author="Mike" />
      </div>

    </div>
  );
}