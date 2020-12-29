
import ContentArea from '../modules/ContentArea/ContentArea';

export default [
    {
        path: '/',
        name: 'Home',
        component: ContentArea
    },
    {
        path: '*',
        redirect: '/'
    }
]