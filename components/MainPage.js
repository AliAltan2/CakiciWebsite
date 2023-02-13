import React from "react";
import { motion } from "framer-motion";

function MainPage() {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl  ">
        Projeler
      </h3>
      {/*Proje divleri*/}
      <div className="flex flex-col items-center space-y-4 box-content bg-gray-400 h-[350px] w-[350px]">
        <h2 className="text-white text-bold uppercase tracking-[5px] p-2 text-center">
          Plan 34 Istanbul
        </h2>
        <button class="bg-gray-500 hover:bg-gray-600 text-gray-800 font-semibold py-2 px-4 border rounded shadow">
          Proje Detayi
        </button>
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={
            "https://iea.imgix.net/baf1e3a9-a015-4917-8206-021234e74453/matthew-hamilton-Ru3Ap8TNcsk-unsplash.jpg?auto=compress%2Cformat&fit=min&q=80&rect=1710%2C0%2C3648%2C3648"
          }
          className="-mb-20 md:mb-0 flex-shrink-0 w-48 h-48 rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col items-center space-y-4 box-content bg-gray-400 h-[350px] w-[350px]">
        <h2 className="text-white text-bold uppercase tracking-[5px] p-2 text-center">
          M.Cakici Is Merkezi ikitelli
        </h2>
        <button class="bg-gray-500 hover:bg-gray-600 text-gray-800 font-semibold py-2 px-4 border rounded shadow">
          Proje Detayi
        </button>
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={
            "https://iea.imgix.net/baf1e3a9-a015-4917-8206-021234e74453/matthew-hamilton-Ru3Ap8TNcsk-unsplash.jpg?auto=compress%2Cformat&fit=min&q=80&rect=1710%2C0%2C3648%2C3648"
          }
          className="-mb-20 md:mb-0 flex-shrink-0 w-48 h-48 rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col items-center space-y-4 box-content bg-gray-400 h-[350px] w-[350px]">
        <h2 className="text-white text-bold uppercase tracking-[5px] p-2 text-center">
          Cakici is merkezi hadimkoy
        </h2>
        <button class="bg-gray-500 hover:bg-gray-600 text-gray-800 font-semibold py-2 px-4 border rounded shadow">
          Proje Detayi
        </button>
        <motion.img
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={
            "https://iea.imgix.net/baf1e3a9-a015-4917-8206-021234e74453/matthew-hamilton-Ru3Ap8TNcsk-unsplash.jpg?auto=compress%2Cformat&fit=min&q=80&rect=1710%2C0%2C3648%2C3648"
          }
          className="-mb-20 md:mb-0 flex-shrink-0 w-48 h-48 rounded-md object-cover"
        />
      </div>
    </div>
  );
}

export default MainPage;
