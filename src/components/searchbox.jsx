const SearchBox = ({ placeholder, onChangeHandler }) => {

    return (
        <>
            <div className="row justify-content-end">
                <div className="input-group mb-3 w-25">
                    <input
                        className="form-control shadow-sm border-2"
                        placeholder={placeholder}
                        onChange={onChangeHandler}
                    />

                </div>

            </div>
        </>
    )
};

export default SearchBox;