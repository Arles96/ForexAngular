const functions = require('firebase-functions')

const admin = require('firebase-admin')

admin.initializeApp()

const database = admin.database()


exports.counter = functions.https.onRequest((req, res)=> {
    console.log(req.query)
    database.ref('/mensaje').on('value', (snapshot) => {
        var privado = 0
        var publico = 0 
        snapshot.forEach(doc => {
            if (doc.val().correo===req.query.uid){
                if (doc.val().estado==="publico"){
                    publico++
                }else {
                    privado++
                }
            }
        })
        database.ref('/usuarios/'+req.query.uid).set({
            private : privado,
            public : publico
        })
        res.send("Esta hecho")
    })
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
