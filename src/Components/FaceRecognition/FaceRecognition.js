import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box, flag}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
            <img id='inputImage' src={imageUrl} alt="" width='500px' height='auto'/>
            { flag === true
                ? <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
                : (
                    <div></div>
                )
            }
            </div>
        </div>
    );
}

export default FaceRecognition;