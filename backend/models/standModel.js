const db = require('../configdb/db');

// Lọc ra tất cả các vé có thông tin sân, chỗ ngồi, giá tiền
const getAllStandInfo = ((result) => {
    const getAllStandInfoQuery = "SELECT * FROM stand";
    db.query(getAllStandInfoQuery, (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
});
module.exports = getAllStandInfo;

// Lọc theo tên khán đài
// const getAllStandInfoByName = ((stand_name, result) => {
//     const getAllStandInfoByNameQuery = "SELECT * FROM stand WHERE stand_name = `${stand_name}`";
//     db.query(getAllStandInfoByNameQuery, (err, results) => {
//         if (err) {
//             console.log(err);
//             result(err, null);
//         } else {
//             result(null, results);
//         }
//     })
// });
// module.exports = getAllStandInfoByName;

// Lọc theo khán đài và số lượng chỗ ngồi
// const getAllStandInfoByNameAndCapacity = ((stand_name, capacity, result) => {
//     const getAllStandInfoByNameAndCapacityQuery = "SELECT * FROM stand WHERE stand_name = `${stand_name}` AND capacity = `${capacity}`";
//     db.query(getAllStandInfoByNameAndCapacityQuery, (err, results) => {
//         if (err) {
//             console.log(err);
//             result(err, null);
//         } else {
//             result(null, results);
//         }
//     })
// });
// module.exports = getAllStandInfoByNameAndCapacity;

// Lọc theo trận đấu, khán đài và chỗ ngồi
// const getAllStandInfoByNameAndCapacityAndMatchId = ((match_id, stand_name, capacity, result) => {
//     const getAllStandInfoByNameAndCapacityAndMatchIdQuery = "SELECT match.match_id, stand.* FROM stand JOIN `match` ON `match`.match_id = stand.match_id WHERE stand.stand_name = `${stand_name}` AND stand.capacity = `${capacity}`";
//     db.query(getAllStandInfoByNameAndCapacityAndMatchIdQuery, (err, results) => {
//         if (err) {
//             console.log(err);
//             results(err, null);
//         } else {
//             result(null, results);
//         }
//     })
// });
// module.exports = getAllStandInfoByNameAndCapacityAndMatchId;

// Lọc theo giá vé từ price_min tới price_max
// const getAllStandInfoByPrice = ((price_min, price_max, result) => {
//     const getAllStandInfoByPriceQuery = "SELECT * FROM stand WHERE price BETWEEN `${price_min}` AND `${price_max}`";
//     db.query(getAllStandInfoByPriceQuery, (err, results) => {
//         if (err) {
//             console.log(err);
//             result(err, null);
//         } else {
//             result(null, results);
//         }
//     })
// });
// module.exports = getAllStandInfoByPrice;