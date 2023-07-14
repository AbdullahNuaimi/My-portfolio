import './section1.css';
import Photo from '../photo/photo.component';
import Introduction from '../introduction/introduction.component';
const Section1 = () =>{
    return(
        <div className="section section1 scroll-smooth" id='Home'>
            <Introduction></Introduction>
            <Photo></Photo>
        </div>
    )
};


export default Section1;