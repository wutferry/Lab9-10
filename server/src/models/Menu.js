module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING
  })
  return Menu
}
