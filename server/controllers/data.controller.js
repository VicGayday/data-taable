const db = require('../db')

class DataController {
  async createData(req, res) {
    const { date, name, quantity, distance } = req.body
    const newData = await db.query('INSERT INTO datas ( date, title, quantity, distance) values ($1, $2, $3, $4) RETURNING *', [date, title, quantity, distance])
    console.log(date, name, quantity, distance);
    res.json(newData.rows[0])
  }

  async getDatas(req, res) {
    const datas = await db.query('SELECT * FROM datas')
    res.json(datas.rows)
  }

  async getOneData(req, res) {
    const id = req.params.id       //из параметра запроса надо получить id
    const data = await db.query('SELECT * FROM datas where id = $1', [id])
    res.json(data.rows[0])                   // возвращаем обратно на клиент
  }

  async updateData(req, res) {
    const { id, date, name, quantity, distance } = req.body         //получим из тела запроса все данные
    const data = await db.query('UPDATE datas set date=$1, title=$2, quantity=$3, distance=$4 where id = $5 RETURNING *',
      [date, title, quantity, distance, id])
    res.json(data.rows[0])            // результат запроса возвращаем обратно на клиент
  }

  async deleteData(req, res) {
    const id = req.params.id       //из параметра запроса надо получить id
    const data = await db.query('DELETE  FROM datas where id = $1', [id])
    res.json(data.rows[0])                   // возвращаем обратно
  }
}

module.exports = new DataController