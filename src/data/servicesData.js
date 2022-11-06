import {FaShippingFast, FaShieldAlt, FaTags, FaCreditCard} from 'react-icons/fa';

const servicesData = [
    {
        id: 1,
        icon: <FaShippingFast />,
        title: "Delivery",
        info: "Sua roupa lavada em até 1 dia",
    },
    {
        id: 2,
        icon: <FaShieldAlt />,
        title: "Garantia",
        info: "Ao sofrer qualquer dano, tenha seu dinheiro de volta",
    },
    {
        id: 3,
        icon: <FaTags />,
        title: "Customização",
        info: "Lavagem feita do seu jeito",
    },
    {
        id: 4,
        icon: <FaCreditCard />,
        title: "Pagamento rápido e fácil",
        info: "Aceitamos PIX",
    },
];

export default servicesData;