const router = require('express').Router();
const { Employee, Leave } = require('../../models');

// const withAuth = require('../utils/auth');


// get employees to display in leave balance table on dashboard
router.get('/', async (req, res) => { // URL is /api/dashboard
   try {
     const employeeData = await Employee.findAll({
      include: [Leave]
     });
 
     const employees = employeeData.map((employee) => employee.get({ plain: true }));
 
     res.render('dashboard', {
      //  layout: 'dashboard',
       employees,
     });
   } catch (err) {
     res.redirect('login');
   }
 });


 module.exports = router;