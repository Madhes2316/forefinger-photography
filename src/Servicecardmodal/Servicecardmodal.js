import './Servicecardmodal.css';


const Servicecardmodal = (props)=>{
    if(!props.openModal){
        return null;
    }
    else{
    return(
        <div className="modalDivOverlay">
            <div className='closeBtn' onClick={() =>props.setOpenModal(false)}>X</div>
            <div className="container">
            {
                props.cardContent.modalImages.map(modalImage =>(
                    <div className="box" key={modalImage.id}>
                    <img src={modalImage.imgSrc} alt="" />
                   </div>
                ))
            }
            </div>
            <div>
            <a className='goBackBtn' onClick={() =>props.setOpenModal(false)}>
                <svg fill="#000000" height="20px" width="20px" viewBox="0 0 489.00 489.00">
                    <path d="M429.4,255.033c-35.4-43.1-102.1-94.4-219.7-98.8v-79.8c0-4.7-2.7-9.1-7-11.1s-9.4-1.4-13,1.6L4.5,219.633 c-2.8,2.3-4.5,5.8-4.5,9.4c0,3.7,1.6,7.1,4.4,9.4l185.2,153.3c3.7,3,8.7,3.7,13,1.6c4.3-2,7-6.3,7-11.1v-79.5 c76.8,0.3,194.2,6,256.5,115.9c2.2,3.9,6.3,6.2,10.7,6.2c1,0,2.1-0.1,3.1-0.4c5.4-1.4,9.1-6.3,9.1-11.8 C489.1,371.533,473.4,308.633,429.4,255.033z M197.4,278.233L197.4,278.233c-3.3,0-6.4,1.3-8.7,3.6s-3.6,5.4-3.6,8.7v65.7 l-153.5-127.1l153.6-126.7v65.7c0,6.7,5.4,12.2,12.1,12.3c176,1.7,241.6,109,260.7,184.4 C382.2,278.333,268.7,278.233,197.4,278.233z"></path>
                </svg>
                <span style={{ marginLeft: '5px' }}>Go Back</span>
            </a>
            </div>
        </div>
    );
    }
}

export default Servicecardmodal;