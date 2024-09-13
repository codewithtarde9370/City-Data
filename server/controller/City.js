import City from "./../model/City.js";


const postCity =  async (req,res) => {
    const {       
         cityName,
        state,
        population,
        area_km2,
        language,
        timezone,
        latitude,
        longitude,
        tourist_spots
    } = req.body;

    const city = new City({
        cityName,
        state,
        population,
        area_km2,
        language,
        timezone,
        latitude,
        longitude,
        tourist_spots
    });

    const savedCity = await city.save();

    res.json({
        success : true,
        data : savedCity,
        message : "City Data created Successfully!!"
    })
}
const getCities= async (req, res) => {

    const allCities = await City.find().sort({createdAt: -1})
    
    res.json({
  
        success: true,
        data: allCities,
        message:"heyy Tejasvi, Cities are fetched successfully"
      });
    }

export {postCity, getCities}