import React from "react";
import { motion } from "framer-motion";
function AboutUs() {
  return (
    <motion.div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center bg-gray-100">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl  ">
        Hakkimizda
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w="
        className="-mb-20 md:mb-0 flex-shrik-0 w-56 h-56 rounded-sm object-cover"
      />
      <div className="space-y-10 px-10">
        <h4 className="text-4xl font-semibold">Biz Çakıcıoğullarıyız</h4>
        <p className="text-sm w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
          cursus dui, vitae porta purus. Donec id eros tellus. Integer a
          sagittis tortor. Maecenas et rhoncus turpis. Etiam vehicula mattis
          tellus, at egestas ipsum tempus sit amet. Vestibulum pharetra in
          tortor non lobortis. Fusce sed egestas eros. Nam ultrices lacinia ex.
          In nec felis ut nunc consectetur molestie. Etiam dignissim, sem eu
          mollis pellentesque, orci est pellentesque leo, quis viverra est
          lectus ut massa. Sed eu quam leo. Fusce leo leo, tempus a ipsum eget,
          venenatis consectetur metus. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Nullam fermentum aliquet diam a placerat. Nulla
          pulvinar, ligula a semper pharetra, lacus ipsum fermentum turpis,
          vitae tristique eros lectus euismod augue. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam
          risus nibh, semper sed congue condimentum, hendrerit vel dolor. Nullam
          accumsan sed ligula ut mollis. Sed dolor nulla, fermentum ac rhoncus
          vestibulum, vestibulum id nisl. Pellentesque pulvinar neque in mi
          volutpat lacinia. Nulla facilisi. Vivamus interdum nulla vitae arcu
          efficitur, at finibus lectus dapibus. Nunc sem dui, maximus id
          tincidunt id, lacinia sit amet lectus.
        </p>
      </div>
    </motion.div>
  );
}

export default AboutUs;
