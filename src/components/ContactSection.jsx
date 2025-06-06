import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        'https://formsubmit.co/james.boac25@gmail.com',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.", {
          duration: 5000,
        });
        e.target.reset(); // Reset form fields
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error(
        'Failed to send message. Please try again or contact me directly.',
        {
          duration: 5000,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
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
    <section id="contact" className="py-32 relative">
      {/* Background Grid Overlay - Hidden on mobile and tablet */}
      <div className="absolute inset-0 bg-gray-950 hidden lg:block">
        <div className="absolute bottom-0 left-71 right-60 -top-8 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white"
              variants={titleVariants}
            >
              Feel free to fill up your details, I will reach out to you asap
            </motion.h2>
          </motion.div>{' '}
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-900/50 border-gray-800 p-8 backdrop-blur-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Hidden FormSubmit fields */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New Contact Form Submission"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  transition={{ delay: 0.3 }}
                >
                  <label className="text-sm text-gray-400 block mb-3">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    placeholder="john@example.com"
                    type="email"
                    required
                    disabled={isSubmitting}
                    className="bg-gray-800 border-gray-700 text-white h-12 focus:border-blue-400 transition-colors disabled:opacity-50"
                  />
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  transition={{ delay: 0.4 }}
                >
                  <label className="text-sm text-gray-400 block mb-3">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    required
                    disabled={isSubmitting}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 resize-none min-h-[120px] focus:border-blue-400 transition-colors disabled:opacity-50"
                    rows={5}
                  />
                </motion.div>{' '}
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {' '}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </motion.div>
                {/* Test Toast Buttons */}
                {/* <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  transition={{ delay: 0.6 }}
                  className="flex gap-3"
                >
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => toast.success('Success toast test! 🎉')}
                    className="flex-1 bg-transparent border-green-600 text-green-400 hover:bg-green-600/10 hover:text-green-300 h-10 text-sm"
                  >
                    Test Success
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => toast.error('Error toast test! ❌')}
                    className="flex-1 bg-transparent border-red-600 text-red-400 hover:bg-red-600/10 hover:text-red-300 h-10 text-sm"
                  >
                    Test Error
                  </Button>
                </motion.div> */}
              </form>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
