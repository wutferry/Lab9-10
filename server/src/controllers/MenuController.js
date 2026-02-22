const { Menu } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const menus = await Menu.findAll()
      res.send(menus)
    } catch (err) {
      res.status(500).send({ error: 'The menus information was incorrect' })
    }
  },
  async create (req, res) {
    try {
      const payload = Object.assign({}, req.body)
      const menu = await Menu.create(payload)
      res.send(menu.toJSON())
    } catch (err) {
      res.status(500).send({ error: 'Create menu incorrect' })
    }
  },
  async put (req, res) {
    try {
      await Menu.update(req.body, {
        where: { id: req.params.menuId }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({ error: 'Update menu incorrect' })
    }
  },
  async delete (req, res) {
    try {
      const menu = await Menu.findOne({ where: { id: req.params.menuId } })
      if (!menu) return res.status(403).send({ error: 'The menu information was incorrect' })
      await menu.destroy()
      res.send(menu)
    } catch (err) {
      res.status(500).send({ error: 'The menu information was incorrect' })
    }
  },
  async show (req, res) {
    try {
      const menu = await Menu.findByPk(req.params.menuId)
      res.send(menu)
    } catch (err) {
      res.status(500).send({ error: 'The menu information was incorrect' })
    }
  }
}
