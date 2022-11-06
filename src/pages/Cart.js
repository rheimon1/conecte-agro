import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsCartX } from 'react-icons/bs';
import { calculateTotal, displayMoney } from '../helpers/utils';
import useDocTitle from '../hooks/useDocTitle';
import cartContext from '../contexts/cart/cartContext';
import CartItem from '../components/cart/CartItem';


const Cart = () => {

    useDocTitle('Cart');

    const { cartItems } = useContext(cartContext);

    const cartQuantity = cartItems.length;

    // total original price
    const cartTotal = cartItems.map(item => {
        return item.originalPrice * item.quantity;
    });

    const calculateCartTotal = calculateTotal(cartTotal);
    const displayCartTotal = displayMoney(calculateCartTotal);


    // total discount
    const cartDiscount = cartItems.map(item => {
        return (item.originalPrice - item.finalPrice) * item.quantity;
    });

    const calculateCartDiscount = calculateTotal(cartDiscount);
    const displayCartDiscount = displayMoney(calculateCartDiscount);


    // final total amount
    const totalAmount = calculateCartTotal - calculateCartDiscount;
    const displayTotalAmount = displayMoney(totalAmount);


    return (
        <>
            <section id="cart" className="section">
                <div className="container">
                    {
                        cartQuantity === 0 ? (
                            <div className="empty_cart_wrapper">
                                <div className="empty_cart_img"><BsCartX /></div>
                                <h2>Seu carrinho esta vazio</h2>
                                <Link to="/all-products" className="btn">Comprar</Link>
                            </div>
                        ) : (
                            <div className="wrapper cart_wrapper">
                                <div className="cart_left_col">
                                    {cartItems.map(item => <CartItem key={item.id} {...item} />)}
                                </div>

                                <div className="cart_right_col">
                                    <div className="order_summary">
                                        <h3>
                                            Resumo do pedido &nbsp;
                                            ( {cartQuantity} {cartQuantity > 1 ? 'items' : 'item'} )
                                        </h3>
                                        <div className="order_summary_details">
                                            <div className="price">
                                                <span>Preço original</span>
                                                <b>{displayCartTotal}</b>
                                            </div>
                                            <div className="discount">
                                                <span>Desconto</span>
                                                <b>- {displayCartDiscount}</b>
                                            </div>
                                            <div className="delivery">
                                                <span>Delivery</span>
                                                <b>De graça</b>
                                            </div>
                                            <div className="separator"></div>
                                            <div className="total_price">
                                                <b><small>Preço total</small></b>
                                                <b>{displayTotalAmount}</b>
                                            </div>
                                        </div>
                                        <button type="button" className="btn checkout_btn">Confirmar</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    );
};

export default Cart;