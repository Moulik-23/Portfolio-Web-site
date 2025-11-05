import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref: imageRef, inView: imageInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const { ref: expertiseRef, inView: expertiseInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const { ref: timelineRef, inView: timelineInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const skills = [
    'Data Analysis',
    'Data Visualization',
    'Machine Learning',
    'Statistical Modeling',
    'Data Cleaning',
    'Dashboard Development',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }}
            animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <motion.div
                className="relative rounded-lg shadow-2xl w-full h-96 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden border border-primary-500/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Background Grid */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>

                {/* Animated Data Visualization Elements */}
                <div className="relative h-full flex items-center justify-center p-8">
                  {/* Central Profile Circle */}
                  <motion.div
                    className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-blue-500 flex items-center justify-center z-10"
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        '0 0 20px rgba(14, 165, 233, 0.3)',
                        '0 0 40px rgba(14, 165, 233, 0.5)',
                        '0 0 20px rgba(14, 165, 233, 0.3)'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <div className="text-white text-center">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Floating Data Points */}
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 rounded-full bg-primary-400"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 40}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}

                  {/* Animated Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-30">
                    {[0, 1, 2].map((i) => (
                      <motion.line
                        key={i}
                        x1="50%"
                        y1="50%"
                        x2={`${30 + i * 20}%`}
                        y2={`${20 + i * 15}%`}
                        stroke="rgba(14, 165, 233, 0.5)"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={imageInView ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
                        transition={{ duration: 1, delay: i * 0.3 }}
                      />
                    ))}
                  </svg>

                  {/* Bottom Text */}
                  <motion.div
                    className="absolute bottom-8 left-0 right-0 text-center z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <p className="text-xl font-bold text-white mb-1">Moulik</p>
                    <p className="text-sm text-primary-300">Data Scientist</p>
                  </motion.div>

                  {/* Tech Stack Icons Floating */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {['Python', 'ML', 'AI'].map((tech, i) => (
                      <motion.div
                        key={tech}
                        className="absolute px-3 py-1 bg-primary-500/20 backdrop-blur-sm rounded-full text-primary-300 text-xs font-medium border border-primary-500/30"
                        style={{
                          left: `${25 + i * 25}%`,
                          top: `${15 + (i % 2) * 60}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: i * 0.4,
                          ease: 'easeInOut',
                        }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: 50 }}
            animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-block px-4 py-2 border-l-4 border-primary-500 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">About</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Aspiring Data Scientist with a solid foundation in Python, SQL, and data
              analysis. Skilled in using libraries and frameworks such as Pandas, NumPy,
              Scikit-learn, TensorFlow, LangChain, and LangGraph to extract insights, build
              predictive models, and develop intelligent agents. Passionate about applying
              data-driven solutions to real-world problems and committed to continuously
              learning and adopting emerging technologies and techniques...
            </p>
            <motion.a
              href="./resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Expertise Section */}
        <motion.div
          ref={expertiseRef}
          initial={{ opacity: 0, y: 50 }}
          animate={expertiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Expertise
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={expertiseInView ? 'visible' : 'hidden'}
            className="flex flex-wrap gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg hover:border-primary-500 hover:bg-gray-800/80 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className="text-gray-300 font-medium">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          ref={timelineRef}
          initial={{ opacity: 0, y: 50 }}
          animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Experience
            </h2>
            <div className="relative pl-8 border-l-2 border-primary-500">
              <motion.div
                className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-1">
                  Prodigy Infotech
                </h3>
                <h4 className="text-lg text-primary-400 mb-2">Data Scientist</h4>
                <p className="text-gray-400 text-sm mb-4">
                  September 2024 - October 2024
                </p>
                <p className="text-gray-300 leading-relaxed">
                  During my internship as a Data Scientist at Prodigy Infotech, I gained
                  hands-on experience working with a variety of data science tools and
                  methodologies. I was involved in tasks such as data cleaning, analysis, and
                  visualization using Python and its libraries. My responsibilities included
                  extracting meaningful insights from large datasets, applying machine learning
                  models, and working with business teams to understand their needs and
                  translate them into actionable data solutions. This internship not only
                  enhanced my technical skills but also provided a deeper understanding of how
                  data-driven decision-making works in a real-world business environment.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Education
            </h2>
            <div className="relative pl-8 border-l-2 border-primary-500">
              <motion.div
                className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-1">
                  UKA Tarsadia University
                </h3>
                <h4 className="text-lg text-primary-400 mb-2">
                  Bachelor in Computer Science
                </h4>
                <p className="text-gray-400 text-sm mb-4">2024-2027</p>
                <p className="text-gray-300 leading-relaxed">
                  I am currently pursuing a Bachelor of Computer Applications (BCA) and have
                  completed my first year with a CGPA of 7.45. Throughout my first year, I
                  built a solid understanding of computer science fundamentals, programming
                  languages, and data analysis techniques. I am eager to continue expanding my
                  knowledge and applying these concepts in practical settings, especially in
                  the field of data science.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
