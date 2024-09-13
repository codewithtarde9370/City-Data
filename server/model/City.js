import { Schema, model } from 'mongoose';

const citySchema = new Schema({
    cityName: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    population: {
        type: Number,
        required: true,
    },
    area_km2: {
        type: Number,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    timezone: {
        type: String,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    tourist_spots: {
        type: [String],
        required: true,
    }
}, {
    timestamps: true,
});

const City = model('City', citySchema);

export default City;
