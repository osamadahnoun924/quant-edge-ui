import { useNavigate } from 'react-router';
import img from './placeholder.png';
import { Button } from '@headlessui/react';

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-around px-6 py-10 text-center sm:py-20 sm:text-start lg:flex-row">
      <section>
        <section>
          <h2 className="text-4xl sm:text-7xl">
            Welcome to
            <span className="mt-2 block font-extrabold">QuantEdge</span>
          </h2>
          <p className="mt-4 mb-6 text-lg sm:text-3xl">
            Raw Data. Real Stories. Stunning Visuals
          </p>
        </section>
        <section>
          <Button
            className="cursor-pointer rounded-full bg-white px-5 py-3 text-sm font-semibold text-black data-hover:bg-gray-100 sm:text-lg"
            onClick={() => navigate('/start-analyzing')}
          >
            Start Analyzing
          </Button>
        </section>
      </section>
      <section className="text-center">
        <img src={img} alt="" className="mx-auto pt-8 pb-2 lg:pt-0 lg:pb-0" />
        <p className="mt-4 text-sm sm:text-xl">
          Bringing instituitonal-grade analytics to retail investors
        </p>
      </section>
    </div>
  );
};
