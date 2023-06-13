const SearchBox = ({ placeholder, onChangeHandler }) => {

    return (
        <>
            <input
                className="form-control shadow-sm border-2"
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </>
    )
};

export default SearchBox;