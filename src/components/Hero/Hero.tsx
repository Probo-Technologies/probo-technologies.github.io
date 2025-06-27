import React from 'react';
import { ArrowRight, Star, GitBranch } from 'lucide-react';
import './Hero.scss';
import { PROBO_GITHUB_URL } from '../../constants';
import { fetchContributors, getRepositories } from '../../services/github'
import millify from 'millify';
import { toast } from "react-toastify";

const Hero = () => {
    const scrollToProducts = () => {
        const section = document.getElementById('products');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const [repos, setRepos] = React.useState({
        count: 0,
        stars: 0,
        forks: 0,
        contributors: 0
    });

    const getRepos = async () => {
        const repos = await getRepositories();

        let totalStars = 0;
        let totalForks = 0;
        let contributorSet = new Set();

        for (const repo of repos) {
            totalStars += repo.stargazers_count;
            totalForks += repo.forks_count;

            try {
                const contributors = await fetchContributors(repo.name);
                contributors.forEach((c: any) => contributorSet.add(c));
            } catch (err: any) {
                toast.error(`Failed to fetch contributors for ${repo.name}:` + err.message);
            }
        }

        setRepos({
            count: repos.length,
            stars: totalStars,
            forks: totalForks,
            contributors: contributorSet.size
        });
    }
    React.useEffect(() => {
        getRepos();
    }, []);
    return (
        <section id="home" className="hero">
            {/* Background */}
            <div className="hero__background">
                <div className="hero__pattern"></div>
            </div>

            {/* Content */}
            <div className="hero__content">
                <div className="hero__container">
                    {/* Badge */}
                    <div className="hero__badge">
                        <Star />
                        Building the future of open source
                    </div>

                    {/* Main heading */}
                    <h1 className="hero__title">
                        Empowering Developers Through Open Source
                    </h1>

                    {/* Subtitle */}
                    <p className="hero__subtitle">
                        Through our contributions, we aim to simplify infrastructure, accelerate development, and offer clean, reusable solutions that help others move faster and build better.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero__cta-container">
                        <button
                            onClick={scrollToProducts}
                            className="hero__cta-primary"
                        >
                            Explore Our Projects
                            <ArrowRight />
                        </button>
                        <a
                            href={PROBO_GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero__cta-secondary"
                        >
                            View on GitHub
                            <GitBranch />
                        </a>
                    </div>

                    {/* Stats */}
                    {
                        repos.count == 0 ? null : <>
                            <div className="hero__stats">
                                <div className="hero__stat">
                                    <div className="hero__stat-value">{millify(repos.stars)}</div>
                                    <div className="hero__stat-label">GitHub Stars</div>
                                </div>
                                <div className="hero__stat">
                                    <div className="hero__stat-value">{millify(repos.count)}</div>
                                    <div className="hero__stat-label">Open Source Projects</div>
                                </div>
                                <div className="hero__stat">
                                    <div className="hero__stat-value">{millify(repos.contributors)}</div>
                                    <div className="hero__stat-label">Contributors</div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero__scroll-indicator">
                <button
                    onClick={scrollToProducts}
                    className="hero__scroll-button"
                >
                    <div className="hero__scroll-dot"></div>
                </button>
            </div>
        </section>
    );
};

export default Hero;