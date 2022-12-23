import connection from "../configs/connectDB"

let getHomepage = (rep, res) => {
    // logic 
    let data = [];
    connection.query(
        'SELECT * FROM `users` ',
        function (err, results, fields) {

            results.map((row) => {
                data.push({
                    id: row.id,
                    email: row.email,
                    address: row.address,
                    firstname: row.lastname,
                    lastname: row.firsrtname
                })
            });

            return res.render('test/index.ejs', { dataUser: JSON.stringify(data) })

        });



}

module.exports = {
    getHomepage
}