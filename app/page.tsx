import LuxMediHero from "./LuxMediHero";
import StatsAndServicesSection from "./StatsAndServicesSection";
import StepsSection from "./StepsSection";
import DoctorsSliderSection from "@/app/DoctorsSliderSection";
import PricingSection from "@/app/PlanColumn";
import CoverflowTestimonials from "@/app/CoverflowTestimonials";
import FAQSection from "@/app/FAQSection";
import NewsletterSection from "@/app/NewsletterSection";
import Footer from "@/app/Footer";
import ReservationStepper from "@/app/ReservationStepper";
import BlogPostWithSidebar from "@/app/BlogPostWithSidebar";
export default function Home() {
    return (
        <>
  {/*          <BlogPostWithSidebar data={*/}
  {/*               {*/}
  {/*              title: "Burnout – effects and impact on health",*/}
  {/*              author: "CANDICE ALEX",*/}
  {/*              date: "Sep 8, 2024",*/}
  {/*              readTime: "7 Min Read",*/}
  {/*              toc: [*/}
  {/*          { label: "What is burnout?", anchor: "what-is-burnout" },*/}
  {/*          { label: "Burnout and stress – the differences", anchor: "burnout-stress" },*/}
  {/*          { label: "Causes and types of burnout", anchor: "causes-types" },*/}
  {/*          { label: "Symptoms", anchor: "symptoms" },*/}
  {/*          { label: "Burnout and depression – how to recognize them?", anchor: "burnout-depression" },*/}
  {/*          { label: "Treatment and prevention of burnout", anchor: "treatment-prevention" },*/}
  {/*          { label: "Summary – FAQ", anchor: "summary-faq" }*/}
  {/*              ],*/}
  {/*              cover: "/post.png",*/}
  {/*              contentHtml: `*/}
  {/*  <h2 id="what-is-burnout">What is burnout?</h2>*/}
  {/*  <p>Lorem ipsum dolor sit amet...</p>*/}
  {/*  <h2 id="summary-faq">Summary – FAQ</h2>*/}
  {/*  <p>Q&A ...</p>*/}
  {/*`,*/}
  {/*              sidebar: [*/}
  {/*          {*/}
  {/*              type: "specialist",*/}
  {/*              title: "SPECIALIST",*/}
  {/*              content: {*/}
  {/*              avatar: "/post.png",*/}
  {/*              name: "Katarzyna Lisak, MD",*/}
  {/*              desc: "Endocrinologist. Graduate of the Medical University of Silesia in Katowice. 9 years of experience."*/}
  {/*          }*/}
  {/*          },*/}
  {/*          {*/}
  {/*              type: "packages",*/}
  {/*              title: "Related packages",*/}
  {/*              content: [*/}
  {/*          {*/}
  {/*              title: "E-package for testing for constant fatigue, weakness or chronic stress",*/}
  {/*              desc: "Consultation via telemedicine. Main indicators in the field of hematology...",*/}
  {/*              cta: "Check"*/}
  {/*          }*/}
  {/*              ]*/}
  {/*          }*/}
  {/*              ],*/}
  {/*              relatedPosts: [*/}
  {/*          {*/}
  {/*              img: "/post.png",*/}
  {/*              title: "Remote patient care – Etiam in consequat urna.",*/}
  {/*              desc: "Lorem ipsum dolor sit amet...",*/}
  {/*              tag: "REMOTE PATIENT CARE",*/}
  {/*              link: "/blog/remote-patient-care"*/}
  {/*          },*/}
  {/*          {*/}
  {/*              img: "/post.png",*/}
  {/*              title: "Second post example – Etiam in consequat urna.",*/}
  {/*              desc: "Sed do eiusmod tempor...",*/}
  {/*              tag: "REMOTE PATIENT CARE",*/}
  {/*              link: "/blog/second-post"*/}
  {/*          },*/}
  {/*          {*/}
  {/*              img: "/post.png",*/}
  {/*              title: "Third story – Etiam in consequat urna.",*/}
  {/*              desc: "Ut labore et dolore magna aliqua...",*/}
  {/*              tag: "REMOTE PATIENT CARE",*/}
  {/*              link: "/blog/third-story"*/}
  {/*          }*/}
  {/*              ],*/}
  {/*              prevPost: {*/}
  {/*              slug: "/blog/preventing-burnout",*/}
  {/*              title: "How to Prevent Burnout in 2024"*/}
  {/*          },*/}
  {/*              nextPost: {*/}
  {/*              slug: "/blog/healthy-habits-for-life",*/}
  {/*              title: "Healthy Habits for Life"*/}
  {/*          }*/}
  {/*          }*/}
  {/*          } />;*/}
            <ReservationStepper/>
            <LuxMediHero/>
            <StatsAndServicesSection/>
            <StepsSection />
            <DoctorsSliderSection />
            <PricingSection/>
            <CoverflowTestimonials />
            <FAQSection />
            <NewsletterSection />
            <Footer />
        </>
    );
}