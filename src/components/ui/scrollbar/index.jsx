import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

function Scrollbar({children, className}) {
    return (
        <PerfectScrollbar className={className}>
            {children}
        </PerfectScrollbar>
    );
}

export default Scrollbar;