import { Router } from 'express';
import { createPerson, getPeople, updatePerson, deletePerson } from '../controllers/person.controller.js';

const router = Router();

router.post('/', createPerson);
router.get('/', getPeople);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);

export default router;