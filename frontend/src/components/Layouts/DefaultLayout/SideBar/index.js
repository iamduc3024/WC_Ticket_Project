import banner1 from '../../../../assets/images/slidesBanner/slideB1.png'
import banner2 from '../../../../assets/images/slidesBanner/slideB2.png'
import banner3 from '../../../../assets/images/slidesBanner/slideB3.png'
import banner4 from '../../../../assets/images/slidesBanner/slideB4.png'
import style from './SlideBar.module.scss';
import clsx from 'clsx';
const { Fragment, useState, useEffect, useMemo, useRef } = require("react");


function SideBar() {

    const cst = 1;
    let slides = document.getElementsByClassName(style.matchSlider);
    const [index, setIndex] = useState(0);
    let autoIndex = 0;
    const MAX_INDEX = 4;
    let timerSet = useRef();


    useEffect(() => {
        timerSet.current = setTimeout(() => {
            showNextSlide()
        }, 2000);
        
    }, [index])

    function showNextSlide() {
        if(index != autoIndex) { 
            autoIndex = index;
            
            showNextSlide();
        }
        else if(index == MAX_INDEX - 1) {
            setIndex(0);
            autoIndex = 0;
        }
        else {
            autoIndex++;
            setIndex(index + 1);
        }
    }

    function showPrevSlide() {
        if(index != autoIndex) {
            autoIndex = index;
            return;
        }
        if(index == 0) {
            setIndex(MAX_INDEX - 1);
            autoIndex = MAX_INDEX - 1;
        }
        else {
            setIndex(index => index -1);
            autoIndex--;
        }
    }

    return(
        <Fragment>
            <div className={style.matchesSliderContainer}>
                
                <div className={clsx(style.matchSlider, style.fadeAnimation, {[style.hidden] : (index !== 0)})} >
                        <img className={style.matchImg} src={banner1} alt="" />
                </div>

                <div className={clsx(style.matchSlider, style.fadeAnimation, {[style.hidden] : (index !== 1)})} >
                        <img className={style.matchImg} src={banner2} alt="" />
                </div>

                <div className={clsx(style.matchSlider, style.fadeAnimation, {[style.hidden] : (index !== 2)})} >
                        <img className={style.matchImg} src={banner3} alt="" />
                </div>

                <div className={clsx(style.matchSlider, style.fadeAnimation, {[style.hidden] : (index !== 3)})} >
                        <img className={style.matchImg} src={banner4} alt="" />
                </div>
                <a className={style.prevBtn} onClick={showPrevSlide}><i className="ti-angle-left"></i></a>
                <a className={style.nextBtn} onClick={showNextSlide}><i className="ti-angle-right"></i></a>

                <div style={{textAlign: 'center'}}>
                    <span className={clsx(style.dot, {[style.dotActive] : index == 0})} onClick={() => {
                        setIndex(0)
                        clearTimeout(timerSet.current)
                    }}></span>
                    <span className={clsx(style.dot, {[style.dotActive] : index == 1})} onClick={() => {
                        setIndex(1)
                        clearTimeout(timerSet.current)
                    }}></span>
                    <span className={clsx(style.dot, {[style.dotActive] : index == 2})} onClick={() => {
                        setIndex(2)
                        clearTimeout(timerSet.current)
                    }}></span>
                    <span className={clsx(style.dot, {[style.dotActive] : index == 3})} onClick={() => {
                        setIndex(3)
                        clearTimeout(timerSet.current)
                    }}></span>
                </div>
            </div>
        </Fragment>
    );

}

export default SideBar;