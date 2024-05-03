import "./sortSelect.css"

const SortSelect = ({handleSortSelect}) => {

    function handleSortChange(e){
        handleSortSelect(e.target.value);
    }

    return (
        <div className="profile-list__header-sort">
             <form className="sort-select">
                <select name="sort-select" onChange={handleSortChange} id="sort-select" defaultValue="default">
                    <option value="default">Sort by date</option>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </select>
            </form>   
        </div>
    )
  }
  
  export default SortSelect;