import Person from '../models/Person.js'; // Certifique-se de que o modelo está correto

// Método para criar uma nova pessoa
export const createPerson = async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    const savedPerson = await newPerson.save();
    res.status(201).json(savedPerson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Método para buscar todas as pessoas
export const getPeople = async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Método para atualizar uma pessoa
export const updatePerson = async (req, res) => {
  try {
    const { id } = req.params; // Obtém o ID da pessoa a ser atualizada
    const updatedPerson = await Person.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!updatedPerson) {
      return res.status(404).json({ message: "Person not found" });
    }

    res.json(updatedPerson); // Retorna a pessoa atualizada
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Método para deletar uma pessoa
export const deletePerson = async (req, res) => {
  try {
    const { id } = req.params; // Obtém o ID da pessoa a ser deletada
    const deletedPerson = await Person.findByIdAndDelete(id);
    
    if (!deletedPerson) {
      return res.status(404).json({ message: "Person not found" });
    }

    res.json({ message: "Person deleted successfully" }); // Confirmação de exclusão
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
