import styles from './Search.module.css' 
import search from '../images/search.jpg'
const Search =()=>{
    return(
        <span className={styles.search}>
        <input  type="search" name="search" placeholder="Search..."></input>
        
        </span>
    )

}
export default Search;