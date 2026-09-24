import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    tech: [{ type: String }],
    link: { type: String },
    image: { type: String },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);