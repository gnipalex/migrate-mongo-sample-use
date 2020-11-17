module.exports = {
  
  async up(db, client) {
   
    await db.collection('notifications2').createIndex(
        { "id": 1 },
        {
           unique: true, 
           name: "idx_id_unique"
        }
    )

  },

  async down(db, client) {
    
  }

};
