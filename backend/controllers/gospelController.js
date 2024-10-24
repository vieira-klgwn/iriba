const Gospel = require('../models/Gospel');

const getGospelsByWeek = async (req, res) => {
  const { week } = req.params;
  try {
    const gospels = await Gospel.find({ week });
    res.json(gospels);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const createGospel = async (req, res) => {
  const { week, day, content, author } = req.body;
  try {
    const newGospel = new Gospel({ week, day, content, author });
    await newGospel.save();
    res.status(201).json(newGospel);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create gospel' });
  }
};

const updateGospel = async (req, res) => {
  const { id } = req.params;
  const { likes } = req.body;
  try {
    const gospel = await Gospel.findByIdAndUpdate(id, { $inc: { likes } }, { new: true });
    res.json(gospel);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update gospel' });
  }
};

module.exports = { getGospelsByWeek, createGospel, updateGospel };
