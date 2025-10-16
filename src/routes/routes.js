import routesAdmin from './routesAdmin'
import routesClient from './routesClient'
import { Error404 } from '../pages'
import { BasicLayout } from '../layouts'

const routes =
    [
        ...routesAdmin,
        ...routesClient,
        {
            path: "*",
            layout: BasicLayout,
            component: Error404
        }
    ]

export default routes;