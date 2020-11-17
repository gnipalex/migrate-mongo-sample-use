module.exports = {
  
  async up(db, client) {
    
    await db.collection('notifications2').insertMany(
     [
       {
         id: "notification1",
         description: "test notification 1"
       },
       {
         id: "notification2",
         description: "test notification 1"
       }
     ]
    )

    console.log('inserted several test notifications')

  },

  async down(db, client) {
    
  }

}; 
