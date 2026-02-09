export default function AddRecipe() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-6">

      <form className="bg-white p-6 rounded-xl shadow w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">
          Add New Recipe
        </h2>

        <input
          placeholder="Recipe Title"
          className="w-full border p-3 rounded mb-3"
        />

        <input
          placeholder="Author"
          className="w-full border p-3 rounded mb-3"
        />

        <textarea
          placeholder="Instructions"
          rows="4"
          className="w-full border p-3 rounded mb-4"
        />

        <button className="bg-orange-600 text-white px-4 py-3 rounded w-full">
          Save Recipe
        </button>
      </form>

    </div>
  );
}