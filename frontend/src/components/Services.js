import React from "react";

const Services = () => {
  const services = [
    //Beetle treatment
    {
      title: "Beetle treatment",
      icon: "https://storage.googleapis.com/a1aa/image/t7Zhjjz8f3mPdmHlSRZJjR12-zBs4trh0qrInt_ICQI.jpg",
      description:
        "We treat beetles using environmentally friendly chemicals that have no adverse impact on you or your family. Our highly recommended pest control technicians have been trained to quickly and successfully exterminate beetles.",
    },
    //Cockroach treatment
    {
      title: "Cockroach treatment",
      icon: "https://storage.googleapis.com/a1aa/image/2i88kKznKBnVGOYTd5jgdmQbaLLrLfSMFba1N3zyBpY.jpg",
      description:
        "A cockroach problem is frequent in all sorts of homes, and eradicating them is not a simple task. Fortunately, we provide cockroach control in Sydney that can assist you in resolving the issue We promise that our professional pest controllers will be at your location within an hour and will work carefully to deliver excellent service.",
    },
    //Bed bugs treatment
    {
      title: "Bed bugs treatment",
      icon: "https://storage.googleapis.com/a1aa/image/-fUV1K_lntU0VXw_pDjH5txO82Bejv5nxX96Nj29CCI.jpg",
      description:
        "At night, bed bugs are more likely to bite. Due to their little size, they might be difficult to locate on your mattress. It is recommended that you employ a professional pest controller who is well-versed in eliminating bed bugs from mattresses.",
    },
    //Rodent treatment
    {
      title: "Rodent treatment",
      icon: "https://storage.googleapis.com/a1aa/image/Qz84qL2mBB3QHLa1289NCjidUN2T6NXdJXgPKiT2tpw.jpg",
      description:
        "Rodents have the potential to do enormous damage over time. DIY traps may lose their effectiveness as these rodents get skilled at avoiding them. Fortunately, we offer rodent management that is appropriate for the infestation. Because of our years of expertise with these insect treatments, we have one of the finest pest control solutions in Sydney.",
    },
    //Wasps removal
    {
      title: "Wasps removal",
      icon: "https://storage.googleapis.com/a1aa/image/58aGXIWl4We0SzYc3PFvjfPOS93aApNggawEZOaLz9g.jpg",
      description:
        "Removing wasps on your own from your property is not a smart idea. You should seek the services of a competent pest control company that specializes in wasp removal. We use safe and efficient pest treatment solutions to keep wasps away from your home. We are available 24 hours a day, 7 days a week, so you may contact us anytime you need our services.",
    },
    //Maggot treatment
    {
      title: "Maggot treatment",
      icon: "https://storage.googleapis.com/a1aa/image/6vqq-TC03ctne-Kyh9RP1-ckUov5cqbpv3yvw9qsRZ8.jpg",
      description:
        "Maggot-infested food may induce severe stomach discomfort and other medical issues as a result of the germs that maggots may transmit. Our ultimate objective is to work to avert this situation. Our pest control professional in Sydney are well qualified to provide the best pest control services. We can completely eliminate maggots from your premises using effective removal procedures and organic chemicals.",
    },
    //Ant control
    {
      title: "Ant control",
      icon: "https://storage.googleapis.com/a1aa/image/8LEq2R4HYfdcx7lF7buwkMFrMOoUZiYRMoybK4B2k4c.jpg",
      description:
        "Ants are a widespread pest that may be found practically everywhere. They can be difficult to deal with if they are not treated, which might be a challenging task for the homeowner. We provide the most effective pest control service available, ensuring that you may live in a pest-free and safe environment.",
    },
    //Tick removal
    {
      title: "Tick removal",
      icon: "https://storage.googleapis.com/a1aa/image/ncjlInZalpInOX1GMTCAdFU3G7ie-R9nJyzJHSXaVv0.jpg",
      description:
        "Ticks may cause severe itching in both humans and animals. If you want to get rid of ticks, you should contact a professional tick removal service to make your pet's life more comfortable. Our team is dedicated to providing prompt service for tick removal and treatment. We are experienced in tick removal and can assist you in getting rid of ticks from your home without blowing a lot of money to obtain outstanding results.",
    },
    //Rats control
    {
      title: "Rats control",
      icon: "https://storage.googleapis.com/a1aa/image/wn9XNd7FKVK6VvG2aTnOLh6Cgzw17j1nt8FRXKylhE4.jpg",
      description:
        "Rats will ultimately consume not just your food, but also your personal possessions such as clothing, furniture, and other items. As a result, you should contact a pest control company to handle your rat problem. Our services are designed to quickly and efficiently eliminate rats from your building. We are always available to provide the best services and are fully equipped to deliver effective service that will eliminate troublesome pests from your property.",
    },
    //Spider Control
    {
      title: "Spider Control",
      icon: "fas fa-spider text-4xl",
      description:
        "Spiders are often recognised as one of the most fearsome creatures in the world. Some have lethal venom, while others are completely harmless. In any case, these menacing spiders should not be allowed on your premises. The good news is that our professionals can help you get rid of them. We provide one of the best pest control services that are guaranteed to eliminate their infestation. You can rely on our pest control company to remove them completely.",
    },
    //Termites Treatment
    {
      title: "Termites Treatment",
      icon: "fas fa-bug text-4xl",
      description:
        "A termite problem may be challenging to control on your own since it may do significant damage to your property. To eradicate the pest problem, contact us immediately for termite control services. We promise that we will be at your location within an hour of your booking being confirmed. Our local pest control agent will then perform an inspection, followed by the application of the necessary termite treatment to resolve your pest problems and avoid further damage.",
    },
    //Possum removal
    {
      title: "Possum removal",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2Pm0ppghRT2ncMN_kcDcGXoQ9Qk5l2jQ9qbUt8eSFac4BGJvleAilXlUq1RpOWaH_Mo&usqp=CAU",
      description:
        "Possum removal can involve trapping, repelling, or fencing. Possums are a protected species, so it's important to follow the correct procedures. Harbour Pest Control is dedicated to delivering exceptional possum removal services. Our comprehensive approach ensures the safe and complete removal of these pests. With highly trained technicians, we provide effective and humane solutions to quickly and efficiently rid your home of possums.",
    },
  ];

  return (
    <section id="services">
      <div className="bg-green-700 text-white container mx-auto px-4 py-8">
        <h1 className="text-center text-2xl font-bold mb-8">
          Our list of services for pest control Sydney
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center border-t border-white pt-4">
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="mx-auto mb-4"
                height="50"
                width="50"
              />
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-justify">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
