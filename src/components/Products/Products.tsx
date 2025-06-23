import React from 'react';
import { ExternalLink, Star, GitFork, Download, ArrowRight } from 'lucide-react';
import './Products.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { PROBO_GITHUB_URL } from '../../constants';
import { products } from '../../constants/products';


const Products = () => {
    return (
        <section id="products" className="products">
            <div className="products__container">
                {/* Section Header */}
                <div className="products__header">
                    <h2 className="products__title">
                        Our Open Source
                        <span className="products__title-gradient"> Products</span>
                    </h2>
                    <p className="products__subtitle">
                        Discover our collection of powerful, well-documented, and community-driven open source projects that are transforming how developers build applications.
                    </p>
                </div>

                {/* Products Grid */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {products.map((product) => {
                        const IconComponent = product.icon;
                        return (
                            <SwiperSlide
                                key={product.id}
                                className="products__card"
                            >
                                {/* Card Header */}
                                <div className={`products__card-header products__card-header--${product.gradient}`}>
                                    <div className="products__card-top">
                                        <div className={`products__card-icon products__card-icon--${product.gradient}`}>
                                            <IconComponent />
                                        </div>
                                        <span className="products__card-category">
                                            {product.category}
                                        </span>
                                    </div>
                                    <h3 className="products__card-title">{product.name}</h3>
                                    <p className="products__card-description">{product.description}</p>
                                </div>

                                {/* Card Body */}
                                <div className="products__card-body">
                                    {/* Stats */}
                                    <div className="products__card-stats">
                                        <div className="products__card-stat products__card-stat--stars">
                                            <Star />
                                            {product.stars}
                                        </div>
                                        <div className="products__card-stat products__card-stat--forks">
                                            <GitFork />
                                            {product.forks}
                                        </div>
                                        <div className="products__card-stat products__card-stat--downloads">
                                            <Download />
                                            {product.downloads}
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    <div className="products__card-section">
                                        <h4 className="products__card-section-title">Technologies</h4>
                                        <div className="products__card-technologies">
                                            {product.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="products__card-tech"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="products__card-section">
                                        <h4 className="products__card-section-title">Key Features</h4>
                                        <div className="products__card-features">
                                            {product.features.map((feature) => (
                                                <div key={feature} className="products__card-feature">
                                                    <div className="products__card-feature-dot"></div>
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {
                                        product.released ? (
                                            <>
                                                {/* Actions */}
                                                <div className="products__card-actions">
                                                    <a
                                                        href="#"
                                                        className={`products__card-primary-action products__card-primary-action--${product.gradient}`}
                                                    >
                                                        View Project
                                                        <ExternalLink />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="products__card-secondary-action"
                                                    >
                                                        Docs
                                                    </a>
                                                </div>
                                            </>
                                        )
                                            : (
                                                <div className="products__card-actions">
                                                    <a
                                                        href="#"
                                                        className={`products__card-primary-action products__card-primary-action--${product.gradient}`}
                                                    >
                                                        Coming Soon
                                                    </a>
                                                </div>
                                            )
                                    }
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <br />
                {/* Call to Action */}
                <div className="products__cta">
                    <div className="products__cta-card">
                        <h3 className="products__cta-title">Want to Contribute?</h3>
                        <p className="products__cta-description">
                            Join our community of developers and help make these projects even better. Every contribution, no matter how small, makes a difference.
                        </p>
                        <a
                            href={PROBO_GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="products__cta-button"
                        >
                            Start Contributing
                            <ArrowRight />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;