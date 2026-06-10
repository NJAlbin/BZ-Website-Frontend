"use client";
import { use } from "react";
import BreadcrumbWrapper from "@/components/BreadcrumbWrapper";
import Image from "next/image";

const serviceData = {
  aidevelopment: {
    title: "AI Development",
    image: "/ai_development.jpg",
  },
  cloudtechnologies: {
    title: "Cloud Technologies",
    image: "/cloud_technologies.jpg",
  },
  ecommercesolutions: {
    title: "E-Commerce Solutions",
    image: "/ecommerce_solutions.jpg",
  },
  blockchainservices: {
    title: "Blockchain Services",
    image: "/blockchain_services.jpg",
  },
  chatbot: {
    title: "Chatbot",
    image: "/chatbot.jpg",
  },
  metaversesolutions: {
    title: "Metaverse Solutions",
    image: "/metaverse_solutions.jpg",
  },
  internetofthings: {
    title: "Internet Of Things",
    image: "/internet_of_things.jpg",
  },
  cybersecurity: {
    title: "Cyber Security",
    image: "/cyber_security.jpg",
  },
  webdesignanddevelopmentsolution: {
    title: "Web Design and Development Solution",
    image: "/web_design_and_development.jpg",
  },
  mobileapplicationdevelopment: {
    title: "Mobile Application Development",
    image: "/mobile_application_development.jpg",
  },
  javadevelopment: {
    title: "Java Development",
    image: "/java_development.jpg",
  },
  geographicinformationsystemgisapplication: {
    title: "Geographic Information System (GIS) Application",
    image: "/gis_application.jpg",
  },
  websitetestingservices: {
    title: "Website Testing Services",
    image: "/website_testing_services.jpg",
  },
};

