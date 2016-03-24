import mongoose from 'mongoose';

const model = new mongoose.Schema({
  symbol: { type: String, required: true },
  name: { type: String, required: true },
  symbolNative: { type: String, required: true },
  decimalDigits: { type: Number, required: true },
  rounding: { type: Number, required: true },
  code: { type: String, required: true },
  translate: { type: mongoose.Schema.Types.Mixed, required: true },
});

export default mongoose.model('Currency', model);
