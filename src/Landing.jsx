export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow">
        <h1 className="text-2xl font-bold text-orange-600">
          RecipeShare
        </h1>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
          Get Started
        </button>
      </header>

      {/* Hero */}
      <main className="flex flex-1 items-center justify-center">
        <div className="text-center max-w-xl">
          <h2 className="text-4xl font-bold mb-4">
            Discover & Share Amazing Recipes 🍲
          </h2>
          <p className="text-gray-600 mb-6">
            Upload your favorite meals and explore what others are cooking.
          </p>

          <button className="bg-orange-600 text-white px-6 py-3 rounded-xl text-lg">
            Browse Recipes
          </button>
        </div>
      </main>

    </div>
  );
}