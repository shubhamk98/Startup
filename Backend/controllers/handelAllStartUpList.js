import Startups from '../models/companies.js'

export const handelAllStartUpList = async (req, res) => {
  try {
    const allStartups = await Startups.find({});
    res.json(allStartups);
  } catch (error) {
    console.log("Error fetching startup data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const handelAllStartUpFilter = async ( req, res)=>{
  try {
      const { location, name, industryVertical } = req.query;
      const query = {};
      if (location) query.CityLocation = { $regex: new RegExp(location, 'i') };
      if (name) query.StartupName = { $regex: new RegExp(name, 'i') };
      if (industryVertical) query.IndustryVertical = { $regex: new RegExp(industryVertical, 'i') };
      const startups = await Startups.find(query);
      res.json(startups);
    } catch (error) {
      console.error('Error finding startups:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

