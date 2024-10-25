import express from 'express';
const router = express.Router();
import userCTL from '../controllers/userController.mjs'



router.post('/',userCTL.postUser);


//getting all the users
router.get('/',userCTL.getAllUser);


//edit user by id
router.put('/:id',userCTL.editUser);

//delete delete by id
router.delete('/:id',userCTL.deleteUser)


export default router;