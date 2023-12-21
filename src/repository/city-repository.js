const { City } = require("../models/index");

class CityRepositry {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return City;
    } catch ({ error }) {
      throw { error };
    }
  }
  async deleteCity(CityId) {
    try {
      await City.destroy({
        where: {
          id: CityId,
        },
      });
    } catch ({ error }) {
      throw { error };
    }
  }
}
module.exports = CityRepositry;
