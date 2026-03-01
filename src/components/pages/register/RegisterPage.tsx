'use client';
import Hero from './Hero';
import RegisterForm from './RegisterForm';
import HelpStrip from './HelpStrip';

const RegisterPage = () => {
  return (
    <div className="bg-tcl-off-white min-h-screen">
      <Hero />
      <RegisterForm />
      <HelpStrip />
    </div>
  );
};

export default RegisterPage;