const Page = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);

  const service = serviceData[slug as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Service Not Found
      </div>
    );
  }

  return (
    <div>
      <section className="page-header relative consultant min-h-[50vh] sm:min-h-[40vh] md:min-h-[60vh] flex items-center">
        <div className="bg-img absolute inset-0 h-full" />
        <div className="absolute overlay hidden dark:block" />

        <BreadcrumbWrapper />
      </section>

      <div className="bg-black py-4 px-2">
        <div className="bg-black text-white px-6 py-16 sm:py-20 text-left mx-auto flex flex-col lg:flex-row gap-10 items-start max-w-7xl">
          <div className="p-7 bg-[#101010] w-full lg:w-1/3 order-1">
            {Object.values(serviceData).map((item, index) => (
              <div
                key={index}
                className="flex justify-between bg-black px-4 py-4 mb-3 group cursor-pointer"
              >
                <h3 className="text-[#eaeaea] text-[16px] font-semibold">
                  {item.title}
                </h3>

                <span className="w-1.5 h-1.5 mt-2 bg-white rounded-full group-hover:bg-orange-400 transition-colors duration-300"></span>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-3/4 flex flex-col gap-6 order-2">
            <div className="order-1">
              <Image
                src={service.image}
                alt={service.title}
                width={1200}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-6 theme-text order-2">
              <h1 className="font-bold text-[30px]">{service.title}</h1>
              <p className="mt-5 leading-loose text-[16px]">
                By developing AI, we provide businesses with cutting-edge
                solutions that utilize the power of sophisticated algorithms and
                machine learning to boost productivity, improve efficiency, and{" "}
                <br /> open up new opportunities.
              </p>
              <h1 className="mt-7 font-bold text-[24px]">
                AI Development Services
              </h1>
              <p className="mt-7 leading-loose text-[16px]">
                Welcome to our AI Development Services! We offer cutting-edge
                solutions that harness the power of Artificial Intelligence (AI)
                to transform your business and drive unparalleled growth. With a
                team of highly skilled AI experts and data scientists, we are
                committed to delivering innovative and tailored AI solutions to
                meet your unique business needs. Whether you&apos;re a startup
                or an established enterprise, our AI development services will
                help you stay ahead of the competition and embrace the future of
                technology.
              </p>
              <h1 className="mt-7 font-bold text-[24px] ">
                {" "}
                Our AI Development Expertise{" "}
              </h1>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                Machine Learning Algorithms:Our team excels in developing
                sophisticated machine learning algorithms that can analyze vast
                amounts of data and extract valuable insights. From supervised
                to unsupervised learning, we cover a wide range of ML techniques
                to power your AI applications.{" "}
              </p>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                Natural Language Processing (NLP):Unlock the potential of NLP
                with our advanced language processing solutions. We build AI
                systems that can understand, interpret, and generate human
                language, enabling seamless interactions with your customers
                through chatbots and virtual assistants.{" "}
              </p>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                Computer Vision:Leverage the capabilities of computer vision to
                process and interpret visual data. Our AI solutions can analyze
                images and videos, enabling applications such as object
                recognition, facial detection, and autonomous systems.{" "}
              </p>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                Predictive Analytics:Make data-driven decisions with our
                predictive analytics solutions. We implement AI models that can
                forecast future trends, identify patterns, and help you stay
                proactive in a dynamic market environment.{" "}
              </p>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                Personalization and Recommendation Systems:Enhance customer
                experience and boost engagement with personalized
                recommendations. Our AI algorithms can analyze user behavior and
                preferences to deliver tailored content, products, and
                services.{" "}
              </p>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                AI-Driven Automation:Streamline your business processes and
                improve efficiency with AI-driven automation. We can design and
                implement intelligent systems that automate repetitive tasks,
                freeing up valuable time for your team.{" "}
              </p>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                AI in Healthcare:Revolutionize healthcare with our AI solutions.
                From medical image analysis to personalized treatment plans, we
                leverage AI to improve diagnostics, patient care, and drug
                discovery.{" "}
              </p>{" "}
              <h1 className="mt-9 text-[30px] font-extrabold">
                {" "}
                Why Choose Us for AI Development?{" "}
              </h1>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                Expert Team:Our team of AI experts brings a wealth of experience
                in developing AI solutions for diverse industries. We stay
                up-to-date with the latest advancements in AI technology to
                deliver state-of-the-art solutions.{" "}
              </p>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                Tailored Solutions:We understand that every business is unique.
                That&apos;s why our AI development services are customized to
                address your specific challenges and goals, ensuring the best
                possible outcomes.{" "}
              </p>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                Data Privacy and Security:We prioritize the privacy and security
                of your data. Our AI solutions are built with robust security
                measures to protect your sensitive information.{" "}
              </p>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                Scalable Solutions:Our AI applications are designed with
                scalability in mind. As your business grows, our solutions can
                adapt and accommodate increased data and user demands.{" "}
              </p>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                Continuous Support:Our partnership doesn&apos;t end with the
                development phase. We offer ongoing support and maintenance to
                ensure the optimal performance of your AI applications.{" "}
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 order-3 items-center">
              <div className="order-1">
                <Image
                  className="rounded-full w-83 h-83 object-cover"
                  src="/r.jpg"
                  alt=""
                  width={350}
                  height={350}
                />
              </div>

              <div className="order-2">
                <h1 className="text-[30px] font-extrabold mb-5">
                  Our benefits
                </h1>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3.5">
                    <span className="bg-orange-400 text-black w-3 h-3 flex items-center justify-center rounded-full text-xs font-bold">
                      ✓
                    </span>
                    <span className="theme-text font-semibold text-[16px]">
                      Accelerated Innovation
                    </span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <span className="bg-orange-400 text-black w-3 h-3 flex items-center justify-center rounded-full text-xs font-bold">
                      ✓
                    </span>
                    <span className="theme-text font-semibold text-[16px]">
                      Efficient Collaboration
                    </span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <span className="bg-orange-400 text-black w-3 h-3 flex items-center justify-center rounded-full text-xs font-bold">
                      ✓
                    </span>
                    <span className="theme-text font-semibold text-[16px]">
                      Enhanced Decision-Making
                    </span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <span className="bg-orange-400 text-black w-3 h-3 flex items-center justify-center rounded-full text-xs font-bold">
                      ✓
                    </span>
                    <span className="theme-text font-semibold text-[16px]">
                      Personalization at Scale
                    </span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <span className="bg-orange-400 text-black w-3 h-3 flex items-center justify-center rounded-full text-xs font-bold">
                      ✓
                    </span>
                    <span className="theme-text font-semibold text-[16px]">
                      Advanced Predictive Analytics
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
