import React from 'react';
import { Users, Heart, Lightbulb, Target, Award, Coffee } from 'lucide-react';
import './About.scss';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Open Source First',
      description: 'We believe in the power of community-driven development and transparent, accessible code for everyone.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly pushing boundaries to create tools that solve real problems and improve developer experience.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building strong relationships with developers worldwide and fostering collaborative growth.',
    },
    {
      icon: Target,
      title: 'Quality',
      description: 'Delivering well-tested, documented, and maintainable code that developers can rely on.',
    },
  ];

  const stats = [
    { label: 'Years of Experience', value: '8+' },
    { label: 'GitHub Contributors', value: '500+' },
    { label: 'Projects Maintained', value: '25+' },
    { label: 'Downloads per Month', value: '2M+' },
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & Lead Developer',
      bio: 'Full-stack developer with 10+ years experience in open source. Passionate about creating tools that make development more enjoyable.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    },
    {
      name: 'Sarah Martinez',
      role: 'UI/UX Designer',
      bio: 'Design systems expert who ensures our tools are not just functional, but delightful to use. Advocates for accessible design.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    },
    {
      name: 'David Kumar',
      role: 'DevOps Engineer',
      bio: 'Infrastructure specialist who keeps our projects running smoothly and helps developers deploy with confidence.',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about__container">
        {/* Section Header */}
        <div className="about__header">
          <h2 className="about__title">
            About
            <span className="about__title-gradient"> OpenForge</span>
          </h2>
          <p className="about__subtitle">
            We're a passionate team of developers, designers, and open source enthusiasts dedicated to building tools that empower the global developer community.
          </p>
        </div>

        {/* Story Section */}
        <div className="about__story">
          <div className="about__story-grid">
            <div className="about__story-content">
              <h3>Our Story</h3>
              <p>
                OpenForge started in 2016 when our founder Alex was frustrated with the lack of high-quality, well-documented open source tools for modern web development. What began as a side project to solve his own problems quickly grew into a mission to create the development tools we all wished existed.
              </p>
              <p>
                Today, our projects are used by thousands of developers worldwide, from startups to Fortune 500 companies. We've built a community that values quality, collaboration, and the transformative power of open source software.
              </p>
              <p>
                Every line of code we write is guided by our commitment to making development more accessible, enjoyable, and productive for everyone.
              </p>
            </div>
            <div className="about__story-visual">
              <div className="about__story-container">
                <div className="about__story-grid-inner">
                  <div className="about__story-card about__story-card--blue">
                    <Coffee />
                    <div className="about__story-card-value">500+</div>
                    <div className="about__story-card-label">Coffee-fueled commits</div>
                  </div>
                  <div className="about__story-card about__story-card--purple">
                    <Award />
                    <div className="about__story-card-value">25+</div>
                    <div className="about__story-card-label">Recognition awards</div>
                  </div>
                  <div className="about__story-card about__story-card--green">
                    <Users />
                    <div className="about__story-card-value">10K+</div>
                    <div className="about__story-card-label">Community members</div>
                  </div>
                  <div className="about__story-card about__story-card--red">
                    <Heart />
                    <div className="about__story-card-value">∞</div>
                    <div className="about__story-card-label">Love for code</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="about__values">
          <h3 className="about__values-title">Our Values</h3>
          <div className="about__values-grid">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="about__value">
                  <div className="about__value-icon">
                    <IconComponent />
                  </div>
                  <h4 className="about__value-title">{value.title}</h4>
                  <p className="about__value-description">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="about__stats">
          <div className="about__stats-card">
            <div className="about__stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="about__stat">
                  <div className="about__stat-value">{stat.value}</div>
                  <div className="about__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="about__team">
          <h3 className="about__team-title">Meet Our Team</h3>
          <div className="about__team-grid">
            {team.map((member, index) => (
              <div key={index} className="about__team-member">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="about__team-avatar"
                />
                <h4 className="about__team-name">{member.name}</h4>
                <p className="about__team-role">{member.role}</p>
                <p className="about__team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;