import PropTypes from 'prop-types';
import css from './Statistics.module.css';


export const Statistics = ({ title, stats}) => {
          
return (<section className ={css.statistics}>
        
 {title && <h2 className={css.title}>{title}</h2>}
  <ul className={css.statList}>
 {stats.map(stat => (
 <li className={css.item} key={stat.id} style={{ backgroundColor: getRandomColor() }}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}%</span>
    </li>   
     ))} 
  </ul>
</section>)
}


function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
        stats: PropTypes.arrayOf(PropTypes.exact({
                id: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired, 
                percentage: PropTypes.string.isRequired
    }))    
}

