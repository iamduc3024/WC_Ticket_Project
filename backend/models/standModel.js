const db = require('../configdb/db');

class standModel {
    // Query all information from stand
    getAllStandInfo = (result) => {
        const getAllStandInfoQuery = "SELECT * FROM stand";
        db.query(getAllStandInfoQuery, (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        })
    }

    // Query all information from stand by name
    getAllStandInfoByName = (standName, result) => {
        const getAllStandInfoByNameQuery = "SELECT * FROM stand WHERE stand_name = ?";
        db.query(getAllStandInfoByNameQuery, [standName], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        })
    }

    // Query all information from stand by price
    getAllStandInfoByPrice = (priceMin, priceMax, result) => {
        const getAllStandInfoByPriceQuery = "SELECT * FROM stand WHERE price BETWEEN ? AND ?";
        db.query(getAllStandInfoByPriceQuery, [priceMin, priceMax], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        })
    }

    // Update capacity when customer order
    updateStandWhenCustomerOrder = (data, standName, standId, result) => {
        const updateStandWhenCustomerOrderQuery = "UPDATE stand SET capacity = capacity - ? WHERE stand_name = ? AND stand_id = ?";
        db.query(updateStandWhenCustomerOrderQuery,[data.quantity, standName, standId] , (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        })
    }
}

module.exports = new standModel();

// Lọc ra tất cả các vé có thông tin sân, chỗ ngồi, giá tiền
// const getAllStandInfo = ((result) => {
//     const getAllStandInfoQuery = "SELECT * FROM stand";
//     db.query(getAllStandInfoQuery, (err, results) => {
//         if (err) {
//             console.log(err);
//             result(err, null);
//         } else {
//             result(null, results);
//         }
//     })
// });
// module.exports = getAllStandInfo;

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