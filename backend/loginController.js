const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      const {  username, email, firstName, lastName, password } = req.body;
      sequelize.query(`
          INSERT INTO users(username, email, first_name, last_name, password)
          VALUES('${username}', '${email}', '${firstName}', '${lastName}', '${password}');
      `).then(dbRes => res.status(200).send(dbRes[0]))
      .catch(err => console.log(err))
    }
}