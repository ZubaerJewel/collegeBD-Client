
const SearchButton = () => {
    return (
        <div className="mt-5 mb-10 flex justify-between ">
            <div>

            </div>
          <div className="flex">
          <input type="text" placeholder="Type here" className="ml-2 input input-bordered w-full max-w-xs" />
            <button className="btn btn-accent ml-5">Search</button>
          </div>
        </div>
    );
};

export default SearchButton;