// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const editors = await tables.editor.readAll();

    // Respond with the items in JSON format
    res.json(editors);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const editor = await tables.editor.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (editor === null) {
      res.sendStatus(404);
    } else {
      res.json(editor);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const update = async (req, res, next) => {
  const { id } = req.params;
  const editorUpdated = req.body;

  try {
    const existingEditor = await tables.editor.read(id);

    if (!existingEditor) {
      return res.status(404).json({ error: "Editeur non trouvé" });
    }

    await tables.editor.update(id, editorUpdated);
    const updatedEditor = await tables.editor.read(id);
    res.status(200).json(updatedEditor);
  } catch (error) {
    next(error);
  }
  // Solve ESLINT error : "Expected to return a value at the end of async arrow function.eslintconsistent-return function(req: any, res: any, next: any): Promise<any>"
  return undefined;
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const editor = req.body;
  try {
    // Insert the item into the database
    const insertId = await tables.editor.create(editor);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    await tables.editor.destroy(id);
    // 204 = payload : No content : request success but there isn't data to send
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
// Ready to export the controller functions
module.exports = {
  browse,
  read,
  update,
  add,
  destroy,
};
