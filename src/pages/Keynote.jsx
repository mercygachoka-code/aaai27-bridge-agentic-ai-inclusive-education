import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import { FadeIn } from '../components/Motion'
import { Card } from '../components/ui/card'

export default function Keynote() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <PageHero
        badge="Bridge Program"
        title="Keynote"
        subtitle="Keynote speaker for AAAI-27 Bridge Program"
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <FadeIn>
            <Card className="max-w-4xl mx-auto overflow-hidden border-gray-200 bg-[#FAFBFD]">
              <div className="grid md:grid-cols-[minmax(240px,0.8fr)_1.2fr]">
                <div className="min-h-72 bg-[#F4F6FA] flex items-center justify-center p-8">
                  <img
                    src="/keynote/yaya-etiabi.jpeg"
                    alt="Yaya Etiabi"
                    className="h-64 w-64 rounded-full object-cover object-top border-4 border-white shadow-sm"
                  />
                </div>

                <div className="p-8 sm:p-10">
                  <SectionLabel label="Keynote Speaker" />
                  <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#243B6B] tracking-tight mb-2">
                    Yaya Etiabi
                  </h2>
                  <p className="text-sm font-semibold text-[#159A9C] mb-6">
                    Postdoctoral Researcher, Université du Québec à Montréal (UQAM)
                  </p>
                  <p className="text-[#556275] leading-relaxed">
                    Yaya Etiabi is a postdoctoral researcher in the Department of Computer Science at Université du Québec à Montréal (UQAM). He holds a Ph.D. in Computer Science from Mohammed VI Polytechnic University (UM6P). His research focuses on machine learning for wireless systems, particularly at the intersection of edge intelligence and integrated sensing, communication, and computation (ISCC). He studies the design of learning and inference methods under communication, computation, and energy constraints, with growing interest in neuromorphic approaches. His research background includes federated and meta-learning, wireless localization, and radio sensing. His recent work addresses AI–ISCC co-design, learning-based multipath parameter estimation for positioning and radio SLAM, and neuromorphic split inference.
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  )
}
