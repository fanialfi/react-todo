export default function NewTask() {
  return (
    <div className="container bg-green-300">
      <div className="text-center p-4  ">
        <h1>Apa Rencanamu Hari ini?</h1>
        <div>
          <form action="">
            <input
              className="px-4 py-2 rounded-l-md focus:outline-none"
              placeholder="Tulis rencanamu disini"
              type="form"
              name="input"
              id="inputForm"
            />
            <button
              className="bg-green-700 p-2 px-4 rounded-r-md"
              type="button"
            >
              +
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
