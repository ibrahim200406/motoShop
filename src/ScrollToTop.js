import {
    useNavigate,
    useLocation
} from 'react-router-dom';


import {

    useEffect
} from 'react';


function ScrollToTop() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
}
export default ScrollToTop;
