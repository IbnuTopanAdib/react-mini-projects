import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className='flex flex-col items-center mt-8 mb-8 md:mb-16'>
      <img src={logo} alt="A canvas" className='object-contain w-44 h-44' />
      <h1 className='text-4xl md: font-semibold tracking-widest uppercase text-amber-600 font-title'>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
