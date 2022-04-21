const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const PenambahanSchema = new Schema({
    jumlah_positif: {
        type: Number,
        required: true,
    },
    jumlah_meninggal: {
        type: Number,
        required: true,
    },
    jumlah_dirawat: {
        type: Number,
        required: true,
    },
    tanggal: {
        type: Date,
        required: true,
    },
    created: {
        type: Date,
        required: true,
    }
});


const PatientSchema = new Schema({
    penambahan: {
        type: PenambahanSchema,
        required: true,
    },
    created_at: { type: Date, default: Date.now }
});


const Patient = mongoose.model("Patients", PatientSchema);

module.exports = Patient;