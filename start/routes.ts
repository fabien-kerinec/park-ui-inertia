/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
router.on('/inertia').renderInertia('home', { version: 6 })

router.get('/', ({ inertia }) => inertia.render('home'))
