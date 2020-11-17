module.exports = {
  async up(db, client) {

    await db.createCollection('notifications2');

  },

  async down(db, client) {
    // noop
  }

};
