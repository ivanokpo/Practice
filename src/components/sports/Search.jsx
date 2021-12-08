const Search = ({value, setValue}) => {
    return(
    <label>
                Filter
                <input onChange={e => setValue(e.target.value)} value={value}>

                </input>
            </label>
    
    )

}

export default Search;