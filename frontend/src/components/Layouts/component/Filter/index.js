import style from './Filter.module.scss'
import axios from 'axios';

// function abc (){
//     data: {
//         return {
//           standName: "",
//           price: "",
//         };
//       }
//       methods: {
//         //create new product
//         async saveProduct => {
//           try {
//             await axios.get("http://localhost:3000/stand/showAllStand", {
//               stand_name: this.standName,
//               price: this.price,
//             });
//             (this.standName = ""), (this.price = "");
//             this.$router.get("/");
//           } catch (err) {
//             console.log(err);
//           }
//         };
//       }
// }

function Filter(props) {
    return (
        <div className={style.filterContainer}>
        <label htmlFor="filterContainer">Filter</label>
        <br />
        <section className={style.standInpContainer}>
            <label htmlFor="standNameInput">Stand name:</label>
            <br />
            <input className={style.standNameInput} type="text" placeholder="Stand name..." />
            <br />
        </section>

        <section className={style.stationInpContainer}>
            <label htmlFor="stationInput">Station name:</label>
            <br />
            <input className={style.stationInput} type="text" placeholder="Station name..." />
            <br />
        </section>

        <section className={style.dateInpContainer}>
            <label htmlFor="dateFromInput">Date from:</label>
            <br />
            <input className={style.dateFromInput} type="date"  />
            <br />
            <label htmlFor="dateToInput">To:</label>
            <br />
            <input className={style.dateToInput} type="date" />
            <br />
        </section>
        
        <section className={style.priceInpContainer}>
            <label htmlFor="priceFromInput">Price from:</label>
            <br />
            <input className={style.priceFromInput} type="text" />
            <br />
            <label htmlFor="priceToInput">To:</label>
            <br />
            <input className={style.priceToInput} type="text" />
            <br />
        </section>
        <button onClick={() => console.log(123)} className={style.filterSubmitBtn}>Filter</button>
    </div>
    )
}

export default Filter;