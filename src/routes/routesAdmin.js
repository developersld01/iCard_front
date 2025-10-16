import { AdminLayout } from '../layouts'
import { Login } from '../pages/Admin'

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: Login
    },
]

export default routesAdmin;