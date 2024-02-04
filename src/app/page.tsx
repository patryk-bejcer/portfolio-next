import Hero from '@/app/components/Sections/Hero';
import Navbar from '@/app/components/Navigation/Navbar';
import About from '@/app/components/Sections/About';
import Projects from '@/app/components/Sections/Projects';
import Footer from '@/app/components/Footer';
import Email from '@/app/components/Sections/Email';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212] '>
      <Navbar />
      <div className='container mx-auto mt-24 px-4 py-4'>
        <Hero />
        <About />
        <Projects />
        <Email />
      </div>
      <Footer />
    </main>
  );
}
