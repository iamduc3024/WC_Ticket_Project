import banner1 from '../../../../assets/images/slidesBanner/slideB1.png'
import banner2 from '../../../../assets/images/slidesBanner/slideB2.png'
import banner3 from '../../../../assets/images/slidesBanner/slideB3.png'
import banner4 from '../../../../assets/images/slidesBanner/slideB4.png'
import style from './SlideBar.module.scss';
import clsx from 'clsx';
const { Fragment, useState, useEffect, useRef } = require("react");


function SlideBar() {

    const [index, setIndex] = useState(0); // số thứ tự cua slide
    let autoIndex = 0; // dùng để fix setTimeOut để không tạo ra nhiều setTimeOut
    const MAX_INDEX = 4; // số lượng slide tối đa
    let timerSet = useRef(); // Chỉ tồn tại 1 timer

    // Thay đổi timer sau mỗi lần index thay đổi, tạo thêm 1 lần showNextSlide sau 2 giây
    useEffect(() => {
        timerSet.current = setTimeout(() => {
            showNextSlide()
        }, 2000);
        
    }, [index])

    function showNextSlide() {
        clearTimeout(timerSet.current)
        if(index !== autoIndex) { 
            autoIndex = index;
            
            showNextSlide();
        }
        else if(index === MAX_INDEX - 1) {
            setIndex(0);
            autoIndex = 0;
        }
        else {
            autoIndex++;
            setIndex(index + 1);
        }
    }

    function showPrevSlide() {
        clearTimeout(timerSet.current)
        if(index !== autoIndex) {
            autoIndex = index;
            return;
        }
        if(index === 0) {
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
                <div className={clsx(style.prevBtn, "ti-angle-left")} onClick={showPrevSlide}></div>
                <div className={clsx(style.nextBtn, "ti-angle-right")} onClick={showNextSlide}></div>

                <div style={{textAlign: 'center'}}>
                    <span className={clsx(style.dot, {[style.dotActive] : index === 0})} onClick={() => {
                        setIndex(0)
                        clearTimeout(timerSet.current)
                    }}></span>
                    <span className={clsx(style.dot, {[style.dotActive] : index === 1})} onClick={() => {
                        setIndex(1)
                        clearTimeout(timerSet.current)
                    }}></span>
                    <span className={clsx(style.dot, {[style.dotActive] : index === 2})} onClick={() => {
                        setIndex(2)
                        clearTimeout(timerSet.current)
                    }}></span>
                    <span className={clsx(style.dot, {[style.dotActive] : index === 3})} onClick={() => {
                        setIndex(3)
                        clearTimeout(timerSet.current)
                    }}></span>
                </div>
            </div>
        </Fragment>
    );

}

export default SlideBar;