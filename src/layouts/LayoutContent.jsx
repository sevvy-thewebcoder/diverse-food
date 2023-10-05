import AboutSection from '@containers/containAbout/AboutSection';
import BestsellerSection from '@containers/containBestsellers/BestsellerSection';
import BlogSection from '@containers/containBlogPosts/BlogSection';
import HeroSection from '@containers/containHero/HeroSection';
import MenuSection from '@containers/containMenu/MenuSection';
import NewsletterSection from '@containers/containNewsletter/NewsletterSection';
import TestimonialSection from '@containers/containTestimonials/TestimonialSection';


export default function LayoutContent() {
  return (
    <main>
      <HeroSection />
      <AboutSection />  
      <BestsellerSection />
      <MenuSection />
      <TestimonialSection />
      <BlogSection />
      <NewsletterSection />
    </main>
  );
}
