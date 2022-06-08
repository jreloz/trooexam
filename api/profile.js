
module.exports = function(app, db){

    app.post('/profile',(request,response)=>{
        
        let first_name = request.body.first_name;
        let middle_name = request.body.middle_name;
        let last_name = request.body.last_name;
        let email = request.body.email;
        let mobile_number = request.body.mobile_number;


        let querystring = `INSERT INTO profile (first_name, middle_name, last_name, email, mobile_number) VALUES('${first_name}','${middle_name}','${last_name}','${email}','${mobile_number}')`;

        db.query(querystring,(error,result)=>{
            if (error) {
                console.log("Error",error.sqlMessage);
            } else {
                response.send({
                    statuscode:201,
                    message:"Profile Added"
                });
            }
        })
    });



    app.get('/profile',(request,response)=>{
        let querystring = `SELECT * FROM profile`;

        db.query(querystring,(error,result)=>{
            if (error) {
                console.log("Error",error.sqlMessage);
            } else {
                if (result.length > 0) {
                    response.send({
                        statuscode: 200,
                        data: result,
                        message: "All Profile"
                    });
                } else {
                    response.send({
                        statuscode: 200,
                        data: [],
                        message: "Profile List is Empty"
                    });
                }
            }
        })
    });



    app.get('/profile/:id',(request,response)=>{

        let profileid = request.params.id;

        let querystring = `SELECT * FROM profile WHERE id = '${profileid}'`;

        db.query(querystring,(error,result)=>{
            if (error) {
                console.log("Error",error.sqlMessage);
            } else {
                if (result.length > 0) {
                    response.send({
                        statuscode: 200,
                        data: result[0],
                        message: "Single Profile"
                    });
                } else {
                    response.send({
                        statuscode: 200,
                        data: [],
                        message: "Profile List is Empty"
                    });
                }
            }
        })
    });



    app.delete('/profile/:id',(request,response)=>{

        let profileid = request.params.id;

        let querystring = `DELETE FROM profile WHERE id = '${profileid}' `;

        db.query(querystring,(error,result)=>{
            if (error) {
                console.log("Error",error.sqlMessage);
            } else {
                response.send({
                    statuscode: 200,
                    data: result,
                    message: "Profile Deleted"
                });
            }
        })
    });



    app.post('/profile/update/:id',(request,response)=>{
        
        let profileid = request.params.id;
        let first_name = request.body.first_name;
        let middle_name = request.body.middle_name;
        let last_name = request.body.last_name;
        let email = request.body.email;
        let mobile_number = request.body.mobile_number;


        let querystring = `UPDATE profile set first_name = '${first_name}', middle_name = '${middle_name}', last_name = '${last_name}', email = '${email}', mobile_number = '${mobile_number}' WHERE id = '${profileid}'`;

        db.query(querystring,(error,result)=>{
            if (error) {
                console.log("Error",error.sqlMessage);
            } else {
                response.send({
                    statuscode:201,
                    message:"Profile Updated"
                });
            }
        })
    });
    
}