import React from 'react';
import reviewsData from '../../data/reviewsData';
import useActive from '../../hooks/useActive';
import ProductReviews from './ProductReviews';


const ProductSummary = (props) => {

    const { brand, title, info, category, type, connectivity } = props;

    const { active, handleActive, activeClass } = useActive('specs');


    return (
        <>
            <section id="product_summary" className="section">
                <div className="container">

                    {/*===== Product-Summary-Tabs =====*/}
                    <div className="prod_summary_tabs">
                        <ul className="tabs">
                            <li
                                className={`tabs_item ${activeClass('specs')}`}
                                onClick={() => handleActive('specs')}
                            >
                                Especificações
                            </li>
                            <li
                                className={`tabs_item ${activeClass('reviews')}`}
                                onClick={() => handleActive('reviews')}
                            >
                                Avaliações
                            </li>
                        </ul>
                    </div>

                    {/*===== Product-Summary-Details =====*/}
                    <div className="prod_summary_details">
                        {
                            active === 'specs' ? (
                                <div className="prod_specs">
                                    <ul>
                                        <li>
                                            <span>Categoria</span>
                                            <span>{brand}</span>
                                        </li>
                                        <li>
                                            <span>Titulo</span>
                                            <span>{title}</span>
                                        </li>
                                        <li>
                                            <span>Categoria</span>
                                            <span>{category}</span>
                                        </li>
                                        <li>
                                            <span>Tipo</span>
                                            <span>{type}</span>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <div className="prod_reviews">
                                    <ul>
                                        {
                                            reviewsData.map(item => (
                                                <ProductReviews
                                                    key={item.id}
                                                    {...item}
                                                />
                                            ))
                                        }
                                    </ul>
                                </div>
                            )

                        }

                    </div>

                </div>
            </section>
        </>
    );
};

export default ProductSummary;