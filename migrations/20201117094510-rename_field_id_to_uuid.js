module.exports = {

  async up(db, client) {

    await db.collection('notifications2').dropIndex('idx_id_unique');

    await db.collection('notifications2').updateMany({}, 
        { $rename: { id: "uuid"} }
    );

    await db.collection('notifications2').createIndex(
        { "uuid": 1 },
        {
           unique: true, 
           name: "idx_uuid_unique"
        }
    );

  },

  async down(db, client) {
    
  }

};
