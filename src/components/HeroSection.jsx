import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Mail, Globe, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import githubProfile from '@/assets/github.jpg';
import linkedinProfile from '@/assets/linkedin.jpg';
import resume from '@/assets/Resume_2025.pdf';
import FloatingElements from './FloatingElements';

export default function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className="pt-32 pb-8 md:pb-20 relative">
      {/* Floating 3D Elements */}
      <FloatingElements />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Avatar and Status */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            variants={itemVariants}
          >
            {' '}
            <Avatar className="h-8 w-8 md:h-12 md:w-12 rounded-lg md:rounded-xl">
              <AvatarImage src={githubProfile} alt="James Boac" />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-sm md:text-base rounded-xl">
                JB
              </AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400 font-medium">
                Available for work
              </span>
            </div>
          </motion.div>

          <motion.div className="mb-16" variants={itemVariants}>
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9rem] font-extrabold mb-6 leading-[0.85] tracking-tighter bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
              variants={titleVariants}
            >
              JAMES BOAC
            </motion.h1>
            <motion.div
              className="text-xl md:text-3xl lg:text-4xl text-gray-300 mb-4 tracking-wide font-medium"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                FULL-STACK DEVELOPER
              </span>
            </motion.div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            Translating complexity into clarity through
            <br />
            thoughtful full-stack development.
          </motion.p>

          {/* Resume and Scroll Down Buttons */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-20"
            variants={itemVariants}
          >
            {' '}
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-12 text-base font-medium"
              onClick={() => {
                const link = document.createElement('a');
                link.href = resume;
                link.download = 'James_Boac_Resume_2025.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download CV
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white h-12 w-12"
              onClick={() =>
                document
                  .querySelector('#about')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <ChevronDown className="w-5 h-5" />
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center items-center gap-4 mb-16"
            variants={itemVariants}
          >
            <HoverCard openDelay={100} closeDelay={100}>
              {' '}
              <HoverCardTrigger asChild>
                <button
                  className="text-white hover:text-blue-400 transition-colors cursor-pointer text-sm font-medium underline underline-offset-4 decoration-white hover:decoration-blue-400"
                  onClick={() =>
                    window.open('https://github.com/Poopyy17', '_blank')
                  }
                >
                  @github
                </button>
              </HoverCardTrigger>{' '}
              <HoverCardContent className="w-80 bg-gray-900 border-gray-800">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-white">
                      @Poopyy17
                    </h4>
                    <p className="text-sm text-gray-400">
                      Full-stack developer turning complex ideas into seamless
                      experiences.
                    </p>
                    <Separator className="my-3 bg-gray-700" />
                    <div className="flex items-center pt-1">
                      <Github className="mr-2 h-4 w-4 text-gray-400" />
                      <span className="text-xs text-gray-500">
                        View my projects and contributions
                      </span>
                    </div>
                  </div>
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={githubProfile} alt="@jamesboac" />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-lg">
                      JB{' '}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </HoverCardContent>{' '}
            </HoverCard>

            <div className="h-6 w-px bg-gray-400 mx-2"></div>

            <HoverCard openDelay={100} closeDelay={100}>
              {' '}
              <HoverCardTrigger asChild>
                <button
                  className="text-white hover:text-blue-400 transition-colors cursor-pointer text-sm font-medium underline underline-offset-4 decoration-white hover:decoration-blue-400"
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/in/james-boac-05706420b',
                      '_blank'
                    )
                  }
                >
                  @linkedin
                </button>
              </HoverCardTrigger>{' '}
              <HoverCardContent className="w-80 bg-gray-900 border-gray-800">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-white">
                      James Boac
                    </h4>
                    <p className="text-sm text-gray-400">
                      Full-Stack Developer | React & Node.js Specialist
                    </p>
                    <Separator className="my-3 bg-gray-700" />
                    <div className="flex items-center pt-1">
                      <Linkedin className="mr-2 h-4 w-4 text-gray-400" />
                      <span className="text-xs text-gray-500">
                        Connect with me professionally
                      </span>
                    </div>
                  </div>
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={linkedinProfile} alt="James Boac" />
                    <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-lg">
                      JB{' '}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </HoverCardContent>{' '}
            </HoverCard>

            <div className="h-6 w-px bg-gray-400 mx-2"></div>

            <HoverCard openDelay={100} closeDelay={100}>
              {' '}
              <HoverCardTrigger asChild>
                <button
                  className="text-white hover:text-blue-400 transition-colors cursor-pointer text-sm font-medium underline underline-offset-4 decoration-white hover:decoration-blue-400"
                  onClick={() =>
                    window.open('mailto:james.boac25@gmail.com', '_blank')
                  }
                >
                  @email
                </button>
              </HoverCardTrigger>{' '}
              <HoverCardContent className="w-80 bg-gray-900 border-gray-800">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-white">
                    james.boac25@gmail.com
                  </h4>
                  <p className="text-sm text-gray-400">
                    Get in touch for collaborations, projects, or just to say
                    hello!
                  </p>
                  <Separator className="my-3 bg-gray-700" />
                  <div className="flex items-center pt-1">
                    <Mail className="mr-2 h-4 w-4 text-gray-400" />
                    <span className="text-xs text-gray-500">
                      Click to send an email
                    </span>
                  </div>
                </div>{' '}
              </HoverCardContent>
            </HoverCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
