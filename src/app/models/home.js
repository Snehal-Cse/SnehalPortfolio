
import mongoose from 'mongoose';

const { Schema } = mongoose;

const homeSchema = new Schema({
  heading: { type: String, required: true },
  career_Summary: { type: String, required: true }
});

const Home = mongoose.models.Home || mongoose.model('Home', homeSchema);

export default Home;
