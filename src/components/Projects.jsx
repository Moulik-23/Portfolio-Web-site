import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Tilt from 'react-parallax-tilt'

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const projects = [
    {
      id: 7,
      title: 'Prism - AI Career Guidance',
      category: 'AI Platform',
      image: '/images/prism_ai_dashboard.png',
      description: 'AI-powered career guidance platform with personalized advice, skills analysis, and 24/7 mentorship via Gemini AI.',
      github: 'https://github.com/Moulik-23/Prism-AI',
      tags: ['React', 'FastAPI', 'Gemini AI', 'MongoDB', 'Tailwind'],
    },
    {
      id: 1,
      title: 'Algerian Fire Analysis.',
      category: 'Machine Learning',
      image: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=800&h=600&fit=crop',
      description: 'It is Machine Learning project predicting FWI.',
      github: 'https://github.com/Moulik-23/Algerian_Forest_fire',
      tags: ['Machine Learning'],
    },
    {
      id: 2,
      title: 'RAG Builder',
      category: 'Python',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      description: 'Full Stack App to create a RAG App',
      github: 'https://github.com/Moulik-23/RAG-Builder',
      tags: ['Python', 'FastAPI', 'Langchain', 'HTML', 'CSS', 'JS'],
    },
    {
      id: 3,
      title: 'Call-Center Dashboard.',
      category: 'Power BI',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      description: 'Call center Indepth Analysis done and create responsive dasboard in Power BI.',
      github: 'https://github.com/Moulik-23/Call-Center-dashboard',
      tags: ['Power BI'],
    },
    {
      id: 4,
      title: 'Fake Website Detection',
      category: 'Machine Learning',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      description: 'It is Machine Learning Model to predict wether Website is Fake or Not',
      github: 'https://github.com/Moulik-23/NetworkSecurity',
      tags: ['Python', 'Machine Learning', 'Web Devlopment', 'Data Science'],
    },
    {
      id: 5,
      title: 'Jarvis Auto Bot.',
      category: 'Python',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      description: 'It is a interactive bot wgich can speak and listen and follow our instruction.',
      github: 'https://github.com/Moulik-23/Jarvis_Bot',
      tags: ['Python'],
    },
    {
      id: 6,
      title: 'USA Accident Analysis.',
      category: 'Data Analysis',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      description: 'In this i have done indepth analysis why accident happen in USA what are main factors behind the Accident? and created chart and graph in Python using various libriary.',
      github: 'https://github.com/Moulik-23/USA-Accident-Analysis',
      tags: ['Data Analysis'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="works"
      ref={ref}
      className="py-20 md:py-32 bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 border-l-4 border-primary-500 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Recent Works
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my favorite projects I have done lately. Feel free to
            check them out.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
            >
              <Tilt
                className="group relative h-full"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                transitionSpeed={1500}
                scale={1.02}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#0ea5e9"
                glarePosition="all"
              >
                <motion.div
                  className="relative h-full bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-primary-500 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-primary-400 uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* GitHub Link */}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors group/link"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm font-medium mr-2">View Project</span>
                      <svg
                        className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </motion.a>
                  </div>

                  {/* Hover Effect Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none rounded-lg"></div>
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
