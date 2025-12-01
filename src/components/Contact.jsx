import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false)
  const email = 'moulikzinzala912@gmail.com'

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setEmailCopied(true)
      setTimeout(() => {
        setEmailCopied(false)
      }, 2000) // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy email:', err)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = email
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setEmailCopied(true)
      setTimeout(() => {
        setEmailCopied(false)
      }, 2000)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-32 bg-gray-900 relative"
    >
      {/* Toast Notification */}
      <AnimatePresence>
        {emailCopied && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            className="fixed top-20 left-1/2 z-50 bg-primary-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="font-medium">Email Copied!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 border-l-4 border-primary-500 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Get In Touch
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always eager to connect! Whether you have a question or want to discuss
            data science, analytics, or tech — feel free to reach out. I'm currently
            seeking internship opportunities and would love to hear from you!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Email */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-primary-500 transition-all duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Reach me at</h3>
            <button
              onClick={copyEmailToClipboard}
              className="text-primary-400 hover:text-primary-300 transition-colors break-all text-left w-full flex items-center justify-between group"
            >
              <span>{email}</span>
              <svg
                className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
            <p className="text-xs text-gray-500 mt-2">Click to copy email</p>
          </motion.div>

          {/* Social */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-primary-500 transition-all duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Social</h3>
            <div className="space-y-3">
              <motion.a
                href="https://www.linkedin.com/in/moulik-zinzala-2749752b7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <svg
                  className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/Moulik-23?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <svg
                  className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </motion.a>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-primary-500 transition-all duration-300 flex items-center justify-center"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <motion.button
              onClick={copyEmailToClipboard}
              className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary-500/50 text-center flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {emailCopied ? (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Copy Email</span>
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
