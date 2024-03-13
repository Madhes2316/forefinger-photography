import './Contents.css';
import preWedPromo from '../assests/videos/preWeddingPromo.mp4'
import mainEntryBanner from '../assests/images/ffpFirstBanner_edited.png';

const Contents = ()=>{
    return(
        <div className="contentsMainDiv">
            <div className='ffpTitlediv'>
                <h4 className='ffpTitleText'>ForeFinger PhotoGraphy</h4>
            </div>
            <img className='firstBannerImg' src={mainEntryBanner} alt='firstBannerImage'></img>
            <video className="w-full h-full object-cover preWedPromo" controls>
                <source src={preWedPromo} type="video/mp4" />
            </video>
        </div>
    );
}

export default Contents;