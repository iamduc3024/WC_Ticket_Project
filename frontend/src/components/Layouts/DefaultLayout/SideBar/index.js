import stationImg from '../../../../assets/images/station-image.jpg';
import nation1 from '../../../../assets/images/nations/VietNam-flag.png';
//Chua doc duoc file.svg
import nation2 from '../../../../assets/images/nations/VietNam-flag.png';
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
                    <div className={style.nen}></div>
                    <div className={style.matchInfo}>
                        <h3>Ten 2 doi bong</h3>
                        <p>lich thi dau</p>
                        <p>dia diem</p>
                        <a href="#">Book now!!!</a>
                    </div>

                    <div className={style.matchImg}>
                        <img className={style.homeFlag} src={nation1} alt="" />
                        <img className={style.awayFlag} src={nation2} alt="" />
                        <img className={style.stationImg} src={stationImg} alt="" />
                    </div>
                </div>

                <div className={clsx(style.matchSlider, style.fadeAnimation, {[style.hidden] : (index !== 1)})} >
                    <div className={style.nen}></div>
                    <div className={style.matchInfo}>
                        <h3>Ten 2 doi bong</h3>
                        <p>lich thi dau</p>
                        <p>dia diem</p>
                        <a href="#">Book now!!!</a>
                    </div>

                    <div className={style.matchImg}>
                        <img className={style.homeFlag} src={nation1} alt="" />
                        <img className={style.awayFlag} src={nation2} alt="" />
                        <img className={style.stationImg} src={stationImg} alt="" />
                    </div>
                </div>

                <div className={clsx(style.matchSlider, style.fadeAnimation, {[style.hidden] : (index !== 2)})} >
                    <div className={style.nen}></div>
                    <div className={style.matchInfo}>
                        <h3>Ten 2 doi bong</h3>
                        <p>lich thi dau</p>
                        <p>dia diem</p>
                        <a href="#">Book now!!!</a>
                    </div>

                    <div className={style.matchImg}>
                        <img className={style.homeFlag} src={nation1} alt="" />
                        <img className={style.awayFlag} src={nation2} alt="" />
                        <img className={style.stationImg} src={stationImg} alt="" />
                    </div>
                </div>

                <div className={clsx(style.matchSlider, style.fadeAnimation, {[style.hidden] : (index !== 3)})} >
                    <div className={style.nen}></div>
                    <div className={style.matchInfo}>
                        <h3>Ten 2 doi bong</h3>
                        <p>lich thi dau</p>
                        <p>dia diem</p>
                        <a href="#">Book now!!!</a>
                    </div>

                    <div className={style.matchImg}>
                        <img className={style.homeFlag} src={nation1} alt="" />
                        <img className={style.awayFlag} src={nation2} alt="" />
                        <img className={style.stationImg} src={stationImg} alt="" />
                    </div>
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