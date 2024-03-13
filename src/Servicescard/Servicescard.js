import './Servicescard.css';
import {useState} from 'react';
import preWedImg2 from '../assests/images/preWedding2.jpg';
import wedImg from '../assests/images/Wedding.jpg';
import indShootImg from '../assests/images/grpPic.jpg';
import matShootImg from '../assests/images/babyShower.jpg';
import pubertyFunc from '../assests/images/allatonce.jpg';
import Servicecardmodal from '../Servicecardmodal/Servicecardmodal';
import { allAtOnceShoot as pubertyFunction, bdayCorpShoot, indusShoot, matShoot, preWedShoot, wedShoot } from '../SampleImages';

const Servicescard = ()=>{

    const cardServiceItems = [
        {
            id:1,
            imgSrc:preWedImg2,
            imgTitle:'Pre Wedding Shoot',
            imgDesp:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi soluta adipisci nisi culpa ad fuga repudiandae enim tenetur aliquam quod recusandae tempora est ipsam totam rerum, deserunt ullam ut odit.',
            btnName:'View more Samples',
            modalImages:preWedShoot
        },
        {
            id:2,
            imgSrc:wedImg,
            imgTitle:'Wedding Shoot',
            imgDesp:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi soluta adipisci nisi culpa ad fuga repudiandae enim tenetur aliquam quod recusandae tempora est ipsam totam rerum, deserunt ullam ut odit.',
            btnName:'View more Samples',
            modalImages:wedShoot
        },
        {
            id:3,
            imgSrc:preWedImg2,
            imgTitle:'Industrial Shoots',
            imgDesp:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi soluta adipisci nisi culpa ad fuga repudiandae enim tenetur aliquam quod recusandae tempora est ipsam totam rerum, deserunt ullam ut odit.',
            btnName:'View more Samples',
            modalImages:indusShoot
        },
        {
            id:4,
            imgSrc:indShootImg,
            imgTitle:'Birthday & Corporate Parties',
            imgDesp:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi soluta adipisci nisi culpa ad fuga repudiandae enim tenetur aliquam quod recusandae tempora est ipsam totam rerum, deserunt ullam ut odit.',
            btnName:'View more Samples',
            modalImages:bdayCorpShoot
        },
        {
            id:5,
            imgSrc:matShootImg,
            imgTitle:'Maternity Shoots',
            imgDesp:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi soluta adipisci nisi culpa ad fuga repudiandae enim tenetur aliquam quod recusandae tempora est ipsam totam rerum, deserunt ullam ut odit.',
            btnName:'View more Samples',
            modalImages:matShoot
        },
        {
            id:6,
            imgSrc:pubertyFunc,
            imgTitle:'Puberty Function',
            imgDesp:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi soluta adipisci nisi culpa ad fuga repudiandae enim tenetur aliquam quod recusandae tempora est ipsam totam rerum, deserunt ullam ut odit.',
            btnName:'View more Samples',
            modalImages:pubertyFunction
        }
    ]
    
    const [openModal,setOpenModal] = useState(false);
    const [cardContent,setCardContent] = useState();

    return(
        <div className="mainCardDiv" id='serviceCardComponent'>
        {
            cardServiceItems.map(cardItem =>(
                <div key={cardItem.id} className="cardDiv">
                    <img className="cardBannerImg" src={cardItem.imgSrc} alt=""/>
                    {(cardItem.imgTitle.length<20) ? (<h2 className="cardTitle">{cardItem.imgTitle}</h2>) : (<h2 className="cardTitleBigNames">{cardItem.imgTitle}</h2>)}
                    <hr />
                    <p className="cardDesp">{cardItem.imgDesp}</p>
                    <input className="cardBtn" type="button" value={cardItem.btnName}
                    onClick={
                        ()=>{
                            setOpenModal(true);
                            setCardContent(cardItem)
                        }
                    }
                    />
                </div>
            ) )
        }
        <Servicecardmodal 
            openModal = {openModal}
            setOpenModal = {setOpenModal}
            cardContent = {cardContent}
        />
        </div>
    );
}

export default Servicescard;